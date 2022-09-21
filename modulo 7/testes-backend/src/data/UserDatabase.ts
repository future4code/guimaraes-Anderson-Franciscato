import BaseDataBase from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDataBase {
  private static TABLE_NAME = "User_arq";

   public async createUser(user: any): Promise<void> {
      try {
         await UserDatabase.connection
            .insert({
               id: user.id,
               name: user.name,
               email: user.email,
               password: user.password,
               row : user.row,
            })
            .into(UserDatabase.TABLE_NAME);
      }

      catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

   public async getUserByID (id: string): Promise<any> {
      try {
         const result = await UserDatabase.connection
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ id });

         return result[0];
      }

      catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }
}






