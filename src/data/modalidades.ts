export interface Modalidade {
  nome: string;
  slug: string;
  icone: string;
  descricao: string;
  ativo: boolean;
  categoria: string;
  idadeMinima: number;
  idadeMaxima?: number;
  preco: {
    mensalidade: number;
    inscricao: number;
    equipamento?: number;
  };
  horarios: {
    dia: string;
    inicio: string;
    fim: string;
    nivel: string;
    grupo: string;
  }[];
  instalacoes: string[];
  equipamentoNecessario: string[];
  beneficios: string[];
  niveis: string[];
  competicoes: string[];
  galeria: string[];
  detalhes: {
    introducao: string;
    objetivos: string[];
    metodologia: string;
    avaliacao: string;
    progressao: string;
  };
  contacto: {
  responsavel: string;
  telefone?: string;
  email?: string;
  };
}

export const modalidades: Modalidade[] = [
  {
    nome: "Andebol",
    slug: "andebol",
    icone: "/icones-modalidades/andebol.png",
    descricao: "Equipas competitivas em várias categorias etárias",
    ativo: true,
    categoria: "Desporto Coletivo",
    idadeMinima: 6,
    preco: {
      mensalidade: 30,
      inscricao: 60,
      equipamento: 90
    },
    horarios: [
      { dia: "Segunda-feira", inicio: "17:30", fim: "19:00", nivel: "Iniciação", grupo: "Minis (6-8 anos)" },
      { dia: "Quarta-feira", inicio: "17:30", fim: "19:00", nivel: "Iniciação", grupo: "Minis (6-8 anos)" },
      { dia: "Terça-feira", inicio: "18:30", fim: "20:00", nivel: "Formação", grupo: "Infantis (9-11 anos)" },
      { dia: "Quinta-feira", inicio: "18:30", fim: "20:00", nivel: "Formação", grupo: "Infantis (9-11 anos)" },
      { dia: "Segunda-feira", inicio: "19:00", fim: "21:00", nivel: "Competição", grupo: "Iniciados (12-14 anos)" },
      { dia: "Quarta-feira", inicio: "19:00", fim: "21:00", nivel: "Competição", grupo: "Iniciados (12-14 anos)" },
      { dia: "Sexta-feira", inicio: "19:00", fim: "21:00", nivel: "Competição", grupo: "Iniciados (12-14 anos)" },
      { dia: "Terça-feira", inicio: "19:30", fim: "21:30", nivel: "Competição", grupo: "Juvenis Femininos (15-17 anos)" },
      { dia: "Quinta-feira", inicio: "19:30", fim: "21:30", nivel: "Competição", grupo: "Juvenis Femininos (15-17 anos)" },
      { dia: "Sábado", inicio: "09:30", fim: "11:30", nivel: "Competição", grupo: "Juvenis Femininos (15-17 anos)" },
      { dia: "Terça-feira", inicio: "20:00", fim: "22:00", nivel: "Alto Rendimento", grupo: "Juvenis/Juniores Masculinos (15+ anos)" },
      { dia: "Quinta-feira", inicio: "20:00", fim: "22:00", nivel: "Alto Rendimento", grupo: "Juvenis/Juniores Masculinos (15+ anos)" },
      { dia: "Sábado", inicio: "10:00", fim: "12:00", nivel: "Alto Rendimento", grupo: "Juvenis/Juniores Masculinos (15+ anos)" }
    ],
    instalacoes: ["Pavilhão Principal", "Campo exterior", "Balneários", "Ginásio de musculação"],
    equipamentoNecessario: ["Equipamento desportivo", "Sapatilhas adequadas", "Proteções (opcional)"],
    beneficios: [
      "Desenvolvimento da coordenação motora",
      "Trabalho de equipa e cooperação",
      "Melhoria da condição física",
      "Disciplina e responsabilidade",
      "Competição saudável",
      "Socialização e amizades"
    ],
    niveis: ["Iniciação (6-8 anos)", "Formação (9-11 anos)", "Competição (12-14 anos)", "Alto Rendimento (15+ anos)"],
    competicoes: [
      "Campeonato Distrital de Iniciados",
      "Campeonato Distrital de Juvenis",
      "Torneios Interescolas",
      "Festival de Andebol de Formação",
      "Campeonato Nacional (equipas selecionadas)"
    ],
    galeria: [
      "/galeria/andebol/treino1.jpg",
      "/galeria/andebol/jogo1.jpg",
      "/galeria/andebol/equipa2024.jpg",
      "/galeria/andebol/pavilhao.jpg"
    ],
    detalhes: {
      introducao: "O andebol no GCO tem uma longa tradição de excelência, desenvolvendo atletas desde a iniciação até ao alto rendimento. As nossas equipas participam regularmente em competições distritais e nacionais, conseguindo sempre resultados de destaque.",
      objetivos: [
        "Desenvolver as capacidades técnicas e táticas do andebol",
        "Promover o espírito de equipa e fair-play",
        "Melhorar a condição física geral",
        "Formar atletas completos e responsáveis",
        "Preparar para competições de alto nível"
      ],
      metodologia: "Utilizamos uma metodologia progressiva que combina o ensino técnico com o desenvolvimento tático, sempre adaptada à idade e nível dos atletas. Os treinos incluem exercícios técnicos, jogos reduzidos, situações táticas e preparação física específica.",
      avaliacao: "Avaliação contínua através de observação direta, testes técnicos periódicos e participação em jogos e torneios. Feedback regular aos atletas e encarregados de educação.",
      progressao: "Progressão natural entre escalões mediante avaliação técnica, física e psicológica. Possibilidade de integração em equipas de competição para atletas com maior potencial."
    },
    contacto: {
      responsavel: "Carlos Silva",
      telefone: "219 123 456",
  email: "geral@gcodivelas.pt"
    }
  },
  {
    nome: "Ginástica",
    slug: "ginastica",
    icone: "/icones-modalidades/ginastica.png",
    descricao: "Ginástica artística e rítmica para todas as idades",
    ativo: true,
    categoria: "Desporto Individual",
    idadeMinima: 3,
    preco: {
      mensalidade: 40,
      inscricao: 70,
      equipamento: 60
    },
    horarios: [
      { dia: "Segunda-feira", inicio: "16:30", fim: "17:30", nivel: "Baby Gym", grupo: "3-5 anos" },
      { dia: "Quarta-feira", inicio: "16:30", fim: "17:30", nivel: "Baby Gym", grupo: "3-5 anos" },
      { dia: "Sexta-feira", inicio: "16:30", fim: "17:30", nivel: "Baby Gym", grupo: "3-5 anos" },
      { dia: "Terça-feira", inicio: "17:30", fim: "19:00", nivel: "Iniciação", grupo: "6-8 anos" },
      { dia: "Quinta-feira", inicio: "17:30", fim: "19:00", nivel: "Iniciação", grupo: "6-8 anos" },
      { dia: "Segunda-feira", inicio: "18:00", fim: "20:00", nivel: "Elementar", grupo: "9-12 anos" },
      { dia: "Quarta-feira", inicio: "18:00", fim: "20:00", nivel: "Elementar", grupo: "9-12 anos" },
      { dia: "Sexta-feira", inicio: "17:30", fim: "19:30", nivel: "Elementar", grupo: "9-12 anos" },
      { dia: "Terça-feira", inicio: "19:00", fim: "21:00", nivel: "Avançado", grupo: "13+ anos" },
      { dia: "Quinta-feira", inicio: "19:00", fim: "21:00", nivel: "Avançado", grupo: "13+ anos" },
      { dia: "Sábado", inicio: "09:00", fim: "12:00", nivel: "Competição", grupo: "Selecionados" }
    ],
    instalacoes: ["Ginásio de Ginástica", "Tatamis", "Aparelhos oficiais", "Zona de aquecimento", "Balneários"],
    equipamentoNecessario: ["Fato de ginástica", "Sapatilhas de ginástica", "Proteções para pulsos (opcional)"],
    beneficios: [
      "Desenvolvimento da flexibilidade e força",
      "Melhoria da coordenação e equilíbrio",
      "Disciplina e concentração",
      "Expressão corporal e artística",
      "Autoconfiança e superação pessoal",
      "Postura corporal correta"
    ],
    niveis: ["Baby Gym (3-5 anos)", "Iniciação (6-8 anos)", "Elementar (9-12 anos)", "Avançado (13+ anos)", "Competição"],
    competicoes: [
      "Torneio Regional de Ginástica",
      "Campeonato Distrital",
      "Festival de Ginástica do GCO",
      "Competições Nacionais (atletas selecionados)",
      "Exibições e demonstrações"
    ],
    galeria: [
      "/galeria/ginastica/treino-artistica.jpg",
      "/galeria/ginastica/competicao2024.jpg",
      "/galeria/ginastica/baby-gym.jpg",
      "/galeria/ginastica/ginasio.jpg"
    ],
    detalhes: {
      introducao: "A ginástica no GCO oferece formação completa em ginástica artística e rítmica, proporcionando aos atletas o desenvolvimento da flexibilidade, força, coordenação e expressão corporal. Com instalações modernas e treinadores especializados, criamos um ambiente seguro e estimulante.",
      objetivos: [
        "Desenvolver capacidades físicas fundamentais",
        "Ensinar técnicas específicas da ginástica artística",
        "Promover a expressão corporal e artística",
        "Formar atletas disciplinados e perseverantes",
        "Preparar para competições quando aplicável"
      ],
      metodologia: "Método progressivo baseado na Federação Internacional de Ginástica, adaptado à idade e capacidades individuais. Enfoque na técnica correta, segurança e desenvolvimento gradual das habilidades.",
      avaliacao: "Avaliação técnica regular através de demonstrações práticas, testes de flexibilidade e força, e participação em festivais internos. Acompanhamento individualizado do progresso.",
      progressao: "Progressão através dos níveis mediante domínio técnico e desenvolvimento físico adequado. Possibilidade de integração em grupo de competição para ginastas com aptidões especiais."
    },
    contacto: {
      responsavel: "Sofia Rodrigues",
      telefone: "219 123 457",
  email: "geral@gcodivelas.pt"
    }
  },
  {
    nome: "Patinagem Artística",
    slug: "patinagem-artistica",
    icone: "/icones-modalidades/patinagem.png",
    descricao: "Formação e competição em patinagem artística",
    ativo: true,
    categoria: "Desporto Individual",
    idadeMinima: 4,
    preco: {
      mensalidade: 45,
      inscricao: 80,
      equipamento: 140
    },
    horarios: [
      { dia: "Terça-feira", inicio: "16:45", fim: "17:45", nivel: "Iniciação", grupo: "4-6 anos" },
      { dia: "Quinta-feira", inicio: "16:45", fim: "17:45", nivel: "Iniciação", grupo: "4-6 anos" },
      { dia: "Segunda-feira", inicio: "17:45", fim: "19:15", nivel: "Elementar", grupo: "7-10 anos" },
      { dia: "Quarta-feira", inicio: "17:45", fim: "19:15", nivel: "Elementar", grupo: "7-10 anos" },
      { dia: "Terça-feira", inicio: "18:45", fim: "20:45", nivel: "Avançado", grupo: "11+ anos" },
      { dia: "Quinta-feira", inicio: "18:45", fim: "20:45", nivel: "Avançado", grupo: "11+ anos" },
      { dia: "Sábado", inicio: "09:30", fim: "12:30", nivel: "Competição", grupo: "Todos os níveis" }
    ],
    instalacoes: ["Pista de patinagem", "Zona de aquecimento", "Balneários", "Armazém de equipamentos"],
    equipamentoNecessario: ["Patins artísticos", "Equipamento de proteção", "Roupa adequada", "Capacete (iniciação)"],
    beneficios: [
      "Desenvolvimento do equilíbrio e coordenação",
      "Melhoria da postura corporal",
      "Expressão artística e musical",
      "Autoconfiança e elegância",
      "Disciplina e perseverança",
      "Socialização em grupo"
    ],
    niveis: ["Iniciação (4-6 anos)", "Elementar (7-10 anos)", "Avançado (11+ anos)", "Competição"],
    competicoes: [
      "Campeonato Distrital de Patinagem",
      "Troféu Regional",
      "Festival de Patinagem do GCO",
      "Campeonatos Nacionais (atletas qualificados)",
      "Exibições temáticas"
    ],
    galeria: [
      "/galeria/patinagem/competicao.jpg",
      "/galeria/patinagem/treino-livre.jpg",
      "/galeria/patinagem/pista.jpg",
      "/galeria/patinagem/exibicao.jpg"
    ],
    detalhes: {
      introducao: "A patinagem artística no GCO combina técnica, arte e atletismo, proporcionando aos atletas uma formação completa que desenvolve a coordenação, equilíbrio e expressão artística. Os nossos patinadores participam em competições regionais e nacionais.",
      objetivos: [
        "Dominar as técnicas básicas da patinagem",
        "Desenvolver expressão artística e musical",
        "Melhorar equilíbrio e coordenação motora",
        "Formar patinadores técnicos e artísticos",
        "Preparar para competições oficiais"
      ],
      metodologia: "Ensino progressivo das técnicas fundamentais, combinando exercícios de patinagem básica com elementos artísticos. Trabalho coreográfico adaptado ao nível e idade dos atletas.",
      avaliacao: "Avaliação prática através de execução de elementos técnicos, apresentações coreográficas e participação em festivais. Acompanhamento individual do desenvolvimento técnico e artístico.",
      progressao: "Progressão baseada no domínio técnico e desenvolvimento artístico. Acesso a níveis de competição mediante avaliação da treinadora e demonstração de competências adequadas."
    },
    contacto: {
      responsavel: "Carla Mendes",
      telefone: "219 123 458",
  email: "geral@gcodivelas.pt"
    }
  },
  {
    nome: "Xadrez",
    slug: "xadrez",
    icone: "/icones-modalidades/xadrez.png",
    descricao: "Desenvolvimento estratégico e competições",
    ativo: true,
    categoria: "Desporto Mental",
    idadeMinima: 5,
    preco: {
      mensalidade: 25,
      inscricao: 35
    },
    horarios: [
      { dia: "Quarta-feira", inicio: "17:00", fim: "18:00", nivel: "Iniciação", grupo: "5-8 anos" },
      { dia: "Sábado", inicio: "09:30", fim: "10:30", nivel: "Iniciação", grupo: "5-8 anos" },
      { dia: "Quarta-feira", inicio: "18:00", fim: "19:30", nivel: "Intermédio", grupo: "9-14 anos" },
      { dia: "Sábado", inicio: "10:30", fim: "12:00", nivel: "Intermédio", grupo: "9-14 anos" },
      { dia: "Quinta-feira", inicio: "18:30", fim: "20:30", nivel: "Avançado", grupo: "15+ anos" },
      { dia: "Sábado", inicio: "14:00", fim: "17:00", nivel: "Competição", grupo: "Todos os níveis" }
    ],
    instalacoes: ["Sala de xadrez", "Tabuleiros e peças oficiais", "Relógios de xadrez", "Biblioteca de xadrez"],
    equipamentoNecessario: ["Material fornecido pelo clube"],
    beneficios: [
      "Desenvolvimento do raciocínio lógico",
      "Melhoria da concentração e memória",
      "Capacidade de análise e estratégia",
      "Paciência e autocontrole",
      "Tomada de decisão responsável",
      "Respeito pelo adversário"
    ],
    niveis: ["Iniciação (5-8 anos)", "Intermédio (9-14 anos)", "Avançado (15+ anos)", "Competição"],
    competicoes: [
      "Campeonato Escolar de Xadrez",
      "Torneio de Jovens do GCO",
      "Campeonato Distrital por Escalões",
      "Torneios Rápidos mensais",
      "Campeonatos Nacionais (atletas qualificados)"
    ],
    galeria: [
      "/galeria/xadrez/torneio-juvenil.jpg",
      "/galeria/xadrez/sala-xadrez.jpg",
      "/galeria/xadrez/competicao-escolar.jpg",
      "/galeria/xadrez/aula-grupo.jpg"
    ],
    detalhes: {
      introducao: "O xadrez no GCO é mais do que um jogo - é uma ferramenta educativa que desenvolve o raciocínio lógico, a capacidade de análise e a tomada de decisões estratégicas. Os nossos enxadristas participam em torneios escolares, distritais e nacionais.",
      objetivos: [
        "Ensinar as regras e fundamentos do xadrez",
        "Desenvolver capacidades de análise e estratégia",
        "Melhorar concentração e memória",
        "Formar jogadores competitivos e éticos",
        "Promover o xadrez como ferramenta educativa"
      ],
      metodologia: "Ensino estruturado desde os fundamentos básicos até estratégias avançadas. Utilização de exercícios práticos, análise de partidas famosas e jogos supervisionados. Adaptação do método à idade e nível dos alunos.",
      avaliacao: "Avaliação através de jogos práticos, resolução de problemas táticos e participação em torneios internos. Acompanhamento do rating individual e progressão competitiva.",
      progressao: "Progressão baseada no domínio técnico e resultados competitivos. Acesso a competições oficiais mediante avaliação do treinador e demonstração de conhecimentos adequados."
    },
    contacto: {
      responsavel: "José Martins",
      telefone: "219 123 459",
  email: "geral@gcodivelas.pt"
    }
  },
  {
    nome: "Hóquei em Patins",
    slug: "hoquei-em-patins",
    icone: "/icones-modalidades/hoquei.png",
  descricao: "Modalidade atualmente sem atividade.",
    ativo: false,
    categoria: "Desporto Coletivo",
    idadeMinima: 6,
    preco: {
      mensalidade: 30,
      inscricao: 55,
      equipamento: 150
    },
    horarios: [],
    instalacoes: ["Pavilhão", "Balneários", "Arrecadação de material"],
    equipamentoNecessario: ["Patins de hóquei", "Stick", "Equipamento de proteção completo", "Capacete obrigatório"],
    beneficios: [
      "Desenvolvimento da velocidade e agilidade",
      "Trabalho de equipa intenso",
      "Melhoria dos reflexos",
      "Disciplina táctica",
      "Competitividade saudável",
      "Socialização em grupo"
    ],
    niveis: ["Iniciação (6-8 anos)", "Formação (9-12 anos)", "Competição (13+ anos)"],
    competicoes: [],
    galeria: [
      "/galeria/hoquei/pavilhao.jpg",
      "/galeria/hoquei/equipamento.jpg"
    ],
    detalhes: {
  introducao: "O hóquei em patins tem uma tradição importante no GCO, sendo uma modalidade que combina velocidade, técnica e espírito de equipa de forma única. Atualmente sem atividade.",
      objetivos: [
        "Retomar a atividade da modalidade",
        "Formar novos atletas na modalidade",
        "Desenvolver equipas competitivas",
        "Promover o hóquei em patins na região"
      ],
      metodologia: "Metodologia em suspensão temporária. Será retomada após resolução das questões regulamentares pendentes.",
      avaliacao: "Sistema de avaliação será implementado aquando do retomar da atividade.",
      progressao: "Progressão será definida no reinício das atividades."
    },
    contacto: {
      responsavel: "Direção do Clube",
  email: "geral@gcodivelas.pt"
    }
  }
];

// Função auxiliar para obter modalidade por slug
export function getModalidadeBySlug(slug: string): Modalidade | undefined {
  return modalidades.find(modalidade => modalidade.slug === slug);
}

// Função para obter modalidades ativas
export function getModalidadesAtivas(): Modalidade[] {
  return modalidades.filter(modalidade => modalidade.ativo);
}

// Função para obter modalidades por categoria
export function getModalidadesByCategoria(categoria: string): Modalidade[] {
  return modalidades.filter(modalidade => modalidade.categoria === categoria);
}