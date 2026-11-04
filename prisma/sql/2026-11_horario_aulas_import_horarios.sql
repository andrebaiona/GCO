-- Importa para "horario_aulas" os horários da tabela legada "horarios" de Andebol (id 1) e Xadrez (id 4),
-- que ainda não tinham calendário no site. Patinagem e Ginástica já foram carregadas pelo seed anterior.
-- Idempotente: só preenche modalidades que ainda não têm aulas. Não altera nem apaga a tabela "horarios".
-- Títulos: nome do escalão, se a linha tiver escalao_id; caso contrário o nome da modalidade (editável no admin).
-- Linhas de exceção (data_excecao preenchida) ficam de fora.

INSERT INTO "horario_aulas" ("modalidade_id", "dia_semana", "inicio", "fim", "titulo", "sala", "cor")
SELECT
    h."modalidade_id",
    h."dia_da_semana",
    to_char(h."inicio"::time, 'HH24:MI'),
    to_char(h."fim"::time, 'HH24:MI'),
    COALESCE(e."nome", m."nome"),
    NULLIF(btrim(h."local"), ''),
    'var(--blue-400)'
FROM "horarios" h
JOIN "modalidades" m ON m."id" = h."modalidade_id"
LEFT JOIN "escalao" e ON e."id" = h."escalao_id"
WHERE h."modalidade_id" IN (1, 4)
  AND h."data_excecao" IS NULL
  AND h."dia_da_semana" BETWEEN 0 AND 6
  AND h."inicio"::time < h."fim"::time
  AND NOT EXISTS (SELECT 1 FROM "horario_aulas" a WHERE a."modalidade_id" = h."modalidade_id");
