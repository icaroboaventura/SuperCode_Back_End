import express from "express";
import { readTodos, writeTodos } from "./filesystem.js";

const app = express();

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/todos", (_, res) => {
  readTodos()
    .then((todos) => res.status(200).json(todos))
    .catch((err) => res.status(500).json({ err, message: "Could not read all todos" }));
});

app.get("/api/v1/todos/:id", (req, res) => {
  const todoId = req.params.id; // in der route gibt es einen route-parameter .../:id
  readTodos()
    .then((todos) => todos.find((t) => t.id.toString() === todoId))
    .then((foundTodo) => res.status(200).json(foundTodo))
    .catch((err) => res.status(500).json({ err, message: "Could not read todos" }));
});

app.post("/api/v1/todos", (req, res) => {
  readTodos()
    .then((todos) => {
      const lastTodo = todos[todos.length - 1].id;
      const newTodo = {
        id: lastTodo + 1,
        todo_title: req.body.todo_title,
        todo_description: req.body.todo_description,
      };
      return [...todos, newTodo];
    })
    .then((todosWithNew) => writeTodos(todosWithNew))
    .then((todosWithNew) => res.status(200).json(todosWithNew))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not read all todos" });
    });
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at port", PORT));
