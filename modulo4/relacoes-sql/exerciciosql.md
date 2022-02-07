````
#a) Explique o que é uma chave estrangeira
# chave estrangeria é outra change que vem referenciando uma primary key de outra tabela. 
#b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
		coment TEXT NOT NULL,
		rate FLOAT NOT NULL,
      movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(ID)
);
INSERT INTO Rating VALUES 
('1','MUITO RUIM',2.7,'1'),
('2','MUITO BOM',8.7,'1'),
('3','MUITO BOM',7.7,'1'),
('4','MUITO RUIM',2.5,'2'),
('5','RAZOAVEL',5.0,'4'),
('6','SEM EMOÇÃO',6.6,'5'),
('7','MUITO BOM',8.9,'3'),
('8','MUITO BOM',10.0,'3'),
('9','BOM',7.0,'3'),
('10','RUIM',1.0,'3');
#c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

INSERT INTO Rating VALUES 
('11','MUITO RUIM',2.7,'99'); -- falou que não posso adicionar por conta que não existe essa chave estrangeira. 

#d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Films DROP COLUMN avaliacao ; 
#e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
DELETE FROM Films where ID = '1'; -- fala que não pode apagar porque ele é uma chave estrangeira da tabela Rating 

#EXERCIO 2
#a) Explique, com as suas palavras, essa tabela 
# Essa tabela serve para relacionar as tabelas atores e filmes 
#b) Crie, ao menos, 6 relações nessa tabela 
CREATE TABLE MovieCast(
movie_id VARCHAR (255),
actor_id VARCHAR (255),
FOREIGN KEY (movie_id) REFERENCES Films(ID),
FOREIGN KEY (actor_id) REFERENCES Actor(ID)
);
INSERT INTO MovieCast VALUES
('1','007'),
('2','002'),
('3','003'),
('4','006'),
('5','001'),
('3','002');
#c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
INSERT INTO MovieCast VALUES
('99','025'); -- esta criticando que as chaves estrangeiras não foram encontradas nas tabelas de ator e filme 
#d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
DELETE FROM Actor where ID ='003';-- Fala que não pode apagar por conta que tem uma chave estrangeira na tabela de cast
#EXERCICIO3
#a) Explique, com suas palavras, a query acima. O que é o operador ON?
-- o que faz a ligação entre as tabelas 
#b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT  F.nome,
		F.ID,
        R.rate  
FROM Films as F 
INNER JOIN Rating as R 
ON F.id = R.movie_id; 


//SELECT * FROM Actor;
//SELECT * FROM MovieCast;

````