//Exercicios de interpretação de código
//Exercicio 1
//a) 
/* Primeiro irá imprimir o valor de o nome do primeiro array, no caso Matheus Nachtergaele
Irá mostrar o tamanho do array elenco 
Irá mostrar o segundo canal que ele irá passar, no caso canal brasil  */
//Exercicio 2
/* a)
Será impresso tudo que tem no const cachorro, ou seja nome, idade e raça
Será impresso tudo sobre o gato, nome, idade que é igual a do cachorro, e raça também igual a raça do cachorro
Será impresso tudo sobre a tartaruga, nome, idade igual a do cachorro, e raça igual a raça do cachorro
Os nomes sao respectivamente, Juca, Juba e Jubo
*/
//b)
/* Ele utilizar o mesmo padrão de impressão do declarado como function no inicio, no caso o cachorro
*/
//Exercicio 3
/* a)
Primeiro mostra um booleano falando que ele não é backender e a altura indefinida
*/
//b)
/*
Mostra undefined em altura pois esta não foi declarada na função
*/
//Exercicios de código
//Exercicio 1
/* const pessoa = {
    nome: 'Ana Paula',
    Apelidos: ["Aninha", " Paulinha", " Paula"]
}
console.log ("Eu sou " + pessoa.nome + " mas pode me chamar de: " +pessoa.Apelidos)


//b)

const usuario = {... pessoa, 
    Apelidos: ["Anita", " Paul", " Paulao"]
}
console.log ("Eu sou " + usuario.nome + " mas pode me chamar de: " +usuario.Apelidos)
 */
//Exercicio 2
//a) 

/* const pessoa = {
    nome: 'Ana Paula ',
    Idade: ' 25',
    Profissao: ' Programadora'
}
const usuario = {
    nome: 'João ',
    Idade: ' 30',
    Profissao: ' Professor'
}

//b)

minhafuncao = (pessoa) => {
    return (pessoa.nome +pessoa.nome.length +pessoa.Idade + pessoa.Profissao)
}
minhafuncao2 = (usuario) => {
    return (usuario.nome + usuario.nome.length +usuario.Idade + usuario.Profissao)
}
console.log(minhafuncao(pessoa))
console.log(minhafuncao2(usuario))
 */

// Exercicio 3

/* var carrinho = []

function frutas () {
    var fruta = {
        nome: 'Banana',
        disponivel: true,
    }
    var fruta1 = {
        nome: 'Maça',
        disponivel: true,
    }
    var fruta2 = {
        nome: 'Morango',
        disponivel: true,
    }
carrinho.push(fruta)
carrinho.push(fruta1)
carrinho.push(fruta2)
console.log(carrinho)
}
frutas() */

//Desafio 1

/* var pessoa = {
    nome: prompt("digite o nome"),
    idade: prompt("digite a idade"),
    profissao: prompt("digite a profissao"),
}
console.log("Nome: " + pessoa.nome + " Idade: " + pessoa.idade + " Profissao: " + pessoa.profissao)
console.log (typeof pessoa)
 */

//Desafio 2
/* 
var filmes = {
    nome: prompt("digite o nome do filme"),
    ano: prompt("digite o ano do filme"),
    nome2: prompt("digite o nome do segundo filme"),
    ano2: prompt("digite o ano do segundo filme"),
    
    lancamento: function () {
        return (filmes.ano == filmes.ano2)
},
lancamento2: function () {
    return (filmes.ano > filmes.ano2)
},
}
console.log ("O filme " + filmes.nome + " foi lançado antes do " + filmes.nome2 + "?" + filmes.lancamento())
console.log ("O filme "+ filmes.nome + "foi lançado no mesmo ano do "+ filmes.nome2 + "?" + filmes.lancamento2())

 */

//Desafio 3
/* 
var carrinho = []

function frutas () {
    var fruta = {
        nome: 'Banana',
        disponivel: true,
    }
    var fruta1 = {
        nome: 'Maça',
        disponivel: true,
    }
    var fruta2 = {
        nome: 'Morango',
        disponivel: true,
    }
     fruta1.disponivel = false   
carrinho.push(fruta)
carrinho.push(fruta1)
carrinho.push(fruta2)
console.log(carrinho)
}
frutas()
 */
