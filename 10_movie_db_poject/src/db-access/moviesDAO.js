import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

function findAll() {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
}

function findById(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) => db.collection("movieDetails").findOne({ _id: idAsObjectId }));
}

export const moviesDAO = {
  findAll,
  findById,
};
