import { Post } from "../../Types/post";
import { PostFeed } from "../../Types/postFeed";
export interface PostRepo {
    createPost(post: Post): Promise<void>;
    getAllPosts(): Promise<PostFeed[]>;
    getPostById(id: string): Promise<Post>;
    showFriendPosts(user_id: string, friend_id2: string): Promise<PostFeed[]>;
}
