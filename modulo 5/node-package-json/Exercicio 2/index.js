// Exercicio 2

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
switch (operation) {
    case 'add':
        console.log(num1 + num2);
        break;
    case 'subt':
        console.log(num1 - num2);
        break;
    case 'mult':
        console.log(num1 * num2);
        break;
    case 'div':
        console.log(num1 / num2);
        break;
    default:
        console.log('Operação inválida');
        break;
}

console.log (operation);