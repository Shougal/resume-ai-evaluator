import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { resumeRouter } from "./routes/resumeRoutes";
import app from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
