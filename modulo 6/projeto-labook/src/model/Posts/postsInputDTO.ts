import { PostType } from "../../Types/post";

export interface postsInputDTO {
    photo: string;
    description: string;
    type: PostType;
    user_id: string;
}
