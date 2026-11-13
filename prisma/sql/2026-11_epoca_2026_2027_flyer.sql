-- Época 2026/2027: aplica a informação do flyer (Patinagem, Xadrez e Andebol).
-- Ginástica e Hóquei não mudam (já coincidem com o flyer / sem atividade).
--
-- O que faz, tudo numa transação (ou corre tudo, ou nada):
--   1. Guarda cópias de segurança (bkp_20261113_*) do que vai ser substituído.
--   2. Patinagem e Andebol: substitui escalões, preços e horários.
--   3. Xadrez: substitui as 3 formas de pagamento (mensal/semestral/anual) e o horário. Os escalões não são tocados.
--
-- Só corre uma vez (as tabelas de backup têm de não existir). Para reverter, ver o fim do ficheiro.

BEGIN;

CREATE TABLE "bkp_20261113_escalao"       AS SELECT * FROM "escalao"       WHERE "modalidade_id" IN (SELECT "id" FROM "modalidades" WHERE "slug" IN ('patinagem-artistica','andebol'));
CREATE TABLE "bkp_20261113_preco_escalao" AS SELECT * FROM "preco_escalao" WHERE "modalidade_id" IN (SELECT "id" FROM "modalidades" WHERE "slug" IN ('patinagem-artistica','andebol','xadrez'));
CREATE TABLE "bkp_20261113_horario_aulas" AS SELECT * FROM "horario_aulas" WHERE "modalidade_id" IN (SELECT "id" FROM "modalidades" WHERE "slug" IN ('patinagem-artistica','andebol','xadrez'));

-- ===== Escalões e preços: Patinagem Artística =====
DELETE FROM "preco_escalao" WHERE "modalidade_id" = (SELECT "id" FROM "modalidades" WHERE "slug" = 'patinagem-artistica');
DELETE FROM "escalao"       WHERE "modalidade_id" = (SELECT "id" FROM "modalidades" WHERE "slug" = 'patinagem-artistica');
INSERT INTO "escalao" ("modalidade_id", "nome", "idade_minima", "idade_maxima", "descricao", "mensalidade")
SELECT m."id", v."nome", v."imin"::int, v."imax"::int, v."descricao", v."mensalidade"::numeric
FROM (VALUES
    ('Minis', 4, 6, NULL, NULL),
    ('Iniciação', NULL, NULL, 'Mais de 6 anos', NULL),
    ('Pré-Competição', NULL, NULL, NULL, NULL),
    ('Competição', NULL, NULL, NULL, NULL)
) AS v("nome", "imin", "imax", "descricao", "mensalidade")
CROSS JOIN (SELECT "id" FROM "modalidades" WHERE "slug" = 'patinagem-artistica') m;

INSERT INTO "preco_escalao" ("modalidade_id", "escalao", "tipo", "valor", "observacoes")
SELECT m."id", v."escalao", v."tipo", v."valor", v."obs"
FROM (VALUES
    ('Todos', 'inscrição', 50, NULL),
    ('Todos', 'seguro', 30, 'Anual'),
    ('Minis', 'mensalidade', 37.5, '3x por semana'),
    ('Iniciação', 'mensalidade', 37.5, '3x por semana'),
    ('Pré-Competição', 'mensalidade', 42.5, '4x por semana'),
    ('Pré-Competição', 'mensalidade', 45, '5x por semana'),
    ('Pré-Competição', 'mensalidade', 47.5, '6x por semana'),
    ('Competição', 'mensalidade', 45, '5x por semana'),
    ('Competição', 'mensalidade', 47.5, '6x por semana')
) AS v("escalao", "tipo", "valor", "obs")
CROSS JOIN (SELECT "id" FROM "modalidades" WHERE "slug" = 'patinagem-artistica') m;

