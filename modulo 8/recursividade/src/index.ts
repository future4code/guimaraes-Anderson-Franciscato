//exercicio 1 a 
// Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
const printNumber = (n: number) => {
    if (n >= 0) {
        for (let i = 0; i <= n; i++) {
            console.log(i)
        }
    }
}
printNumber(10)

//exercicio 1 b
// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
const printNumber2 = (n: number) => {
    if (n >= 0) {
        for (let i = n; i >= 0; i--) {
            console.log(i)
        }
    }
}
printNumber2(10)

//exercicio 2
//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
const sumNumber = (n: number): number => {
    if (n === 0) {
        return 0
    }
    return n + sumNumber(n - 1)
}
console.log(sumNumber(10))

//exercicio 3
//Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
const sumNumber2 = (n: number): number => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}   
console.log(sumNumber2(10))

//exercicio 4
//Escreva uma função recursiva que consiga imprimir todos os elementos de um array
const printArray = (array: number[]): void => {
    if (array.length === 0) {
        return
    }
    console.log(array[0])
    printArray(array.slice(1))
}
printArray([1, 2, 3, 4, 5])
