import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

export function getDb() {
  return client.connect().then((connectedClient) => {
    const dbName = "video";
    const db = connectedClient.db(dbName);
    return db;
  });
}
