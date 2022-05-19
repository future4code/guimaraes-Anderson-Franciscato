//  Exercicio 3

const thingsToDo = ['Comprar pão', 'Comprar leite', 'Comprar carne'];
const addThing = process.argv[2];  
thingsToDo.push(addThing);
console.log(thingsToDo);