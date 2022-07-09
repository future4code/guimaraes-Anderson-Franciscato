import { Request, Response } from "express";
import knex from "knex";
import connection from "../connection";
import { Express } from "express";

export const cadastroProduto = async (req: Request, res: Response) => {
    const product = {
        id: Math.floor(Math.random() * 100),
        name: req.body.name,
        price: req.body.price,
        image_url: req.body.image_url
    }
    try {
        const produto = await connection.insert(product).into("labecommerce_products");
        res.status(200).json({
            message: "Produto cadastrado com sucesso",
            produto: product
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao cadastrar produto",
            error: error
        });
    }
}
export default cadastroProduto;