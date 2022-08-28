import { AuthenticationData } from "../types/authenticationData";
import * as jwt from "jsonwebtoken";

class Authenticator {
    public generateToken(
        input: AuthenticationData
    ): string {
        const token = jwt.sign(
        {
            id: input.id,
            role: input.role,
        },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRES_IN }
        );
        return token;
    }
    
    public getData(
        token: string
    ): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
        id: payload.id,
        role: payload.role,
        };
        return result;
    }
}

export default new Authenticator();
