import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./Routes/gameRoutes.js";
import { connectDB } from "./db/connection.js";
import { seedDB } from "./db/seeds/mongoSeed.js";

// const url = process.env.DB_URL || process.env.DB_LOCAL;

const url = process.env.DB_LOCAL;

connectDB(url);

app.use(cors());
app.use(express.json());

app.use("/api", router);

export { app };
