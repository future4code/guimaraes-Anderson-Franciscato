import express from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { UserController } from "../controller/userController";
import { Request, Response } from "express";

export const userRouter = express.Router();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userController = new UserController(userBusiness);

userRouter.post("/create", userController.createUser);
userRouter.get("/all", userController.getAllUsers);
userRouter.get("/get/:id", userController.getUserById);
userRouter.put("/addFriend/:user_id", (req: Request, res: Response) => {
    const { user_id, friend_id } = req.params;
    try {
        userBusiness.addFriend(user_id, friend_id);
        res.status(200).send({
            message: "Friend added"
        });
    } catch (error:any) {
        res.status(400).send({
            message: error.message
        });
    }
}
);

