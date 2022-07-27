import { UserDatabase } from "../data/userDatabase";
import { v4 as generateId } from "uuid";

export class UserBusiness {
    createUser = async (input: any): Promise<void> => {
        try {
            const { email, name, password } = input;

            if (!email || !name || !password) {
                throw new Error("Invalid input");
            }

            const id: string = generateId();

            const UseDatabase = new UserDatabase();
            await UseDatabase.insertUser({
                id,
                email,
                name,
                password
            });
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}