export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

export type UserOutput = {
    id: number;
    name: string;
    email: string;
}

export type EditUserInput = {
    name: string;
    nickname: string;
    email: string;
}

export interface UserInputDTO {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface LoginUserDTO {
    email: string;
    password: string;
}

export interface EditUserInputDTO {
    name: string;
    nickname: string;
    email: string;
}

enum USER_ROLES {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}
