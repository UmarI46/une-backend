import mongoose from "mongoose";
import dotenv from "dotenv";
import { Game } from "../db/data/testData/testSchema/gameSchema.js";
import { seedDB } from "../db/seeds/mongoSeed.js";
// supertest?

dotenv.config();

beforeEach(() => {
  return seedDB();
});
afterAll(() => mongoose.connection.close());

const local = process.env.DB_LOCAL;
const db = mongoose.connect;

describe("tests connection to database and seeding", () => {
  test("connects to database", () => {
    return db(local).then(() => {
      const actualOutput = mongoose.connection.readyState;
      const expectedOutput = 1;
      expect(actualOutput).toBe(expectedOutput);
    });
  });
  test("game data is seeded", () => {
    return db(local).then(async () => {
      const allGames = await Game.find();
      const firstGame = await Game.findOne();
      expect(allGames.length).toBeGreaterThan(0);
      expect(firstGame).toMatchObject({
        players: expect.any(Object),
        currentTurn: expect.any(Number),
        deck: expect.any(Object),
        drawPile: expect.any(Object),
        discardPile: expect.any(Object),
        gameState: expect.any(Number),
      });
    });
  });
});
