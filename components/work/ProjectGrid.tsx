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
          <p className="lede" style={{ marginTop: 14 }}>
            Products and systems engineered across AI catalog workflows, logistics operations, and shared design systems.
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

          {/* Responsive 2-col cards for projects 04 & 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] sm:gap-1">
            {common && (
              <ProjectCard project={common} layoutVariant="stacked" index={3} />
            )}
            {agency && (
              <ProjectCard project={agency} layoutVariant="stacked" index={4} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
