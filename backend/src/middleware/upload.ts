import multer from "multer";

const storage = multer.memoryStorage();
/**
 * Config that checks file size (1MB max), file type (pdf, docx, txt).
 * Stores the file in memory (file.buffer)
 */
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1048576, // limit file to 1MB
  },
  fileFilter: (req, file, cb) => {
    // only allow pdf, docx, and txt files to be processed
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Unsupported file type. Only pdf, docx, and/or txt files are supported."
        )
      );
    }
  },
});
