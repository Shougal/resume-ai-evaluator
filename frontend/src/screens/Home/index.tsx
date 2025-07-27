import { Text } from "../../components/Text";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { paddingStyle, borderRadiusStyle } from "../../theme/layout";
import { useState } from "react";
import resumeAI from "../../assets/resumeAI.jpeg";
import type { EvaluationResponse } from "./type";

// TODO: Handle submit api call, add utility class
export const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<EvaluationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleFormSubmit = async () => {
    if (file) {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append("resume", file);

      try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${BACKEND_URL}/resume/evaluateChore`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Something went wrong");
        }
        const data = await response.json();
        setResult(data);
      } catch (error: unknown) {
        console.error("Error during resume evaluation:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {/* Title section */}
      <Section marginBottom="xlg">
        <Text typography="PageTitle">
          AI Resume{" "}
          <Text typography="PageTitle" display="inline" linearGradient>
            Whisperer
          </Text>
        </Text>
        <Text typography="description">
          Get instant feedback on your resume — powered by AI. Make your CV
          stand out before you apply.
        </Text>
      </Section>

      {/* form row + pic row */}
      <Section displayDirection="row" background="section" borderRadius="sm">
        {/* form row */}
        <Section>
          <Text typography="SectionTitle"> Get started</Text>

          <form method="post" encType="multipart/form-data">
            <Text typography="description">
              Ready to impress recruiters? Drop your resume here and let
              ScoreBot AI show you how to shine.
            </Text>
            <Section marginTop="md">
              <input
                name="resume"
                type="file"
                onChange={handleFileChange}
                style={{
                  width: "100%",
                  padding: paddingStyle.sm,
                  border: "1px solid #555",
                  borderRadius: borderRadiusStyle.sm,
                  background: "#1a1a1a",
                  color: "#fff",
                }}
              />
              <Button
                onClick={handleFormSubmit}
                variant="primary"
                size="sm"
                disabled={!file || loading}
              >
                {loading ? "Analyzing..." : "Analyze My Resume"}
              </Button>
            </Section>
          </form>
        </Section>
        {/* pic side */}
        <Section>
          <img
            src={resumeAI}
            alt="Resume AI photo"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Section>
      </Section>

      {/* Conditional JSON viewer */}
      {loading && <Text typography="description">Evaluating resume...</Text>}

      {/* Error Handling */}
      {error && (
        <Section marginTop="md">
          <Text typography="description">Error: {error}</Text>
        </Section>
      )}

      {/* Displaying the result if available */}
      {result && !error && (
        <Section marginTop="md">
          <Text typography="SectionTitle">AI Evaluation Output</Text>
          {/* Display preview of the resume */}
          <Text typography="description">
            <strong>Resume Preview:</strong> {result.preview}
          </Text>

          {/* Display evaluation results */}
          <Text typography="description">
            <strong>Evaluation Results:</strong>
          </Text>
          {result.evaluationResult.map(
            (evaluation: { id: string; result: string }) => (
              <Section key={evaluation.id} marginTop="sm">
                <Text typography="description">
                  <strong>Evaluation {evaluation.id}:</strong>{" "}
                  {evaluation.result}
                </Text>
              </Section>
            )
          )}
        </Section>
      )}
    </>
  );
};
