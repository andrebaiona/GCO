-- Noticias: up to 4 extra images per post (plus the main "imagem" = 5 total).
-- Additive only. The legacy "imagem_extra" column is kept (no longer written by the app)
-- so the change can be rolled back.
-- Applied with: npx prisma db execute --file prisma/sql/2026-10_noticias_imagens_extra.sql --schema prisma/schema.prisma
-- NOTE: do NOT use `prisma db push` on this project (see 2026-10_admin_auth.sql).

ALTER TABLE "noticias"
    ADD COLUMN IF NOT EXISTS "imagens_extra" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

-- Backfill: carry the existing single extra image over (idempotent).
UPDATE "noticias"
SET "imagens_extra" = ARRAY["imagem_extra"]
WHERE "imagem_extra" IS NOT NULL
  AND "imagem_extra" <> ''
  AND cardinality("imagens_extra") = 0;
