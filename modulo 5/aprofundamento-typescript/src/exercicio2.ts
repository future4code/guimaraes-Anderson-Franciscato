//a, b

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//numerosOrdenados é tipado como objeto, onde a e b são numeros para gerar uma operação. 

// somo é um tipo de função que recebe dois numeros e retorna um numero, ou seja é do tipo number.

//estatisticas é um objeto que recebe maior que é uma função que recebe os números ordenados que são numbers, menor é o mesmo que recebe o menor número de números ordenados, média é uma operação que é do tipo number.

//estatisticas é um parametro que retorna os dados acima, logo é do tipo number.

function obterEstatisticas(numeros: number[]): { maior: number, menor: number, media: number } {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//c

const amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: function (): { maior: number, menor: number, media: number } {
        return obterEstatisticas(this.numeros)
    }
}