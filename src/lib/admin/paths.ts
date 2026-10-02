import "server-only";

// Must stay in sync with the check in src/proxy.ts.
const ADMIN_PATH_RE = /^[a-z0-9-]{16,64}$/;

export function getAdminPath(): string | null {
  const p = process.env.ADMIN_PATH;
  return p && ADMIN_PATH_RE.test(p) ? p : null;
}

/** Public (secret) URL for an admin sub-route, e.g. adminHref("noticias/nova"). */
export function adminHref(sub = ""): string {
  const base = getAdminPath();
  if (!base) throw new Error("ADMIN_PATH is not configured");
  const clean = sub.replace(/^\/+/, "");
  return clean ? `/${base}/${clean}` : `/${base}`;
}
