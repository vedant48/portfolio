"use client";

import React, { useState } from "react";
import { ProjectWorkflowStep } from "@/data/projects";
import { UploadCloud, Cpu, Layers, GitBranch, Sparkles, Image, Send } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UploadCloud,
  Cpu,
  Layers,
  GitBranch,
  Sparkles,
  Image,
  Send,
};

export function WorkflowDiagram({ steps }: { steps: ProjectWorkflowStep[] }) {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <div
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
          alignItems: "flex-end",
          borderBottom: "1px solid var(--line)",
          paddingBottom: 20,
          marginBottom: 28,
        }}
      >
        <div>
          <span className="eyebrow">End-to-End System Pipeline</span>
          <h3 className="h-display h-md">Interactive Product Workflow</h3>
        </div>
        <span style={{ fontSize: 11, color: "var(--fg-3)", fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase" }}>
          Click step to inspect
        </span>
      </div>

      {/* Steps Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          gap: 2,
          marginBottom: 20,
        }}
      >
        {steps.map((step, idx) => {
          const Icon = iconMap[step.iconName] || Layers;
          const isSelected = selectedStep === idx;

          return (
            <button
              key={step.number}
              onClick={() => setSelectedStep(idx)}
              style={{
                padding: "16px 14px",
                border: "1px solid var(--line)",
                background: isSelected ? "var(--ink)" : "var(--panel-2)",
                color: isSelected ? "var(--fg)" : "var(--fg-2)",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                minHeight: 120,
                transition: "border-color .2s ease, background .2s ease",
              }}
              className="hover:border-[var(--acc)]"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <span
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 9,
                    letterSpacing: ".25em",
                    color: isSelected ? "var(--acc)" : "var(--fg-4)",
                  }}
                >
                  {step.number}
                </span>
                <Icon size={14} style={{ color: isSelected ? "var(--acc)" : "var(--fg-4)" }} />
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 10,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: isSelected ? "var(--fg)" : "var(--fg)",
                    lineHeight: 1.2,
                    marginBottom: 4,
                  }}
                >
                  {step.title}
                </span>
                <span style={{ fontSize: 9, color: "var(--fg-3)", display: "block" }}>
                  {step.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active step detail */}
      <div
        style={{
          background: "var(--panel-2)",
          border: "1px solid var(--line)",
          padding: "20px 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 10,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--acc)",
            }}
          >
            Stage {steps[selectedStep].number} — {steps[selectedStep].title}
          </span>
          <span
            style={{
              fontSize: 9,
              fontFamily: "var(--display)",
              fontWeight: 800,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
              border: "1px solid var(--line)",
              padding: "2px 6px",
            }}
          >
            {steps[selectedStep].description}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7 }}>
          {steps[selectedStep].detail}
        </p>
      </div>
    </div>
  );
}
