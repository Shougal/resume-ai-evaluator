import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { resumeRouter } from "./routes/resumeRoutes.ts";

dotenv.config(); //loads env variables

const app = express();

app.use(cors()); // allows cross-origin requests
app.use(express.json()); // parses incoming JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello from Resume AI backend!");
});

//Route to resume evaluations:
app.use("/resume", resumeRouter);

export default app;
