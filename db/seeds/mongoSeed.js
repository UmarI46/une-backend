import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { createGame } from "../data/testData/testSchema/testGameSchema.js";
import { Game } from "../data/testData/testSchema/testGameSchema.js";

const url = process.env.DB_LOCAL;
const local = mongoose.connect(url);

export async function seedDB() {
  try {
    await local;
    await Game.deleteMany({});
    await createGame();
  } catch (err) {
    console.log(err.stack);
  }
}
