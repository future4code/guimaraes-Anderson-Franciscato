import express from "express";
import { PostBusiness } from "../Business/PostBusiness";
import { PostDatabase } from "../data/PostDatabase";
import { PostController } from "../controller/postController";
import { Request, Response } from "express";

export const postRouter = express.Router();

const postDatabase = new PostDatabase();
const postBusiness = new PostBusiness(postDatabase);
const postController = new PostController(postBusiness);

postRouter.post("/create", postController.createPost);
postRouter.get("/all", postController.getAllPosts);
postRouter.get("/get/:id", postController.getPostById);
postRouter.put("/friendsPosts/:user_id", (req: Request, res: Response) => {
    const { user_id, friend_id2 } = req.params;
    try {
        const friendPosts = postBusiness.showFriendPosts(user_id, friend_id2);
        res.status(200).send({
            message: "All posts found",
            friendPosts
        });
    } catch (error:any) {
        res.status(400).send({
            message: error.message
        });
    }
}
);