-- ===== Escalões e preços: Andebol =====
DELETE FROM "preco_escalao" WHERE "modalidade_id" = (SELECT "id" FROM "modalidades" WHERE "slug" = 'andebol');
DELETE FROM "escalao"       WHERE "modalidade_id" = (SELECT "id" FROM "modalidades" WHERE "slug" = 'andebol');
INSERT INTO "escalao" ("modalidade_id", "nome", "idade_minima", "idade_maxima", "descricao", "mensalidade")
SELECT m."id", v."nome", v."imin"::int, v."imax"::int, v."descricao", v."mensalidade"::numeric
FROM (VALUES
    ('Sub-8/Babys', NULL, NULL, 'Nascidos em 2019 ou depois', 20.0),
    ('Sub-10/Sub-12', NULL, NULL, 'Nascidos em 2015-2018', 25.0),
    ('Sub-14 Misto', NULL, NULL, 'Nascidos em 2013-2014 · Misto', 30.0),
    ('Sub-16', NULL, NULL, 'Nascidos em 2011-2012 · Masculino', 30.0),
    ('Sub-18', NULL, NULL, 'Nascidos em 2009-2010 · Masculino', 30.0),
    ('Sub-20', NULL, NULL, 'Nascidos em 2007-2008 · Masculino', 30.0),
    ('Seniores', NULL, NULL, 'Nascidos em 2006 ou antes', NULL),
    ('Veteranos', NULL, NULL, NULL, NULL)
) AS v("nome", "imin", "imax", "descricao", "mensalidade")
CROSS JOIN (SELECT "id" FROM "modalidades" WHERE "slug" = 'andebol') m;

INSERT INTO "preco_escalao" ("modalidade_id", "escalao", "tipo", "valor", "observacoes")
SELECT m."id", v."escalao", v."tipo", v."valor", v."obs"
FROM (VALUES
    ('Todos', 'inscrição', 65, 'Inscrição + seguro desportivo'),
    ('Sub-8/Babys', 'mensalidade', 20, NULL),
    ('Sub-10/Sub-12', 'mensalidade', 25, NULL),
    ('Sub-14 Misto', 'mensalidade', 30, NULL),
    ('Sub-16', 'mensalidade', 30, 'Masculino'),
    ('Sub-18', 'mensalidade', 30, 'Masculino'),
    ('Sub-20', 'mensalidade', 30, 'Masculino'),
    ('Seniores', 'mensalidade', 206, 'Inscrição + seguro desportivo (anual): setembro 103 € + outubro 103 €'),
    ('Veteranos', 'mensalidade', 45, 'Anual')
) AS v("escalao", "tipo", "valor", "obs")
CROSS JOIN (SELECT "id" FROM "modalidades" WHERE "slug" = 'andebol') m;

-- ===== Preços: Xadrez (só as formas de pagamento do escalão "Todos") =====
DELETE FROM "preco_escalao"
WHERE "modalidade_id" = (SELECT "id" FROM "modalidades" WHERE "slug" = 'xadrez')
  AND lower(btrim("escalao")) = 'todos'
  AND lower("tipo") IN ('mensalidade', 'semestral', 'anual');
INSERT INTO "preco_escalao" ("modalidade_id", "escalao", "tipo", "valor", "observacoes")
SELECT m."id", v."escalao", v."tipo", v."valor", v."obs"
FROM (VALUES
    ('Todos', 'mensalidade', 10, '11 mensalidades (110 € no total)'),
    ('Todos', 'semestral', 60, '2 prestações de 30 €'),
    ('Todos', 'anual', 50, NULL)
) AS v("escalao", "tipo", "valor", "obs")
CROSS JOIN (SELECT "id" FROM "modalidades" WHERE "slug" = 'xadrez') m;

-- ===== Horários (Patinagem, Andebol, Xadrez) =====
DELETE FROM "horario_aulas"
WHERE "modalidade_id" IN (SELECT "id" FROM "modalidades" WHERE "slug" IN ('patinagem-artistica','andebol','xadrez'));

