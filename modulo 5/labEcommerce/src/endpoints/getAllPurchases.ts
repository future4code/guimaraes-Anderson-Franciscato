import { Request, Response } from "express";
import knex from "knex";
import connection from "../connection";
import { Express } from "express";

export const getAllPurchasesFromUser = async (req: Request, res: Response) => {
    try {
        const purchases = await connection.select().from("labecommerce_purchases").where("user_id", req.params.user_id);
        res.status(200).json({
            message: "Purchases retrieved successfully",
            purchases: purchases
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving purchases",
            error: error
        });
    }
}
export default getAllPurchasesFromUser;