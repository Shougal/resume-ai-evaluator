import { upload } from "../middleware/upload";
import { evaluateResume } from "../controllers/resumeController";
import multer from "multer";
import { Router } from "express";

export const resumeRouter = Router();
resumeRouter.post(
  "/evaluateChore",
  (req, res, next) => {
    upload.single("resume")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // Multer-specific errors (e.g., file too large)
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({ error: "File too large. Max is 1MB." });
        }
        return res.status(400).json({ error: err.message });
      } else if (err) {
        // General errors (e.g., wrong type)
        return res.status(400).json({ error: err.message });
      }
      next(); // Continue to controller
    });
  },
  evaluateResume
);
