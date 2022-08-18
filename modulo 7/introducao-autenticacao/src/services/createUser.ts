import { generateId } from "./generateId";
import { Request as req, Response as res } from "express";
import { generateToken } from "./generateToken";
import { AuthenticationData } from "../types/authentication";



export const createUser = async (id: string, email: string, password: string): Promise<void> => {
    await createUser(id, email, password);
}
