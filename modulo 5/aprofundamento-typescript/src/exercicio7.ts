const arrayDeRoupas = [
    {
        nome: 'Camisa',
        preco: 50,
        desconto: 0.05,
        categoria: 'verao'
    },
    {
        nome: 'Calça',
        preco: 100,
        desconto: 0.1,
        categoria: 'inverno'
    },
    {
        nome: 'toalha',
        preco: 30,
        desconto: 0.04,
        categoria: 'banho'
    },
    {
        nome: 'cueca',
        preco: 15,
        desconto: 0.07,
        categoria: 'intima'
    }
];

function calculaDesconto(preco : number, desconto : number) : number {
    return preco - (preco * desconto);
}

function retornaArrayComDesconto (array : any[]) : any[] {
    return array.map((roupa) => {
        return {
            nome: roupa.nome,
            preco: calculaDesconto(roupa.preco, roupa.desconto),
            categoria: roupa.categoria
        }
    });
}

console.log(retornaArrayComDesconto(arrayDeRoupas));



