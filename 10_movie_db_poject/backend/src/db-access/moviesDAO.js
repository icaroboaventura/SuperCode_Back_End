import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

function findAll(page) {
  const moviesPerPage = 20;
  return getDb().then((db) =>
    db
      .collection("movieDetails")
      .find()
      .skip(page * moviesPerPage)
      .limit(moviesPerPage)
      .toArray()
  );
}

function findById(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) => db.collection("movieDetails").findOne({ _id: idAsObjectId }));
}

const createMovie = (movie) => {
  return getDb()
    .then((db) => db.collection("movieDetails").insertOne(movie))
    .then((result) => {
      if (result.acknowledged === false) return null;
      return { ...movie, _id: result.insertedId };
    });
};

const deleteMovie = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) => db.collection("movieDetails").findOneAndDelete({ _id: idAsObjectId }));
};

const updateMovie = (id, newData) => {
  const idAsObjectId = ObjectId.createFromHexString(id);

  return getDb().then((db) =>
    db
      .collection("movieDetails")
      .updateOne({ _id: idAsObjectId }, { $set: newData })
      .then((result) => {
        if (result.acknowledged === false) return null;
        return findOneMovie(id);
      })
  );
};

export const moviesDAO = {
  findAll,
  findById,
  createMovie,
  deleteMovie,
  updateMovie,
};
