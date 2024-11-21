import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest";
import app from "../app.js";
import { seedDB } from "../db/seeds/mongoSeed.js";
import { testPlayers, testBirds } from "../db/data/testData/game.js";
import {
  Player,
  playerSchema,
} from "../db/data/testData/testSchema/playerTestSchema.js";
import {
  farmYardBird,
  farmYardBirdSchema,
} from "../db/data/testData/testSchema/farmYardBirdSchema.js";

dotenv.config();

beforeEach(() => {
  return seedDB(testPlayers, testBirds, Player, farmYardBird);
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
      const actualOutput = mongoose.connection.readyState;
      const expectedOutput = 1;
      expect(actualOutput).toBe(expectedOutput);
    });
  });
  test("players are present in the database", () => {
    return db(local).then(async () => {

      console.log(await Player.find(), "player.find()");
      const players = await Player.findOne({});
      expect(players.players.length).toBeGreaterThan(0);
    });
  });
  test("farmYardBirds are in the database", () => {
    return db(local).then(async () => {
      const birds = await farmYardBird.findOne({});
      console.log(birds);
      expect(birds.farmYardBirds.length).toBeGreaterThan(0);
    });
  });
});
