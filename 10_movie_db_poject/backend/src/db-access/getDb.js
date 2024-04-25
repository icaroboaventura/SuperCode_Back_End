import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

let dbRef = null;

export function getDb() {
  return new Promise((resolve, reject) => {
    if (dbRef) {
      return resolve(dbRef);
    }
    client
      .connect()
      .then((connectedClient) => {
        const dbName = "video";
        const db = connectedClient.db(dbName);
        dbRef = db;
        resolve(db);
      })
      .catch((err) => reject(err));
  });
}
