import { generateId } from "../services/generateId";
import { Request as req, Response as res } from "express";
import { createUser } from "../services/createUser";
import { generateToken } from "../services/generateToken";


export const EmailValidation = async (req: req, res: res) => {
    try {
        if (!req.body.email || !req.body.email.indexOf("@")) {
            throw new Error(`Invalid email`);
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error(`Invalid password`);
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const id = generateId();

        await createUser(id, userData.email, userData.password);

        const token = generateToken(id);

        res.status(200).json({
            message: "User created successfully",
            token: token
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
}
