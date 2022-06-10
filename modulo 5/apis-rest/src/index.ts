import express, {Express} from 'express'
import cors from 'cors'
import { User, users, USER_TYPE } from "./data";
import { Request, Response } from 'express';
const app: Express = express();

app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//get all users

app.get('/allusers', (req, res) => {
    try {
        res.status(200).send(users);
    }
    catch (err) {
        res.status(500).send("Náo achei ninguém");
    }
}
);

//get by type

app.get('/users/:type', (req, res) => {
    try {
        const type = req.params.type;
        const filteredUsers = users.filter(user => user.type === type);
        res.status(200).send(filteredUsers);
    }
    catch (err) {
        res.status(500).send("Náo achei ninguém");
    }
}
);

//get by name

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const name = req.query.name as string

    if (!name) {
      errorCode = 422
      throw new Error("Falta o parâmetro de busca!");

    }

    const user = users.filter(u => u.name.toLowerCase() === name.toLowerCase())

    if (!user.length) {
      errorCode = 404
      throw new Error("Usuário não encontrado")      
    }
    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

//Add new user

app.post('/users', (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const { name, email, type, age } = req.body

    if (!name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Faltam parâmetros a serem passados no body");
    }

    if (type != USER_TYPE.NORMAL && type != USER_TYPE.ADMIN) {
      errorCode = 422
      throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
    }

    const newUser: User = {
      id: users.length + 1,
      name: name,
      email: email,
      type: type,
      age: age
    }

    users.push(newUser)
    res.status(201).send(users)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

