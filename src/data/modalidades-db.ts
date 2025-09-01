export async function fetchEscalaoInfo(modalidadeSlug: string, escalaoNome: string) {
  const modalidade = await prisma.modalidades.findUnique({
    where: { slug: modalidadeSlug },
    include: {
      escalao: true,
      preco_escalao: true,
    },
  });
  if (!modalidade) return null;
  const escalao = modalidade.escalao.find((esc: any) => esc.nome.toLowerCase() === escalaoNome.toLowerCase());
  if (!escalao) return null;
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

  // Para cada escalão, associar os preços correspondentes
  const escalaoComPrecos = modalidade.escalao.map((esc: any) => {
    const precos = modalidade.preco_escalao.filter((preco: any) =>
      preco.escalao.toLowerCase() === esc.nome.toLowerCase() && preco.modalidade_id === esc.modalidade_id
    );
    return {
      ...esc,
      mensalidade: esc.mensalidade ? Number(esc.mensalidade) : null,
      preco_escalaos: precos.map((preco: any) => ({
        tipo: preco.tipo,
        valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor),
        observacoes: preco.observacoes ?? null,
      })),
    };
  });

  return {
    ...modalidade,
    escalao: escalaoComPrecos,
  };
}
