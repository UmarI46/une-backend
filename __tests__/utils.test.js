import mongoose from "mongoose";
import dotenv from "dotenv";
import { Game } from "../db/data/testData/testSchema/testGameSchema.js";
import { seedDB } from "../db/seeds/mongoSeed.js";
import { startGame } from "../utils/gameLogic.js";

dotenv.config();

beforeEach(() => {
  return seedDB();
});
afterAll(() => mongoose.connection.close());

const local = process.env.DB_LOCAL;
const db = mongoose.connect;

describe("tests gameplay functions", () => {
  // works with only 1 game on database
  test("startGame function increments the 'gameState' property by one and current turn from 0 to 1", () => {
    return db(local).then(async () => {
      await startGame();
      const firstGame = await Game.findOne();
      expect(firstGame.gameState).toBe(1);
      expect(firstGame.currentTurn).toBe(1);
    });
  });
});