INSERT INTO "horario_aulas" ("modalidade_id", "dia_semana", "inicio", "fim", "titulo", "sala", "cor")
SELECT m."id", v."dia", v."inicio", v."fim", v."titulo", v."sala", v."cor"
FROM (VALUES
    ('patinagem-artistica', 0, '17:00', '19:00', 'Iniciação | Pré-Competição | Competição', 'Casal do Rato', 'var(--blue-400)'),
    ('patinagem-artistica', 1, '17:00', '18:00', 'Iniciação | Pré-C. | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 1, '18:00', '19:00', 'Minis', 'GCO', 'var(--blue-900)'),
    ('patinagem-artistica', 1, '18:00', '19:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('patinagem-artistica', 1, '19:00', '20:30', 'Competição', 'GCO', 'var(--blue-500)'),
    ('patinagem-artistica', 2, '17:00', '19:00', 'Iniciação | Pré-Competição | Competição', 'Casal do Rato', 'var(--blue-400)'),
    ('patinagem-artistica', 3, '18:00', '19:00', 'Minis', 'GCO', 'var(--blue-900)'),
    ('patinagem-artistica', 3, '18:00', '19:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('patinagem-artistica', 3, '19:00', '20:30', 'Competição', 'GCO', 'var(--blue-500)'),
    ('patinagem-artistica', 4, '17:00', '19:00', 'Iniciação | Pré-C. | Competição', 'Casal do Rato', 'var(--blue-400)'),
    ('patinagem-artistica', 5, '12:00', '13:00', 'Minis', 'GCO', 'var(--blue-900)'),
    ('patinagem-artistica', 5, '13:00', '14:00', 'Pré-Competição | Competição', 'GCO', 'var(--blue-400)'),
    ('patinagem-artistica', 5, '14:00', '15:00', 'Competição', 'GCO', 'var(--blue-500)'),
    ('patinagem-artistica', 6, '10:30', '13:00', 'Solo Dance', 'GCO', 'green'),
    ('andebol', 0, '20:00', '21:00', 'Sub-10/Sub-12', 'GCO', 'var(--blue-400)'),
    ('andebol', 0, '20:00', '21:45', 'Sub-16', 'GCO', 'var(--blue-600)'),
    ('andebol', 0, '21:15', '21:45', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 0, '21:45', '23:00', 'Seniores', 'GCO', 'var(--blue-900)'),
    ('andebol', 1, '20:00', '20:30', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 1, '20:30', '21:45', 'Sub-18', 'GCO', 'var(--blue-700)'),
    ('andebol', 1, '20:00', '21:30', 'Sub-14', 'Multiusos', 'var(--blue-500)'),
    ('andebol', 1, '21:45', '23:30', 'Veteranos', 'GCO', 'green'),
    ('andebol', 2, '20:30', '21:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 2, '21:00', '22:00', 'Sub-16', 'GCO', 'var(--blue-600)'),
    ('andebol', 2, '22:00', '23:15', 'Seniores', 'GCO', 'var(--blue-900)'),
    ('andebol', 3, '20:00', '20:30', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 3, '20:30', '21:30', 'Sub-14', 'GCO', 'var(--blue-500)'),
    ('andebol', 3, '20:30', '21:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 3, '21:00', '22:00', 'Sub-18', 'GCO', 'var(--blue-700)'),
    ('andebol', 3, '21:30', '22:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 3, '22:00', '23:15', 'Seniores', 'GCO', 'var(--blue-900)'),
    ('andebol', 4, '19:30', '20:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 4, '20:00', '21:00', 'Sub-14', 'GCO', 'var(--blue-500)'),
    ('andebol', 4, '20:00', '21:00', 'Sub-10/Sub-12', 'GCO', 'var(--blue-400)'),
    ('andebol', 4, '20:30', '21:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 4, '21:00', '22:00', 'Sub-16', 'GCO', 'var(--blue-600)'),
    ('andebol', 4, '21:30', '22:00', 'Ginásio', 'GCO', 'var(--yellow-500)'),
    ('andebol', 4, '22:00', '23:15', 'Sub-18', 'GCO', 'var(--blue-700)'),
    ('andebol', 6, '09:00', '09:30', 'Escolas', 'GCO', 'var(--blue-400)'),
    ('andebol', 6, '09:30', '10:30', 'Sub-10/Sub-12', 'GCO', 'var(--blue-400)'),
    ('xadrez', 5, '10:00', '12:00', 'Xadrez', NULL, 'var(--blue-400)')
) AS v("slug", "dia", "inicio", "fim", "titulo", "sala", "cor")
JOIN "modalidades" m ON m."slug" = v."slug";

COMMIT;

-- Verificação (devem dar: patinagem 14 / andebol 26 / xadrez 1 aulas):
--   SELECT m.slug, count(*) FROM horario_aulas h JOIN modalidades m ON m.id = h.modalidade_id GROUP BY 1 ORDER BY 1;
-- Reverter (repõe o estado anterior; corre dentro de BEGIN/COMMIT):
--   DELETE FROM horario_aulas WHERE modalidade_id IN (SELECT DISTINCT modalidade_id FROM bkp_20261113_horario_aulas);
--   INSERT INTO horario_aulas SELECT * FROM bkp_20261113_horario_aulas;
--   (idem para escalao e preco_escalao com os respetivos bkp_20261113_*)
