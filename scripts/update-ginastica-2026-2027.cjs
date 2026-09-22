/**
 * Atualiza a secção de Ginástica (modalidade_id = 2) para a época 2026/2027,
 * de acordo com o PDF "Informações Adicionais · Época 2026/2027".
 *
 * Alterações:
 *   1. Renomeia os escalões (tabela `escalao`).
 *   2. Renomeia os mesmos escalões na tabela `preco_escalao` -- OBRIGATÓRIO, porque
 *      as duas tabelas são ligadas por comparação de strings, não por chave estrangeira.
 *   3. Atualiza as observações (3 prestações Set/Jan/Abr + anuidade).
 *   4. Acrescenta o valor global de Renovação (25 €).
 *
 * Mensalidades (30/30/30/45/55), Inscrição (35 €) e Seguro (30 €) mantêm-se.
 *
 * Idempotente: pode ser corrido mais do que uma vez sem duplicar linhas.
 * Correr com:  node scripts/update-ginastica-2026-2027.cjs
 */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const OBS_30 = '3 prestações de 104 € (Set/Jan/Abr) ou anuidade de 300 €';
const OBS_45 = '3 prestações de 155 € (Set/Jan/Abr) ou anuidade de 435 €';
const OBS_55 = '3 prestações de 185 € (Set/Jan/Abr) ou anuidade de 525 €';

// id do escalão -> novo nome
const ESCALOES = {
  33: 'Infantil',           // era "Infantil I"
  34: 'Formativa Base I',   // era "Formativa I"
  35: 'Formativa Base II',  // era "Formativa II"
  36: 'Formativa Avançada', // era "Pré-Competição"
  37: 'Competição',         // inalterado
};

// id do preço -> novo nome de escalão + novas observações
const PRECOS = {
  24: { escalao: 'Infantil', observacoes: OBS_30 },
  25: { escalao: 'Formativa Base I', observacoes: OBS_30 },
  26: { escalao: 'Formativa Base II', observacoes: OBS_30 },
  27: { escalao: 'Formativa Avançada', observacoes: OBS_45 },
  28: { escalao: 'Competição', observacoes: OBS_55 },
};

async function main() {
  await prisma.$transaction(async (tx) => {
    for (const [id, nome] of Object.entries(ESCALOES)) {
      await tx.escalao.update({ where: { id: Number(id) }, data: { nome } });
      console.log(`escalao       #${id} -> "${nome}"`);
    }

    for (const [id, data] of Object.entries(PRECOS)) {
      await tx.preco_escalao.update({ where: { id: Number(id) }, data });
      console.log(`preco_escalao #${id} -> "${data.escalao}"`);
    }

    const renovacao = await tx.preco_escalao.findFirst({
      where: { modalidade_id: 2, escalao: 'Todos', tipo: 'renovacao' },
    });

    if (renovacao) {
      await tx.preco_escalao.update({ where: { id: renovacao.id }, data: { valor: 25.0 } });
      console.log(`preco_escalao #${renovacao.id} -> Renovação 25 € (atualizado)`);
    } else {
      const criado = await tx.preco_escalao.create({
        data: { modalidade_id: 2, escalao: 'Todos', tipo: 'renovacao', valor: 25.0 },
      });
      console.log(`preco_escalao #${criado.id} -> Renovação 25 € (criado)`);
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
