import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest";
import app from "../app.js";

// const seed = require("../db/seeds/seed");
// const data = require("../db/data/test-data");

dotenv.config();

// need to import testing seed function

// beforeEach(() => seed(data));
afterAll(() => mongoose.connection.close());

const local = process.env.DB_LOCAL;
const db = mongoose.connect;

describe("tests connection to database", () => {
  test("connects to database", () => {
    return db(local).then(() => {
      console.log("connected");
      expect(mongoose.connection.readyState).toBe(1);
    });
  });
});
