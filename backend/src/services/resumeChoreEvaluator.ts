import { createGroqClient } from "./groqClient";
import type { PromptType } from "../prompts/resumeChore";
interface EvaluationResult {
  id: string;
  result: string;
}

/**
 * Evaluates a resume using a two-step LLM process:
 * 1. Summarizes the resume into a concise, structured summary.
 * 2. Iterates over a list of evaluation prompts and generates evaluations based on the summary.
 *
 * @param {string} resume - The full resume text extracted from the uploaded file.
 * @param {Prompt[]} prompts - A list of evaluation prompts containing unique IDs and instructions.
 * @returns {Promise<EvaluationResult[]>} A promise that resolves to an array of evaluation results,
 *                                        each containing an ID and the corresponding LLM-generated result.
 * @throws Will throw an error if the resume summary step fails.
 */
export const resumeChoreEvaluator = async (
  resume: string,
  prompts: PromptType[]
): Promise<EvaluationResult[]> => {
  const groq = createGroqClient();
  // 1. Summarize the full resume first
  const summaryResponse = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content: `You are a professional career coach helping job seekers in computer science. Read the following resume and generate a concise but detailed summary that covers: 1) Contact info and links provided (email, phone, GitHub, LinkedIn). 2) Technical skills, coding languages, tools, and SEO keywords.
          3) Projects and experiences, including metrics, impact, and technologies used.
          4) Certifications and awards relevant to computer science or software roles.
          5) Education details including degree, major, school, GPA, and coursework if available.
          Summarize this in about 200–250 words. Write clearly so another AI model can evaluate the resume based only on your summary.`,
      },
      {
        role: "user",
        content: resume,
      },
    ],
  });
  const summarizedResume = summaryResponse.choices[0]?.message?.content?.trim();
  if (!summarizedResume) throw new Error("Failed to summarize resume");

  // 2. Use summary + prompts to get evaluation results
  const results: EvaluationResult[] = [];

  for (const prompt of prompts) {
    const completion = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful resume evaluator for a computer science applicant.",
        },
        {
          role: "user",
          content: `${prompt.instruction}\n\nResume Summary:\n${summarizedResume}`,
        },
      ],
    });
    const resultText = completion.choices[0]?.message?.content?.trim() || "";
    results.push({ id: prompt.id, result: resultText });
  }
  return results;
};
