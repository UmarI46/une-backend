import mongoose from "mongoose";
import { gameTestData } from "../game.js";

export const gameSchema = new mongoose.Schema({
  players: { type: Object },
  currentTurn: { type: Number },
  deck: { type: Object },
  drawPile: { type: Object },
  discardPile: { type: Object },
  gameState: { type: Number },
});

export const TestGame = mongoose.model("TestGame", gameSchema);

export const createTestGame = async () => {
  try {
    await new TestGame(gameTestData).save();
  } catch (error) {
    console.log(error);
  }
};
