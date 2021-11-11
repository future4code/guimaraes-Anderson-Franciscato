//Exercicios de interpreta;'ao de codigo
// Exercicio 1
/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean
*/

//Exercicios 2
/* let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 
O resultado sera os numeros juntos, pois o prompt nao retorna um numero e sim uma string 
Para retornar um numero, e necessario converter a string para numero usando o parseInt
 */
// Exercicios de codigo
// Exercicio 1
/* let age = parseInt (prompt("Digite sua idade!"))
let ageAmigo = parseInt (prompt("Digite a idade do seu amigo!"))
const comparacao = age > ageAmigo
console.log ("Sua idade ê maior que a do seu amigo? " + comparacao)
console.log ("Diferença de idade " + (age - ageAmigo))
    */
// Exercicio 2
/* let numeroPar = parseInt (prompt("Digite um numero par!"))
const divisao = numeroPar % 2
console.log ("O resto da divisão é:  " + divisao) //O resto serã sempre 0 para números pares
//Em numero impar o resto é difertente de 0
 */

    // Exercicio 3
/* let age = parseInt (prompt("Digite sua idade"))
const meses = age * 12
const dias = age * 365
const horas = age * 8766
console.log ("Sua idade em meses é: " + meses)
console.log ("Sua idade em dias é: " + dias)
console.log ("Sua idade em horas é: " + horas)
 */

    // Exercicio 4
/* let numero = parseInt (prompt("Digite um numero!"))
let numero2 = parseInt (prompt("Digite outro numero!"))

const maior = numero > numero2
const igual = numero === numero2
const divisivel = numero % numero2 === 0
const divisivel2 = numero2 % numero === 0

console.log ("O primeiro numero é maior que o segundo? " + maior)
console.log ("Os numeros são iguais? " + igual)
console.log ("O primeiro numero é divisivel pelo segundo? " + divisivel)
console.log ("O segundo numero é divisivel pelo primeiro? " + divisivel2)
 */

// Desafio
// Exercicio 1 temperaturas
/* kelvinA = (77-32)*5/9 + 273.15
console.log ("A conversçao de 77°F para Kelvin é : " + kelvinA + "K")
FahrenheitA = (80*9/5)+32
console.log ("A conversçao de 80°C para Fahrenheit é : " + FahrenheitA + "°F")
FahrenheitB = (30*9/5)+32
console.log ("A conversçao de 30°C para Fahrenheit é : " + FahrenheitB + "°F")
KelvinB = 30 + 273.15
console.log ("A conversçao de 30°C para Kelvin é : " + KelvinB + "K")
let celsius = Number (prompt("Digite a temperatura em Celsius"))
let kelvin = celsius + 273.15
let fahrenheit = (celsius*9/5)+32
console.log ("A conversçao de " + celsius + "°C para Kelvin é : " + kelvin + "K")
console.log ("A conversçao de " + celsius + "°C para Fahrenheit é : " + fahrenheit + "°F")
 */

// Exercicio 2

/* consumo = 280
preco = 0.05
desconto = ((consumo*preco)/100)*15
console.log ("O preço pelo consumo com desconto é de R$ " + ((consumo*preco) - desconto))

 */

// Exercicio 3

kg1 = 20 * 0.453592
console.log ("20 lb equivalem a: " + kg1 + "kg")

kg2 = 10.5 * 0.0283495
console.log ("10.5 oz equivalem a: " + kg2 + "kg")

m1 = 100 * 1609.34
console.log ("100 mi equivalem a: " + m1 + "m")

m2 = 50 * 0.30480
console.log ("50 ft equivalem a: " + m2 + "m")

L1 = 103.56 * 3.78541
console.log ("103.56g gal equivalem a: " + L1 + "L")

L2 = 450 * 0.284131
console.log ("450 xic equivalem a: " + L2 + "L")

//O item escolhido foi de libras para kg
let libras = Number (prompt("Digite a quantidade de libras"))
let kg = libras * 0.453592
console.log ( + libras + " Libras equivalem a: " + kg + " kg")

