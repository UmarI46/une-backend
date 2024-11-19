import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url= process.env.DB_LOCAL
const local = mongoose.connect(url);

export async function seedDB() {
  const userSchema= new mongoose.Schema(
    {username: String})
  const User=mongoose.model("User", userSchema)
  const seedUserData=[{username:"Jon"},{username:"Bogdan"},{username:"Joe"}]
  try {
    await local 
    console.log("Connected correctly to server");
    await User.deleteMany({})
    await User.insertMany(seedUserData)
    console.log("Database seeded! :)");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await mongoose.disconnect()
    console.log("disconnected")
  }
}

