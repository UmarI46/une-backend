import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB(url) {
  try {
    await mongoose.connect(url);
    if (mongoose.connection.readyState === 1) console.log("connected");
  } catch (error) {
    console.log(error);
  }
}
