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
    <section id="about" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head fade-up">
          <span className="eyebrow">05 / Background &amp; Philosophy</span>
          <h2 className="h-display h-lg">
            A little about <span className="text-outline">me.</span>
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
          {/* Left: Narrative + Trait Cards */}
          <div className="lg:col-span-7 xl:col-span-8 fade-up">
            <div className="space-y-5">
              {profile.aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    color: "var(--fg-2)",
                    lineHeight: 1.8,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Responsive Trait cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[var(--line)]">
              {traits.map((t) => (
                <div
                  key={t.label}
                  style={{
                    padding: "clamp(16px, 2vw, 20px)",
                    border: "1px solid var(--line)",
                    background: "var(--panel)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: ".25em",
                      textTransform: "uppercase",
                      color: "var(--acc)",
                      marginBottom: 8,
                      lineHeight: 1.2,
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
            className="lg:col-span-5 xl:col-span-4 fade-up fade-up-delay-2"
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
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 16,
                paddingBottom: 14,
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
                      letterSpacing: ".25em",
                      textTransform: "uppercase",
                      color: "var(--fg-4)",
                      marginBottom: 4,
                    }}
                  >
                    {fact.label}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 600, lineHeight: 1.4, display: "block" }}>
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
