let data : string = "10/10/2020";
let nome : string = "João";

function separaData(data: string): string[] {
    let dataArray = data.split("/");
    return dataArray;
}

let dataArray = separaData(data);

let dia = Number(dataArray[0]);
let mes = Number(dataArray[1]);
let ano = Number(dataArray[2]);

console.log (`Ola me chamo ${nome} nasci no dia ${dia} do mes ${mes} de ${ano}`);