import { Request, Response } from "express";
import knex from "knex";
import connection from "./connection";
import app from "./app";
import { Express } from "express";
import { createUser } from "./endpoints/createUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { cadastroProduto } from "./endpoints/cadastroProduto";
import { getAllProducts } from "./endpoints/getAllProducts";

app.post("/users", createUser);
app.get("/users", getAllUsers);
app.post("/products", cadastroProduto);
app.get("/products", getAllProducts);
