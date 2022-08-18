import { application, Request, Response } from "express";
import knex from "knex";
import connection from "./connection";
import app from "./app";
import { Express } from "express";

const server: Express = app;
//Create user table 
const createUserTable = async () => {
    const userTable = await connection.raw(`
        CREATE TABLE IF NOT EXISTS Users (
            id INT NOT NULL AUTO_INCREMENT, 
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        )
    `);
    console.log(userTable);
}
app.get("/users1", createUserTable);

//Create new user

const createUser = async (
    id: number,
    name: string,
    password: string,
    email: string
  ) => {
    await connection
      .insert({
        id: id,
        name: name,
        password: password,
        email: email
      })
      .into("Users")
  }

  app.post('/user', async (req: Request, res: Response) => {
    try {
      const { name, password, email } = req.body

      if (!name && !password && !email) {
        throw new Error("Please, check again!")
      }

      await createUser(
        Math.floor(Math.random() * 100),
        req.body.name,
        req.body.password,
        req.body.email
      )
      res.status(200).send({
        message: "User created successfully!"
      });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  })

//Get all users

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await connection.raw(`
            SELECT * FROM users;
        `);
        res.json(users [0]);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

app.get("/users", getUsers);



