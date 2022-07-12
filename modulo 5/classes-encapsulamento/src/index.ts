import { Request, Response } from "express";
import { app } from "./app";
import { connection } from "./data/connection";
import { UserAccount } from "./data/UserAccount";

// Iniciar o servidor
app.listen(3333, () => {
    console.log("Server started on port 3333!");
    }
);

const userAccount = new UserAccount("123.456.789-00", "João", 20);
console.log(userAccount);

// Ele chama o console log apenas uma vez

// Apenas mebros da classe podem acessar as funções privadas para acessar os atributos privados.













