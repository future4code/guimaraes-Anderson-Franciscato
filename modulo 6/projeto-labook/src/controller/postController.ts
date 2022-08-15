import { Request, Response } from "express";
import { PostBusiness } from "../Business/PostBusiness";
import { postsInputDTO } from "../model/Posts/postsInputDTO";

export class PostController {
    constructor(private postBusiness: PostBusiness) { }

    public async createPost(req: Request, res: Response) {
        const post = req.body as postsInputDTO;
        try {
            await this.postBusiness.createPost(post);
            res.status(200).send({
                message: "Post created successfully"
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
    public async getAllPosts(req: Request, res: Response) {
        try {
            const allPosts = await this.postBusiness.getAllPosts();
            res.status(200).send({
                message: "All posts found",
                allPosts
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async getPostById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const post = await this.postBusiness.getPostById(id);
            res.status(200).send({
                message: "Post found",
                post
            });
        } catch (error:any) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}

