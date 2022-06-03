import express from "express";
import { v4 as generateId } from 'uuid';
import { AddressInfo } from "net";
import { todos } from "./exercicio_2/data";

const app = express();

app.use(express.json());

const newUser = {
	id: generateId()
}

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get("/ping", (req, res) => {
    res.send("pong");
    }
);


app.get("/todo", (req, res) => {
    res.status(200).json(todos);
    }
);

app.get("/todo/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => 
        todo.id === Number(id));
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
    }
);

app.get("/todo/:title", (req, res) => {
    const title = req.params.title;
    const todo = todos.find(todo =>
        todo.title === title);
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
    }
);

app.get("/todo/:userid", (req, res) => {
    const userid = req.params.userid;
    const todo = todos.find(todo =>
        todo.userId === Number(userid));
    if (todo) {
        res.status(200).json(todo);
    }
    else {
        res.status(404).json({ message: "Todo not found" });
    }
    }
);

app.get ("/todo/:id/:completed", (req, res) => {
    const id = req.params.id;
   const completed = req.params.completed; 
   if (completed === "true") {
    const todo = todos.filter(todo =>
        todo.completed === Boolean(completed));
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
    }
    else if (completed === "false") {
    const todo = todos.filter(todo =>
        todo.completed === Boolean(!completed));
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
    }
    else {
        res.status(404).json({ message: "Todo not found" });
    }
    }
);

app.post("/todo", (req, res) => {
    const todo = req.body;
    todo.id = generateId();
    todos.push(todo);
    res.status(201).json(todo);
    }
);




