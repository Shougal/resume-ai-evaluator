import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { resumeRouter } from "./routes/resumeRoutes";

const upload = multer({ dest: "uploads/" });
dotenv.config(); //loads env variables

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors()); // allows cross-origin requests
app.use(express.json()); // parses incoming JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello from Resume AI backend!");
});

//Route to resume evaluations:
app.use("/resume", resumeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
