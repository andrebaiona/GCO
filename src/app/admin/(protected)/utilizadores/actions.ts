"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getCurrentAdmin, createSession } from "@/lib/admin/session";
import { requireAdminAction } from "@/lib/admin/dal";
import { hashPassword, verifyPassword } from "@/lib/admin/password";
import { fieldErrorsFrom, text, SESSION_EXPIRED, type FormState } from "../../_lib/form";

const MIN_PASSWORD_LENGTH = 12;

const passwordSchema = z
  .string()
  .min(MIN_PASSWORD_LENGTH, `A palavra-passe deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`)
  .max(256, "A palavra-passe é demasiado longa.");

const createUserSchema = z
  .object({
    username: z
      .string()
      .trim()
      .toLowerCase()
      .regex(/^[a-z0-9._-]{3,50}$/, "Use 3–50 caracteres: letras minúsculas, números, '.', '_' ou '-'."),
    password: passwordSchema,
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, { path: ["confirm"], message: "As palavras-passe não coincidem." });

const changePasswordSchema = z
  .object({
    current: z.string().min(1, "Indique a palavra-passe atual."),
    password: passwordSchema,
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, { path: ["confirm"], message: "As palavras-passe não coincidem." });

function revalidateUsersPage() {
  revalidatePath("/admin/utilizadores");
}

export async function createUser(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!(await getCurrentAdmin())) return { error: SESSION_EXPIRED };

  const parsed = createUserSchema.safeParse({
    username: text(formData, "username"),
    password: text(formData, "password"),
    confirm: text(formData, "confirm"),
  });
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  const { username, password } = parsed.data;
  if (await prisma.admin_users.findUnique({ where: { username } })) {
    return { fieldErrors: { username: "Já existe um utilizador com este nome." } };
  }

  await prisma.admin_users.create({
    data: { username, password_hash: await hashPassword(password) },
  });
  revalidateUsersPage();
  return { success: `Utilizador "${username}" criado.` };
}

export async function changeOwnPassword(_prev: FormState, formData: FormData): Promise<FormState> {
  const admin = await getCurrentAdmin();
  if (!admin) return { error: SESSION_EXPIRED };

  const parsed = changePasswordSchema.safeParse({
    current: text(formData, "current"),
    password: text(formData, "password"),
    confirm: text(formData, "confirm"),
  });
  if (!parsed.success) return { fieldErrors: fieldErrorsFrom(parsed.error) };

  const user = await prisma.admin_users.findUnique({ where: { id: admin.id } });
  if (!user || !(await verifyPassword(user.password_hash, parsed.data.current))) {
    return { fieldErrors: { current: "A palavra-passe atual está incorreta." } };
  }

  await prisma.admin_users.update({
    where: { id: admin.id },
    data: { password_hash: await hashPassword(parsed.data.password) },
  });
  // Sign out every other session of this user (e.g. a forgotten browser), keep this one alive.
  await prisma.admin_sessions.deleteMany({ where: { user_id: admin.id } });
  await createSession(admin.id);

  return { success: "Palavra-passe alterada. As outras sessões foram terminadas." };
}

export async function deleteUser(formData: FormData): Promise<void> {
  const admin = await requireAdminAction();
  const id = Number(text(formData, "id"));
  if (!Number.isInteger(id) || id <= 0 || id === admin.id) return;

  await prisma.$transaction(async (tx) => {
    if ((await tx.admin_users.count()) <= 1) return; // never remove the last admin
    await tx.admin_users.deleteMany({ where: { id } }); // sessions cascade
  });
  revalidateUsersPage();
}
