/**
 * Insere a notícia do "Desafio VOLTA!" da secção de Ginástica de Trampolins.
 *
 * Segue o template das restantes notícias em base de dados:
 *   - `imagem` guardada sem barra inicial ("noticias/...") — o prefixo "/" é
 *     acrescentado em fetchNoticias()/fetchNoticiaById()
 *   - `conteudo` com parágrafos separados por linha em branco (\n\n), que é
 *     como a página de detalhe os divide
 *   - `categoria` = "Ginástica", para a notícia aparecer no filtro de /noticias
 *     e também na página da modalidade
 *   - `autor` a null, como na maioria das notícias existentes
 *
 * Idempotente: não duplica se já existir uma notícia com o mesmo título.
 * Correr com:  node scripts/insert-noticia-volta.cjs
 */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const TITULO =
  'Desafio VOLTA!: Ginástica do GCO quer angariar 10.000 embalagens esta época';

const RESUMO =
  'A secção de Ginástica de Trampolins do Ginásio Clube de Odivelas lançou o Desafio VOLTA!, uma campanha de recolha de garrafas e latas com depósito que tem como meta as 10.000 embalagens até ao final da época 2026/2027. Todo o valor angariado reverte para a compra de material de ginástica.';

const CONTEUDO = [
  'A secção de Ginástica de Trampolins do Ginásio Clube de Odivelas (GCO) deu início ao Desafio VOLTA!, uma iniciativa que junta a sustentabilidade ambiental à angariação de fundos para a modalidade. O objetivo definido para a época 2026/2027 é ambicioso: angariar 10.000 garrafas e latas com depósito.',

  'A campanha assenta no sistema de depósito VOLTA!, que atribui um valor a cada embalagem de bebida devolvida. Em vez de serem descartadas, as embalagens passam a ter um destino útil — e, no caso do GCO, revertem diretamente a favor dos atletas do clube.',

  'O processo é simples e está ao alcance de todos. Os atletas, familiares e amigos trazem as suas garrafas e latas para o clube, e a secção de ginástica encarrega-se de as depositar nos pontos de recolha VOLTA!. Não é preciso mais nada: basta não deitar fora as embalagens e fazê-las chegar ao clube.',

  'Todo o valor angariado será utilizado na compra de material de ginástica, um investimento que se reflete diretamente na qualidade dos treinos e nas condições de trabalho das classes de formação e de competição.',

  'Ao longo da época, o clube irá divulgando regularmente o número de embalagens já depositadas, para que todos possam acompanhar a evolução do desafio e perceber o quanto falta para chegar à meta das 10.000.',

  'A secção de ginástica deixa ainda um apelo à partilha da iniciativa: quantas mais pessoas souberem do desafio, mais depressa se chega ao objetivo. Junta-te ao Desafio VOLTA! e ajuda a equipar a ginástica do GCO.',
].join('\n\n');

async function main() {
  const existente = await prisma.noticias.findFirst({ where: { titulo: TITULO } });

  if (existente) {
    console.log(`Notícia já existe (id=${existente.id}). Nada a fazer.`);
    return;
  }

  const criada = await prisma.noticias.create({
    data: {
      titulo: TITULO,
      resumo: RESUMO,
      conteudo: CONTEUDO,
      imagem: 'noticias/noticia_volta.png',
      imagem_extra: null,
      data_publicacao: new Date(Date.UTC(2026, 8, 22)), // 2026-09-22
      categoria: 'Ginástica',
      autor: null,
    },
  });

  console.log(`Notícia criada com id=${criada.id}`);
  console.log(`  titulo:    ${criada.titulo}`);
  console.log(`  categoria: ${criada.categoria}`);
  console.log(`  imagem:    ${criada.imagem}`);
  console.log(`  data:      ${criada.data_publicacao.toISOString().split('T')[0]}`);
}

main()
  .catch((e) => {
    console.error('FALHOU:', e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
