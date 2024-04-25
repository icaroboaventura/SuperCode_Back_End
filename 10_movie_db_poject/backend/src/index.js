import express from "express";
import morgan from "morgan";
import cors from "cors";
import { moviesDAO } from "./db-access/moviesDAO.js";
import { favsDAO } from "./db-access/favsDAO.js";
import { ObjectId } from "mongodb";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ---------------------------------- Movies ----------------------------------------------

// --------------- All movies

app.get("/api/v1/movies", (req, res) => {
  const page = req.query.page || 1;
  moviesDAO
    .findAll(page)
    .then((movies) => res.json(movies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add find all movies" });
    });
});

// --------------- One movie

app.get("/api/v1/movies/:moviesId", (req, res) => {
  const moviesId = req.params.moviesId;
  Promise.all([moviesDAO.findById(moviesId)])
    .then(([foundMovie]) => res.json(foundMovie ? { ...foundMovie } : {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie " + moviesId });
    });
});

// --------------- Create movie

app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;
  moviesDAO
    .createMovie(newMovie)
    .then((newMovie) => res.json(newMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not create movie" });
    });
});

// --------------- Delete movie

app.delete("/api/v1/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  moviesDAO
    .deleteMovie(movieId)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie" });
    });
});

// --------------- Update movie

app.patch("/api/v1/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const updMovieData = req.body;
  moviesDAO
    .updateMovie(movieId, updMovieData)
    .then((updatedMovie) => res.json(updatedMovie).status(200))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Cloud not update movie" }).status(500);
    });
});

// ------------------------------------ Favorites ------------------------------------------

// --------------- All favorites

app.get("/api/v1/favorites", (req, res) => {
  favsDAO
    .getFavorites()
    .then((favs) => res.json(favs || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not get all favorites" });
    });
});

// --------------- Add favorite

app.post("/api/v1/movies/:movieID/favorites", (req, res) => {
  const movieID = req.params.movieID;
  const isFav = {
    movieID: ObjectId.createFromHexString(movieID),
  };
  favsDAO
    .createFavorite(isFav)
    .then((isFav) => res.json(isFav || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not create new favorite" });
    });
});

// --------------- Delete favorites

app.delete("/api/v1/favorites/:favId", (req, res) => {
  favsDAO
    .deleteFavorite(req.params.favId)
    .then((deleted) => res.json(deleted || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not Delete Movie!" });
    });
});

const PORT = 4444;
app.listen(PORT, () => console.log("Server listening at port", PORT));
