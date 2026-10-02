import "server-only";
import { hash, verify, type Algorithm } from "@node-rs/argon2";

// `Algorithm` is a TS const enum (empty at runtime under isolatedModules),
// so the numeric value is pinned explicitly: 2 = Argon2id.
const ARGON2ID = 2 as Algorithm;

// OWASP baseline for Argon2id. The parameters are stored inside each PHC hash
// string, so they can be raised later without invalidating existing hashes.
// Keep in sync with scripts/create-admin.cjs.
const ARGON2_OPTIONS = {
  algorithm: ARGON2ID,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
};

export function hashPassword(password: string): Promise<string> {
  return hash(password, ARGON2_OPTIONS);
}

export async function verifyPassword(passwordHash: string, password: string): Promise<boolean> {
  // Only Argon2id hashes are accepted.
  if (!passwordHash.startsWith("$argon2id$")) return false;
  try {
    return await verify(passwordHash, password);
  } catch {
    return false;
  }
}

// Used for unknown usernames so login timing doesn't reveal which accounts exist.
let dummyHash: Promise<string> | undefined;
export async function verifyAgainstDummy(password: string): Promise<void> {
  dummyHash ??= hashPassword("gco-dummy-password-for-timing");
  await verifyPassword(await dummyHash, password);
}
