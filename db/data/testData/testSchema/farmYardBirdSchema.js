import mongoose from "mongoose";

export const farmYardBirdSchema = new mongoose.Schema({
  farmYardBirds: Object,
});
export const farmYardBird = mongoose.model("farmYardBird", farmYardBirdSchema);
