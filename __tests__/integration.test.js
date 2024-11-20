import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest";
import app from "../app.js";
import { seedDB } from "../db/seeds/mongoSeed.js";
import { testData } from "../db/data/testData/game.js";
import { Player, playerSchema } from "../db/data/testData/testSchema/playerTestSchema.js";

// import test data
// import seed function

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
  test("data is seeded",()=>{
    return db(local).then(async() => {
      /* console.log(Object.keys(mongoose.connection.collections))
      console.log(Object.keys(mongoose.connection.db))
      console.log(Object.keys(mongoose.connection.db.client))
      console.log(Object.keys(mongoose.connection.db.s)) */
      /* console.log(Object.keys(mongoose.connection.collections))
      console.log(Object.keys(mongoose.connection.collections.players)) */
      const players=await Player.find()
      console.log(players)
      console.log(players.length)
      /* const actualOutput= mongoose.connection.getCollectionNames().includes("players")
      console.log(actualOutput) */
      const expectedOutput= {"collection": "players", "db": "test"}
      expect(actualOutput).toEqual(expectedOutput);
    });
  })
});
