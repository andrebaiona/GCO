import  prisma  from "@/lib/prisma";

export interface Noticia {
  id: number;
  titulo: string;
  resumo: string | null;
  conteudo: string | null;
  data: string; 
  categoria: string | null;
  imagem?: string | null;
  imagem_extra?: string | null;
  link?: string;
  autor?: string | null;
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
    imagem: n.imagem ?? undefined,
    imagem_extra: n.imagem_extra ?? null,
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
    imagem_extra: n.imagem_extra ?? null,
    autor: n.autor ?? null,
    link: undefined,
  };
}
