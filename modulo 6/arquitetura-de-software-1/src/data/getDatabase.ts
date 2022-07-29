import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/user";

export class GetDatabase extends BaseDatabase {
    async get(): Promise<User[]> {

        try {
            const users: User[] = [];

            const result = await GetDatabase.connection()
            .select("*")
            .from("User_Arq");

            for (let user of result) {
                users.push({
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    password: user.password
                });
            }
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}