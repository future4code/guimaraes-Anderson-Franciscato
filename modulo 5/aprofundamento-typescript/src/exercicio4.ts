type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// para transpilar um arquivo: "tsc <nome_do_arquivo>.ts"
//apenas exercutar a transpilação do código com dentro da pasta src com a funçao dentro do package.json "ex4": "tsc && node build/exercicio4.js"
// parar transpilar varios arquivos: "tsc *.ts" 
