import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest";
import app from "../app.js";
import { seedDB } from "../db/seeds/mongoSeed.js";
import { testData } from "../db/data/testData/game.js";
import { Player, playerSchema } from "../db/data/testData/testSchema/playerTestSchema.js";

dotenv.config();

beforeEach(() => {
  return seedDB(testData, Player, playerSchema)
});
afterAll(() => mongoose.connection.close());

const local = process.env.DB_LOCAL;
const db = mongoose.connect;


//SET UP TESTING ===========================================================
//==========================================================================
//==========================================================================
describe("tests connection to database", () => {
  test("connects to database", () => {
    return db(local).then(() => {
      console.log("connected");
      const actualOutput= mongoose.connection.readyState
      const expectedOutput= 1
      expect(actualOutput).toBe(expectedOutput);
    });
  });
  test("players data is seeded",()=>{
    return db(local).then(async() => {
      const players=await Player.find()    
      expect(players.length).toBeGreaterThan(0);
    });
  })
});
