enum yearAges {
    preHistória = -100000,
    antiguidade = -4000,
    idadeMedia = 476,
    idadeModerna = 1453,
    idadeContemporânea = 1789
}

const year : number = 2100; //Number(prompt("Digite um ano: ")); 

const acOrDc : string = year >= 0 ? " AC" : " DC";

switch (true) {
    case year >= yearAges.preHistória && year <= yearAges.antiguidade:
        console.log(`O ano ${year} é um ano da pré-histórico.`);
        break;
    case year >= yearAges.antiguidade && year <= yearAges.idadeMedia:
        console.log(`O ano ${year} é um ano da antiguidade.`);
        break;
    case year >= yearAges.idadeMedia && year <= yearAges.idadeModerna:
        console.log(`O ano ${year} é um ano da idade média.`);
        break;
    case year >= yearAges.idadeModerna && year <= yearAges.idadeContemporânea:
        console.log(`O ano ${year} é um ano da idade moderna.`);
        break;
    case year >= yearAges.idadeContemporânea && year <= yearAges.idadeContemporânea + 311:
        console.log(`O ano ${year} é um ano da idade contemporânea.`);
        break;
    default:
        console.log(`O ano ${year} é uma era desconhecida.`);
        break;
}



