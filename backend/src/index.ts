import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); //loads env variables

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // allows cross-origin requests
app.use(express.json()); // parses incoming JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello from Resume AI backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
