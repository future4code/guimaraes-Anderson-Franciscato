//Exercicio 1

function triangleType(a: number, b: number, c: number) {
    if (a === b && b === c) {
        return "equilatero";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    } else {
        return "scaleno";
    }
}
console.log(triangleType(1, 1, 1));

//Exercicio 2

function threeFavoriteColors(color1: string, color2: string, color3: string) {
    let favoriteColors = [color1, color2, color3];
    favoriteColors.sort();
    return favoriteColors;
}
console.log(threeFavoriteColors("azul", "verde", "vermelho"));

//Exercicio 3

function checkYear(year: number) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkYear(2020));

//Exercicio 4

function numberDiference(number1: number, number2: number) {
    if (number1 > number2) {
        return number1 - number2;
    } else {
        return number2 - number1;
    }
}
console.log(numberDiference(10, 5));

//Exercicio 5

function checkIdCardRenovation (thisYear: number, bornYear: number, idYear: number) {
 let age = thisYear - bornYear;
    let idAge = thisYear - idYear;

    if (age <= 20 ) {
        return idAge >= 5 ? "precisa renovar" : "não precisa renovar";
    } else if (age > 20 && age <= 50) {
        return idAge >= 10 ? "precisa renovar" : "não precisa renovar";
    } else if (age > 50) {
        return idAge >= 15 ? "precisa renovar" : "não precisa renovar";
    } else {
        return "idade inválida";
    }
}
console.log(checkIdCardRenovation(2020, 1990, 2020));