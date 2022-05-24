//Exercicio 1 
//a) para acessar o parâmetro passado na linha de comando, usamos a variável process.argv

//b) 

const nome = process.argv[2];
const idade = process.argv[3];

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

//c)

//const nome = process.argv[2];
//const idade = process.argv[3];
//const idadeNova = Number(idade) + 7;

//console.log(`Olá, ${nome}! Você tem ${idade} anos, e em sete anos você terá ${idadeNova} anos.`);

