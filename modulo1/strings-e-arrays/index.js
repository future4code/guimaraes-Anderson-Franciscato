//Exercicios de interpretação de código
//Exercicio 1 
/* let array
console.log('a. ', array)//array indefinido 

array = null
console.log('b. ', array)//nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//conta quantos elementos tem no array 

let i = 0
console.log('d. ', array[i])//mostra o primeiro elemento do array

array[i+1] = 19
console.log('e. ', array)//altera o primeiro elemento do array

const valor = array[i+6]
console.log('f. ', valor)//altera o primeiro elemento do array para o sexto elemento do array */

//Exercicio 2 
/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//Troca a letra A por I e mostra a frase com letras maiusculas e o tamanho dela
 */

//Exercicios de escrita de código
//Exercicio 1

/* const email = prompt("Insira seu email: ") //pede o email
const nomeUsuario = prompt ("Insira seu nome de usuario: ") //pede o nome de usuario

console.log("O e-mail: ", +email+ "foi cadastrado com sucesso.Seja bem vindo(a) ", +nomeUsuario) //mostra o resultado
 */

//Exercicio 2

/* let comidasPreferidas = ['Lasanha', 'Churros', 'Pastel', 'Pizza', 'Hamburguer'];
console.log("essas são minhas comidas preferidas: " + comidasPreferidas[0]);//mostra o primeiro elemento do array
console.log(comidasPreferidas[1]);//mostra o segundo elemento do array
console.log(comidasPreferidas[2]);//mostra o terceiro elemento do array
console.log(comidasPreferidas[3]);//mostra o quarto elemento do array
console.log(comidasPreferidas[4]);//mostra o quinto elemento do array

comidasPreferidas[1] = prompt('Qual é a sua comida favorita?');//pede a comida preferida do usuario
console.log(comidasPreferidas);//mostra o array com a comida preferida do usuario
 */

//Exercicio 3
/* const listaDeTarefas = []//cria um array vazio para a lista
const tarefa1 = prompt("Digite a primeira tarefa: ")//pede a primeira tarefa
const tarefa2 = prompt("Digite a segunda tarefa: ")//pede a segunda tarefa
const tarefa3 = prompt("Digite a terceira tarefa: ")//pede a terceira tarefa
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)//adiciona as tarefas no array
console.log (listaDeTarefas)//mostra o array com as tarefas
const indice = prompt("Digite o indice da tarefa que deseja excluir(0, 1 ou 2): ")//pede o indice da tarefa que deseja excluir
const indiceNumero = Number(indice)//converte o indice para numeros
listaDeTarefas.splice(indiceNumero, 1)//remove a tarefa do array
console.log(listaDeTarefas)//mostra o array com as tarefas
 */

/* //Desafio 1

const frase = prompt("Digite uma frase")// recebe a frase do usuario
const array = frase.split(" ")//cria um array com as palavras da frase
console.log (array)//mostra o array
 */

//Desafio 2

/* const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]//cria um array com as frutas
const indiceAbacaxi = array.indexOf("Abacaxi")//cria um indice para o elemento Abacaxi
const comprimento = array.length//cria um comprimento para o array
console.log ('Indice do abacaxi: ' + indiceAbacaxi)//mostra o indice do abacaxi
console.log ('Comprimento do array: ' + comprimento)/mostra o comprimento do array 
*/
