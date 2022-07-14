import { Request, Response } from "express";
import knex from "knex";
import connection from "../connection";
import { Express } from "express";

export const createPurchase = async (req: Request, res: Response) => {
    const purchase = {
        id : Math.floor(Math.random() * 100),
        user_id : req.body.user_id,
        product_id : req.body.product_id,
        quantity : req.body.quantity,
        price : ('INSERT INTO labecommerce_purchases (user_id, product_id, quantity, price) (SELECT price FROM labecommerce_products WHERE id = ${product_id})'),
        total : ('INSERT INTO labecommerce_purchases (user_id, product_id, quantity, total) (SELECT price * quantity FROM labecommerce_products WHERE id = ${product_id})'),
    }
    try {
        const result = await connection.insert(purchase).into("labecommerce_purchases");
        res.status(200).json({
            message: "Purchase created successfully",
            purchase: purchase
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating purchase",
            error: error
        });
    }
}
export default createPurchase;
