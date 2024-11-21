import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { createGame } from "../data/testData/testSchema/gameSchema.js";
import { Game } from "../data/testData/testSchema/gameSchema.js";

const url = process.env.DB_LOCAL;
console.log(url, "url");
const local = mongoose.connect(url);

export async function seedDBTwo() {
  try {
    await local;
    // console.log("Connected correctly to server");
    await Game.deleteMany({});
    await createGame();
    // console.log("Database seeded! :)");
  } catch (err) {
    console.log(err.stack);
  }
}
