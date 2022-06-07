import express from "express";
import { v4 as generateId } from 'uuid';
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
    res.send("pong");
    }
);
