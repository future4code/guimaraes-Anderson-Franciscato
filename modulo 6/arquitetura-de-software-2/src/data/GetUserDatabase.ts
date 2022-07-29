import { BaseDatabase } from "./BaseDatabase";

export class GetDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async getUserById(id: string): Promise<any> {
    const result = await GetDatabase.connection
      .select("*")
      .from(GetDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }
}    

