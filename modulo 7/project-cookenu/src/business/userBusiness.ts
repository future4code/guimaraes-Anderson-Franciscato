import { UserDatabase } from "../data/userDatabase";
import { CustomError, InvalidPasswordError, InvalidTokenError, InvalidUserError } from "../error/customError";
import { AuthenticationData } from "../types/authenticationData";
import { UserInputDTO, User, LoginUserDTO, UserOutput } from "../model/user";
import Authenticator from "../services/authenticator";
import HashManager from "../services/hashManager";
import { generateId } from "../services/generateId";

export class UserBusiness {
    private userDB: UserDatabase;
    constructor() {
        this.userDB = new UserDatabase();
        }

        public createUser = async (input: UserInputDTO) => {
            let { name, email, password, role } = input;

            if (!name || !email || !password || !role) {
                throw new InvalidUserError("Missing input");
            }

            if (role !== "NORMAL" && role !== "ADMIN") {
                role = "NORMAL";
            }

            const id = generateId();
            const hashed = await HashManager.hash(password);

            const user: User = {
                id,
                name,
                email,
                password: hashed,
                role,
                };

                await this.userDB.insert(user);
                const token = Authenticator.generateToken({ id, role });

                return token;
                }

                public login = async (input: LoginUserDTO) => {
                    let { email, password } = input;

                    if (!email || !password) {
                        throw new InvalidUserError("Missing input");
                        }

                        const user = await this.userDB.getUserByEmail(email);
                        const compare = await HashManager.compare(password, user.password);

                        if (!compare) {
                            throw new InvalidPasswordError("Incorrect password");
                            }

                            const payload: AuthenticationData = {
                                id: user.id,
                                role: user.role,
                            };

                            const token = Authenticator.generateToken(payload);

                            return { token };
                            }

                            public profile = async (input: any): Promise<UserOutput> => {
                                try {
                                    const tokenData = Authenticator.getData(input);

                                    const user = await this.userDB.getUser(tokenData.id);

                                    if (!user) {
                                        throw new InvalidUserError("User not found");
                                    }

                                    return user;

                                } catch (error:any) {
                                    throw new InvalidPasswordError(error.message);
                                }
                                };
                                public anotherProfile = async (input:any): Promise<UserOutput> => {
                                    const {token, id} = input;
                                    const tokenData = Authenticator.getData(token);
                                    const userExists = await this.userDB.getUser(tokenData.id);

                                    if (!userExists) {
                                        throw new InvalidUserError("User not found");
                                        }

                                        const user = await this.userDB.getUser(id);

                                        if (!user) {
                                            throw new InvalidUserError("User not found");
                                            }

                                            return user;
                                            }
}
                                            






