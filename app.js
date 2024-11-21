import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./Routes/gameRoutes.js";

import api from '';
app.use('/api', api);


app.use(cors());
app.use(express.json());

app.use("/api", router )

export default app;


const port = process.env.PORT || 3000;

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

// Use the cors middleware to enable Cross-Origin Resource Sharing

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
