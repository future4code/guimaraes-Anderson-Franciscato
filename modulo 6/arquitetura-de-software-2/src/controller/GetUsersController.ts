import { GetDatabase } from "../data/GetUserDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Request, Response } from "express";

export class GetUsersController {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const getUserDatabase = new GetDatabase();
      const users = await getUserDatabase;

      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}