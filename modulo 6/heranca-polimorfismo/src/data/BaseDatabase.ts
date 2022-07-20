import knex from "knex";
import dotenv from "dotenv";

dotenv.config();


export class BaseDatabase {
    private static TABLE_NAME: string;

    public async getConnection(){
        return knex({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            },
        });
    }
}

