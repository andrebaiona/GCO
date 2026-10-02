import type { z } from "zod";

export type FormState = {
  error?: string;
  fieldErrors?: Record<string, string>;
  success?: string;
};

export const SESSION_EXPIRED = "A sessão expirou. Recarregue a página e inicie sessão novamente.";

/** First error message per field, keyed by field name. */
export function fieldErrorsFrom(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "_");
    out[key] ??= issue.message;
  }
  return out;
}

/** FormData text value, or "" when missing / not a string. */
export function text(formData: FormData, name: string): string {
  const v = formData.get(name);
  return typeof v === "string" ? v : "";
}

/** FormData file value, or null when no file was chosen. */
export function file(formData: FormData, name: string): File | null {
  const v = formData.get(name);
  return v instanceof File && v.size > 0 ? v : null;
}
