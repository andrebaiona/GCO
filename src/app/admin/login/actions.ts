"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { verifyPassword, verifyAgainstDummy } from "@/lib/admin/password";
import { createSession, purgeExpiredSessions } from "@/lib/admin/session";
import { adminHref } from "@/lib/admin/paths";
import { text, type FormState } from "../_lib/form";

const MAX_FAILED_ATTEMPTS = 5;
const LOCK_MS = 15 * 60 * 1000;
const GENERIC_ERROR = "Utilizador ou palavra-passe incorretos.";

const loginSchema = z.object({
  username: z.string().trim().toLowerCase().min(1).max(50),
  password: z.string().min(1).max(256),
});

export async function loginAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = loginSchema.safeParse({
    username: text(formData, "username"),
    password: text(formData, "password"),
  });
  if (!parsed.success) return { error: GENERIC_ERROR };
  const { username, password } = parsed.data;

  const user = await prisma.admin_users.findUnique({ where: { username } });

  // Unknown user or locked account: still spend the hashing time so neither is distinguishable.
  if (!user || (user.locked_until && user.locked_until.getTime() > Date.now())) {
    await verifyAgainstDummy(password);
    return { error: GENERIC_ERROR };
  }

  if (!(await verifyPassword(user.password_hash, password))) {
    const updated = await prisma.admin_users.update({
      where: { id: user.id },
      data: { failed_attempts: { increment: 1 } },
      select: { failed_attempts: true },
    });
    if (updated.failed_attempts >= MAX_FAILED_ATTEMPTS) {
      await prisma.admin_users.update({
        where: { id: user.id },
        data: { failed_attempts: 0, locked_until: new Date(Date.now() + LOCK_MS) },
      });
    }
    return { error: GENERIC_ERROR };
  }

  await prisma.admin_users.update({
    where: { id: user.id },
    data: { failed_attempts: 0, locked_until: null, last_login_at: new Date() },
  });
  await purgeExpiredSessions();
  await createSession(user.id);

  redirect(adminHref("noticias"));
}
