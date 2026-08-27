"use client";

import React, { useState } from "react";
import { careerTimeline } from "@/data/career";
import { ChevronDown, ChevronUp } from "lucide-react";

export function CareerTimeline({ onOpenResumeModal }: { onOpenResumeModal?: () => void }) {
  const [expandedYear, setExpandedYear] = useState<string>("2026");

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="eyebrow">02 / Trajectory &amp; Growth</span>
            <h2 className="h-display h-lg">
              From intern<br />to <span className="text-outline">SE II.</span>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              A track record of increasing responsibility across product thinking, frontend engineering, and AI workflows.
            </p>
          </div>
          {onOpenResumeModal && (
            <button
              onClick={onOpenResumeModal}
              className="btn btn-ghost"
            >
              Download CV ↓
            </button>
          )}
        </div>

        {/* Timeline — Kurosawa stacking cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {careerTimeline.map((item) => {
            const isExpanded = expandedYear === item.year;
            const isLatest = item.year === "2026";

            return (
              <div
                key={item.year}
                style={{
                  background: isExpanded ? "var(--panel)" : "transparent",
                  border: "1px solid var(--line)",
                  transition: "background .3s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setExpandedYear((prev) => (prev === item.year ? "" : item.year))}
                  style={{
                    width: "100%",
                    padding: "clamp(18px, 2.5vw, 28px) clamp(20px, 3vw, 32px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 40px)", flexWrap: "wrap" }}>
                    {/* Year */}
                    <span
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: "clamp(28px, 4vw, 44px)",
                        letterSpacing: "-.02em",
                        color: isExpanded ? "var(--acc)" : "var(--fg-4)",
                        lineHeight: 1,
                        transition: "color .3s ease",
                        minWidth: "4.5ch",
                      }}
                    >
                      {item.year}
                    </span>

                    {/* Role + Company */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontFamily: "var(--display)",
                            fontWeight: 800,
                            fontSize: "clamp(14px, 1.8vw, 18px)",
                            letterSpacing: "-.01em",
                            textTransform: "uppercase",
                            color: "var(--fg)",
                          }}
                        >
                          {item.role}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--display)",
                            fontWeight: 800,
                            fontSize: 10,
                            letterSpacing: ".35em",
                            textTransform: "uppercase",
                            color: "var(--fg-3)",
                          }}
                        >
                          / {item.company}
                        </span>
                        {isLatest && (
                          <span
                            style={{
                              fontSize: 9,
                              fontFamily: "var(--display)",
                              fontWeight: 800,
                              letterSpacing: ".25em",
                              textTransform: "uppercase",
                              color: "var(--ok)",
                              padding: "3px 10px",
                              border: "1px solid var(--ok)",
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--fg-3)",
                          marginTop: 4,
                          display: "block",
                          letterSpacing: ".02em",
                        }}
                      >
                        {item.scope}
                      </span>
                    </div>
                  </div>

                  {isExpanded ? (
                    <ChevronUp size={16} style={{ color: "var(--acc)", flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={16} style={{ color: "var(--fg-3)", flexShrink: 0 }} />
                  )}
                </button>

                {isExpanded && (
                  <div
                    className="animate-fadeIn"
                    style={{
                      borderTop: "1px solid var(--line)",
                      padding: "clamp(20px, 3vw, 32px) clamp(20px, 3vw, 32px)",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "clamp(20px, 3vw, 40px)",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          letterSpacing: ".4em",
                          textTransform: "uppercase",
                          color: "var(--acc)",
                          marginBottom: 16,
                        }}
                      >
                        Key Deliverables
                      </span>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              gap: 12,
                              fontSize: 13,
                              color: "var(--fg-2)",
                              lineHeight: 1.6,
                            }}
                          >
                            <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>—</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          letterSpacing: ".4em",
                          textTransform: "uppercase",
                          color: "var(--acc)",
                          marginBottom: 16,
                        }}
                      >
                        Core Stack
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: 9,
                              fontFamily: "var(--display)",
                              fontWeight: 800,
                              letterSpacing: ".3em",
                              textTransform: "uppercase",
                              color: "var(--fg-3)",
                              padding: "4px 10px",
                              border: "1px solid var(--line)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
