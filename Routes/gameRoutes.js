import express from "express";
import { createGame } from "../controllers/gameController.js";

const router = express.Router();

router.post("/createGame", createGame);

export { router };

// router.get('/songs', songController.getAllSongs);
// router.post('/songs', songController.createSong);
// router.get('/songs/:id', songController.getSong);
// router.put('/songs/:id', songController.updateSong);
// router.delete('/songs/:id', songController.deleteSong);
