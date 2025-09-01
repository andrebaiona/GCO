import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkEscalaoPrecos() {
  const modalidades = await prisma.modalidades.findMany({
    include: {
      escalao: true,
      preco_escalao: true,
    },
  });

  modalidades.forEach(modalidade => {
    console.log(`Modalidade: ${modalidade.nome}`);
    modalidade.escalao.forEach(esc => {
      const precos = modalidade.preco_escalao.filter(
        preco => preco.escalao.trim().toLowerCase() === esc.nome.trim().toLowerCase()
      );
      if (precos.length === 0) {
        console.log(`  Escalão: ${esc.nome} -> SEM PREÇOS`);
      } else {
        console.log(`  Escalão: ${esc.nome}`);
        precos.forEach(preco => {
          console.log(`    Tipo: ${preco.tipo} | Valor: ${preco.valor} | Observações: ${preco.observacoes}`);
        });
      }
    });
  });
}

checkEscalaoPrecos()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
