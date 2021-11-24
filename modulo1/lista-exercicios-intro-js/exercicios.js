// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let b = Number (prompt("Digite base (largura) do seu retângulo:")) //recebe valor da base
let h = Number (prompt("Digite altura do seu retângulo:")) //recebe valor da altura
const Area =  b * h //calcular base * altura 
console.log(+ Area) //imprime o valor da área
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoNascimento = Number (prompt("Insira o seu ano de nascimento:")) //recebe o ano de ano de nascimento
let anoAtual = Number (prompt("Insira o ano atual:")) //recebe o ano atual
const idade = anoNascimento - anoAtual //calcula a idade
console.log(+ idade) //imprime a idade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let IMC = Number (peso / (altura * altura)) //calcula o IMC
return IMC //retorna o valor do IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

let nome = prompt("Digite seu nome:") //recebe o valor do nome
let idade =(prompt("Digite sua idade:")) //recebe o valor da idade
let email = prompt("Digite seu email:") //recebe o valor do email
let informacoes = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.` //imprime as informações
console.log(informacoes) //imprime as informações
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = (prompt("Qual sua primeira cor favorita? ")) //recebe a primeira cor favorita
let cor2 = (prompt("Qual sua segunda cor favorita? "))//recebe a segunda cor favorita
let cor3 = (prompt("Qual sua terceira cor favorita? "))//recebe a terceira cor favorita
let cores = [cor1, cor2, cor3]//cria um array com as cores
console.log(cores)//mostra o array
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
string = string.toUpperCase()//converte a string para maiúscula
return string//retorna a string em maiúscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let ingressos = (custo / valorIngresso) //calcula o número de ingressos
return ingressos //retorna o valor de ingressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
string1.length === string2.length //compara o tamanho das strings
return string1.length === string2.length //retorna o valor da comparação
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
array = array[0] //retorna o primeiro elemento do array
return array //retorna o primeiro elemento do array
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
array = array[array.length - 1] //retorna o último elemento do array
return array //retorna o último elemento do array
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, array0) {
  // implemente sua lógica aqui
  array0 = array[0] //retorna o primeiro elemento do array
  array[0] = array[array.length - 1]//retorna o último elemento do array
  array[array.length - 1] = array0//retorna o primeiro elemento do array trocado pelo ultimo

  return array //retorna o array novo
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toLowerCase() //converte a string1 para minúscula
string2 = string2.toLowerCase() //converte a string2 para minúscula
return string1 === string2 //retorna o valor da comparação
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}