import { CustomError } from "../error/customError";
import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    insert(user: User) {
        throw new Error("Method not implemented.");
    }
    private tableName = "Cookenu_users";

    public createUser = async (user: User) => {
        try {
            await UserDatabase.connection
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                })
                .into(this.tableName);
        } catch (error: any) {
            throw new CustomError(error);
        }
    }

    public getUserByEmail = async (email: string): Promise<User> => {
        try {
            const result = await UserDatabase.connection(this.tableName)
                .select("id", "name", "email", "password", "role")
                .where({ email });

            return result[0];
        } catch (error: any) {
            throw new CustomError(error);
        }
    }

    public getUser = async (id: string) => {
        try {
            const result = await UserDatabase.connection(this.tableName)
            .select("id", "name", "email")
            .where({ id });

            return result[0];
            } catch (error: any) {
                throw new CustomError(error);
        }
    }
}

