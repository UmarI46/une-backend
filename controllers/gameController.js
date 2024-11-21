import { Game } from "../Schemas/GameSchema.js";

//gameData needs to come in on req.body - surely just needs number of players???

export async function createGame(req, res) {

  const { players, currentTurn, deck, drawPile, discardPile, gameState } =
    req.body;

  try {
    const game = new Game({
      players: players,
      currentTurn: currentTurn,
      deck: deck,
      drawPile: drawPile,
      discardPile: discardPile,
      gameState: gameState,
    });
    const createdGame = await game.save();
    res.status(201).json(createdGame);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the game" });
  }
}
