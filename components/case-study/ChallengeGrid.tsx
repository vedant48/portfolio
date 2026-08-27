import React from "react";
import { ChallengeItem } from "@/data/projects";

export function ChallengeGrid({ challenges }: { challenges: ChallengeItem[] }) {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <span className="eyebrow">Engineering &amp; UX Decisions</span>
        <h3 className="h-display h-md">Key Challenges &amp; Solutions</h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {challenges.map((c, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--line)",
              padding: "clamp(20px, 3vw, 32px)",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: "clamp(14px, 1.8vw, 18px)",
                letterSpacing: "-.01em",
                textTransform: "uppercase",
                color: "var(--fg)",
                marginBottom: 20,
              }}
            >
              {c.title}
            </h4>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
              }}
            >
              {/* Challenge */}
              <div
                style={{
                  background: "var(--panel-2)",
                  border: "1px solid var(--line)",
                  padding: "16px 18px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 9,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color: "var(--fg-4)",
                    marginBottom: 8,
                  }}
                >
                  The Challenge
                </span>
                <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>
                  {c.challenge}
                </p>
              </div>

              {/* Technical Decision */}
              <div
                style={{
                  background: "var(--panel-2)",
                  border: "1px solid var(--line)",
                  padding: "16px 18px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 9,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color: "var(--acc)",
                    marginBottom: 8,
                  }}
                >
                  Technical Decision
                </span>
                <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>
                  {c.decision}
                </p>
              </div>

              {/* Outcome */}
              <div
                style={{
                  background: "var(--panel-2)",
                  border: "1px solid var(--line)",
                  padding: "16px 18px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 9,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color: "var(--ok)",
                    marginBottom: 8,
                  }}
                >
                  Outcome
                </span>
                <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>
                  {c.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
