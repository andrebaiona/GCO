import "server-only";
import { redirect } from "next/navigation";
import { getCurrentAdmin, type AdminUser } from "./session";
import { adminHref } from "./paths";

/**
 * Must be called at the top of every protected page AND every server action:
 * server actions are public POST endpoints, so the proxy/layout alone is not enough.
 */
export async function requireAdmin(): Promise<AdminUser> {
  const user = await getCurrentAdmin();
  if (!user) redirect(adminHref("login"));
  return user;
}

export class UnauthorizedError extends Error {
  constructor() {
    super("Não autorizado.");
  }
}

/**
 * Server-action variant: throws instead of redirecting, so an unauthenticated
 * POST to an action ID never learns the secret admin URL from a redirect.
 */
export async function requireAdminAction(): Promise<AdminUser> {
  const user = await getCurrentAdmin();
  if (!user) throw new UnauthorizedError();
  return user;
}
