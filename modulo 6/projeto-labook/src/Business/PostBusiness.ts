import { PostDatabase } from "../data/PostDatabase";
import { Post } from "../Types/post";
import { creationMoment } from "../services/creationMoment";
import { generateId } from "../services/generateId";
import { PostFeed } from "../Types/postFeed";
import { postsInputDTO } from "../model/Posts/postsInputDTO";
import { PostRepo } from "./repository/PostRepository";


export class PostBusiness {
    constructor(private postDatabase: PostDatabase) { }
    public createPost = async (post: postsInputDTO): Promise<void> => {
        try {
            const { user_id, description, photo, type } = post;
            const id = generateId();
            const newPosts = new Posts (id, user_id, description, photo, type);
            await this.postDatabase.createPost(newPosts);
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getAllPosts = async (): Promise<PostFeed[]> => {
        try {
            const allPosts = await this.postDatabase.getAllPosts();
            return allPosts;
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getPostById = async (id: string): Promise<Post> => {
        try {
            const post = await this.postDatabase.getPostById(id);
            return post;
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public showFriendPosts = async (user_id: string, friend_id2: string): Promise<PostFeed[]> => {
        try {
            const friendPosts = await this.postDatabase.showFriendPosts(user_id, friend_id2);
            return friendPosts;
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}
