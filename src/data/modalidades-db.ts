export async function fetchEscalaoInfo(modalidadeSlug: string, escalaoNome: string) {
  const modalidade = await prisma.modalidades.findUnique({
    where: { slug: modalidadeSlug },
    include: {
      escalao: true,
      preco_escalao: true,
    },
  });
  if (!modalidade) return null;
  console.log('preco_escalao:', modalidade.preco_escalao);
  const escalao = modalidade.escalao.find((esc: any) => esc.nome.toLowerCase() === escalaoNome.toLowerCase());
  if (!escalao) return null;
  // Filtra preços por tipo e escalão
  const mensalidade = modalidade.preco_escalao.find((p: any) => p.escalao.toLowerCase() === escalaoNome.toLowerCase() && p.tipo.toLowerCase() === "mensalidade");
  const inscricao = modalidade.preco_escalao.find((p: any) => p.escalao.toLowerCase() === escalaoNome.toLowerCase() && (p.tipo.toLowerCase() === "inscrição" || p.tipo.toLowerCase() === "inscricao"));
  return {
    nome: escalao.nome,
    descricao: escalao.descricao,
    idade_minima: escalao.idade_minima,
    idade_maxima: escalao.idade_maxima,
    mensalidade: mensalidade ? Number(mensalidade.valor) : null,
    inscricao: inscricao ? Number(inscricao.valor) : null,
    obs_mensalidade: mensalidade?.observacoes ?? null,
    obs_inscricao: inscricao?.observacoes ?? null,
  };
}
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
      escalao: true,
      preco_escalao: true,
    },
  });

  if (!modalidade) return null;

  return {
    ...modalidade,
    escalao: modalidade.escalao?.map((esc: any) => ({
      ...esc,
      mensalidade: esc.mensalidade ? Number(esc.mensalidade) : null,
    })) || [],
    preco_escalao: modalidade.preco_escalao?.map((preco: any) => ({
      ...preco,
      valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor)
    })) || [],
  };
}
