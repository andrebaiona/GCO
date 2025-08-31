-- ========================================
-- INSERIR MODALIDADES
-- ========================================
INSERT INTO modalidades (id, nome, slug, icone, descricao, ativo, categoria, idade_minima, idade_maxima)
VALUES
(1, 'Andebol', 'andebol', '/icones-modalidades/andebol.png', 'Equipas competitivas em várias categorias etárias.', 1, 'Desporto Coletivo', 6, NULL),
(2, 'Ginástica', 'ginastica', '/icones-modalidades/ginastica.png', 'Atividade física que promove a flexibilidade, coordenação e disciplina.', 1, 'Individual', 4, NULL),
(3, 'Patinagem Artística', 'patinagem-artistica', '/icones-modalidades/patinagem.png', 'Desporto artístico que combina técnica, dança e expressão corporal.', 1, 'Individual', 5, NULL),
(4, 'Xadrez', 'xadrez', '/icones-modalidades/xadrez.png', 'Jogo de estratégia que desenvolve raciocínio lógico e concentração.', 1, 'Intelectual', 6, NULL),
(5, 'Hóquei em Patins', 'hoquei-em-patins', '/icones-modalidades/hoquei.png', 'Desporto coletivo rápido e competitivo praticado em patins.', 1, 'Coletiva', 6, NULL);

-- ========================================
-- INSERIR PREÇOS
-- ========================================
INSERT INTO preco (modalidade_id, mensalidade, inscricao, equipamento)
VALUES
(1, 30, 60, 90),
(2, 40, 70, 60),
(3, 45, 80, 140),
(4, 25, 35, NULL);


-- ========================================
-- INSERIR COMPETIÇÕES
-- ========================================
INSERT INTO competicoes (modalidade_id, nome)
VALUES
(1, 'Campeonato Distrital Sub-18'),
(1, 'Torneios Inter-escolas'),
(2, 'Festival de Ginástica Local'),
(3, 'Campeonato Nacional de Patinagem Artística'),
(4, 'Campeonato Distrital de Xadrez'),
(4, 'Open de Lisboa'),
(5, 'Campeonato Nacional Sub-18'),
(5, 'Torneio Internacional de Hóquei em Patins');

-- ========================================
-- INSERIR DETALHES
-- ========================================
INSERT INTO detalhes_modalidade (modalidade_id, introducao, metodologia, avaliacao, progressao)
VALUES
(1, 'Introdução ao Andebol.', 'Treinos técnicos e táticos em equipa.', 'Avaliação contínua com jogos.', 'Progressão por escalões etários.'),
(2, 'Introdução à Ginástica.', 'Exercícios de coordenação e flexibilidade.', 'Avaliação em apresentações e testes práticos.', 'Progressão por níveis técnicos.'),
(3, 'Introdução à Patinagem Artística.', 'Treinos de técnica, coreografia e expressão.', 'Avaliação em campeonatos e exibições.', 'Progressão baseada em competições oficiais.'),
(4, 'Introdução ao Xadrez.', 'Aulas teóricas e práticas com simulações.', 'Avaliação em torneios internos.', 'Progressão para torneios distritais e nacionais.'),
(5, 'Introdução ao Hóquei em Patins.', 'Treinos coletivos com foco em velocidade e técnica.', 'Avaliação em jogos competitivos.', 'Progressão por escalões federados.');

-- ========================================
-- INSERIR CONTACTOS
-- ========================================
INSERT INTO contacto_modalidade (modalidade_id, responsavel, telefone, email)
VALUES
(1, 'João Silva', '912345678', 'joao.silva@gco.pt'),
(2, 'Maria Costa', '913456789', 'maria.costa@gco.pt'),
(3, 'Ana Ferreira', '914567890', 'ana.ferreira@gco.pt'),
(4, 'Pedro Santos', '915678901', 'pedro.santos@gco.pt'),
(5, 'Rui Almeida', '916789012', 'rui.almeida@gco.pt');

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




