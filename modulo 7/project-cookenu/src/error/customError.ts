export class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends CustomError {
    constructor(message: string) {
        super("Not Found: " + message);
    }
}

export class BadRequestError extends CustomError {
    constructor(message: string) {
        super("Bad Request: " + message);
    }
}

export class UnauthorizedError extends CustomError {
    constructor(message: string) {
        super("Unauthorized: " + message);
    }
}

export class InvalidNameError extends CustomError {
    constructor(message: string) {
        super("Invalid Name: " + message);
    }
}

export class InvalidEmailError extends CustomError {
    constructor(message: string) {
        super("Invalid Email: " + message);
    }
}

export class InvalidPasswordError extends CustomError {
    constructor(message: string) {
        super("Invalid Password: " + message);
    }
}

export class InvalidTokenError extends CustomError {
    constructor(message: string) {
        super("Invalid Token: " + message);
    }
}

export class InvalidUserError extends CustomError {
    constructor(message: string) {
        super("Invalid User: " + message);
    }
}

export class MissingTokenError extends CustomError {
    constructor(message: string) {
        super("Missing Token: " + message);
    }
}

export class GenericError extends CustomError {
    constructor(message: string) {
        super("Please enter a valid information: " + message);
    }
}

