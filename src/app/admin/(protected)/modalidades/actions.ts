"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/admin/session";
import { requireAdminAction } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import { CORES_HORARIO, DIAS_SEMANA, HORA_RE, horaParaMinutos } from "@/lib/horarios";
import { fieldErrorsFrom, text, SESSION_EXPIRED, type FormState } from "../../_lib/form";

// Textareas submit CRLF.
const normalizeNewlines = (v: string) => v.replace(/\r\n?/g, "\n");

const optionalText = (max: number, label: string) =>
  z
    .string()
    .transform(normalizeNewlines)
    .pipe(z.string().trim().max(max, `${label}: máximo de ${max} caracteres.`))
    .transform((v) => (v === "" ? null : v));

/** Empty -> null, otherwise an integer within [min, max]. */
const optionalInt = (min: number, max: number, label: string) =>
  z
    .string()
    .trim()
    .transform((v, ctx) => {
      if (v === "") return null;
      const n = Number(v);
      if (!Number.isInteger(n) || n < min || n > max) {
        ctx.addIssue({ code: "custom", message: `${label}: número inteiro entre ${min} e ${max}.` });
        return z.NEVER;
      }
      return n;
    });

/** Empty -> null, otherwise a non-negative amount with at most 2 decimals (accepts "12,50"). */
const optionalMoney = (label: string) =>
  z
    .string()
    .trim()
    .transform((v, ctx) => {
      if (v === "") return null;
      const normalized = v.replace(",", ".");
      if (!/^\d{1,8}(\.\d{1,2})?$/.test(normalized)) {
        ctx.addIssue({ code: "custom", message: `${label}: valor inválido (ex.: 12,50).` });
        return z.NEVER;
      }
      return normalized;
    });

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function revalidatePublicSite() {
  // Home, /modalidades, /modalidades/[slug] and /inscricoes all read these tables.
  revalidatePath("/", "layout");
}

function isUniqueViolation(err: unknown): boolean {
  return typeof err === "object" && err !== null && (err as { code?: string }).code === "P2002";
}

// ---------------------------------------------------------------------------
// Modalidade
// ---------------------------------------------------------------------------

const modalidadeSchema = z
  .object({
    nome: z.string().trim().min(1, "O nome é obrigatório.").max(100, "O nome tem no máximo 100 caracteres."),
    slug: z.string().trim().toLowerCase().max(100, "O endereço tem no máximo 100 caracteres."),
    icone: optionalText(255, "Ícone"),
    descricao: optionalText(10_000, "Descrição"),
    categoria: optionalText(100, "Categoria"),
    email: optionalText(254, "Email").refine((v) => v === null || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Email inválido."),
    ativo: z.boolean(),
  })
  .transform((v, ctx) => {
    const slug = v.slug === "" ? slugify(v.nome) : v.slug;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
      ctx.addIssue({
        code: "custom",
        path: ["slug"],
        message: "Use apenas letras minúsculas, números e hífenes (ex.: hoquei-em-patins).",
      });
      return z.NEVER;
    }
    return { ...v, slug };
  });

function parseModalidade(formData: FormData) {
  return modalidadeSchema.safeParse({
    nome: text(formData, "nome"),
    slug: text(formData, "slug"),
    icone: text(formData, "icone"),
    descricao: text(formData, "descricao"),
    categoria: text(formData, "categoria"),
    email: text(formData, "email"),
    ativo: text(formData, "ativo") === "on",
  });
}

const SLUG_TAKEN: FormState = { fieldErrors: { slug: "Já existe uma modalidade com este endereço." } };

