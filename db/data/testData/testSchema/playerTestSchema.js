import mongoose from "mongoose"

export const playerSchema= new mongoose.Schema(
    {players: Object} 
)
export const Player=mongoose.model("Player", playerSchema)