import express from "express";
import { createGame, getAllGames } from "../controllers/gameController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const endpoints = require("../endpoints.json");

const router = express.Router();

router.get("/games", getAllGames);
router.post("/createGame", createGame);
router.get("/", (request, response) => {
  response.status(200).send({ endpoints });
});

export { router };

// router.get('/songs', songController.getAllSongs);
// router.post('/songs', songController.createSong);
// router.get('/songs/:id', songController.getSong);
// router.put('/songs/:id', songController.updateSong);
// router.delete('/songs/:id', songController.deleteSong);
