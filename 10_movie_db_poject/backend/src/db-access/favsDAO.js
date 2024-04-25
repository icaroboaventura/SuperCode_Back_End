import { getDb } from "./getDb.js";

const favCollection = "favoriteMovies";

const createFavorite = (favData) => {
  return getDb()
    .then((db) => db.collection(favCollection).insertOne(favData))
    .then((result) => {
      if (result.acknowledged === false) return null;

      return { _id: result.insertedId, ...favData };
    });
};

const deleteFavorite = (favoriteId) => {
  return getDb().then((db) => db.collection(favCollection).findOneAndDelete({ _id: favoriteId }));
};

const getFavorites = () => {
  return getDb()
    .then((db) => db.collection(favCollection).find().toArray())
    .then((db) => db.map((id) => id.movieID))
    .then((idsFavoriten) => Promise.all([getDb(), idsFavoriten]))
    .then(([db, idsFavoriten]) =>
      db
        .collection("movieDetails")
        .find({ _id: { $in: idsFavoriten } })
        .toArray()
    );
};

export const favsDAO = { createFavorite, deleteFavorite, getFavorites };
