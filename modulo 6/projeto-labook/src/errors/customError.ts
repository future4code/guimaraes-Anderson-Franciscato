export class customError extends Error {
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
    status: number;
}

