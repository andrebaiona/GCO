    -- Escalões Andebol
INSERT INTO escalao (modalidade_id, nome, idade_minima, idade_maxima, descricao, mensalidade) VALUES
(1, 'Manitas/Bâmbis/Minis', 7, 12, 'Manitas/Bâmbis/Minis (nasc. 2013-2016)', 20.00),
(1, 'Sub-14', 13, 14, 'Sub-14 (Infantis Masc. e Fem.) (nasc. 2011-2012)', 30.00),
(1, 'Sub-16', 15, 16, 'Sub-16 (Iniciados Masc. e Fem.) (nasc. 2009-2010)', 30.00),
(1, 'Sub-18', 17, 18, 'Sub-18 (Juvenis) (nasc. 2006-2007)', 30.00),
(1, 'Sub-20', 19, 20, 'Sub-20 (Juniores) (nasc. 2005-2006)', 30.00);

    -- Escalões Ginástica
INSERT INTO escalao (modalidade_id, nome, idade_minima, idade_maxima, descricao, mensalidade) VALUES
(2, 'Infantil I', 3, 6, 'Infantil I (3-6 anos)', 30.00),
(2, 'Formativa I', 6, 9, 'Formativa I (6-9 anos)', 30.00),
(2, 'Formativa II', 6, 9, 'Formativa II (6-9 anos)', 30.00),
(2, 'Pré-Competição', 9, NULL, 'Pré-Competição (+9 anos)', 45.00),
(2, 'Competição', NULL, NULL, 'Competição', 55.00);

    -- Escalões Patinagem Artística
INSERT INTO escalao (modalidade_id, nome, idade_minima, idade_maxima, descricao, mensalidade) VALUES
(3, 'Minis', 4, 6, 'Minis (4-6 anos, 3x/semana)', 37.50),
(3, 'Iniciação', 6, NULL, 'Iniciação (+6 anos, 3x/semana)', 37.50),
(3, 'Pré-Competição 4x', NULL, NULL, 'Pré-Competição (4x/semana)', 42.50),
(3, 'Pré-Competição 6x', NULL, NULL, 'Pré-Competição (6x/semana)', 47.50),
(3, 'Competição 5x', NULL, NULL, 'Competição (5x/semana)', 45.00),
(3, 'Competição 6x', NULL, NULL, 'Competição (6x/semana)', 47.50);

    -- Escalões Xadrez (mensalidade gratuita)
INSERT INTO escalao (modalidade_id, nome, idade_minima, idade_maxima, descricao, mensalidade) VALUES
(4, 'Iniciação', 5, 8, 'Iniciação (5-8 anos)', 0.00),
(4, 'Intermédio', 9, 14, 'Intermédio (9-14 anos)', 0.00),
(4, 'Avançado', 15, NULL, 'Avançado (15+ anos)', 0.00),
(4, 'Competição', NULL, NULL, 'Competição', 0.00);

    -- Escalões Hóquei em Patins (sem preços)
INSERT INTO escalao (modalidade_id, nome, idade_minima, idade_maxima, descricao, mensalidade) VALUES
(5, 'Bambis', NULL, NULL, 'Bambis', NULL),
(5, 'Benjamins', NULL, NULL, 'Benjamins', NULL),
(5, 'Escolares', NULL, NULL, 'Escolares', NULL),
(5, 'Sub-13', NULL, NULL, 'Sub-13', NULL),
(5, 'Sub-15', NULL, NULL, 'Sub-15', NULL),
(5, 'Sub-17', NULL, NULL, 'Sub-17', NULL),
(5, 'Sub-20', NULL, NULL, 'Sub-20', NULL);
