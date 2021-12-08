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
    var retornaTriangulo = [];
    if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
        retornaTriangulo = "Equilátero";
    }
    else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        retornaTriangulo = "Isósceles";
    }
    else {
        retornaTriangulo = "Escaleno";
    }
    return retornaTriangulo;

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    var segundoMaior = 0;
    var segundoMenor = 0;
    var arrayOrdenado = [];
    for (var i = 0; i < array.length; i++) {
        arrayOrdenado.push(array[i]);
    }
    arrayOrdenado.sort(function(a, b) {
        return a - b;
    }

    
    );
    segundoMaior = arrayOrdenado[arrayOrdenado.length - 2];
    segundoMenor = arrayOrdenado[1];
    return [segundoMaior, segundoMenor];
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {


}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    var pessoaAnonimizada = {};
    pessoaAnonimizada.nome = "ANÔNIMO";
    pessoaAnonimizada.idade = pessoa.idade;
    pessoaAnonimizada.email = pessoa.email;
    pessoaAnonimizada.endereco = pessoa.endereco;

    return pessoaAnonimizada;

   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    var pessoasAutorizadas = [];
    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 14 && pessoas[i].idade <= 60 && pessoas[i].altura >= 1.5) {
            pessoasAutorizadas.push(pessoas[i]);
        }
    }
    return pessoasAutorizadas;

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    var pessoasNaoAutorizadas = [];
    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade <= 14 || pessoas[i].idade > 60 || pessoas[i].altura < 1.5) {
            pessoasNaoAutorizadas.push(pessoas[i]);
        }
    }
    return pessoasNaoAutorizadas;

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