export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  emoji: string;
}

export const timelineItems: TimelineItem[] = [
  {
    year: '1978',
    title: 'Fundação e Primeiros Passos',
    subtitle: 'O nascimento de um sonho',
    content: `Tendo em vista o engrandecimento do desporto nacional e a promoção da acção cultural, nasceu em 5 de maio de 1978 o Ginásio Clube de Odivelas (G.C.O), então denominado Ginásio Clube Recreativo Estrelas do Bairro Olaio (E.B.O).

A fundação foi fruto da iniciativa de um grupo de homens, mulheres e jovens determinados a transformar o panorama desportivo e cultural de uma localidade tão densa e populosa como Odivelas.`,
    image: '/2000_5f6603a8de4ce.jpg', 
    emoji: '📆'
  },
  {
    year: '1978 - 1988',
    title: 'A Primeira Década',
    subtitle: 'Crescimento explosivo e superação',
    content: `Nos primeiros dez anos de existência, o clube deparou-se com uma adesão massiva da população, motivada pela grande carência de actividades desportivas na zona. A resposta a essa procura foi feita com muito esforço, dedicação e resistência.

O crescimento foi impressionante:
• De 75 para 1200 atletas inscritos
• De 200 para 4500 associados
• De 9.500$00 para 8.000.000$00 em despesas anuais
• De 2 para 7 modalidades: atletismo, futebol de cinco, andebol, ginástica, patinagem artística, hóquei em patins e ténis de mesa

Apesar das dificuldades constantes, foi uma década de ouro para o clube.`,
    image: '/2000_5f6603c1a38cf.jpg', 
    emoji: '📆'
  },
  {
    year: '1988 - 1992',
    title: 'Um Clube em Transição',
    subtitle: 'Dificuldades, conquistas e uma nova identidade',
    content: `Com o aumento das despesas anuais para valores na ordem das dezenas de milhares de contos, o clube passou a enfrentar desafios mais exigentes. Algumas modalidades tiveram de ser suspensas, como o ténis de mesa, o atletismo e o futebol de cinco, por falta de recursos e espaços de treino adequados.

Ainda assim, houve conquistas relevantes:
• Títulos nacionais individuais e colectivos na patinagem artística
• Destaques no andebol, ginástica e xadrez

Perante a nova dimensão e prestígio alcançado, o nome original deixou de reflectir a realidade do clube. Assim, no dia 22 de maio de 1992, por escritura pública no 23º Cartório Notarial de Lisboa, passou a designar-se oficialmente Ginásio Clube de Odivelas.`,
    image: '/2000_5f6603c1a6eae.jpg',
    emoji: '📆'
  },
  {
    year: '1992 - Presente',
    title: 'Consolidação, lutas e ambição',
    subtitle: 'O futuro em construção',
    content: `Desde a mudança de nome, o G.C.O. tem enfrentado batalhas constantes em busca de melhores condições e sustentabilidade. Entre os grandes objectivos e desafios destacam-se:

• A candidatura ao Bingo (atribuído ao O.F.C.)
• A construção do ginásio sede
• A melhoria das condições de treino, da assistência e da higiene
• A procura contínua de apoios financeiros e logísticos
• A preocupação permanente com o atendimento aos associados e à população

A motivação mantém-se inabalável: fazer do G.C.O. o maior e melhor clube do concelho de Odivelas.`,
    image: '/noticias/2000_5f6603c1a8aad.jpg', 
    emoji: '📆'
  }
];

export const apoios: string[] = [
  'Comissão Instaladora do Município de Odivelas',
  'Câmara Municipal de Odivelas',
  'Junta de Freguesia de Odivelas',
  'Instituto Nacional de Desporto',
  'Todas as entidades privadas que têm contribuído para a nossa missão'
];

