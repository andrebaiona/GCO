import  prisma  from "@/lib/prisma";
import { normalizeImagePath } from "@/utils/imagePath";

export interface Noticia {
  id: number;
  titulo: string;
  resumo: string | null;
  conteudo: string | null;
  data: string; 
  categoria: string | null;
  imagem?: string | null;
  imagens_extra: string[];
  link?: string;
  autor?: string | null;
}

function normalizeExtras(paths: string[] | null | undefined): string[] {
  return (paths ?? []).map((p) => normalizeImagePath(p)).filter((p): p is string => !!p);
}

export async function fetchNoticias(limit = 5): Promise<Noticia[]> {
  const noticias = await prisma.noticias.findMany({
    orderBy: { data_publicacao: "desc" },
    take: limit,
  });

  return noticias.map((n: any) => ({
    id: n.id,
    titulo: n.titulo,
    resumo: n.resumo ?? null,
    conteudo: n.conteudo ?? null,
    data: n.data_publicacao ? n.data_publicacao.toISOString().split("T")[0]: "",
    categoria: n.categoria,
    imagem: normalizeImagePath(n.imagem),
    imagens_extra: normalizeExtras(n.imagens_extra),
    autor: n.autor ?? null,
    link: undefined,
  }));
}

export async function fetchNoticiaById(id: number): Promise<Noticia | null> {
  const n = await prisma.noticias.findUnique({ where: { id } });
  if (!n) return null;

  return {
    id: n.id,
    titulo: n.titulo,
    resumo: n.resumo ?? null,
    conteudo: n.conteudo ?? null,
    data: n.data_publicacao ? n.data_publicacao.toISOString().split("T")[0] : "",
    categoria: n.categoria,
    imagem: n.imagem ?? null,
    imagens_extra: normalizeExtras(n.imagens_extra),
    autor: n.autor ?? null,
    link: undefined,
  };
}
