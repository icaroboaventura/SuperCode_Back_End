import cors from "cors";
import express from "express";
import { body, param, validationResult } from "express-validator";
import { readMessages, writeMessages } from "./filesystem.js";

const PORT = 4004;
const app = express();

app.use(cors());

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/messages", (_, res) => {
  readMessages()
    .then((messages) => res.status(200).json(messages))
    .catch((err) => res.status(500).json({ err, message: "Could not read all messages." }));
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
