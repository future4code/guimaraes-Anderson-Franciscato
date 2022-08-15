import { BaseDatabase } from "./BaseDatabase";
import { Post } from "../Types/post";
import { PostFeed } from "../Types/postFeed";

export class PostDatabase extends BaseDatabase {
    private TABLE_NAME: string = "post_to_labebook";

    public async createPost({id, user_id, photo, description, type, creation_date}: Post): Promise<void> {
        await PostDatabase.connection
            .insert({
                id,
                user_id,
                photo,
                description,
                type,
                creation_date
            })
            .into(this.TABLE_NAME);
    }
    

    public async getAllPosts(): Promise<Post[]> {
        try{
            const posts: Post[] = [];
            const result = await PostDatabase.connection(this.TABLE_NAME)
                .select("*")
                .from(this.TABLE_NAME);
            return result;
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getPostById(id: string): Promise<Post> {
        const result = await PostDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({ id });
        return result[0];
    }

    public async getFriendsPosts(user_id: string, friend_id2: string): Promise<Post[]> {
        const result = await PostDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({ user_id, friend_id2 });
        return result;
    }

    public async showFriendPosts(user_id: string, friend_id2: string): Promise<Post[]> {
        const result = await PostDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({ user_id, friend_id2 });
        return result;
    }
}




