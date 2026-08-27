import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const flagship = projects.find((p) => p.id === "sellerex-usp");
  const logistiex = projects.find((p) => p.id === "logistiex");
  const mobile = projects.find((p) => p.id === "logistics-mobile");
  const common = projects.find((p) => p.id === "sellerex-common");
  const agency = projects.find((p) => p.id === "sellerex-agency");

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head fade-up">
          <span className="eyebrow">01 / Case Studies &amp; Systems</span>
          <h2 className="h-display h-lg">
            Selected <span className="text-outline">Work</span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            A few products and systems I&apos;ve helped design and build across AI, logistics, and SaaS.
          </p>
        </div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2px,0.3vw,4px)" }}>
          {flagship && (
            <ProjectCard project={flagship} layoutVariant="dominant" index={0} />
          )}
          {logistiex && (
            <ProjectCard project={logistiex} layoutVariant="split" index={1} />
          )}
          {mobile && (
            <ProjectCard project={mobile} layoutVariant="split" index={2} />
          )}

          {/* 2-col smaller cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2px, 0.3vw, 4px)",
            }}
          >
            {common && (
              <article
                className="fade-up group"
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  padding: "clamp(24px, 3.5vw, 40px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid var(--line)",
                    paddingBottom: 16,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: ".35em",
                      textTransform: "uppercase",
                      color: "var(--acc)",
                    }}
                  >
                    Design System
                  </span>
                  <span style={{ fontSize: 10, fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".35em", color: "var(--fg-4)" }}>04</span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: "clamp(16px, 2vw, 22px)",
                    letterSpacing: "-.02em",
                    textTransform: "uppercase",
                    lineHeight: .96,
                    color: "var(--fg)",
                    marginBottom: 10,
                  }}
                >
                  {common.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 16 }}>
                  {common.description}
                </p>
                <ProjectCard project={common} layoutVariant="stacked" />
              </article>
            )}
            {agency && (
              <article
                className="fade-up group"
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  padding: "clamp(24px, 3.5vw, 40px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid var(--line)",
                    paddingBottom: 16,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: ".35em",
                      textTransform: "uppercase",
                      color: "var(--acc)",
                    }}
                  >
                    Internal Product
                  </span>
                  <span style={{ fontSize: 10, fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".35em", color: "var(--fg-4)" }}>05</span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: "clamp(16px, 2vw, 22px)",
                    letterSpacing: "-.02em",
                    textTransform: "uppercase",
                    lineHeight: .96,
                    color: "var(--fg)",
                    marginBottom: 10,
                  }}
                >
                  {agency.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 16 }}>
                  {agency.description}
                </p>
                <ProjectCard project={agency} layoutVariant="stacked" />
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
