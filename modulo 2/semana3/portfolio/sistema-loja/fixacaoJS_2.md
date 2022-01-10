function calculaPrecoTotal(quantidade) {
   // Escreva seu código aqui
   var preco12 = 1.00;
   var precoUnder = 1.30;
   
    if (quantidade < 12) {
        return quantidade * precoUnder;
    }
    else {
        return quantidade * preco12;
    }

  }