import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { resumeRouter } from "./routes/resumeRoutes";

dotenv.config(); //loads env variables

const app = express();

app.use(
  cors({
    origin: "https://resume-ai-evaluator-psi.vercel.app",
    credentials: true,
  })
); // allows cross-origin requests
app.use(express.json()); // parses incoming JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello from Resume AI backend!");
});

//Route to resume evaluations:
app.use("/resume", resumeRouter);

export default app;
