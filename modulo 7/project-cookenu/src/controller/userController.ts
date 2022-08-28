import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { LoginUserDTO, UserInputDTO } from "../model/user";

export class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness();
    }

    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role } = req.body;
            const userInput: UserInputDTO = {
                name,
                email,
                password,
                role
                };

            const token = await this.userBusiness.createUser(userInput);

            res.status(201).send({ message: "created user successfully" , token });

            } catch (error:any) {
                res.status(400).send({ message: error.message });
            }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const userInput: LoginUserDTO = {
                email,
                password
            };

            const token = await this.userBusiness.login(userInput);

            res.status(200).send({ message: "logged in successfully", token });

            } catch (error:any) {
                res.status(400).send({ message: error.message });

            }
        }

        public anotherProfile = async (req: Request, res: Response) => {
            try {
                const token = req.headers.authorization;
                const id = req.params.id;

                const info = {
                    id,
                    token
                }

                const result = await this.userBusiness.anotherProfile(info);

                res.status(200).send(result);
                } catch (error:any) {
                    res.status(400).send({ message: error.message });

                }
            }

            public profile = async (req: Request, res: Response) => {
                try {
                    const token = req.headers.authorization;

                    const result = await this.userBusiness.profile(token);

                    res.status(200).send(result);
                    } catch (error:any) {
                        res.status(400).send({ message: error.message });
                    }
    }
}
