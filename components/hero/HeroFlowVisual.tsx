"use client";

import React, { useState } from "react";
import { Lightbulb, Compass, Layout, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroFlowVisual() {
  const [activeStep, setActiveStep] = useState<number>(4); // Default to AI (Phase 5)

  const steps = [
    {
      id: "idea",
      num: "01",
      label: "IDEA",
      subtitle: "Discovery & Framing",
      title: "Problem Framing & Discovery",
      icon: Lightbulb,
      description:
        "Deconstructing ambiguous business requirements and domain workflows to identify high-leverage opportunities before writing code.",
      deliverables: ["Domain Modeling", "Workflow Deconstruction", "Feasibility Mapping"],
    },
    {
      id: "product",
      num: "02",
      label: "PRODUCT",
      subtitle: "Architecture & Scoping",
      title: "Product Architecture & Scoping",
      icon: Compass,
      description:
        "Defining comprehensive user journeys, multi-tenant permission layers, operational edge cases, and client-server state boundaries.",
      deliverables: ["User Journey Flows", "Data Contract Design", "Edge Case Mapping"],
    },
    {
      id: "design",
      num: "03",
      label: "DESIGN",
      subtitle: "UI/UX & Design Systems",
      title: "UI/UX & Design Systems",
      icon: Layout,
      description:
        "Crafting dense, ergonomic data tables, accessible component tokens, responsive viewport hierarchies, and high-contrast aesthetics.",
      deliverables: ["Tokenized UI Systems", "Information Density", "Micro-Interactions"],
    },
    {
      id: "engineering",
      num: "04",
      label: "ENGINEERING",
      subtitle: "Next.js & Type Safety",
      title: "Frontend Engineering & Scale",
      icon: Code2,
      description:
        "Implementing type-safe React architectures, modular Next.js components, fast optimistic updates, and clean maintainable code.",
      deliverables: ["Strict TypeScript", "Optimistic Mutations", "Clean Code Architecture"],
    },
    {
      id: "ai",
      num: "05",
      label: "AI",
      subtitle: "Agentic Workflows",
      title: "Agentic AI & Orchestration",
      icon: Sparkles,
      description:
        "Orchestrating multi-modal vision LLMs, real-time catalog intelligence pipelines, and streaming agent interfaces into intuitive software.",
      deliverables: ["Vision LLM Pipelines", "Automated Catalog Workflows", "Streaming Agent UI"],
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line)",
      }}
      className="p-5 sm:p-7 md:p-8"
    >
      {/* Top Header Bar with balanced padding & background */}
      <div
        style={{
          background: "var(--ink-2)",
          border: "1px solid var(--line)",
          padding: "12px 18px",
          marginBottom: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--ok)",
              display: "inline-block",
              boxShadow: "0 0 8px var(--ok)",
              flexShrink: 0,
            }}
            className="animate-pulse"
          />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 10,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--acc)",
              lineHeight: 1,
            }}
          >
            Product Execution Spectrum
          </span>
        </div>

        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            padding: "4px 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
              lineHeight: 1,
            }}
          >
            Idea → Interface → AI
          </span>
        </div>
      </div>

      {/* 5-Step Connected Tab Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          const isLastOnMobile = idx === 4;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              style={{
                border: isActive ? "1px solid var(--acc)" : "1px solid var(--line)",
                background: isActive ? "var(--ink-3)" : "var(--panel)",
                cursor: "pointer",
                textAlign: "left",
                padding: "14px 14px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                transition: "all .2s ease",
                position: "relative",
              }}
              className={`group hover:border-[var(--acc)] ${
                isLastOnMobile ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* Active top accent line */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: -1,
                    right: -1,
                    height: 2,
                    background: "var(--acc)",
                  }}
                />
              )}

              {/* Number + Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 10,
                    letterSpacing: ".15em",
                    color: isActive ? "var(--acc)" : "var(--fg-4)",
                  }}
                >
                  {step.num}
                </span>
                <Icon
                  size={15}
                  style={{ color: isActive ? "var(--acc)" : "var(--fg-3)" }}
                  className="transition-colors group-hover:text-[var(--acc)]"
                />
              </div>

              {/* Main Label + Subtitle */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 12,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--fg)" : "var(--fg-2)",
                    lineHeight: 1.1,
                    marginBottom: 3,
                  }}
                  className="group-hover:text-[var(--fg)]"
                >
                  {step.label}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: 10,
                    color: "var(--fg-4)",
                    lineHeight: 1.2,
                    fontWeight: 500,
                  }}
                >
                  {step.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div
        style={{
          background: "var(--ink-2)",
          border: "1px solid var(--line)",
          padding: "clamp(18px, 2.5vw, 26px)",
        }}
      >
        {/* Card Top Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--line)",
            paddingBottom: 14,
            marginBottom: 14,
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: "1px solid var(--acc)",
                background: "var(--panel)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--acc)",
                flexShrink: 0,
              }}
            >
              <CurrentIcon size={17} />
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                <span
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 9,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color: "var(--acc)",
                  }}
                >
                  Phase {current.num} / 05
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: "clamp(14px, 1.6vw, 17px)",
                  letterSpacing: "-.01em",
                  textTransform: "uppercase",
                  color: "var(--fg)",
                  lineHeight: 1.1,
                }}
              >
                {current.title}
              </h3>
            </div>
          </div>

          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 8,
              letterSpacing: ".25em",
              textTransform: "uppercase",
              color: "var(--acc)",
              border: "1px solid var(--acc-dim)",
              padding: "4px 10px",
              background: "var(--panel)",
            }}
          >
            {current.label} SPECTRUM
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 13,
            color: "var(--fg-2)",
            lineHeight: 1.7,
            marginBottom: 16,
            maxWidth: 720,
          }}
        >
          {current.description}
        </p>

        {/* Deliverables / Key Focus items */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
            borderTop: "1px solid var(--line)",
            paddingTop: 14,
          }}
        >
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: ".25em",
              textTransform: "uppercase",
              color: "var(--fg-4)",
              marginRight: 6,
            }}
          >
            Deliverables:
          </span>
          {current.deliverables.map((item) => (
            <span
              key={item}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 11,
                fontWeight: 600,
                color: "var(--fg)",
                background: "var(--panel)",
                border: "1px solid var(--line)",
                padding: "4px 10px",
              }}
            >
              <CheckCircle2 size={12} style={{ color: "var(--acc)" }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
