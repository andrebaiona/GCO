/**
 * Atualiza o preçário da modalidade Xadrez (modalidade_id = 4) para a época
 * 2026/2027.
 *
 * Hipóteses de pagamento (escalão "Todos"):
 *   Hipótese 1 -> mensalidade: 10 €/mês
 *   Hipótese 2 -> semestral:   30 €/semestre
 *   Hipótese 3 -> anual:       50 €/ano
 *
 * Idempotente: para cada tipo, atualiza a linha existente ou cria-a se faltar.
 * Pode ser corrido mais do que uma vez sem duplicar linhas.
 * Correr com:  node scripts/update-xadrez-2026-2027.cjs
 */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const MODALIDADE_ID = 4; // Xadrez
const ESCALAO = 'Todos';

// tipo -> valor (a ordem é também a ordem de apresentação na página)
const PRECOS = [
  { tipo: 'mensalidade', valor: 10.0 },
  { tipo: 'semestral', valor: 30.0 },
  { tipo: 'anual', valor: 50.0 },
];

async function main() {
  await prisma.$transaction(async (tx) => {
    for (const { tipo, valor } of PRECOS) {
      const existente = await tx.preco_escalao.findFirst({
        where: { modalidade_id: MODALIDADE_ID, escalao: ESCALAO, tipo },
      });

      if (existente) {
        await tx.preco_escalao.update({ where: { id: existente.id }, data: { valor } });
        console.log(`preco_escalao #${existente.id} -> ${tipo} ${valor} € (atualizado)`);
      } else {
        const criado = await tx.preco_escalao.create({
          data: { modalidade_id: MODALIDADE_ID, escalao: ESCALAO, tipo, valor },
        });
        console.log(`preco_escalao #${criado.id} -> ${tipo} ${valor} € (criado)`);
      }
    }
  });

  console.log('\nTransação concluída com sucesso.');
}

main()
  .catch((e) => {
    console.error('FALHOU (transação revertida):', e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
