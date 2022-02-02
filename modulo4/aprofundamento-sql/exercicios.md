
```
#Exercicio 1
# A)ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
	Altera a tabela adicionando uma coluna varchar. 
# B)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
	altera a tabela e as definições da coluna sex
# C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
	altera a tablea e as definições da coluna gender
# D)    
*/
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
/*
#EXERCICIO 2
# A) 
*/
UPDATE Actor SET nome = "Ben Affleck", birth_date = '1979-02-25' WHERE ID = '003';

#B)
UPDATE Actor SET nome = 'JULIANA PAES' WHERE nome = 'Juliana Paes';
UPDATE Actor SET nome = 'Juliana Paes' WHERE nome = 'JULIANA PAES';

#C)
UPDATE Actor SET ID = '999', 
				 nome = 'Henry Cavil', 
                 birth_date = '1988-04-15',
                 salary = 300000, 
                 gender = 'male' 
			WHERE ID = '005'; 
/*#D)
UPDATE Actor SET ID = '050' WHERE ID = '055';
21:30:38	UPDATE Actor SET ID = '050' WHERE ID = '055'	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.140 sec
Nenhuma linha foi afetada por conta que o ID 055 não existe. 
*/

#EXERCICIO 3
#A)
DELETE FROM Actor WHERE nome='Henry Cavil';
#B)
DELETE FROM Actor WHERE gender="male" AND salary > 1000000;

#EXERCICIO 4 
#A)
SELECT MAX(salary) FROM Actor;
#B)
SELECT MIN(SALARY) FROM Actor Where gender= "female";
#C)
SELECT COUNT(*) FROM Actor WHERE gender ="female";
#D)
SELECT SUM(salary) from Actor ;
/*
#Exercicio 5
#A)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- Retornou dois Registros e duas colunas um o contador de genero masculino e o outro de feminino.
*/
#B)
SELECT ID, nome FROM Actor ORDER BY nome DESC ;
#C)
SELECT * FROM Actor ORDER BY salary ;
#D)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
#E)
SELECT AVG(salary), gender FROM Actor GROUP BY gender; 

#EXERCICIO 6 
#A) 
ALTER TABLE Films ADD playing_limit_date DATE;
#B)
ALTER TABLE Films CHANGE id avalicao FLOAT ;  
#C)
UPDATE Films SET data_lançamento = '2022-01-30',  playing_limit_date = '2022-02-25' WHERE ID='005';
UPDATE Films SET data_lançamento = '2020-01-30',  playing_limit_date = '2020-02-25' WHERE ID='003';
#D)
DELETE FROM Films WHERE ID = '001';
UPDATE Films SET sinopse = "Filme é legal, tem uma critica inteligente contra o comunismo" where ID ="001";
# 0 linhas afetadas não deu um erro de fato somente não afetou nada.

``` 