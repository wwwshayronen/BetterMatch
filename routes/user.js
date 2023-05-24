import express from "express";
const app = express();
const router = express.Router();
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const uri = process.env.DB_URL;

const db = mongoose.connection;
router.get("/users", async (req, res, next) => {
  // get users from database

  const usersCol = await db.collection("users").find({}).toArray();
  let result = [];
  console.log("usersCol: ", usersCol);
  res.send({ users: usersCol, msg: "Users list" });
});

router.post("/add/user", (req, res, next) => {
  const usersCol = db.collection("users");
  usersCol.insertOne({
    name: "John",
    age: 30,
  });
  res.send({ msg: "User added" });
});

export default router;
