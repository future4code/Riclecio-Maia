`` CREATE TABLE `Actor`( 
ID VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
) ;
#SHOW DATABASES;
#SHOW TABLES;
#DESCRIBE Actor;
#exercicio-1
#A- CREATE TABLE- é usado para criar uma tabela,VARCHAR-Para criar coluna do tipo string (n)-o maximo de caracteres.
# DATE- usado para criar data.
#B- SHOW TABLES-Da informacao de todas tabelas que fiz,no meu caso apenas uma actor.(result grid).
#SHOW DATABASES-Da informacao sobre minha Database que no casa tem apenas uma(result grid).
#C- DESCRIBE actor- me da informações sobre a minha tabela linha e colunas field,type value,ex:id,nome,salary..(result grid).

#exercicio-2
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "008", 
  "Adam Sandler",
  50000000,
  "1966-09-09", 
  "male"
);
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id,nome,salary,birth_date,gender)VALUES(
"002","Glória Pires",1200.000,"1963-08-23","Female");
#B- Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. 
#Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

#Resposta(b)--Error code: 1062. Duplicate entry '002' for key 'PRIMARY' 0.141 sec(Entrada duplicada '002' para PRINCIPAL-chave )
# erro pois não aceita a duplicidade de id

#C-Error Code: 1136.Column count doesn't match value count at row ( Código de Erro: 1136. Contagem de colunas não corresponde à contagem de valores na linha )
# faltava colunas -birth_date,gender
INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES(
  "003", "Fernanda Montenegro",300000,"1929-10-19", "female"
);

#D-Error Code: 1364. Field 'nome' doesn't have a default value(Código de erro: 1364. O 'nome' de campo não tem um valor padrão)
# faltava coluna nome e value do nome

INSERT INTO Actor (id,nome, salary, birth_date, gender)
VALUES(
  "004",
  "Jose",
  400000,
  "1949-04-18", 
  "male"
);

#E-Error Code: 1292. Incorrect date value: '1950'for column 'birth_date' at row 1(Valor da data incorreta:'1950' para coluna 'birth_date' na linha 1)
#erro no tipo de data de nascimento faltou as aspas 

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

#F-
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "006", 
  "Regina Duarte",
  700000,
  "1947-02-05", 
  "female"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(

  "007", 
  "Fabio Assunção",
  950000,
  "1971-08-10", 
  "male"
);

#Exercicio-3

#SELECT* FROM Actor;

#a) Escreva uma query que retorne todas as informações das atrizes
SELECT id,nome FROM Actor WHERE gender="female";
#b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT id,nome,salary FROM Actor WHERE nome="Tony Ramos";
#c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". 
#Explique o resultado. Resposta- 0 row returned (nada foi retornado, nenhum  ator com gender invalido  )
SELECT id,nome,salary,gender FROM Actor WHERE gender="invalid";
#d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id,nome,salary FROM Actor WHERE salary >=500.000;
#e)Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Explique porque esse erro aconteceu. 
#Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.
##RESPOSTA:Error Code: 1054. Unknown column 'name' in 'field list'(coluna "name" não existe,pois em minha tabela é "nome")
#o meu a coluna nome da tudo certinho.-Resposta foi id 002 Gloria Pires.
SELECT id, nome from Actor WHERE id = "002";

#Exercício-4

SELECT * FROM Actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000;
#a) Explique com as suas palavras a query acima, RESPOSTA: query era retornar na coluna nome todos nomes que comecem com letra A ou J
# e salarios acima de 300000 usando operador.
#b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor WHERE (nome NOT LIKE "A%")  AND salary > 350000;
#c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor WHERE  nome LIKE "%G%" OR nome LIKE "%g%" ;
#d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o 
#salário entre R$350.000,00 e R$900.000,00
SELECT * FROM Actor WHERE (nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%A%" OR nome LIKE "%a%" ) AND salary BETWEEN 350000  AND  900000;

# Exercicio-5
CREATE TABLE `Films`(
ID VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
sinopse TEXT NOT NULL ,
data_lançamento  DATE NOT NULL,
avaliacao INT NOT NULL
) ;

INSERT INTO Films (id, nome, sinopse, data_lançamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);

INSERT INTO Films (id, nome, sinopse, data_lançamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);

INSERT INTO Films (id, nome, sinopse, data_lançamento, avaliacao)
VALUES(

  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);

INSERT INTO Films(id,nome,sinopse,data_lançamento,avaliacao)
VALUES(
"004", 
  "O Auto Da Compadecida",
  "Sem eira nem beira, os nordestinos João Grilo e Chicó se valem da esperteza para sobreviver no sertão. Empregados pelo padeiro da cidade, eles se veem numa confusão quando a cachorra da mulher do patrão morre.",
  "2000/09/10", 
  8
);
INSERT INTO Films(id,nome,sinopse,data_lançamento,avaliacao)
VALUES(

"005", 
  "O Auto Da Compadecida",
  "Sem eira nem beira, os nordestinos João Grilo e Chicó se valem da esperteza para sobreviver no sertão. Empregados pelo padeiro da cidade, eles se veem numa confusão quando a cachorra da mulher do patrão morre.",
  "2000/09/10", 
  8
);

INSERT INTO Films(id,nome,sinopse,data_lançamento,avaliacao)
VALUES(
"005", 
  "Cidade De Deus",
  "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento.",
  "2002/08/30", 
  6
);
#Escreva uma query que:a) Retorne o id, título e avaliação a partir de um id específico;

SELECT id, nome,avaliacao from Films WHERE id = "004";

#b) Retorne um filme a partir de um nome específico;

SELECT * FROM Films WHERE  nome LIKE "%auto%";

#c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7; R:
SELECT id, nome,sinopse FROM Films WHERE avaliacao < 7;
#Escreva uma query que:
#a) Retorna um filme cujo título contenha a palavra vida,
SELECT * FROM Films WHERE  nome LIKE "%vida%";
#b) Realize a pesquisa de um filme, ou seja: pesquise 
#se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
SELECT * FROM Films WHERE nome LIKE "%mae%" OR sinopse LIKE "%nordestinos%";
#c) Procure por todos os filmes que já tenham lançado.
SELECT * FROM Films WHERE data_lançamento < "2022-01-20";
#d) Procure por algum filme que já tenha lançado, 
#com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
SELECT * FROM Films WHERE data_lançamento < "2020-05-04" AND (nome LIKE "%Deus%" OR sinopse LIKE "%sedutora%") AND avaliacao > 7;``













