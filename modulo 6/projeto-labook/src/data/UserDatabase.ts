import { BaseDatabase } from "./BaseDatabase";
import { User } from "../Types/user";
import { friendRelation } from "../Types/friendRelation";

export class UserDatabase extends BaseDatabase {
    private TABLE_NAME: string = "labebook_user";

    public createUser = async ({
        id, name, email, password}: User): Promise<void> => {
            try {
                await UserDatabase.connection
                    .insert({
                        id,
                        name,
                        email,
                        password
                    })
                    .into(this.TABLE_NAME);
            }
            catch (error:any) {
                throw new Error(error.sqlMessage || error.message);
            }
    }

    public getAllUsers = async (): Promise<User[]> => {
        try {
            const result = await UserDatabase.connection
                .select("*")
                .from(this.TABLE_NAME);
            return result;
        }
        catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public addFriend = async (user_id: string, friend_id: string): Promise<void> => {
        try {
            await UserDatabase.connection
                .insert({
                    user_id,
                    friend_id
                })
                .into("labebook_friend");
        }
        catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getFriends = async (user_id: string): Promise<friendRelation[]> => {
        try {
            const result = await UserDatabase.connection
                .select("*")
                .from("labebook_friend")
                .where({ user_id });
            return result;
        }
        catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public endFriendship = async (user_id: string, friend_id: string): Promise<void> => {
        try {
            await UserDatabase.connection
                .delete()
                .from("labebook_friend")
                .where({ user_id, friend_id });
        }
        catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

