import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";


class HashManager {
    public async hash(input: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const hashed = await bcrypt.hash(input, salt);
        
        return hashed;
    }
    public async compare(input: string, hashed: string): Promise<boolean> {
        const result = await bcrypt.compare(input, hashed);
        return result;
    }
}

export default new HashManager();