import { PrismaClient } from '@prisma/client';

// Reuse a single client across dev hot-reloads so we don't exhaust Neon connections.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
