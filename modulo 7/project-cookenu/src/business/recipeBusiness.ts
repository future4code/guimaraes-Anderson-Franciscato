import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/userDatabase";
import { CustomError, InvalidTokenError, InvalidUserError } from "../error/customError";
import { recipeInputDTO, recipeOutput } from "../model/recipes";
import authenticator from "../services/authenticator";
import { CreationDate } from "../services/creationDate";
import { generateId } from "../services/generateId";

export class RecipeBusiness {
    private recipeDatabase: RecipeDatabase;
    private userDB: UserDatabase;
    constructor() {
        this.recipeDatabase = new RecipeDatabase();
        this.userDB = new UserDatabase();
        }

        public createRecipe = async (input: recipeInputDTO) => {
            const { title, description, token} = input;

            if (!title || !description) {
                throw new InvalidUserError("Missing input");
            }

            if (!token) {
                throw new InvalidTokenError("Missing input");
                }

                const id:string = generateId();
                const tokenData = authenticator.getData(token);
                const userExists = await this.userDB.getUser(tokenData.id);

                if (!userExists) {
                    throw new InvalidUserError("User not found");
                    }

                if (!tokenData) {
                    throw new InvalidTokenError("Invalid token");
                    }
                const date = CreationDate(new Date());

                const recipe = {
                    id, 
                    title,
                    description,
                    authorId: tokenData.id,
                    createdAt: date
                    };

                const result = this.recipeDatabase.createRecipe(recipe);

                return result;

            }

            public getRecipe = async (input: any): Promise<recipeOutput> => {
                const { id, token } = input;

                if (!id || !token) {
                    throw new InvalidUserError("Missing input");
                    }
                const recipe = await this.recipeDatabase.getRecipe(id);

                if (!recipe) {
                    throw new Error("Recipe not found");
                    }

                if (!token) {
                    throw new InvalidTokenError("Invalid token");
                    }

                    return recipe;
            }

} 






                



