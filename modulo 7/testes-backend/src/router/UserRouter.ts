import express from "express";
import {UserDatabase} from "../data/UserDatabase";

export const userRouter = express.Router();

const userDatabase = new UserDatabase();

userRouter.get("/users/profile/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userDatabase.getUserByID(id);
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            row: user.row,
        });
    }
    catch (err:any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

