import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { createTestGame } from "../data/testData/testSchema/testGameSchema.js";
import { TestGame } from "../data/testData/testSchema/testGameSchema.js";
import { connectDB } from "../connection.js";

const local = process.env.DB_LOCAL;

export async function seedDB() {
  try {
    await connectDB(local);
    await TestGame.deleteMany({});
    await createTestGame();
  } catch (err) {
    console.log(err.stack);
  } finally {
    await mongoose.disconnect();
  }
}
