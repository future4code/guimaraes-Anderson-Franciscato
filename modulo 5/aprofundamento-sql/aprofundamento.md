## Exercicio 1 

a) ALTER TABLE Actor DROP COLUMN salary;
Isso é um comando SQL que remove a coluna salary da tabela Actor.

b) ALTER TABLE Actor MODIFY gender VARCHAR(6);
Isso é um comando SQL que modifica a quantidade de váriaveis possiveis para a coluna genero 

c) Alter table Actor modify gender varchar(100)

## Exercicio 2

a) Update Actor 
set 
	name = "Jonas",
    birth_date = "2000-08-10"
where id = "003";

b) Update Actor 
set name = "JULIANA PAES"
where name = "Juliana Paes";

c) Update Actor 
set 
	name = "Eriberto Leao",
    birth_date = "1978-02-19",
    salary = 100000,
    gender = "male"
where id = "005";

d) Update Paranaue 
set 
	name = "pedrinho"
where id = "090";
 Erro 1146 tabela Paranaue não existe assim não é possivel atualiza-la.

 ## Exercicio 3

 a) Delete from Actor where name = "Fernanda Montenegro";

 b) Delete from Actor 
where 
	gender = "male" and 
    salary > 1000000;

## Exercicio 4

a) Select max(salary) from Actor;	
max(salary)
	58000000

b) Select min(salary) from Actor where gender = "female";
min(salary)
    300000

c) select count(*) from Actor where gender = "female"; 	
count(*)
	2

d) Select sum(salary) from Actor;
sum(salary)
	59520000

## Exercicio 5

a) SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
4    male
2	female
1	femlae

retorna a quantidade de pessoas de cada gënero como a um erro na escrita de um genero ele retornou 3 generos diferentes.

b) Select id, name from Actor 
order by name desc;
001	Tony Ramos
006	Murilo Benicio
007	Juliana Paiva
003	Jonas
002	Gloria Pires
005	Eriberto Leao
004	Caua Reymond

c) Select * from Actor
order by salary;
005	Eriberto Leao	100000	1978-02-19	male
002	Gloria Pires	120000	1963-08-23	femlae
006	Murilo Benicio	200000	1971-07-13	male
003	Jonas	300000	2000-08-10	female
001	Tony Ramos	400000	1948-08-25	male
004	Caua Reymond	400000	1949-04-18	male
007	Juliana Paiva	58000000	1993-03-28	female
				

d) Select * from Actor
order by salary desc
limit 3;
007	Juliana Paiva	58000000	1993-03-28	female
001	Tony Ramos	400000	1948-08-25	male
004	Caua Reymond	400000	1949-04-18	male
	
e) select avg(salary), gender from Actor
group by gender;
275000	male
120000	femlae
29150000	female 

## Exercicio 6

a) Alter table Movies add playing_limit_date DATE;

b) Alter table Movies change IMDB_note IMDB_note float;

c) Update Movies 
set 
	playing_limit_date = "2022-12-01"
where id = "001";

Update Moveis 
set 
	playing_limit_date = "2020-10-09"
where id = "002";

d) Delete from Movies where id = "001";

Update Movies
set 
	sinopsis = "memewards"
where id = "001";

Ele aceita a query entretanto diz que não houve nenhuma mudança 
