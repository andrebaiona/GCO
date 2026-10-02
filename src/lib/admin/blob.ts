import "server-only";
import { put, del } from "@vercel/blob";

export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

type ImageKind = { ext: "jpg" | "png" | "webp"; contentType: string };

/** Identify the image by its magic bytes — never trust the client's MIME type or extension. */
function sniffImage(bytes: Uint8Array): ImageKind | null {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { ext: "jpg", contentType: "image/jpeg" };
  }
  const png = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (bytes.length >= 8 && png.every((b, i) => bytes[i] === b)) {
    return { ext: "png", contentType: "image/png" };
  }
  const ascii = (from: number, to: number) => String.fromCharCode(...bytes.slice(from, to));
  if (bytes.length >= 12 && ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") {
    return { ext: "webp", contentType: "image/webp" };
  }
  return null;
}

function slugifyFilename(name: string): string {
  const base = name.replace(/\.[^.]*$/, "");
  const slug = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return slug || "imagem";
}

export class ImageValidationError extends Error {}

/** Validates and uploads an image, returning its public Blob URL. */
export async function uploadNoticiaImage(file: File): Promise<string> {
  if (file.size > MAX_IMAGE_BYTES) {
    throw new ImageValidationError("A imagem excede o tamanho máximo de 4 MB.");
  }
  const bytes = new Uint8Array(await file.arrayBuffer());
  const kind = sniffImage(bytes);
  if (!kind) {
    throw new ImageValidationError("Formato de imagem não suportado (use JPG, PNG ou WebP).");
  }

  const pathname = `noticias/${Date.now()}-${slugifyFilename(file.name)}.${kind.ext}`;
  const blob = await put(pathname, Buffer.from(bytes), {
    access: "public",
    addRandomSuffix: true,
    contentType: kind.contentType,
  });
  return blob.url;
}

/** True only for images we uploaded to Vercel Blob (legacy public/ paths are never touched). */
export function isBlobUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  try {
    return new URL(url).hostname.endsWith(".blob.vercel-storage.com");
  } catch {
    return false;
  }
}

/** Best-effort delete of Blob images; failures are logged but never block the DB change. */
export async function deleteBlobImages(urls: (string | null | undefined)[]): Promise<void> {
  const targets = urls.filter(isBlobUrl);
  if (targets.length === 0) return;
  try {
    await del(targets);
  } catch (err) {
    console.error("Falha ao apagar imagens do Blob:", err);
  }
}
