/// <reference types="jest" />

import request from "supertest";
import app from "../index";
import path from "path";
import fs from "fs";

describe("Multer Upload Middleware", () => {
  it("should accept a valid .pdf file under 1MB", async () => {
    const filePath = path.join(__dirname, "files/691.pdf");

    const res = await request(app)
      .post("/resume/evaluateChore")
      .attach("resume", filePath); // path to test file

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("preview");
    expect(res.body.message).toBe("Resume evaluated successfully");
    expect(res.body.mimetype).toBe("application/pdf");
  });

  it("should accept a valid .docx file under 1MB", async () => {
    const filePath = path.join(__dirname, "files/validDoc.docx");

    const res = await request(app)
      .post("/resume/evaluateChore")
      .attach("resume", filePath); // path to test file

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("preview");
    expect(res.body.message).toBe("Resume evaluated successfully");
    expect(res.body.mimetype).toBe(
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
  });

  it("should accept a valid .txt file under 1MB", async () => {
    const filePath = path.join(__dirname, "files/textTest.txt");

    const res = await request(app)
      .post("/resume/evaluateChore")
      .attach("resume", filePath); // path to test file

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("preview");
    expect(res.body.message).toBe("Resume evaluated successfully");
    expect(res.body.mimetype).toBe("text/plain");
  });

  it("should reject unsupported file types", async () => {
    const filePath = path.join(__dirname, "files/resumeAI.jpeg");

    await request(app)
      .post("/resume/evaluateChore")
      .attach("resume", filePath)
      .expect(400)
      .then((res) => {
        expect(res.body.error).toMatch(/unsupported file type/i);
      });
  });

  it("should reject files over 1MB", async () => {
    const filePath = path.join(__dirname, "files/large.pdf");
    const res = await request(app)
      .post("/resume/evaluateChore")
      .attach("resume", filePath);

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/File too large. Max is 1MB./i);
  });
});
