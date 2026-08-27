import React from "react";
import { profile } from "@/data/profile";

export function AboutSection() {
  const traits = [
    { label: "Product Intuition", body: "Deconstructing workflows to eliminate friction before writing a single line of code." },
    { label: "Pixel Precision",   body: "Rigorous attention to typography, spacing, contrast, and layout balance." },
    { label: "Architecture",      body: "Type safety, component reusability, and clean data contracts at every layer." },
  ];

  const quickFacts = [
    { label: "Location",       value: profile.location },
    { label: "Specialization", value: "AI Catalog Systems & Design Systems" },
    { label: "Availability",   value: profile.status },
    { label: "Languages",      value: "TypeScript, JavaScript, React" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head fade-up">
          <span className="eyebrow">05 / Background &amp; Philosophy</span>
          <h2 className="h-display h-lg">
            A little about <span className="text-outline">me.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "clamp(32px, 5vw, 72px)",
            alignItems: "start",
          }}
        >
          {/* Left: Narrative */}
          <div className="fade-up">
            {profile.aboutParagraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  color: "var(--fg-2)",
                  lineHeight: 1.8,
                  marginBottom: i < profile.aboutParagraphs.length - 1 ? 24 : 0,
                }}
              >
                {p}
              </p>
            ))}

            {/* Trait cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                marginTop: 40,
                borderTop: "1px solid var(--line)",
                paddingTop: 32,
              }}
            >
              {traits.map((t) => (
                <div
                  key={t.label}
                  style={{
                    padding: "20px 18px",
                    border: "1px solid var(--line)",
                    background: "var(--panel)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: ".3em",
                      textTransform: "uppercase",
                      color: "var(--acc)",
                      marginBottom: 10,
                    }}
                  >
                    {t.label}
                  </div>
                  <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.6 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick facts panel */}
          <div
            className="fade-up fade-up-delay-2"
            style={{
              background: "var(--panel)",
              border: "1px solid var(--line)",
              padding: "clamp(20px, 3vw, 32px)",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".4em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: "1px solid var(--line)",
              }}
            >
              Quick Information
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {quickFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  style={{
                    padding: "14px 0",
                    borderBottom: i < quickFacts.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: 10,
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      letterSpacing: ".3em",
                      textTransform: "uppercase",
                      color: "var(--fg-4)",
                      marginBottom: 4,
                    }}
                  >
                    {fact.label}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 600 }}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
