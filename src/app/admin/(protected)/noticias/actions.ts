"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/admin/session";
import { requireAdminAction } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import { uploadNoticiaImage, deleteBlobImages, ImageValidationError } from "@/lib/admin/blob";
import { fieldErrorsFrom, file, text, SESSION_EXPIRED, type FormState } from "../../_lib/form";
import { MAX_EXTRA_IMAGES, MAX_NOTICIA_IMAGES } from "./limits";

// Textareas submit CRLF; the public pages split paragraphs on "\n\n".
const normalizeNewlines = (v: string) => v.replace(/\r\n?/g, "\n");

const optionalText = (max: number, label: string) =>
  z
    .string()
    .transform(normalizeNewlines)
    .pipe(z.string().trim().max(max, `${label}: máximo de ${max} caracteres.`))
    .transform((v) => (v === "" ? null : v));

const noticiaSchema = z.object({
  titulo: z
    .string()
    .trim()
    .min(1, "O título é obrigatório.")
    .max(200, "O título tem no máximo 200 caracteres."),
  data_publicacao: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data inválida.")
    // Round-trip check: JS silently rolls over impossible dates (2026-02-31 -> 2026-03-03).
    .refine((s) => {
      const d = new Date(`${s}T00:00:00Z`);
      return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
    }, "Data inválida.")
    .transform((s) => new Date(`${s}T00:00:00Z`)),
  categoria: optionalText(50, "Categoria"),
  autor: optionalText(100, "Autor"),
  resumo: optionalText(10_000, "Resumo"),
  conteudo: optionalText(100_000, "Conteúdo"),
});

function parseNoticia(formData: FormData) {
  return noticiaSchema.safeParse({
    titulo: text(formData, "titulo"),
    data_publicacao: text(formData, "data_publicacao"),
    categoria: text(formData, "categoria"),
    autor: text(formData, "autor"),
    resumo: text(formData, "resumo"),
    conteudo: text(formData, "conteudo"),
  });
}

type ImageField = "imagem" | "imagens_extra";

class ImageFieldError extends Error {
  constructor(public field: ImageField, message: string) {
    super(message);
  }
}

async function uploadOrThrow(upload: File, field: ImageField): Promise<string> {
  try {
    return await uploadNoticiaImage(upload);
  } catch (err) {
    if (err instanceof ImageValidationError) throw new ImageFieldError(field, err.message);
    console.error(`Falha no upload de ${field}:`, err);
    throw new ImageFieldError(field, "Não foi possível carregar a imagem. Tente novamente.");
  }
}

/**
 * Decide the final images of a noticia: main image (new upload, removal or keep) and the
 * ordered extra list (kept existing ones, then new uploads). `replaced` lists the Blob
 * images that stop being referenced once the DB write succeeds; `uploaded` the ones to
 * roll back if it fails.
 */
async function resolveImages(formData: FormData, current: { imagem: string | null; imagens_extra: string[] }) {
  // Never trust the client's list: only keep URLs that are actually stored on this noticia.
  const keep = new Set(formData.getAll("imagens_extra_manter").filter((v): v is string => typeof v === "string"));
  const kept = current.imagens_extra.filter((u) => keep.has(u));
  const dropped = current.imagens_extra.filter((u) => !keep.has(u));
  const novas = formData.getAll("imagens_extra_novas").filter((v): v is File => v instanceof File && v.size > 0);

  if (kept.length + novas.length > MAX_EXTRA_IMAGES) {
    throw new ImageFieldError(
      "imagens_extra",
      `No máximo ${MAX_EXTRA_IMAGES} imagens extra (${MAX_NOTICIA_IMAGES} com a principal).`,
    );
  }

  const uploaded: string[] = [];
  const replaced: (string | null)[] = [...dropped];
  let imagem = current.imagem;
  try {
    const mainUpload = file(formData, "imagem");
    if (mainUpload) {
      imagem = await uploadOrThrow(mainUpload, "imagem");
      uploaded.push(imagem);
      replaced.push(current.imagem);
    } else if (text(formData, "imagem_remover") === "on") {
      imagem = null;
      replaced.push(current.imagem);
    }

    const extras = [...kept];
    for (const nova of novas) {
      const url = await uploadOrThrow(nova, "imagens_extra");
      uploaded.push(url);
      extras.push(url);
    }
    return { imagem, imagens_extra: extras, uploaded, replaced };
  } catch (err) {
    await deleteBlobImages(uploaded); // don't orphan earlier uploads
    throw err;
  }
}

function revalidatePublicSite() {
  // Home, /noticias, /noticias/[id] and /modalidades/[slug] all show noticias.
  revalidatePath("/", "layout");
}

export async function createNoticia(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parseNoticia(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  let images;
  try {
    images = await resolveImages(formData, { imagem: null, imagens_extra: [] });
  } catch (err) {
    if (err instanceof ImageFieldError) return { fieldErrors: { [err.field]: err.message } };
    throw err;
  }

  try {
    await prisma.noticias.create({
      data: { ...parsed.data, imagem: images.imagem, imagens_extra: images.imagens_extra },
    });
  } catch (err) {
    console.error("Falha ao criar notícia:", err);
    await deleteBlobImages(images.uploaded);
    return { error: "Não foi possível guardar a notícia. Tente novamente." };
  }

  revalidatePublicSite();
  redirect(adminHref("noticias?ok=criada"));
}

export async function updateNoticia(id: number, _prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const existing = await prisma.noticias.findUnique({ where: { id } });
  if (!existing) return { error: "Esta notícia já não existe." };

  const parsed = parseNoticia(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  let images;
  try {
    images = await resolveImages(formData, { imagem: existing.imagem, imagens_extra: existing.imagens_extra });
  } catch (err) {
    if (err instanceof ImageFieldError) return { fieldErrors: { [err.field]: err.message } };
    throw err;
  }

  try {
    await prisma.noticias.update({
      where: { id },
      data: { ...parsed.data, imagem: images.imagem, imagens_extra: images.imagens_extra },
    });
  } catch (err) {
    console.error("Falha ao atualizar notícia:", err);
    await deleteBlobImages(images.uploaded);
    return { error: "Não foi possível guardar as alterações. Tente novamente." };
  }

  await deleteBlobImages(images.replaced);
  revalidatePublicSite();
  redirect(adminHref("noticias?ok=atualizada"));
}

export async function deleteNoticia(formData: FormData): Promise<void> {
  await requireAdminAction();

  const id = Number(text(formData, "id"));
  if (!Number.isInteger(id) || id <= 0) return;

  const existing = await prisma.noticias.findUnique({ where: { id } });
  if (existing) {
    await prisma.noticias.delete({ where: { id } });
    await deleteBlobImages([existing.imagem, existing.imagem_extra, ...existing.imagens_extra]);
    revalidatePublicSite();
  }
  redirect(adminHref("noticias?ok=eliminada"));
}
