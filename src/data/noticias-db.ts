import prisma from "@/lib/prisma";

export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  descricao?: string;
  data: string;
  categoria: string;
  imagem?: string;
  link?: string;
  autor?: string;
}

// Tipo baseado no modelo Prisma
type NoticiasModel = {
  id: number;
  titulo: string;
  conteudo: string;
  imagem?: string | null;
  data_publicacao?: Date | null;
  autor?: string | null;
  categoria: string;
  descricao?: string | null;
};

// Buscar várias notícias
export async function fetchNoticias(limit = 5): Promise<Noticia[]> {
  const noticias = await prisma.noticias.findMany({
    orderBy: { data_publicacao: "desc" },
    take: limit,
  });

  return noticias.map((n: NoticiasModel) => ({
    id: n.id,
    titulo: n.titulo,
    resumo: n.conteudo?.slice(0, 120) ?? "",
    descricao: n.conteudo,
    data: n.data_publicacao?.toLocaleDateString() ?? "",
    categoria: n.categoria,
    imagem: n.imagem ?? undefined,
    link: undefined,
    autor: n.autor ?? undefined,
  }));
}

// Buscar a última notícia
export async function getLatestNoticia(): Promise<Noticia | null> {
  const noticias = await fetchNoticias(1);
  return noticias.length > 0 ? noticias[0] : null;
}

// Buscar por categoria
export async function fetchNoticiasByCategoria(
  categoria: string,
  limit = 5
): Promise<Noticia[]> {
  const noticias = await prisma.noticias.findMany({
    where: { categoria },
    orderBy: { data_publicacao: "desc" },
    take: limit,
  });

  return noticias.map((n: NoticiasModel) => ({
    id: n.id,
    titulo: n.titulo,
    resumo: n.conteudo?.slice(0, 120) ?? "",
    descricao: n.conteudo,
    data: n.data_publicacao?.toISOString() ?? "",
    categoria: n.categoria,
    imagem: n.imagem ?? undefined,
    link: undefined,
    autor: n.autor ?? undefined,
  }));
}
