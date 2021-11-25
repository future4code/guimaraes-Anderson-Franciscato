//Exercicios de interpretação de código
/* Exercicio 1
 O teste verifica se o numero é par ou impar, e imprime a mensagem de acordo com o resultado.
se for par, imprime a mensagem "Passou no teste", se for impar, imprime a mensagem "Não passou no teste".
*/
//Exercico 2
/* O codigo imprime o nome das frutas selecionadas e o preço de cada uma.
A mensagem impressa no console caso a escolha seja maçã será: "Você escolheu a maçã e o preço dela é R$ 2.25"
Sem o break o resultado seria que o preço da Pêra seria impressa duas vezes, um no valor correto de R$ 5.5 e outro no valor incorreto de R$ 5
*/
//Exercicio 3
/* A primeira linha pede um numero no PROMPT
A segunda linha ira verificar se o numero é maior que 0, se for imprime a mensagem "Passou no teste" , se o numero for -10 ira imprimir uma mensagem de erro, pois não existe uma condição para numeros abaixo de 0
O erro no console irá aparecer pelo let mensagem, que escreveria "Esta mensagem é secreta!!!" pois o consol.log está no escopo global e fora do escopo da função
*/

//Exercicios de escita de codigo 
// Exercicio 1
/*
var idade = Number(prompt("Qual sua idade?"));
function verificaIdade(idade) {
    if (idade >= 18) {
        return "Você pode dirigir";
    } else {
        return "Você não pode dirigir";
    }
}
console.log(verificaIdade(idade));
*/
//Exercicio 2
/*
var periodo = prompt("Qual o seu periodo M, V ou N?");
function verificaPeriodo(periodo) {
    if (periodo === "M") {
        return "Bom dia!";
    } else if (periodo === "V") {
        return "Boa tarde!";
    } else if (periodo === "N") {
        return "Boa noite!";
    } else {
        return "Valor inválido";
    }
}
console.log(verificaPeriodo(periodo));
*/
//Exercicio 3
/*
 let periodo = prompt("Qual o seu periodo M, V ou N?");
 switch (periodo) {
        case "M":
            console.log("Bom dia!");
            break;
        case "V":
            console.log("Boa tarde!");
            break;
        case "N":
            console.log("Boa noite!");
            break;
        default:
            console.log("Valor inválido");
            break;
    }
*/
//Exercicio 4
/*
let gener = prompt("Qual o genero do filme?");
let valor = prompt("Qual o valor do ingreso?");
function verificaGenero(genero, valor) {
    if (genero === "fantasia" && valor <= 15) {
        return "Bom filme!";
    } else if (genero === "fantasia" && valor > 15) {
        return "Ingresso caro";
    } else {
        return "Escolha outro filme :'(";
    }
}
console.log(verificaGenero(gener, valor));
*/

// Desafio 1
/*
let gener = prompt("Qual o genero do filme?")
let valor = prompt("Qual o valor do ingreso?")
function verificaGenero(genero, valor) {
    if (genero === "fantasia" && valor <= 15) {
        lachinho = prompt ("Qual o lanchinho?")
        return "Bom filme! " + "Aproveite seu:" + " " + lachinho;
    } else if (genero === "fantasia" && valor > 15) {
        return "Ingresso caro";
    } else {
        return "Escolha outro filme :'(";
    }
}
console.log(verificaGenero(gener, valor));
*/

// Desafio 2

var nome = prompt("Qual o seu nome?");
var tipoDeJogo = prompt("Qual o tipo de jogo? (IN, internacional. Ou DO, domestico)");
var etapaDoJogo = prompt("Qual a etapa do jogo? (SF, semi-final. DT, decisão de terceiro lugar. Ou FI, final)");
var categoria = Number(prompt("Qual a categoria do jogo? (1, 2, 3 ou 4)"));
var quantidade = Number(prompt("Qual a quantidade de ingressos?"));

function ingresso () {
    if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1) {
        preco = 1320;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2) {
        preco = 880;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3) {
        preco = 550;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4) {
        preco = 220;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1) {
        preco = 660;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2) {
        preco = 440;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3) {
        preco = 330;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4) {
        preco = 170;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1) {
        preco = 1980;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2) {
        preco = 1320;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3) {
        preco = 880;
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4) {
        preco = 330;
    }
}
function ingressoInternacional () {
    if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1) {
        preco = 1320*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2) {
        preco = 880*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3) {
        preco = 550*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4) {
        preco = 220*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1) {
        preco = 660*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2) {
        preco = 440*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3) {
        preco = 330*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4) {
        preco = 170*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1) {
        preco = 1980*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2) {
        preco = 1320*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3) {
        preco = 880*4,1;
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4) {
        preco = 330*4,1;
    }
}
 function valorTotal () {
        if (tipoDeJogo === "DO") {
            ingresso();
            return preco * quantidade;
        } else if (tipoDeJogo === "IN") {
            ingressoInternacional();
            return preco * quantidade;
        }
 }
 function tipoJogo (tipoDeJogo) {
     if (tipoDeJogo === "IN") {
         return "Internacional";
     } else if (tipoDeJogo === "DO") {
            return "Nacional";
        }
 }
function etapaJogo (etapaDoJogo) {
    if (etapaDoJogo === "SF") {
        return "Semi-final";
    } else if (etapaDoJogo === "DT") {
            return "Decisão de terceiro lugar";
    } else if (etapaDoJogo === "FI") {
            return "Final";
    }
}
function valorIngo () {
    if (tipoDeJogo === "DO") {
        ingresso();
        return preco;
    } else if (tipoDeJogo === "IN") {
        ingressoInternacional();
        return preco;
    }
}

console.log ("---Dados da compra---")
console.log ("Tipo de jogo" + " " + tipoJogo(tipoDeJogo));
console.log ("Etapa do jogo" + " " + etapaJogo(etapaDoJogo));
console.log ("Categoria" + " " + categoria);
console.log ("Quantidade de ingressos" + " " + quantidade);
console.log ("---Valores---")
console.log ("Valor do ingresso" + " " + valorIngo());
console.log ("Valor total" + " " + valorTotal());