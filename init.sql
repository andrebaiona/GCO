-- Tabela de patrocinadores
CREATE TABLE patrocinadores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  logo VARCHAR(255), -- caminho para imagem
  url VARCHAR(255)   -- link do patrocinador
);

-- Tabela de modalidades
CREATE TABLE modalidades (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  icone VARCHAR(255),
  descricao TEXT,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  categoria VARCHAR(100)
);

-- Tabela de escalões
CREATE TABLE escalao (
  id SERIAL PRIMARY KEY,
  modalidade_id INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  idade_minima INT,
  idade_maxima INT,
  descricao TEXT,
  mensalidade DECIMAL(10,2), -- preço específico por escalão
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

-- Tabela de preços por escalão
CREATE TABLE preco_escalao (
  id SERIAL PRIMARY KEY,
  modalidade_id INT NOT NULL,
  escalao VARCHAR(100) NOT NULL,
  tipo VARCHAR(30), -- 'mensalidade', 'inscricao', etc.
  valor DECIMAL(10,2) NOT NULL,
  observacoes TEXT,
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

-- Tabela de notícias
CREATE TABLE noticias (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  conteudo TEXT NOT NULL,
  imagem VARCHAR(255),
  data_publicacao DATE,
  autor VARCHAR(100)
);