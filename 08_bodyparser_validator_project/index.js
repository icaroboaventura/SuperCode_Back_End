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

app.post("/api/v1/messages", body("firstname").isString().notEmpty(), body("lastname").isString().notEmpty(), body("email").isEmail(), body("message").isString().notEmpty(), (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", errors: validationErrors.array() });
  }

  readMessages()
    .then((messages) => {
      let lastMessage;
      messages.length === 0 ? (lastMessage = 1) : (lastMessage = messages[messages.length - 1].id);
      const newMessage = {
        id: lastMessage + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        message: req.body.message,
      };
      return [...messages, newMessage];
    })
    .then((messagesWithNew) => writeMessages(messagesWithNew))
    .then((messagesWithNew) => res.status(200).json(messagesWithNew))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not read all messages" });
    });
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
