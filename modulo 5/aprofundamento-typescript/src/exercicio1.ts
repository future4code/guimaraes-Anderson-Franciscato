//a 

const minhaString: string = "Hello World";

//ao atribuir um valor numérico a uma variável, a variavel da erro, já que a tipagem é string.

//b

const meuNumero: number = 10;

//Para a variavel aceitar numeros e strings é necessário atribuir a tipagem do tipo any, ou do tipo ou, onde eu posso adicionar um ou outro.

//c

type person = {
    name: string,
    age: number,
    favoriteColor: string
}

const pessoa: person = {
    name: "João",
    age: 20,
    favoriteColor: "blue"
}

const pessoa1: person = {
    name: "Maria",
    age: 20,
    favoriteColor: "red"
}

const pessoa2: person = {
    name: "Pedro",
    age: 20,
    favoriteColor: "green"
}

enum rainbowColor {
    red = "red",
    orange = "orange",
    yellow = "yellow",
    green = "green",
    blue = "blue",
    indigo = "indigo",
    violet = "violet"
}

console.log (rainbowColor.red);

