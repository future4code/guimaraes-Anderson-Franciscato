import express, {Express} from 'express'
import cors from 'cors'
import {movements, users, newUser, Accounts} from './data'
import moment from "moment";
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

// all accounts 
app.get('/accounts', (req: Request, res: Response) => {
  try {
    res.status(200).send(Accounts);
  }
  catch (err) {
    res.send(500).send(err);
    }
}
);

// new account
