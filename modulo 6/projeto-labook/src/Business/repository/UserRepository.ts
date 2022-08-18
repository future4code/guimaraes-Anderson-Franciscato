import { User } from "../../Types/user";
import { friendRelation } from "../../Types/friendRelation";

export interface UserRepo {
    createUser(user: User): Promise<void>;
    getUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    addFriend(user_id: string, friend_id: string): Promise<void>;
    checkFriendship(user_id: string, friend_id: string): Promise<friendRelation>;
    endFriendship(user_id: string, friend_id: string): Promise<void>;
}

