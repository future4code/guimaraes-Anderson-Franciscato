/* //Exercicios de interpretação de código
//Exercicio 1
//a) Sera impresso no console os valores 10 e 50
//b) Sem o console.log nada sera impresso no console
 */

// Exercicio 2
//a) o texto cria uma função para colocar o texto digitado em minusculas e acrescentar a palavra cenoura
//b) o primeiro vai aparecer true, o segundo false por ter CENOURA em maisculae e o terceiro true.

// Exercicios de criação de código
//Exercicio 1
/* Nome = "Anderson";
Idade = "26";
Cidade = "Marilia"
Profissao = "estudante"
function imprimir() {
    console.log("Eu sou " + Nome + " tenho " + Idade + " anos, moro em " + Cidade + " e sou " + Profissao);
}
return imprimir();
 */
//b)

/* function imprimir() {
let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let cidade = prompt("Digite sua cidade");
let profissao = prompt("Digite sua profissao");
let informacoes = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
console.log(informacoes);
}
imprimir();

 */

// Exercicio 2
/* //a)
function soma () {
let a = prompt("Digite um numero");
let b = prompt("Digite outro numero");
let soma = Number(a) + Number (b);
console.log(soma);
}
soma();
 */
//b) 
/* function maior () {
let a = prompt("Digite um numero");
let b = prompt("Digite outro numero");
let maior = Number(a) > Number (b);
console.log(maior);
}
maior(); */
//c) 
/* function par () {
let a = prompt("Digite um numero");
let par = Number(a) % 2 === 0;
console.log(par);
}
par(); */
//d)
/* function tamanhoEMaiusculas () {
    let mensagem = prompt("Digite uma mensagem");
    let tamanho = mensagem.length;
    let maiusculas = mensagem.toUpperCase();
    console.log(tamanho, maiusculas);

}
tamanhoEMaiusculas(); */

// Exercicio 3
/* function operacoesBasicas () {
    let a = prompt("Digite um numero");
    let b = prompt("Digite outro numero");
    let soma = Number(a) + Number (b);
    let subtracao = Number(a) - Number (b);
    let multiplicacao = Number(a) * Number (b);
    let divisao = Number(a) / Number (b);
    console.log("Numeros inseridos: " + a + " e " + b);
    console.log("Soma: " + soma);
    console.log("Subtracao: " + subtracao);
    console.log("Multiplicacao: " + multiplicacao);
    console.log("Divisao: " + divisao);
}
operacoesBasicas(); */

//Desafio 1
//a)
/* function impression () {
    let parametro = prompt("Digite um numero:");
    console.log(parametro);
}
impression();
 */
//b)
/* function para() {
    let num1 = prompt("Digite um numero:");
    let num2 = prompt("Digite outro numero:");
    let soma = Number(num1) + Number (num2);
    console.log ("Soma: " + soma);
    
};

function impression () {
    let parametro = para();
    console.log(parametro);
}
impression(); */

//Desafio 2
/* function pitagoras () {
    let a = prompt("Digite um numero:");
    let b = prompt("Digite outro numero:");
    let c = Math.pow(a, 2) + Math.pow(b, 2);
    let hipotenusa = Math.sqrt(c);
    console.log("A hipotenusa é: " + hipotenusa);
}
pitagoras(); */