// Create the first admin user (or reset a password) for the hidden admin panel.
//
//   node scripts/create-admin.cjs <username>           # create
//   node scripts/create-admin.cjs <username> --reset   # reset password + unlock
//
// The password is read from the terminal without echo and stored as an Argon2id hash.
// Requires DATABASE_URL_2 (Prisma loads it from .env automatically).

const readline = require('readline');
const { hash } = require('@node-rs/argon2');
const { PrismaClient } = require('@prisma/client');

// Keep in sync with src/lib/admin/password.ts (2 = Argon2id).
const ARGON2_OPTIONS = { algorithm: 2, memoryCost: 19456, timeCost: 2, parallelism: 1 };
const MIN_PASSWORD_LENGTH = 12;

// One readline interface for all prompts (so piped input isn't lost between questions);
// echo is muted while the password is typed.
function createPrompter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: Boolean(process.stdin.isTTY),
  });
  let muted = false;
  rl._writeToOutput = (s) => {
    if (!muted) rl.output.write(s);
  };
  const lines = rl[Symbol.asyncIterator]();
  return {
    async askHidden(question) {
      process.stdout.write(question);
      muted = true;
      const { value } = await lines.next();
      muted = false;
      process.stdout.write('\n');
      return value ?? '';
    },
    close: () => rl.close(),
  };
}

async function main() {
  const args = process.argv.slice(2);
  const reset = args.includes('--reset');
  const username = (args.find((a) => !a.startsWith('--')) || '').trim().toLowerCase();

  if (!/^[a-z0-9._-]{3,50}$/.test(username)) {
    console.error('Uso: node scripts/create-admin.cjs <utilizador> [--reset]');
    console.error("O utilizador deve ter 3–50 caracteres: a-z, 0-9, '.', '_' ou '-'.");
    process.exit(1);
  }

  const prisma = new PrismaClient();
  try {
    const existing = await prisma.admin_users.findUnique({ where: { username } });
    if (existing && !reset) {
      console.error(`O utilizador "${username}" já existe. Use --reset para redefinir a palavra-passe.`);
      process.exit(1);
    }
    if (!existing && reset) {
      console.error(`O utilizador "${username}" não existe.`);
      process.exit(1);
    }

    const prompter = createPrompter();
    const password = await prompter.askHidden('Palavra-passe: ');
    const confirm = await prompter.askHidden('Confirmar palavra-passe: ');
    prompter.close();

    if (password.length < MIN_PASSWORD_LENGTH) {
      console.error(`A palavra-passe deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`);
      process.exit(1);
    }
    if (confirm !== password) {
      console.error('As palavras-passe não coincidem.');
      process.exit(1);
    }

    const password_hash = await hash(password, ARGON2_OPTIONS);

    if (existing) {
      await prisma.$transaction([
        prisma.admin_users.update({
          where: { id: existing.id },
          data: { password_hash, failed_attempts: 0, locked_until: null },
        }),
        prisma.admin_sessions.deleteMany({ where: { user_id: existing.id } }),
      ]);
      console.log(`Palavra-passe de "${username}" redefinida (sessões ativas terminadas).`);
    } else {
      await prisma.admin_users.create({ data: { username, password_hash } });
      console.log(`Utilizador "${username}" criado.`);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
