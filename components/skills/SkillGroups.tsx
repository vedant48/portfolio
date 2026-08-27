import React from "react";
import { skillCategories } from "@/data/skills";

export function SkillGroups() {
  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-head fade-up">
          <span className="eyebrow">04 / Technical Capabilities</span>
          <h2 className="h-display h-lg">
            Skills &amp; <span className="text-outline">Domain</span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Core technical competencies and product capabilities refined across production codebases.
          </p>
        </div>

        {/* 2-col grid of sharp bordered panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="fade-up"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line)",
                padding: "clamp(24px, 3vw, 40px)",
                animationDelay: `${idx * 0.08}s`,
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: 16,
                  marginBottom: 24,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: "clamp(14px, 1.6vw, 18px)",
                      letterSpacing: "-.01em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--fg-3)",
                      marginTop: 3,
                      display: "block",
                    }}
                  >
                    {cat.subtitle}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 10,
                    letterSpacing: ".35em",
                    color: "var(--acc)",
                  }}
                >
                  0{idx + 1}
                </span>
              </div>

              {/* Skills list */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 20px",
                }}
              >
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: 11,
                        letterSpacing: ".2em",
                        textTransform: "uppercase",
                        color: "var(--fg)",
                        marginBottom: 4,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: 11,
                        color: "var(--fg-3)",
                        lineHeight: 1.5,
                      }}
                    >
                      {skill.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
