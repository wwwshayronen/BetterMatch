import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import usersRouter from "./routes/user.js";
import * as dotenv from "dotenv";
dotenv.config();
// Enable all CORS requests
app.use(cors());
console.log(process.env.DB_URL);
const uri = process.env.DB_URL;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("MongoDB connected");
  })

  .catch((err) => console.log("err message: ", err));

app.use(bodyParser.json());

app.use("/api", usersRouter);

app.listen(8080, () => console.log("Server is running..."));
