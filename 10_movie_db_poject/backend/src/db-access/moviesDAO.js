import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

function findAll() {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
}

function findById(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) => db.collection("movieDetails").findOne({ _id: idAsObjectId }));
}

const createMovie = (movie) => {
  return getDb()
    .then((db) => db.collection(moviesCollection).insertOne(movie))
    .then((result) => {
      if (result.acknowledged === false) return null;
      return { ...movie, _id: result.insertedId };
    });
};

const deleteMovie = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) => db.collection(moviesCollection).findOneAndDelete({ _id: idAsObjectId }));
};

const updateMovie = (id, newData) => {
  const idAsObjectId = ObjectId.createFromHexString(id);

  return getDb().then((db) =>
    db
      .collection(moviesCollection)
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
