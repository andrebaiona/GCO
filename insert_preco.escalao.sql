    -- Preços Ginástica
INSERT INTO preco_escalao (modalidade_id, escalao, tipo, valor, observacoes) VALUES
(2, 'Infantil', 'mensalidade', 30.00, 'Ou 300 €/ano'),
(2, 'Formativa I', 'mensalidade', 30.00, 'Ou 300 €/ano'),
(2, 'Formativa II', 'mensalidade', 30.00, 'Ou 300 €/ano'),
(2, 'Pré-Competição', 'mensalidade', 45.00, 'Ou 155 €/trimestre ou 435 €/ano'),
(2, 'Competição', 'mensalidade', 55.00, 'Ou 185 €/trimestre ou 525 €/ano'),
(2, 'Todos', 'inscricao', 35.00, NULL),
(2, 'Todos', 'seguro', 30.00, NULL);

    -- Preços Patinagem Artística
INSERT INTO preco_escalao (modalidade_id, escalao, tipo, valor, observacoes) VALUES
(3, 'Minis', 'mensalidade', 37.50, '3x/semana'),
(3, 'Iniciação', 'mensalidade', 37.50, '3x/semana'),
(3, 'Pré-Competição 4x', 'mensalidade', 42.50, '4x/semana'),
(3, 'Pré-Competição 6x', 'mensalidade', 47.50, '6x/semana'),
(3, 'Competição 5x', 'mensalidade', 45.00, '5x/semana'),
(3, 'Competição 6x', 'mensalidade', 47.50, '6x/semana'),
(3, 'Todos', 'inscricao', 50.00, NULL),
(3, 'Todos', 'seguro', 25.00, 'Seguro anual');

    -- Preços Andebol
INSERT INTO preco_escalao (modalidade_id, escalao, tipo, valor, observacoes) VALUES
(1, 'Manitas/Bâmbis/Minis', 'mensalidade', 20.00, NULL),
(1, 'Sub-14', 'mensalidade', 30.00, NULL),
(1, 'Sub-16', 'mensalidade', 30.00, NULL),
(1, 'Sub-18', 'mensalidade', 30.00, NULL),
(1, 'Sub-20', 'mensalidade', 30.00, 'Inscrição adicional: 70 €'),
(1, 'Todos', 'inscricao', 50.00, NULL),
(1, 'Todos', 'seguro', 25.00, NULL);

    -- Preços Xadrez
INSERT INTO preco_escalao (modalidade_id, escalao, tipo, valor, observacoes) VALUES
(4, 'Todos', 'mensalidade', 0.00, 'Gratuito');  
