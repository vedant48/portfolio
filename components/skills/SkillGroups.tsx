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

        {/* Responsive Grid: 1 col on mobile/tablet, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-[var(--line)] border border-[var(--line)]">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="fade-up"
              style={{
                background: "var(--panel)",
                padding: "clamp(20px, 3.5vw, 40px)",
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
                  marginBottom: 20,
                  gap: 12,
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
                      lineHeight: 1.15,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--fg-3)",
                      marginTop: 4,
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
                    flexShrink: 0,
                  }}
                >
                  0{idx + 1}
                </span>
              </div>

              {/* Responsive Skills sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="p-1">
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: 11,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "var(--fg)",
                        marginBottom: 3,
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
