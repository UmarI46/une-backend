import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url= process.env.DB_LOCAL
const local = mongoose.connect(url);
export async function seedDB(testData, Player, playerSchema) {
  try {
    //console.log(testData, Player, playerSchema, "POST-SEED FUNCTION")
    await local 
    console.log("Connected correctly to server");
    await Player.deleteMany({})
    await Player.insertMany(testData)
    console.log("Database seeded! :)");
  } catch (err) {
    console.log(err.stack);
  } 
}

//seedDB(testData, Player, playerSchema)
