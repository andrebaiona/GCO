const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.noticias.findMany().then(noticias => {
  console.log(noticias);
}).finally(() => prisma.$disconnect());
