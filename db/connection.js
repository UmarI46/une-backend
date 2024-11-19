import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = mongoose.connect;
const url = process.env.DB_URL;

db(url)
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });
