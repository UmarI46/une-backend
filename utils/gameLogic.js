import {
  Game,
  gameSchema,
  createGame,
} from "../db/data/testData/testSchema/testGameSchema.js";

export async function newGame() {
  newGame = await createGame();
}

export async function startGame() {
  await Game.updateOne({ gameState: 1, currentTurn: 1 });
}
