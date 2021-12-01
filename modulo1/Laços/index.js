//Exercicios de interpretação de código
//Exercicio 1
// O codigo vai fazer a interação entre os valores até onde o indice é menor que 5, ou seja, 0 + 0, 1 + 1, 2 + 1, 3 + 3, 6 + 4, assim será 10 o resultado no console pois é onde o indice passa de 5
//Exercicio 2
//a) O código irá imprimir todos os números maiores que 18 presentes na lista
//b) Sim, você deve usar o for of para percorrer a lista, pois ele não tem um indice, então ele demonstrará numero por numero da lista.
//Exercicio 3
// Ele demonstrara uma lista de * indo de um a 4 * em uma sequencia, ou seja, 1, 2, 3, 4

//Exercicios de escrita de código
//Exercicio 1

/* let animal = Number (prompt("Quantos animais você tem? "));

let arrayNome = [];

if (animal === 0) {
    console.log("Que pena!! Você pode adotar um pet!!");
} else {
    for (let i = 0; i < animal; i++) {
        let nome = prompt("Qual o nome do seu animal?");
        arrayNome.push(nome);
    }
    console.log("Seus pets são: " + arrayNome);
}
 */


// Exercicio 2
//a)
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}*/
//b)
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const divisor = 10;
for (let i = 0; i < array.length; i++){
    console.log(array[i] / divisor)
} */
//c)
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const divisor = 2;
for (let i = 0; i < array.length; i++){
 let par = array[i] % divisor;
    if (par === 0){
        console.log(array[i])
    }
}
 */
//d)
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 for (let i = 0; i < array.length; i++){
     
        console.log("O elemento do index: " + [i] + " ẽ " + array[i])
    } */

//e) 
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    console.log ("O maior numero ẽ: " + Math.max(...array) + " e o menor numero ẽ: " + Math.min(...array))

 */

// Desafio 1
/* let numeroEscolhido = Number(prompt("Escolha um numero para ser advinhado: "));
let comeco = confirm ("Vamos jogar!")
while (true){
    let numero = Number(prompt("Escolha um numero: "));
    if (numero === numeroEscolhido){
        console.log ("Você escolheu: " + numero)
        alert ("Temos um leitor de mentes aqui!!")
        console.log ("Este ẽ o numero certo!! " + numero)
        break;
    }
    else if (numero > numeroEscolhido){
        console.log ("Você escolheu: " + numero)
        alert ("O numero é menor, leia melhor a mente do adversãrio")
    }
    else{
        console.log ("Você escolheu: " + numero)
        alert ("O numero é maior, leia melhor a mente do seu adversãrio")
    }
}
 */

//Desafio 2

let numeroEscolhido = parseInt(Math.random() * (100 - 0) + 0);
let comeco = confirm ("Vamos jogar!")
while (true){
    let numero = Number(prompt("Escolha um numero: "));
    if (numero === numeroEscolhido){
        console.log ("Você escolheu: " + numero)
        alert ("Temos um leitor de mentes aqui!!")
        console.log ("Este ẽ o numero certo!! " + numero)
        break;
    }
    else if (numero > numeroEscolhido){
        console.log ("Você escolheu: " + numero)
        alert ("O numero é menor, leia melhor a mente do adversãrio")
    }
    else{
        console.log ("Você escolheu: " + numero)
        alert ("O numero é maior, leia melhor a mente do seu adversãrio")
    }
}
//Os primeiros erros vieram por esquecer de estabelecer apenas números inteiros, depois veio a dificuldade de saber como fazer o intervalo de números possiveis, entretanto após estes erros foi tudo mais facil, se tivesse lido os textos de ajuda antes teria sido mais facil.
