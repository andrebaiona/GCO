-- Horários de treino editáveis a partir do admin (substitui os horários fixos no código da página pública).
-- Additive only: cria uma tabela nova e NÃO toca na tabela legada "horarios".
-- dia_semana: 0 = 2.ª feira ... 4 = 6.ª feira, 5 = Sábado, 6 = Domingo.
-- Aplicar ANTES de fazer deploy do código que lê esta tabela:
--   npx prisma db execute --file prisma/sql/2026-11_horario_aulas.sql --schema prisma/schema.prisma
-- NOTE: do NOT use `prisma db push` on this project (see 2026-10_admin_auth.sql).

CREATE TABLE IF NOT EXISTS "horario_aulas" (
    "id"            SERIAL PRIMARY KEY,
    "modalidade_id" INTEGER      NOT NULL REFERENCES "modalidades"("id") ON DELETE CASCADE,
    "dia_semana"    SMALLINT     NOT NULL CHECK ("dia_semana" BETWEEN 0 AND 6),
    "inicio"        VARCHAR(5)   NOT NULL,
    "fim"           VARCHAR(5)   NOT NULL,
    "titulo"        VARCHAR(150) NOT NULL,
    "sala"          VARCHAR(100),
    "cor"           VARCHAR(30)  NOT NULL DEFAULT 'var(--blue-400)'
);

CREATE INDEX IF NOT EXISTS "horario_aulas_modalidade_id_idx" ON "horario_aulas"("modalidade_id");

-- Seed com os horários que estavam no código (idempotente: só preenche modalidades que ainda não têm aulas).
INSERT INTO "horario_aulas" ("modalidade_id", "dia_semana", "inicio", "fim", "titulo", "sala", "cor")
SELECT m."id", v."dia", v."inicio", v."fim", v."titulo", v."sala", v."cor"
FROM (VALUES
    ('patinagem-artistica', 0, '17:00', '19:00', 'Iniciação | Pré-Competição | Competição', 'Casal do Rato', 'var(--blue-400)'),
    ('patinagem-artistica', 1, '17:00', '18:00', 'Iniciação | Pré-C. | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 1, '18:00', '19:00', 'Preparação Física', 'GCO', 'var(--yellow-500)'),
    ('patinagem-artistica', 1, '18:00', '19:00', 'Minis', 'GCO', 'var(--blue-900)'),
    ('patinagem-artistica', 1, '19:00', '20:00', 'Iniciação | Pré-C. | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 1, '20:00', '20:30', 'Competição', NULL, 'var(--blue-500)'),
    ('patinagem-artistica', 2, '17:00', '19:00', 'Iniciação | Pré-Competição | Competição', 'Casal do Rato', 'var(--blue-400)'),
    ('patinagem-artistica', 3, '17:00', '18:00', 'Iniciação | Pré-C. | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 3, '18:00', '19:00', 'Preparação Física', 'GCO', 'var(--yellow-500)'),
    ('patinagem-artistica', 3, '18:00', '19:00', 'Minis', 'GCO', 'var(--blue-900)'),
    ('patinagem-artistica', 3, '19:00', '20:00', 'Iniciação | Pré-C. | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 3, '20:00', '20:30', 'Competição', NULL, 'var(--blue-500)'),
    ('patinagem-artistica', 4, '17:00', '19:00', 'Iniciação | Pré-C. | Competição', 'Casal do Rato', 'var(--blue-400)'),
    ('patinagem-artistica', 5, '12:00', '13:00', 'Minis', 'GCO', 'var(--blue-900)'),
    ('patinagem-artistica', 5, '13:00', '14:00', 'Pré-Competição | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 5, '14:00', '15:00', 'Iniciação', 'GCO', 'var(--blue-500)'),
    ('patinagem-artistica', 6, '10:30', '11:30', 'Solo Dance', 'GCO', 'green'),
    ('patinagem-artistica', 6, '11:30', '12:30', 'Solo Dance', 'GCO', 'green'),
    ('patinagem-artistica', 6, '12:30', '13:30', 'Solo Dance', 'GCO', 'green'),
    ('ginastica', 0, '17:00', '20:00', 'Competição', NULL, 'var(--blue-900)'),
    ('ginastica', 0, '17:30', '18:15', 'Infantil', NULL, 'var(--blue-400)'),
    ('ginastica', 0, '18:15', '19:00', 'Formativa Base I', NULL, 'var(--blue-500)'),
    ('ginastica', 0, '19:00', '20:00', 'Formativa Avançada', NULL, 'var(--blue-700)'),
    ('ginastica', 2, '17:00', '21:00', 'Competição', NULL, 'var(--blue-900)'),
    ('ginastica', 2, '18:00', '18:45', 'Formativa Base I', NULL, 'var(--blue-500)'),
    ('ginastica', 2, '18:45', '19:30', 'Formativa Base II', NULL, 'var(--blue-600)'),
    ('ginastica', 2, '19:30', '20:30', 'Formativa Avançada', NULL, 'var(--blue-700)'),
    ('ginastica', 4, '17:00', '20:00', 'Competição', NULL, 'var(--blue-900)'),
    ('ginastica', 4, '17:30', '18:15', 'Infantil', NULL, 'var(--blue-400)'),
    ('ginastica', 4, '18:15', '19:00', 'Formativa Base II', NULL, 'var(--blue-600)'),
    ('ginastica', 4, '19:00', '20:00', 'Formativa Avançada', NULL, 'var(--blue-700)'),
    ('ginastica', 5, '09:00', '12:00', 'Competição', NULL, 'var(--blue-900)'),
    ('ginastica', 5, '09:00', '11:00', 'Formativa Avançada', NULL, 'var(--blue-700)')
) AS v("slug", "dia", "inicio", "fim", "titulo", "sala", "cor")
JOIN "modalidades" m ON m."slug" = v."slug"
WHERE NOT EXISTS (SELECT 1 FROM "horario_aulas" h WHERE h."modalidade_id" = m."id");
