export type recipe = {
    id: string;
    title: string;
    description: string;
    authorId: string;
    createdAt: string;
}

export type recipeOutput = {
    id: string;
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
    id: string;
    title: string;
    description: string;
    authorId: string;
}

