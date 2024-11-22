import { TestGame } from "../db/data/testData/testSchema/testGameSchema.js";
import mongoose from "mongoose";
import { Game } from "../models/gameModel.js";

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

export async function getAllGames(req, res) {
  try {
    const games = await Game.find();
    

    res.status(200).json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching games" });
  }
}
