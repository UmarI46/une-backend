import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = mongoose.connect;
const url = process.env.DB_URL;
const local = process.env.DB_LOCAL;

db(local)
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });
