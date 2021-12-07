// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    var arrayLength = array.length;
    return arrayLength;
    
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    var arrayInvertido = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    var arraySorted =[];
    for (var i = 0; i < array.length; i++) {
        arraySorted.push(array[i]);
    }
    arraySorted.sort(function(a, b) {
        return a - b;
    });
    return arraySorted;   
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    var arrayPares = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i]);
        }
    }
    return arrayPares;
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    var arrayElevados = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayElevados.push(array[i] ** 2);
        }
    }
    return arrayElevados;
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  var arrayMaior = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > arrayMaior) {
            arrayMaior = array[i];
        }
    }
    return arrayMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    var maiorNumero = [];
    var menorNumero = [];
    var maiorDivisivelPorMenor = [];
    var diferenca = [];
    var maiorNumero = Math.max(num1, num2);
    var menorNumero = Math.min(num1, num2);
    var diferenca = Math.max(num1, num2) - Math.min(num1, num2);
    for (var i = menorNumero; i <= maiorNumero; i++) {
        if (i % menorNumero === 0) {
            maiorDivisivelPorMenor = true;
        } else {
            maiorDivisivelPorMenor = false;

        }
    }
    return {maiorNumero, maiorDivisivelPorMenor, diferenca};

}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    var retornaNPrimeirosPares = [];
    for (var i = 0; i < n; i++) {
        retornaNPrimeirosPares.push(i * 2);
    }
    return retornaNPrimeirosPares;
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}