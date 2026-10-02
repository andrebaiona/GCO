"use server";

import { redirect } from "next/navigation";
import { deleteSession } from "@/lib/admin/session";
import { adminHref } from "@/lib/admin/paths";

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect(adminHref("login"));
}
