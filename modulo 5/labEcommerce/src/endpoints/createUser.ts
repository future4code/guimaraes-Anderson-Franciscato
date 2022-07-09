import { Request, Response } from "express";
import knex from "knex";
import connection from "../connection";
import { Express } from "express";
import transporter from "../services/mailTransporter";

export const createUser = async (req: Request, res: Response) => {
    const user = {
    id : Math.floor(Math.random() * 100),
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    }
    try {
        const emailInfo = {
            from: '<labecommerce4211132@outlook.com>',
            to: user.email,
            subject: 'Bem-vindo ao Labecommerce',
            text: `Olá ${user.name}, seja bem-vindo ao Labecommerce!`,
            html: `<h1>Olá ${user.name}</h1>
            <p>Seja bem-vindo ao Labecommerce!</p>`
        }
        const result = await connection.insert(user).into("labecommerce_users");
        res.status(200).json({
            message: "User created successfully",
            user: user
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error
        });
    }
}
export default createUser;