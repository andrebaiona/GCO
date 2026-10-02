/**
 * Normalise a stored noticia image reference for use in <img src>.
 * Absolute URLs (Vercel Blob uploads) are kept; legacy relative paths
 * like "noticias/foo.png" are served from /public.
 */
export function normalizeImagePath(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return `/${path.replace(/^\/+/, "")}`;
}
