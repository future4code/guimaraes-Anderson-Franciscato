# Introdução a MySQL
## Exercicios 

[ANDERSON](https://github.com/t3lo5)

## EXERCICIO 1 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
 VARCHAR numero maximo de caracteres do id 
 DATE representa a data 
 SHOW databases;  mostra o database do sql
 show tables; mostra as tabelas presentes no database
 describe Actor; mostra os dados da tabela de ator

## EXERCICIO 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
values(
"002",
"Gloria Pires", 
120000, 
"1963-08-23",
"femlae"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
values(
"002",
"Brad Pitt", 
300000,
"1978-02-20",
"male"
); ##erro 1062, entrada duplicada na chave primaria

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); ##erro 1136, coluna com variavel que não bate o valor, na linha 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Caua Reymond",
  400000,
  "1949-04-18", 
  "male"
); ##erro 1364 sem o nome do ator

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
); ##erro 1292 valor incorreto na data

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Murilo Benicio",
  200000,
  "1971-07-13", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Juliana Paiva",
  58000000,
  "1993-03-28", 
  "female"
);

##EXERCICIO 3

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor where name = "Tony Ramos";

select * from Actor where gender = "invalid"; ##retornou null, porque nao tem ninguem com este genero no database

select id, name, salary from Actor where salary = lower(500000);

select id, name from Actor where id = "002"; ##erro 1054 porque nao existe nome na tabela Actor

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000; ##A query busca pessoas com nomes que começam com A ou J e tenham um salário maior que o especificado, juntando as duas condiçoes nos da a tabela gerada, no caso por duas pessoas

SELECT * FROM Actor
WHERE (name not LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE locate("G", name) or locate("g", name) or locate("A", name) or locate("a", name) AND salary between 350000 and 900000;

##DESAFIOS

##EXERCICIO 2

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopsis TEXT Not Null,
    realise_date DATE NOT NULL,
    IMDB_note VARCHAR(6) NOT NULL
);

Insert into Movies (id, name, sinopsis, realise_date, IMDB_note)
Values (
"001",
"Se eu fosse voce",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

Insert into Movies (id, name, sinopsis, realise_date, IMDB_note)
Values (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

Insert into Movies (id, name, sinopsis, realise_date, IMDB_note)
Values (
"003",
"Dona Flor e seus dois maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

Insert into Movies (id, name, sinopsis, realise_date, IMDB_note)
Values (
"004",
"Hermanoteu na terra de Godah",
"Depois de ser eleito o novo papa, o Cardeal Gerônimo toma conhecimento formal de um grande segredo, mantido em total sigilo durante anos pela Igreja. Enquanto descobre a verdade a respeito dos apóstolos de Cristo, ele tem como fio condutor o destemido Hermanoteu, que ao longo de sua vida participou de momentos históricos e bíblicos cruciais, sempre se metendo nas piores enrascadas possíveis",
"2021-12-09",
7
);


## EXERCICIO 3

Select id, name, IMDB_note from Movies where id = "004";

Select * from Movies where name = "Dona Flor e seus dois maridos";

select id, name, sinopsis from Movies where IMDB_note > 7;

select name from Movies where name Like "%vida%";

select * from Movies where name Like "%Hermanoteu";

select * from Movies where realise_date < "2022-06-14";

SELECT * FROM Movies
WHERE realise_date < "2022-06-14" AND 
      (name LIKE "%Hermanoteu%" OR
      sinopsis LIKE "%Godah%") AND IMDB_note > 7;

