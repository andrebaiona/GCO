import prisma from "@/lib/prisma";

export interface Noticia {
  id: number;
  titulo: string;
  resumo?: string;
  conteudo: string;
  data: string;
  categoria: string;
  imagem?: string;
  imagem_extra?: string;
  link?: string;
  autor?: string;
}

// Tipo baseado no modelo Prisma
type NoticiasModel = {
  id: number;
  titulo: string;
  conteudo: string;
  resumo?: string | null;
  imagem?: string | null;
  imagem_extra?: string | null;
  data_publicacao?: Date | null;
  autor?: string | null;
  categoria: string;
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
    resumo: n.resumo ?? "",
    conteudo: n.conteudo,
    data: n.data_publicacao?.toISOString() ?? "",
    categoria: n.categoria,
    imagem: n.imagem ? (n.imagem.startsWith('/') ? n.imagem : `/${n.imagem}`) : undefined,
    imagem_extra: n.imagem_extra ? (n.imagem_extra.startsWith('/') ? n.imagem_extra : `/${n.imagem_extra}`) : undefined,
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
    resumo: n.resumo ?? "",
    conteudo: n.conteudo,
    data: n.data_publicacao?.toLocaleDateString() ?? "",
    categoria: n.categoria,
    imagem: n.imagem ? (n.imagem.startsWith('/') ? n.imagem : `/${n.imagem}`) : undefined,
    imagem_extra: n.imagem_extra ? (n.imagem_extra.startsWith('/') ? n.imagem_extra : `/${n.imagem_extra}`) : undefined,
    link: undefined,
    autor: n.autor ?? undefined,
  }));
}