export async function createModalidade(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parseModalidade(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  let id: number;
  try {
    ({ id } = await prisma.modalidades.create({ data: parsed.data, select: { id: true } }));
  } catch (err) {
    if (isUniqueViolation(err)) return SLUG_TAKEN;
    console.error("Falha ao criar modalidade:", err);
    return { error: "Não foi possível guardar a modalidade. Tente novamente." };
  }

  revalidatePublicSite();
  redirect(adminHref(`modalidades/${id}?ok=criada`));
}

export async function updateModalidade(id: number, _prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parseModalidade(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  try {
    await prisma.modalidades.update({ where: { id }, data: parsed.data });
  } catch (err) {
    if (isUniqueViolation(err)) return SLUG_TAKEN;
    if ((err as { code?: string }).code === "P2025") return { error: "Esta modalidade já não existe." };
    console.error("Falha ao atualizar modalidade:", err);
    return { error: "Não foi possível guardar as alterações. Tente novamente." };
  }

  revalidatePublicSite();
  return { success: "Alterações guardadas." };
}

export async function deleteModalidade(formData: FormData): Promise<void> {
  await requireAdminAction();

  const id = Number(text(formData, "id"));
  if (!Number.isInteger(id) || id <= 0) return;

  // escalao, preco_escalao and horarios cascade.
  await prisma.modalidades.deleteMany({ where: { id } });
  revalidatePublicSite();
  redirect(adminHref("modalidades?ok=eliminada"));
}

// ---------------------------------------------------------------------------
// Escalões
// ---------------------------------------------------------------------------

const escalaoSchema = z
  .object({
    nome: z.string().trim().min(1, "O nome é obrigatório.").max(100, "O nome tem no máximo 100 caracteres."),
    idade_minima: optionalInt(0, 120, "Idade mínima"),
    idade_maxima: optionalInt(0, 120, "Idade máxima"),
    descricao: optionalText(10_000, "Descrição"),
    mensalidade: optionalMoney("Mensalidade"),
  })
  .refine((v) => v.idade_minima === null || v.idade_maxima === null || v.idade_minima <= v.idade_maxima, {
    path: ["idade_maxima"],
    message: "A idade máxima não pode ser inferior à mínima.",
  });

function parseEscalao(formData: FormData) {
  return escalaoSchema.safeParse({
    nome: text(formData, "nome"),
    idade_minima: text(formData, "idade_minima"),
    idade_maxima: text(formData, "idade_maxima"),
    descricao: text(formData, "descricao"),
    mensalidade: text(formData, "mensalidade"),
  });
}

export async function createEscalao(modalidadeId: number, _prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parseEscalao(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  try {
    await prisma.escalao.create({ data: { ...parsed.data, modalidade_id: modalidadeId } });
  } catch (err) {
    console.error("Falha ao criar escalão:", err);
    return { error: "Não foi possível adicionar o escalão. Tente novamente." };
  }

  revalidatePublicSite();
  return { success: "Escalão adicionado." };
}

export async function updateEscalao(
  modalidadeId: number,
  id: number,
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parseEscalao(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  try {
    await prisma.$transaction(async (tx) => {
      const existing = await tx.escalao.findFirst({ where: { id, modalidade_id: modalidadeId } });
      if (!existing) throw new Error("NOT_FOUND");

      await tx.escalao.update({ where: { id }, data: parsed.data });

      // Prices reference the escalão by name, so a rename must carry them along.
      if (existing.nome !== parsed.data.nome) {
        await tx.preco_escalao.updateMany({
          where: { modalidade_id: modalidadeId, escalao: existing.nome },
          data: { escalao: parsed.data.nome },
        });
      }
    });
  } catch (err) {
    if (err instanceof Error && err.message === "NOT_FOUND") return { error: "Este escalão já não existe." };
    console.error("Falha ao atualizar escalão:", err);
    return { error: "Não foi possível guardar as alterações. Tente novamente." };
  }

  revalidatePublicSite();
  return { success: "Guardado." };
}

export async function deleteEscalao(formData: FormData): Promise<void> {
  await requireAdminAction();

  const id = Number(text(formData, "id"));
  const modalidadeId = Number(text(formData, "modalidade_id"));
  if (!Number.isInteger(id) || id <= 0 || !Number.isInteger(modalidadeId) || modalidadeId <= 0) return;

  // Its prices are kept (and stay listed in the admin) so nothing is lost by accident.
  await prisma.escalao.deleteMany({ where: { id, modalidade_id: modalidadeId } });
  revalidatePublicSite();
  redirect(adminHref(`modalidades/${modalidadeId}`));
}

// ---------------------------------------------------------------------------
// Preços
// ---------------------------------------------------------------------------

const precoSchema = z.object({
  escalao: z.string().trim().min(1, "Escolha o escalão.").max(100, "O escalão tem no máximo 100 caracteres."),
  tipo: z.string().trim().min(1, "O tipo é obrigatório.").max(30, "O tipo tem no máximo 30 caracteres."),
  valor: optionalMoney("Valor"),
  observacoes: optionalText(10_000, "Observações"),
});

function parsePreco(formData: FormData) {
  return precoSchema.safeParse({
    escalao: text(formData, "escalao"),
    tipo: text(formData, "tipo"),
    valor: text(formData, "valor"),
    observacoes: text(formData, "observacoes"),
  });
}

export async function createPreco(modalidadeId: number, _prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parsePreco(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  try {
    await prisma.preco_escalao.create({ data: { ...parsed.data, modalidade_id: modalidadeId } });
  } catch (err) {
    console.error("Falha ao criar preço:", err);
    return { error: "Não foi possível adicionar o preço. Tente novamente." };
  }

  revalidatePublicSite();
  return { success: "Preço adicionado." };
}

export async function updatePreco(
  modalidadeId: number,
  id: number,
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = parsePreco(formData);
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  try {
    const { count } = await prisma.preco_escalao.updateMany({
      where: { id, modalidade_id: modalidadeId },
      data: parsed.data,
    });
    if (count === 0) return { error: "Este preço já não existe." };
  } catch (err) {
    console.error("Falha ao atualizar preço:", err);
    return { error: "Não foi possível guardar as alterações. Tente novamente." };
  }

  revalidatePublicSite();
  return { success: "Guardado." };
}

export async function deletePreco(formData: FormData): Promise<void> {
  await requireAdminAction();

  const id = Number(text(formData, "id"));
  const modalidadeId = Number(text(formData, "modalidade_id"));
  if (!Number.isInteger(id) || id <= 0 || !Number.isInteger(modalidadeId) || modalidadeId <= 0) return;

  await prisma.preco_escalao.deleteMany({ where: { id, modalidade_id: modalidadeId } });
  revalidatePublicSite();
  redirect(adminHref(`modalidades/${modalidadeId}`));
}

// ---------------------------------------------------------------------------
// Horários
// ---------------------------------------------------------------------------

const MAX_AULAS = 300;

const aulaSchema = z
  .object({
    dia_semana: z.number().int().min(0, "Dia inválido.").max(DIAS_SEMANA.length - 1, "Dia inválido."),
    inicio: z.string().regex(HORA_RE, "Hora inválida (HH:MM)."),
    fim: z.string().regex(HORA_RE, "Hora inválida (HH:MM)."),
    titulo: z.string().trim().min(1, "O título é obrigatório.").max(150, "O título tem no máximo 150 caracteres."),
    sala: optionalText(100, "Sala"),
    cor: z.enum(CORES_HORARIO.map((c) => c.value) as [string, ...string[]], "Cor inválida."),
  })
  .refine((v) => horaParaMinutos(v.inicio) < horaParaMinutos(v.fim), {
    path: ["fim"],
    message: "A hora de fim tem de ser depois da de início.",
  });

/**
 * Replaces the whole weekly schedule of a modalidade with the submitted list, atomically:
 * either every aula is valid and the new schedule goes live for everyone, or nothing changes.
 */
export async function applyHorarios(modalidadeId: number, _prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  let raw: unknown;
  try {
    raw = JSON.parse(text(formData, "aulas"));
  } catch {
    return { error: "Dados do horário inválidos. Recarregue a página e tente novamente." };
  }
  if (!Array.isArray(raw) || raw.length > MAX_AULAS) {
    return { error: `O horário tem de ter no máximo ${MAX_AULAS} aulas.` };
  }

  const aulas: z.infer<typeof aulaSchema>[] = [];
  for (const [i, item] of raw.entries()) {
    const parsed = aulaSchema.safeParse(item);
    if (!parsed.success) {
      const titulo = typeof item?.titulo === "string" && item.titulo.trim() ? `"${item.titulo.trim()}"` : `n.º ${i + 1}`;
      return { error: `Aula ${titulo}: ${parsed.error.issues[0].message} Nada foi alterado.` };
    }
    aulas.push(parsed.data);
  }

  try {
    await prisma.$transaction([
      prisma.horario_aulas.deleteMany({ where: { modalidade_id: modalidadeId } }),
      prisma.horario_aulas.createMany({ data: aulas.map((a) => ({ ...a, modalidade_id: modalidadeId })) }),
    ]);
  } catch (err) {
    console.error("Falha ao aplicar horário:", err);
    return { error: "Não foi possível aplicar o horário. Nada foi alterado. Tente novamente." };
  }

  revalidatePublicSite();
  redirect(adminHref(`modalidades/${modalidadeId}/horarios?ok=aplicado`));
}
