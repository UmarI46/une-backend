import { MongoClient } from "mongodb";

console.log(global, "<<<global");

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3"
);

const local = mongoose.connect(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3"
);

async function seedDB() {
  // const db = "test";
  // const collection = "players";

  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("testTWO");
    const stuff = db.collection("NEW COLLECTION");
    const record = {
      type: "ThisAndThat",
      lastUpdated: new Date().getTime(),
    };
    const query = { type: "ThisAndThat" };
    const options = { upsert: true };
    const result = await stuff.replaceOne(query, record, options);
    console.log(result, "result");
    console.log("Database seeded! :)");
  } catch (err) {
    console.log(err.stack);
  }
}
seedDB();
