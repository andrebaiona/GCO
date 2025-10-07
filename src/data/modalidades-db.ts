import prisma from "@/lib/prisma";

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
    console.log(`\n--- Processando escalão: ${esc.nome} ---`);
    
    // Buscar preços que correspondem a este escalão
    const precosEscalao = modalidade.preco_escalao
      ? modalidade.preco_escalao.filter((preco: any) => {
          const precoEscalao = preco.escalao?.toString().toLowerCase().trim();
          const escalaoNome = esc.nome?.toString().toLowerCase().trim();
          
          // Para patinagem, usar matching mais flexível
          if (slug === 'patinagem-artistica') {
            // Match direto
            const directMatch = precoEscalao === escalaoNome;
            
            // Match por partes (ex: "pré-competição" matches "Pre-Competição")
            const normalizedPreco = precoEscalao?.replace(/[-\s]/g, '');
            const normalizedEscalao = escalaoNome?.replace(/[-\s]/g, '');
            const normalizedMatch = normalizedPreco === normalizedEscalao;
            
            console.log(`Preço: "${precoEscalao}" vs Escalão: "${escalaoNome}"`);
            console.log(`Direct match: ${directMatch}, Normalized match: ${normalizedMatch}`);
            
            return directMatch || normalizedMatch;
          } else {
            // Para outras modalidades, match exato
            return precoEscalao === escalaoNome;
          }
        })
        .map((preco: any) => ({
          tipo: preco.tipo,
          valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor),
          observacoes: preco.observacoes ?? null
        }))
      : [];

    // Buscar preços globais (escalão 'Todos')
    const precosGlobais = modalidade.preco_escalao
      ? modalidade.preco_escalao.filter((preco: any) => {
          const precoEscalao = preco.escalao?.toString().toLowerCase().trim();
          return precoEscalao === 'todos';
        })
        .map((preco: any) => ({
          tipo: preco.tipo,
          valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor),
          observacoes: preco.observacoes ?? null
        }))
      : [];

    console.log(`Preços específicos encontrados: ${precosEscalao.length}`);
    console.log('Preços específicos:', precosEscalao);
    console.log(`Preços globais encontrados: ${precosGlobais.length}`);
    console.log('Preços globais:', precosGlobais);

    // Para patinagem, permitir múltiplas mensalidades
    if (slug === 'patinagem-artistica') {
      // Primeiro adicionar TODAS as mensalidades específicas do escalão
      const todasMensalidades = precosEscalao.filter(p => p.tipo?.toLowerCase() === 'mensalidade');
      
      // Depois adicionar preços globais que não sejam mensalidades
      const outrosPrecos = precosGlobais.filter(p => p.tipo?.toLowerCase() !== 'mensalidade');
      
      const precosFinal = [...todasMensalidades, ...outrosPrecos];
      
      console.log(`Preços finais para ${esc.nome} (PATINAGEM):`, precosFinal);
      
      return {
        ...esc,
        mensalidade: esc.mensalidade ? Number(esc.mensalidade) : null,
        preco_escalao: precosFinal,
      };
    } else {
      // Para outras modalidades, usar lógica original (sem duplicados de tipo)
      const tiposAdicionados = new Set<string>();
      const precosFinal: { tipo?: string; valor?: number; observacoes?: string | null }[] = [];
      
      // Primeiro adicionar preços específicos do escalão
      precosEscalao.forEach((preco) => {
        if (preco.tipo && !tiposAdicionados.has(preco.tipo.toLowerCase())) {
          precosFinal.push(preco);
          tiposAdicionados.add(preco.tipo.toLowerCase());
        }
      });
      
      // Depois adicionar preços globais (só se não existir já)
      precosGlobais.forEach((preco) => {
        if (preco.tipo && !tiposAdicionados.has(preco.tipo.toLowerCase())) {
          precosFinal.push(preco);
          tiposAdicionados.add(preco.tipo.toLowerCase());
        }
      });

      console.log(`Preços finais para ${esc.nome}:`, precosFinal);

      return {
        ...esc,
        mensalidade: esc.mensalidade ? Number(esc.mensalidade) : null,
        preco_escalao: precosFinal,
      };
    }
  }) || [];

  // Debug: mostrar TODOS os preços da patinagem
  if (slug === 'patinagem-artistica') {
    console.log('\n=== TODOS OS PREÇOS DA PATINAGEM ===');
    modalidade.preco_escalao?.forEach((preco: any, index: number) => {
      console.log(`${index + 1}. Escalão: "${preco.escalao}", Tipo: "${preco.tipo}", Valor: ${preco.valor}, Obs: "${preco.observacoes}"`);
    });
    
    console.log('\n=== ESCALÕES DISPONÍVEIS ===');
    modalidade.escalao?.forEach((esc: any, index: number) => {
      console.log(`${index + 1}. Nome: "${esc.nome}"`);
    });
  }

  return {
    ...modalidade,
    escalao: escalaoComPrecos,
    preco_escalao: modalidade.preco_escalao?.map((preco: any) => ({
      ...preco,
      valor: typeof preco.valor === 'object' && preco.valor !== null && 'toNumber' in preco.valor ? preco.valor.toNumber() : Number(preco.valor)
    })) || [],
  };
}

export async function fetchPrecosPorModalidade(modalidadeId: number) {
  const precos = await prisma.preco_escalao.findMany({
    where: { modalidade_id: modalidadeId },
    select: {
      escalao: true,
      tipo: true,
      valor: true,
      observacoes: true,
    },
    orderBy: [
      { escalao: "asc" },
      { tipo: "asc" },
      { valor: "asc" }
    ]
  });

  return precos;
}