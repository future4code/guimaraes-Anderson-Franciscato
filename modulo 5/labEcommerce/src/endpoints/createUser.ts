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
        const result = await connection.insert(user).into("labecommerce_users");
        res.status(200).json({
            message: "User created successfully",
            user: user
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Welcome to LabeCommerce",
            html: `<h1>Welcome to LabeCommerce</h1>
            <p>You have successfully created an account on LabeCommerce. You can now login to your account ${user.name}.</p>`
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error
        });
    }
}
export default createUser;