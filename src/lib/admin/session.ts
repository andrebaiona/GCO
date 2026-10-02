import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { createHash, randomBytes } from "node:crypto";
import prisma from "@/lib/prisma";

const COOKIE_NAME = "gco_admin";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8h

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function createSession(userId: number): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await prisma.admin_sessions.create({
    data: { token_hash: hashToken(token), user_id: userId, expires_at: expiresAt },
  });

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });
}

export async function deleteSession(): Promise<void> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (token) {
    await prisma.admin_sessions.deleteMany({ where: { token_hash: hashToken(token) } });
  }
  store.delete(COOKIE_NAME);
}

export type AdminUser = { id: number; username: string };

export const getCurrentAdmin = cache(async (): Promise<AdminUser | null> => {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;

  const session = await prisma.admin_sessions.findUnique({
    where: { token_hash: hashToken(token) },
    include: { user: { select: { id: true, username: true } } },
  });
  if (!session) return null;

  if (session.expires_at.getTime() <= Date.now()) {
    await prisma.admin_sessions.deleteMany({ where: { id: session.id } });
    return null;
  }
  return session.user;
});

/** Drop every expired session row (cheap housekeeping, run on login). */
export async function purgeExpiredSessions(): Promise<void> {
  await prisma.admin_sessions.deleteMany({ where: { expires_at: { lt: new Date() } } });
}
