import { Request, Response } from "express";
import { resumeChore } from "../prompts/resumeChore";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { resumeChoreEvaluator } from "../services/resumeChoreEvaluator";

export const evaluateResume = async (req: Request, res: Response) => {
  //1) get evaluate resume prompts as a list from prompts directory
  let prompts = resumeChore;

  // req.file: holds the name of file specidief in html multip part form
  // to access file use .buffer since I stored in multer memory storage
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    let text = "";
    if (file.mimetype === "application/pdf") {
      const result = await pdfParse(file.buffer); //use .buffer since I stored the file in multer memory storage
      text = result.text;
    } else if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({ buffer: file.buffer });
      text = result.value; // raw text
    } else if (file.mimetype === "text/plain") {
      text = file.buffer.toString("utf-8");
    } else {
      return res.status(400).json({
        error: "unsupported file type. Supported files are: pdf, docx, or txt ",
      });
    }
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "File is empty or unreadable." });
    }
    // 2) take request and send to evaluate with prompt argument
    const evaluation = await resumeChoreEvaluator(text, prompts);

    return res.status(200).json({
      message: "Resume evaluated successfully",
      mimetype: file.mimetype,
      preview: text.slice(0, 300),
      evaluationResult: evaluation,
    });
  } catch (error: any) {
    console.error("Resume processing failed:", error);
    return res.status(500).json({ error: "Failed to read the uploaded file." });
  }
};
