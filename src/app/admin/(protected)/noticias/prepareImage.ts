// Client-side image preparation before upload.
//
// Vercel functions accept at most 4.5 MB per request, so large phone photos are
// downscaled in the browser. JPEGs are always re-encoded, which also strips EXIF
// metadata (GPS location, camera details) before the photo becomes public.

const MAX_DIMENSION = 2000;
const REENCODE_ABOVE_BYTES = 1.5 * 1024 * 1024;
const QUALITY = 0.85;

export const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

function canvasToBlob(canvas: HTMLCanvasElement, type: string): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, QUALITY));
}

export async function prepareImage(file: File): Promise<File> {
  if (!ACCEPTED_TYPES.includes(file.type)) return file; // the server rejects it with a clear message

  const bitmap = await createImageBitmap(file);
  const { width, height } = bitmap;
  const tooLarge = Math.max(width, height) > MAX_DIMENSION || file.size > REENCODE_ABOVE_BYTES;
  if (!tooLarge && file.type !== "image/jpeg") {
    bitmap.close();
    return file;
  }

  const scale = Math.min(1, MAX_DIMENSION / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  // Prefer WebP; older Safari can't encode it and silently returns PNG, so fall back to JPEG.
  let blob = await canvasToBlob(canvas, "image/webp");
  if (!blob || blob.type !== "image/webp") blob = await canvasToBlob(canvas, "image/jpeg");
  if (!blob) return file;
  // Keep the original only if re-encoding didn't help — never for JPEGs, so EXIF is always dropped.
  if (file.type !== "image/jpeg" && blob.size >= file.size) return file;

  const ext = blob.type === "image/webp" ? "webp" : "jpg";
  const name = `${file.name.replace(/\.[^.]*$/, "")}.${ext}`;
  return new File([blob], name, { type: blob.type });
}
