import { Text } from "../components/Text";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { paddingStyle, borderRadiusStyle } from "../theme/layout";

export const Home = () => {
  const handleSubmit = () => {
    console.log("submitted");
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

          <form onSubmit={handleSubmit}>
            <Text typography="description">
              Ready to impress recruiters? Drop your resume here and let
              ScoreBot AI show you how to shine.
            </Text>
            <Section marginTop="md">
              <input
                name="resume"
                type="file"
                style={{
                  width: "100%",
                  padding: paddingStyle.sm,
                  border: "1px solid #555",
                  borderRadius: borderRadiusStyle.sm,
                  background: "#1a1a1a",
                  color: "#fff",
                }}
              />
              <Button onClick={handleSubmit} variant="primary" size="sm">
                Analyze My Resume
              </Button>
            </Section>
          </form>
        </Section>
        {/* pic side */}
        <Section>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Example preview"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </a>
        </Section>
      </Section>
    </>
  );
};
