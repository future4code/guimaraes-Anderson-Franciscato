import { application } from "express";
import { app } from "./app";
import { getAllUsers, getUsersByType, getUsersOrdered, getUsersPage } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers);
app.get("/users/name", getUsersByType);
app.get("/users/query", getUsersOrdered);
app.get("/users/page", getUsersPage);