export interface Evento {
  id: number;
  nome: string;
  descricao: string;
  modalidade: string;
  tipo: 'Competição' | 'Torneio' | 'Festival' | 'Exibição' | 'Campeonato' | 'Treino Aberto' | 'Reunião' | 'Social';
  categoria: 'Interno' | 'Distrital' | 'Regional' | 'Nacional' | 'Internacional';
  dataInicio: string;
  dataFim?: string;
  horaInicio: string;
  horaFim?: string;
  local: string;
  endereco?: string;
  escaloes: string[];
  inscricoesAbertas: boolean;
  dataLimiteInscricao?: string;
  taxaInscricao?: number;
  numeroMaximoParticipantes?: number;
  numeroAtualParticipantes?: number;
  coordenador: {
    nome: string;
    telefone: string;
    email: string;
  };
  equipamentoNecessario?: string[];
  observacoes?: string;
  ativo: boolean;
  imagem?: string;
  documentos?: {
    nome: string;
    link: string;
    tipo: 'Regulamento' | 'Ficha de Inscrição' | 'Programa' | 'Resultados' | 'Outros';
  }[];
  edicaoAnual?: number;
  resultadosAnoAnterior?: string[];
}

export const eventos: Evento[] = [
  {
    id: 1,
    nome: "Campeonato Distrital de Iniciados",
    descricao: "Competição oficial da Associação de Andebol de Lisboa para atletas iniciados (12-14 anos). Campeonato que decorre durante toda a época desportiva.",
    modalidade: "andebol",
    tipo: "Campeonato",
    categoria: "Distrital",
    dataInicio: "2025-09-15",
    dataFim: "2026-05-30",
    horaInicio: "14:00",
    horaFim: "18:00",
    local: "Vários Pavilhões do Distrito de Lisboa",
    escaloes: ["Iniciados Masculinos", "Iniciados Femininos"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-08-31",
    taxaInscricao: 160,
    coordenador: {
      nome: "Carlos Silva",
      telefone: "219 123 456",
      email: "andebol@gcodivelas.pt"
    },
    equipamentoNecessario: ["Equipamento oficial", "Sapatilhas de andebol", "Caneleiras"],
    ativo: true,
    imagem: "/eventos/campeonato-iniciados.jpg",
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "3º Lugar Iniciados Masculinos 2024",
      "Participação Iniciados Femininos 2024"
    ]
  },
  {
    id: 2,
    nome: "Campeonato Distrital de Juvenis",
    descricao: "Competição oficial para atletas juvenis (15-17 anos), representando o GCO no escalão juvenil da Associação de Andebol de Lisboa.",
    modalidade: "andebol",
    tipo: "Campeonato",
    categoria: "Distrital",
    dataInicio: "2025-09-22",
    dataFim: "2026-06-15",
    horaInicio: "15:00",
    horaFim: "19:00",
    local: "Pavilhões da Grande Lisboa",
    escaloes: ["Juvenis Masculinos", "Juvenis Femininos"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-09-01",
    taxaInscricao: 185,
    coordenador: {
      nome: "Ana Ferreira",
      telefone: "219 123 457",
      email: "juvenis.andebol@gcodivelas.pt"
    },
    equipamentoNecessario: ["Equipamento oficial", "Sapatilhas homologadas", "Proteções"],
    ativo: true,
    imagem: "/eventos/campeonato-juvenis.jpg",
    edicaoAnual: 2025
  },
  {
    id: 3,
    nome: "TAÇA INATEL ANDEBOL LISBOA 2025",
    descricao: "Competição anual organizada pelo INATEL, uma das principais competições de andebol da região de Lisboa. Grande prestígio para o clube.",
    modalidade: "andebol",
    tipo: "Torneio",
    categoria: "Regional",
    dataInicio: "2025-03-15",
    dataFim: "2025-06-30",
    horaInicio: "09:00",
    horaFim: "20:00",
    local: "Complexos Desportivos INATEL",
    endereco: "Vários locais em Lisboa",
    escaloes: ["Seniores Masculinos"],
    inscricoesAbertas: false,
    numeroAtualParticipantes: 24,
    coordenador: {
      nome: "Carlos Silva",
      telefone: "219 123 456",
      email: "andebol@gcodivelas.pt"
    },
    observacoes: "Competição já em curso. Próximo jogo marcado para este fim de semana.",
    ativo: true,
    imagem: "/eventos/taca-inatel.jpg",
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "Vitória contra Liberdade FC (27-18)"
    ]
  },
  {
    id: 4,
    nome: "Festival de Andebol de Formação",
    descricao: "Evento interno de formação destinado aos escalões mais jovens. Jogos amigáveis e atividades lúdicas para promover a modalidade.",
    modalidade: "andebol",
    tipo: "Festival",
    categoria: "Interno",
    dataInicio: "2025-12-15",
    horaInicio: "10:00",
    horaFim: "17:00",
    local: "Pavilhão Municipal de Odivelas",
    endereco: "Rua Dr. Mário Madeira, 2675-372 Odivelas",
    escaloes: ["Infantis", "Iniciados"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-12-01",
    taxaInscricao: 5,
    numeroMaximoParticipantes: 80,
    numeroAtualParticipantes: 35,
    coordenador: {
      nome: "Ana Ferreira",
      telefone: "219 123 457",
      email: "formacao.andebol@gcodivelas.pt"
    },
    equipamentoNecessario: ["Roupa desportiva", "Sapatilhas"],
    observacoes: "Inclui lanche para todos os participantes. Atividade gratuita para atletas do clube.",
    ativo: true,
    imagem: "/eventos/festival-andebol.jpg",
    edicaoAnual: 2025
  },

  {
    id: 5,
    nome: "Torneio Regional de Ginástica",
    descricao: "Competição regional de ginástica artística que reúne os melhores ginastas da região de Lisboa. Evento de grande prestígio na modalidade.",
    modalidade: "ginastica",
    tipo: "Torneio",
    categoria: "Regional",
    dataInicio: "2025-04-26",
    dataFim: "2025-04-27",
    horaInicio: "09:00",
    horaFim: "18:00",
    local: "Pavilhão Multiusos de Odivelas",
    endereco: "Av. Prof. Dr. Augusto de Santa-Rita, 2675-626 Odivelas",
    escaloes: ["Elementares", "Avançados", "Competição"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-04-10",
    taxaInscricao: 30,
    numeroMaximoParticipantes: 150,
    numeroAtualParticipantes: 87,
    coordenador: {
      nome: "Sofia Rodrigues",
      telefone: "219 123 457",
      email: "ginastica@gcodivelas.pt"
    },
    equipamentoNecessario: ["Collant oficial", "Pés descalços", "Cabelo apanhado"],
    ativo: true,
    imagem: "/eventos/torneio-ginastica.jpg",
    documentos: [
      {
        nome: "Regulamento do Torneio",
        link: "/documentos/regulamento-torneio-ginastica.pdf",
        tipo: "Regulamento"
      },
      {
        nome: "Ficha de Inscrição",
        link: "/documentos/ficha-inscricao-ginastica.pdf",
        tipo: "Ficha de Inscrição"
      }
    ],
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "1º Lugar Sofia Martins - Categoria Elementar",
      "3º Lugar Beatriz Ferreira - Categoria Iniciação"
    ]
  },
  {
    id: 6,
    nome: "Festival de Ginástica do GCO",
    descricao: "Evento anual interno que celebra a ginástica no clube. Apresentações de todos os grupos, desde Baby Gym até competição.",
    modalidade: "ginastica",
    tipo: "Festival",
    categoria: "Interno",
    dataInicio: "2025-06-14",
    horaInicio: "15:00",
    horaFim: "19:00",
    local: "Pavilhão Municipal de Odivelas",
    endereco: "Rua Dr. Mário Madeira, 2675-372 Odivelas",
    escaloes: ["Baby Gym", "Iniciação", "Elementar", "Avançado", "Competição"],
    inscricoesAbertas: false,
    numeroAtualParticipantes: 65,
    coordenador: {
      nome: "Sofia Rodrigues",
      telefone: "219 123 457",
      email: "ginastica@gcodivelas.pt"
    },
    observacoes: "Evento gratuito para atletas do clube. Familiares e amigos são bem-vindos. Haverá sessão fotográfica profissional.",
    ativo: true,
    imagem: "/eventos/festival-ginastica-gco.jpg",
    edicaoAnual: 2025
  },
  {
    id: 7,
    nome: "Campeonato Distrital de Ginástica",
    descricao: "Competição oficial distrital de ginástica artística. Qualificação para o Campeonato Nacional.",
    modalidade: "ginastica",
    tipo: "Campeonato",
    categoria: "Distrital",
    dataInicio: "2025-03-22",
    dataFim: "2025-03-23",
    horaInicio: "08:00",
    horaFim: "19:00",
    local: "Complexo Desportivo Nacional",
    endereco: "Jamor, 1495-751 Cruz Quebrada",
    escaloes: ["Elementares", "Avançados"],
    inscricoesAbertas: false,
    taxaInscricao: 35,
    coordenador: {
      nome: "Sofia Rodrigues",
      telefone: "219 123 457",
      email: "ginastica@gcodivelas.pt"
    },
    equipamentoNecessario: ["Collant oficial FGP", "Sapatilhas apropriadas"],
    ativo: true,
    imagem: "/eventos/campeonato-distrital-ginastica.jpg",
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "2º Lugar Sofia Martins - Elementar",
      "Participação Beatriz Ferreira - Iniciação"
    ]
  },

  {
    id: 8,
    nome: "Campeonato Distrital de Patinagem",
    descricao: "Competição oficial da Federação de Patinagem de Portugal para o distrito de Lisboa. Qualificação para o nacional.",
    modalidade: "patinagem-artistica",
    tipo: "Campeonato",
    categoria: "Distrital",
    dataInicio: "2025-02-15",
    dataFim: "2025-02-16",
    horaInicio: "08:30",
    horaFim: "18:00",
    local: "Pista de Patinagem de Cascais",
    endereco: "Rua dos Navegantes, 2750-642 Cascais",
    escaloes: ["Elementares", "Avançados"],
    inscricoesAbertas: false,
    taxaInscricao: 45,
    coordenador: {
      nome: "Carla Mendes",
      telefone: "219 123 458",
      email: "patinagem@gcodivelas.pt"
    },
    equipamentoNecessario: ["Patins artísticos", "Roupa de competição", "Proteções"],
    ativo: true,
    imagem: "/eventos/campeonato-patinagem.jpg",
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "3º Lugar Nacional - Mariana Oliveira",
      "1º Lugar Troféu Regional 2024"
    ]
  },
  {
    id: 9,
    nome: "Festival de Patinagem do GCO",
    descricao: "Espetáculo anual de patinagem artística com coreografias temáticas. Apresentação de todos os grupos do clube.",
    modalidade: "patinagem-artistica",
    tipo: "Festival",
    categoria: "Interno",
    dataInicio: "2025-05-10",
    horaInicio: "20:00",
    horaFim: "22:30",
    local: "Pista Municipal de Patinagem",
    endereco: "Complexo Desportivo Municipal, Odivelas",
    escaloes: ["Iniciação", "Elementares", "Avançados"],
    inscricoesAbertas: false,
    numeroAtualParticipantes: 25,
    coordenador: {
      nome: "Carla Mendes",
      telefone: "219 123 458",
      email: "patinagem@gcodivelas.pt"
    },
    observacoes: "Espetáculo com música ao vivo. Entrada gratuita para familiares e amigos dos atletas.",
    ativo: true,
    imagem: "/eventos/festival-patinagem.jpg",
    edicaoAnual: 2025
  },

  {
    id: 10,
    nome: "Campeonato Escolar de Xadrez",
    descricao: "Competição escolar de xadrez que envolve escolas de toda a região. O GCO participa com os seus jovens enxadristas.",
    modalidade: "xadrez",
    tipo: "Campeonato",
    categoria: "Regional",
    dataInicio: "2025-01-20",
    dataFim: "2025-05-25",
    horaInicio: "09:00",
    horaFim: "17:00",
    local: "Escolas da Região de Lisboa",
    escaloes: ["Sub-12", "Sub-16", "Sub-18"],
    inscricoesAbertas: false,
    taxaInscricao: 10,
    coordenador: {
      nome: "José Martins",
      telefone: "219 123 459",
      email: "xadrez@gcodivelas.pt"
    },
    equipamentoNecessario: ["Material fornecido pela organização"],
    ativo: true,
    imagem: "/eventos/campeonato-escolar-xadrez.jpg",
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "Campeão Escolar de Odivelas 2024 - Diogo Pereira",
      "5º Lugar Nacional Sub-12 - Diogo Pereira"
    ]
  },
  {
    id: 11,
    nome: "Torneio de Jovens do GCO",
    descricao: "Torneio interno de xadrez para jovens atletas do clube. Modalidade de ritmo clássico com tempo de reflexão adequado.",
    modalidade: "xadrez",
    tipo: "Torneio",
    categoria: "Interno",
    dataInicio: "2025-11-16",
    horaInicio: "10:00",
    horaFim: "17:00",
    local: "Sala de Xadrez do GCO",
    endereco: "Instalações do GCO, Odivelas",
    escaloes: ["Sub-12", "Sub-16", "Sub-18"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-11-10",
    taxaInscricao: 5,
    numeroMaximoParticipantes: 32,
    numeroAtualParticipantes: 18,
    coordenador: {
      nome: "José Martins",
      telefone: "219 123 459",
      email: "xadrez@gcodivelas.pt"
    },
    observacoes: "Torneio gratuito para atletas do clube. Haverá prémios para os três primeiros classificados de cada escalão.",
    ativo: true,
    imagem: "/eventos/torneio-jovens-xadrez.jpg",
    edicaoAnual: 2025
  },
  {
    id: 12,
    nome: "Campeonato Distrital da 2ª Divisão de Xadrez",
    descricao: "Competição oficial da Associação de Xadrez de Lisboa. O GCO participa na 2ª divisão de clássicas.",
    modalidade: "xadrez",
    tipo: "Campeonato",
    categoria: "Distrital",
    dataInicio: "2024-10-15",
    dataFim: "2025-05-24",
    horaInicio: "14:00",
    horaFim: "19:00",
    local: "Sedes dos Clubes Participantes",
    escaloes: ["Seniores"],
    inscricoesAbertas: false,
    taxaInscricao: 50,
    coordenador: {
      nome: "José Martins",
      telefone: "219 123 459",
      email: "xadrez@gcodivelas.pt"
    },
    ativo: true,
    imagem: "/eventos/campeonato-distrital-xadrez.jpg",
    edicaoAnual: 2025,
    resultadosAnoAnterior: [
      "Última jornada realizada em 24 de Maio 2025",
      "Prestação honrosa da equipa do GCO"
    ]
  },
  {
    id: 13,
    nome: "Torneios Rápidos Mensais",
    descricao: "Série de torneios mensais de xadrez rápido. Modalidade de ritmo acelerado para desenvolver o jogo intuitivo.",
    modalidade: "xadrez",
    tipo: "Torneio",
    categoria: "Interno",
    dataInicio: "2025-09-01",
    dataFim: "2026-06-30",
    horaInicio: "19:00",
    horaFim: "21:30",
    local: "Sala de Xadrez do GCO",
    endereco: "Instalações do GCO, Odivelas",
    escaloes: ["Todos os escalões"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2026-06-01",
    taxaInscricao: 3,
    coordenador: {
      nome: "José Martins",
      telefone: "219 123 459",
      email: "xadrez@gcodivelas.pt"
    },
    observacoes: "Torneio realizado na primeira sexta-feira de cada mês. Tempo de jogo: 15 minutos + 5 segundos por lance.",
    ativo: true,
    imagem: "/eventos/torneios-rapidos.jpg",
    edicaoAnual: 2025
  },

  {
    id: 14,
    nome: "Assembleia Geral Ordinária",
    descricao: "Assembleia Geral Ordinária anual do Ginásio Clube de Odivelas. Apresentação do relatório de atividades e contas.",
    modalidade: "clube",
    tipo: "Reunião",
    categoria: "Interno",
    dataInicio: "2025-03-29",
    horaInicio: "18:00",
    horaFim: "20:00",
    local: "Auditório Municipal de Odivelas",
    endereco: "Rua Guilherme Gomes Fernandes, 2675-372 Odivelas",
    escaloes: ["Sócios"],
    inscricoesAbertas: false,
    coordenador: {
      nome: "Direção do GCO",
      telefone: "219 123 450",
      email: "direcao@gcodivelas.pt"
    },
    observacoes: "Presença obrigatória para todos os sócios. Será apresentado o relatório de atividades 2024 e o plano para 2025.",
    ativo: true,
    imagem: "/eventos/assembleia-geral.jpg",
    edicaoAnual: 2025
  },
  {
    id: 15,
    nome: "Festa de Natal do GCO",
    descricao: "Celebração natalícia anual do clube com atividades para toda a família. Confraternização entre atletas, treinadores e famílias.",
    modalidade: "clube",
    tipo: "Social",
    categoria: "Interno",
    dataInicio: "2025-12-21",
    horaInicio: "15:00",
    horaFim: "19:00",
    local: "Pavilhão Municipal de Odivelas",
    endereco: "Rua Dr. Mário Madeira, 2675-372 Odivelas",
    escaloes: ["Todas as idades"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-12-15",
    taxaInscricao: 8,
    numeroMaximoParticipantes: 300,
    numeroAtualParticipantes: 125,
    coordenador: {
      nome: "Comissão de Festas",
      telefone: "219 123 450",
      email: "eventos@gcodivelas.pt"
    },
    observacoes: "Inclui almoço de Natal, atividades para crianças e distribuição de prendas. Desconto para famílias numerosas.",
    ativo: true,
    imagem: "/eventos/festa-natal.jpg",
    edicaoAnual: 2025
  },
  {
    id: 16,
    nome: "Dia Aberto do GCO",
    descricao: "Jornada de portas abertas com aulas experimentais gratuitas em todas as modalidades. Oportunidade para conhecer o clube.",
    modalidade: "clube",
    tipo: "Treino Aberto",
    categoria: "Interno",
    dataInicio: "2025-09-07",
    horaInicio: "10:00",
    horaFim: "17:00",
    local: "Instalações do GCO",
    endereco: "Odivelas",
    escaloes: ["Todas as idades"],
    inscricoesAbertas: true,
    dataLimiteInscricao: "2025-09-05",
    numeroMaximoParticipantes: 200,
    numeroAtualParticipantes: 89,
    coordenador: {
      nome: "Departamento de Marketing",
      telefone: "219 123 450",
      email: "marketing@gcodivelas.pt"
    },
    observacoes: "Atividade gratuita. Aulas experimentais de 30 minutos em cada modalidade. Inscrições limitadas por modalidade.",
    ativo: true,
    imagem: "/eventos/dia-aberto.jpg",
    edicaoAnual: 2025
  },

  {
    id: 17,
    nome: "Gala do Desporto GCO 2024",
    descricao: "Cerimónia anual de entrega de prémios e reconhecimento aos melhores atletas, treinadores e dirigentes do clube.",
    modalidade: "clube",
    tipo: "Social",
    categoria: "Interno",
    dataInicio: "2024-12-14",
    horaInicio: "20:00",
    horaFim: "23:30",
    local: "Auditório Municipal de Odivelas",
    endereco: "Rua Guilherme Gomes Fernandes, 2675-372 Odivelas",
    escaloes: ["Comunidade GCO"],
    inscricoesAbertas: false,
    coordenador: {
      nome: "Direção do GCO",
      telefone: "219 123 450",
      email: "direcao@gcodivelas.pt"
    },
    observacoes: "Evento já realizado. Grande sucesso de participação com mais de 200 pessoas presentes.",
    ativo: false,
    imagem: "/eventos/gala-desporto-2024.jpg",
    edicaoAnual: 2024,
    resultadosAnoAnterior: [
      "Atleta do Ano: Inês Rodrigues (Xadrez)",
      "Treinador do Ano: Sofia Rodrigues (Ginástica)",
      "Equipa do Ano: Juvenis Femininos Andebol"
    ]
  }
];

export function getEventosByModalidade(modalidade: string): Evento[] {
  return eventos.filter(evento => evento.modalidade === modalidade && evento.ativo);
}

export function getEventosByTipo(tipo: string): Evento[] {
  return eventos.filter(evento => evento.tipo === tipo && evento.ativo);
}

export function getEventosByCategoria(categoria: string): Evento[] {
  return eventos.filter(evento => evento.categoria === categoria && evento.ativo);
}

export function getEventoById(id: number): Evento | undefined {
  return eventos.find(evento => evento.id === id);
}

export function getEventosAtivos(): Evento[] {
  return eventos.filter(evento => evento.ativo);
}

export function getEventosProximos(diasAFrente: number = 30): Evento[] {
  const hoje = new Date();
  const dataLimite = new Date();
  dataLimite.setDate(hoje.getDate() + diasAFrente);
  
  return eventos.filter(evento => {
    const dataEvento = new Date(evento.dataInicio);
    return dataEvento >= hoje && dataEvento <= dataLimite && evento.ativo;
  }).sort((a, b) => new Date(a.dataInicio).getTime() - new Date(b.dataInicio).getTime());
}

export function getEventosPassados(): Evento[] {
  const hoje = new Date();
  return eventos.filter(evento => {
    const dataEvento = new Date(evento.dataInicio);
    return dataEvento < hoje;
  }).sort((a, b) => new Date(b.dataInicio).getTime() - new Date(a.dataInicio).getTime());
}

export function getEventosComInscricoesAbertas(): Evento[] {
  return eventos.filter(evento => evento.inscricoesAbertas && evento.ativo);
}

export function getEventosPorMes(ano: number, mes: number): Evento[] {
  return eventos.filter(evento => {
    const dataEvento = new Date(evento.dataInicio);
    return dataEvento.getFullYear() === ano && dataEvento.getMonth() === mes - 1 && evento.ativo;
  }).sort((a, b) => new Date(a.dataInicio).getTime() - new Date(b.dataInicio).getTime());
}

export function getModalidadesComEventos(): string[] {
  const modalidades = [...new Set(eventos.filter(e => e.ativo).map(e => e.modalidade))];
  return modalidades;
}

export function getEstatisticasEventos() {
  const eventosAtivos = getEventosAtivos();
  const eventosProximos = getEventosProximos();
  const eventosComInscricoes = getEventosComInscricoesAbertas();
  
  return {
    totalEventos: eventosAtivos.length,
    eventosProximos: eventosProximos.length,
    inscricoesAbertas: eventosComInscricoes.length,
    modalidadesComEventos: getModalidadesComEventos().length,
    eventosPorTipo: {
      competicoes: eventosAtivos.filter(e => e.tipo === 'Competição' || e.tipo === 'Campeonato').length,
      torneios: eventosAtivos.filter(e => e.tipo === 'Torneio').length,
      festivais: eventosAtivos.filter(e => e.tipo === 'Festival').length,
      eventos_sociais: eventosAtivos.filter(e => e.tipo === 'Social').length
    },
    eventosPorCategoria: {
      internos: eventosAtivos.filter(e => e.categoria === 'Interno').length,
      distritais: eventosAtivos.filter(e => e.categoria === 'Distrital').length,
      regionais: eventosAtivos.filter(e => e.categoria === 'Regional').length,
      nacionais: eventosAtivos.filter(e => e.categoria === 'Nacional').length
    }
  };
}

export function getEventosDoMesAtual(): Evento[] {
  const hoje = new Date();
  return getEventosPorMes(hoje.getFullYear(), hoje.getMonth() + 1);
}

export function getProximoEvento(): Evento | undefined {
  const eventosProximos = getEventosProximos();
  return eventosProximos.length > 0 ? eventosProximos[0] : undefined;
}
