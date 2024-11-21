import mongoose from "mongoose";

export const gameSchema = new mongoose.Schema({
  players: { type: Object },
  currentTurn: { type: Number },
  deck: { type: Object },
  drawPile: { type: Object },
  discardPile: { type: Object },
  gameState: { type: Number },
});

export const Game = mongoose.model("Game", gameSchema);
