import { NextResponse, type NextRequest } from "next/server";

// The admin panel lives at src/app/admin, but is only reachable through the
// secret prefix in ADMIN_PATH. Any direct request to /admin gets the normal 404.
// Must stay in sync with src/lib/admin/paths.ts.
const ADMIN_PATH_RE = /^[a-z0-9-]{16,64}$/;
const INTERNAL_PREFIX = "/admin";
const NOT_FOUND_PATH = "/__gco_not_found__";

function firstSegment(pathname: string): string {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    // keep raw pathname
  }
  return decoded.split("/")[1]?.toLowerCase() ?? "";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = firstSegment(pathname);

  // Hide the internal route completely.
  if (segment === INTERNAL_PREFIX.slice(1)) {
    return NextResponse.rewrite(new URL(NOT_FOUND_PATH, request.url));
  }

  const adminPath = process.env.ADMIN_PATH;
  if (!adminPath || !ADMIN_PATH_RE.test(adminPath)) return NextResponse.next();

  if (pathname === `/${adminPath}` || pathname.startsWith(`/${adminPath}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = INTERNAL_PREFIX + pathname.slice(adminPath.length + 1);
    const res = NextResponse.rewrite(url);
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    res.headers.set("Cache-Control", "no-store");
    res.headers.set("Referrer-Policy", "no-referrer");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Always cover the internal admin route, whatever the path looks like.
    "/admin",
    "/admin/:path*",
    // Everything else except Next internals and files with an extension (public/ assets).
    "/((?!_next/static|_next/image|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
