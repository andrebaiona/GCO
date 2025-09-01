// Função para obter a última notícia diretamente
export async function getLatestNoticia(): Promise<Noticia | null> {
  const noticias = await fetchNoticias();
  const validNoticias = noticias.filter(n => n.data && n.data.trim() !== "");
  if (validNoticias.length === 0) return null;
  // Ordena por data (mais recente primeiro)
  validNoticias.sort((a, b) => (a.data < b.data ? 1 : -1));
  return validNoticias[0];
}

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

export async function fetchNoticias(): Promise<Noticia[]> {
  const noticias = await prisma.noticias.findMany();
  return noticias.map((n: any) => ({
    id: n.id,
    titulo: n.titulo,
    resumo: n.conteudo?.slice(0, 120) ?? "", // Use first 120 chars as resumo
    descricao: n.conteudo,
    data: n.data_publicacao ? formatarData(n.data_publicacao) : "",
  categoria: n.categoria ?? "",
    imagem: n.imagem,
    link: undefined,
  }));
}

function formatarData(data: any): string {
  if (!data) return "";
  let dateObj: Date | null = null;
  if (typeof data === "string") {
    // Aceita tanto ISO quanto YYYY-MM-DD
    const isoMatch = /^\d{4}-\d{2}-\d{2}$/;
    if (isoMatch.test(data)) {
      // Adiciona hora para garantir compatibilidade
      dateObj = new Date(data + "T00:00:00.000Z");
    } else {
      dateObj = new Date(data);
    }
  } else if (data instanceof Date) {
    dateObj = data;
  }
  if (!dateObj || isNaN(dateObj.getTime())) return "";
  return dateObj.toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" });
}
