import { generateId } from "./generateId";


export const generateToken = () => {
    const token = jwt.sign({ id: generateId() }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}
