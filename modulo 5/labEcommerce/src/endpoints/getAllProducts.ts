import { Request, Response } from "express";
import knex from "knex";
import connection from "../connection";
import { Express } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await connection.select().from("labecommerce_products");
        res.status(200).json({
            message: "Products retrieved successfully",
            products: products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving products",
            error: error
        });
    }
}
export default getAllProducts;
