import express from "express";
import { Request, Response } from "express";
import { AddressInfo } from "net";
import { createUser } from "./services/createUser";
import { generateId } from "./services/generateId";
import { generateToken } from "./services/generateToken";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }

app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

  
    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
}),
app.post("/user/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userData = {
      email,
      password,
    };

    const id = generateId();

    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
}),

app.get("/user/profile", async (req: Request, res: Response) => {
  const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
})

const userTableName = (userTableName: any) => {
  throw new Error("Function not implemented.");
}