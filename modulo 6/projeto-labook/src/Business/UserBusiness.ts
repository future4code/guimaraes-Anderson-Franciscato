import { addFriendsDTO } from "../model/Users/addFriendsDTO";
import { userInputsDTO } from "../model/Users/userInputsDTO";
import { generateId } from "../services/generateId";
import { User } from "../Types/user";
import { UserRepo } from "./repository/UserRepository";
import { friendRelation } from "../Types/friendRelation";
import { endFriendshipDTO } from "../model/Users/endFriendshipDTO";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    constructor(private userRepo: UserRepo) { }
    public createUser = async (user: userInputsDTO): Promise<void> => {
        try {
            const { name, email, password } = user;
            const id = generateId();
            const newUser = new User (id, name, email, password);
            await this.userRepo.createUser(newUser);
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getAllUsers = async (): Promise<User[]> => {
        try {
            const allUsers = await this.userRepo.getAllUsers();
            return allUsers;
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public addFriend = async (user_id: string, friend_id: string): Promise<void> => {
        try {
            await this.userRepo.addFriend(user_id, friend_id);
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public checkFriendship = async (user_id: string, friend_id: string): Promise<friendRelation> => {
        try {
            const friendship = await this.userRepo.checkFriendship(user_id, friend_id);
            return friendship;
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public endFriendship = async (user_id: string, friend_id: string): Promise<void> => {
        try {
            await this.userRepo.endFriendship(user_id, friend_id);
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

