import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { userInputsDTO } from "../model/Users/userInputsDTO";
import { addFriendsDTO } from "../model/Users/addFriendsDTO";
import { endFriendshipDTO } from "../model/Users/endFriendshipDTO";

export class UserController {
    getUserById(arg0: string, getUserById: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private userBusiness: UserBusiness) { }

    public async createUser(req: Request, res: Response) {
        const user = req.body as userInputsDTO;
        try {
            await this.userBusiness.createUser(user);
            res.status(200).send({
                message: "User created successfully"
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
    public async getAllUsers(req: Request, res: Response) {
        try {
            const allUsers = await this.userBusiness.getAllUsers();
            res.status(200).send({
                message: "All users found",
                allUsers
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
    public async addFriend(req: Request, res: Response) {
        const { user_id, friend_id } = req.body as addFriendsDTO;
        try {
            await this.userBusiness.addFriend(user_id, friend_id);
            res.status(200).send({
                message: "Friend added successfully"
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
    public async checkFriendship(req: Request, res: Response) {
        const { user_id, friend_id } = req.body as addFriendsDTO;
        try {
            const friendship = await this.userBusiness.checkFriendship(user_id, friend_id);
            res.status(200).send({
                message: "Friendship found",
                friendship
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
    public async endFriendship(req: Request, res: Response) {
        const { user_id, friend_id } = req.body as endFriendshipDTO;
        try {
            await this.userBusiness.endFriendship(user_id, friend_id);
            res.status(200).send({
                message: "Friendship ended successfully"
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}

