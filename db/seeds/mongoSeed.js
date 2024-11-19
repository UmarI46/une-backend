import global from "mongodb";

console.log(global, "<<<global");

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const local = mongoose.connect(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3"
);

async function seedDB() {
  const db = "test";
  const collection = "players";

  try {
    await local;
    console.log("Connected correctly to server");
    use(db);
    db.collection.drop();
    db.createCollection(collection);

    // // make a bunch of time series data
    // const playerSchema = new mongoose.Schema({
    //   name: { type: String },
    // });

    // const players = new mongoose.model("players", playerSchema);

    // const data = [
    //   { name: "Jon" },
    //   { name: "Bogdan" },
    //   { name: "Umar" },
    //   { name: "Emmanuel" },
    // ];

    // const listOfPlayers = await players.insertMany(data);
    console.log("Database seeded! :)");
    db.close();
  } catch (err) {
    console.log(err.stack);
  }
}
seedDB();
