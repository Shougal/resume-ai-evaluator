import { Groq } from "groq-sdk";

export const createGroqClient = () => {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("Missing GROQ_API_KEY in environment variables");

  return new Groq({ apiKey: key });
};
