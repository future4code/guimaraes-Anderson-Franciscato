import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/user";

export class UserDatabase extends BaseDatabase {
  public async insertUser(
    user: User
  ): Promise<void> {
    try {
      await UserDatabase.connection.insert({
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password
      }).into("User_Arq");
    }
    catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
