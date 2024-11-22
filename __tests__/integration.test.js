import mongoose from "mongoose";
import dotenv from "dotenv";
import { TestGame } from "../db/data/testData/testSchema/testGameSchema.js";
import { seedDB } from "../db/seeds/mongoSeed.js";
import request from "supertest";
import { app } from "../app.js";

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
      const allGames = await TestGame.find();
      const firstGame = await TestGame.findOne();
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

// describe("tests POST endpoint /api/createGame", () => {
//   test("POST: 201 responds with a new game when new game is posted", () => {
//     const testGame = {
//       players: [
//         { player_number: 1, hand: [] },
//         { player_number: 2, hand: [] },
//         { player_number: 3, hand: [] },
//         { player_number: 4, hand: [] },
//       ],
//       currentTurn: 0,
//       deck: [],
//       drawPile: [],
//       discardPile: [],
//       gameState: 0,
//     };
//     return request(app)
//       .post("/api/createGame")
//       .send(testGame)
//       .expect(201)
//       .then((response) => {
//         console.log(response.body._id, "<<<response.body");
//       });
//   });
// });

describe("test GET endpoint /api", () => {
  test("GET: 200 responds with an object containing all available endpoints", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body }) => {
        expect(body.endpoints).toEqual(jsonEndpoints);
      });
  });
});
