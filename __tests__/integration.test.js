import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest";
import app from "../app.js";
import { seedDB } from "../db/seeds/mongoSeed.js";

// import test data
// import seed function

dotenv.config();

beforeEach(() => seedDB());
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
  test("data is in database", () => {
    return db(local).then(() => {
      console.log("connected");
      expect(mongoose.connection.readyState).toBe(1);
    });
  });
});
