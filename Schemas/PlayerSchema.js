import mongoose from "mongoose";
import { gameTestData } from "../game";

export const gameSchema = new mongoose.Schema({
  players: { type: Object },
  currentTurn: { type: Number },
  deck: { type: Object },
  drawPile: { type: Object },
  discardPile: { type: Object },
  gameState: { type: Number },
});

export const Game = mongoose.model("Game", gameSchema);

export const createGame = async () => {
  try {
    await new Game(gameTestData).save();
  } catch (error) {
    console.log(error);
  }
};
