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

  const escalaoComPrecos = modalidade.escalao?.map((esc: any) => {
    // Preços específicos do escalão
    const precosEscalao = modalidade.preco_escalao
      ? modalidade.preco_escalao.filter((preco: any) => preco.escalao && preco.escalao.toLowerCase() === esc.nome.toLowerCase())
        .map((preco: any) => ({
          tipo: preco.tipo,
          valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor),
          observacoes: preco.observacoes ?? null
        }))
      : [];

    // Preços globais do escalão 'Todos' (inscrição, seguro, renovação, etc)
    const precosGlobais = modalidade.preco_escalao
      ? modalidade.preco_escalao.filter((preco: any) => preco.escalao && preco.escalao.toLowerCase() === 'todos')
        .map((preco: any) => ({
          tipo: preco.tipo,
          valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor),
          observacoes: preco.observacoes ?? null
        }))
      : [];

    // Junta os preços específicos e globais, sem duplicados de tipo
    const tiposAdicionados = new Set<string>();
    const precosFinal: { tipo?: string; valor?: number; observacoes?: string | null }[] = [];
    [...precosEscalao, ...precosGlobais].forEach((preco) => {
      if (preco.tipo && !tiposAdicionados.has(preco.tipo.toLowerCase())) {
        precosFinal.push(preco);
        tiposAdicionados.add(preco.tipo.toLowerCase());
      }
    });

    return {
      ...esc,
      mensalidade: esc.mensalidade ? Number(esc.mensalidade) : null,
      preco_escalao: precosFinal,
    };
  }) || [];

  return {
    ...modalidade,
    escalao: escalaoComPrecos,
    preco_escalao: modalidade.preco_escalao?.map((preco: any) => ({
      ...preco,
      valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor)
    })) || [],
  };
}
