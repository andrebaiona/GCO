import prisma from "@/lib/prisma";

export type Modalidade = {
  id: number;
  nome: string;
  slug: string;
  icone: string;
  descricao: string;
  ativo: boolean;
};

export async function fetchAllModalidades(): Promise<Modalidade[]> {
  const modalidades = await prisma.modalidades.findMany();
  return modalidades as Modalidade[];
}

export async function fetchAllModalidadeSlugs() {
  const modalidades = await prisma.modalidades.findMany({
    select: { slug: true }
  });
  return modalidades;
}

export async function fetchModalidadeBySlug(slug: string) {
  const modalidade = await prisma.modalidades.findUnique({
    where: { slug },
    include: {
      detalhes_modalidade: true,
      niveis: { select: { descricao: true } },
      equipamento: { select: { nome: true } },
      competicoes: { select: { nome: true } },
      horarios: true,
      contacto_modalidade: true,
      preco: true, // Inclui logo o array de preços
    },
  });

  if (!modalidade) return null;

  // Cria um novo objeto, sem modificar o original
  // Serializa os campos Decimal para number
  let preco = null;
  if (modalidade.preco && modalidade.preco.length > 0) {
    const p = modalidade.preco[0];
    preco = {
      mensalidade: Number(p.mensalidade),
      inscricao: Number(p.inscricao),
      equipamento: p.equipamento !== null ? Number(p.equipamento) : null,
    };
  }
  return {
    ...modalidade,
    niveis: modalidade.niveis.map((n: { descricao: string | null }) => n.descricao ?? ''),
    equipamento: modalidade.equipamento.map((e: { nome: string | null }) => e.nome ?? ''),
    competicoes: modalidade.competicoes.map((c: { nome: string | null }) => c.nome ?? ''),
    contacto: modalidade.contacto_modalidade[0] || {},
    preco,
  };
}
