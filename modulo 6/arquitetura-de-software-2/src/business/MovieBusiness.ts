import { MovieDatabase } from "../data/MovieDatabase";
import { generateId } from "../services/generateId";
import { MovieDTO } from "../model/movieDTO";

export class MovieBusiness {
    create(input: MovieDTO) {
      throw new Error("Method not implemented.");
    }
    getAllMovie() {
        throw new Error("Method not implemented.");
    }
    public createMovie = async ( input: MovieDTO ): Promise<void> => {
    try {
        const { title, description, duration_in_minutes, year_of_release } = input;

        if (!title || !description || !duration_in_minutes || !year_of_release) {
        throw new Error("Dados inválidos (title, description, duration_in_minutes, year_of_release)");
        }
    
        const id: string = generateId();
    
        const movieDatabase = new MovieDatabase();
        await movieDatabase.create({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
        });
    }
    catch (error:any) {
        throw new Error(error.message);
    }}
}
    
