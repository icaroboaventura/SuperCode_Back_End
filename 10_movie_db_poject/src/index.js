import express from "express";
import morgan from "morgan";
import { moviesDAO } from "./db-access/moviesDAO.js";
import { ObjectId } from "mongodb";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/movies", (req, res) => {
  moviesDAO
    .findAll()
    .then((movies) => res.json(movies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add find all movies" });
    });
});

app.get("/api/v1/movies/:moviesId", (req, res) => {
  const moviesId = req.params.moviesId;
  Promise.all([moviesDAO.findById(moviesId)])
    .then(([foundMovie]) => res.json(foundMovie ? { ...foundMovie } : {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add find movie " + moviesId });
    });
});

const PORT = 3008;
app.listen(PORT, () => console.log("Server listening at port", PORT));
