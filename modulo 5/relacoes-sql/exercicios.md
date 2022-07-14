## Exercicio 1
a) É a chave que permite a referencia de registros vindos de outra tabela, compõem a chave primçaria de outra tabela.

c) Erro porque a constante não existe, constante se refere ao id inexistente.

d) ALTER TABLE Movies DROP COLUMN IMDB_note;

## Exercicio 2
a) Ela vai criar uma nova tabela onde você deve colocar o id do ator e o id do filme, referenciando isto ao id do ator e ao id do filme, para fazer o cast em uma nova tabela que se associa a já criada de filmes.

b) INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "002"
);

c) Ele diz que não pode atualizar já que a id de filme, ou ator é inexistente e a tabela é co-dependente da tabela de filmes com o id dos filmes ou dos atores.

d) Ele não consegue fazer um multidelete porque desconhece a tabela Actor.

## Exercicio 3
a) O operador ON da query diz onde devem se juntar as tabelas, ou seja o Movie.id se juntar no Rating onde tem o movie_id dela.

b) SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
