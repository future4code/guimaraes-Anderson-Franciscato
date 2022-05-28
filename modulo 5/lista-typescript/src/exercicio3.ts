enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

let movieName: string = "Dune";
let movieGenre: GENERO = GENERO.DRAMA;
let movieYear: number = 2021;

function addMovie(name: string, genre: GENERO, year: number, rating?: void | number): void {

  if (rating) {
    console.log(`Nome ${name}, ano de lançamento (${year}), genero ${genre}, nota ${rating}`);
  } else {
    console.log(`Nome ${name}, ano de lançamento (${year}), genero ${genre}`);
  }
}
