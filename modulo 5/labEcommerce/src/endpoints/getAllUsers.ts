import { Request, Response } from "express";
import knex from "knex";
import connection from "../connection";
import { Express } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await connection.select().from("labecommerce_users");
        res.status(200).json({
            message: "Users retrieved successfully",
            users: users
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving users",
            error: error
        });
    }
}
export default getAllUsers;