export type recipe = {
    id: number;
    title: string;
    description: string;
    authorId: number;
    createdAt: string;
}

export type recipeOutput = {
    id: number;
    title: string;
    description: string;
    createdAt: string
}

export type recipeInputDTO = {
    title: string;
    description: string;
    token: string;
}

export type recipeDb = {
    id: number;
    title: string;
    description: string;
    authorId: number;
}

