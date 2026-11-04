import "server-only";
import prisma from "@/lib/prisma";
import { CATEGORIAS } from "../../_lib/categorias";

/** Autocomplete values for the modalidade form: what is already in use, plus the news categories. */
export async function getFormSuggestions(): Promise<{ categorias: string[]; icones: string[] }> {
  const rows = await prisma.modalidades.findMany({ select: { categoria: true, icone: true } });
  const unique = (values: (string | null)[]) =>
    [...new Set(values.filter((v): v is string => !!v))].sort((a, b) => a.localeCompare(b, "pt"));
  return {
    categorias: unique([...CATEGORIAS, ...rows.map((r) => r.categoria)]),
    icones: unique(rows.map((r) => r.icone)),
  };
}
