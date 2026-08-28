"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { SellereXUSPMockup } from "../mockups/SellereXUSPMockup";
import { LogistieXDashboardMockup } from "../mockups/LogistieXDashboardMockup";
import { MobileAppMockup } from "../mockups/MobileAppMockup";
import { DesignSystemMockup } from "../mockups/DesignSystemMockup";
import { AgencyMockup } from "../mockups/AgencyMockup";

interface ProjectCardProps {
  project: Project;
  layoutVariant?: "dominant" | "split" | "stacked";
  index?: number;
}

function renderMockup(id: string, compact = false) {
  switch (id) {
    case "sellerex-usp":    return <SellereXUSPMockup compact={compact} />;
    case "logistiex":       return <LogistieXDashboardMockup />;
    case "logistics-mobile":return <MobileAppMockup />;
    case "sellerex-common": return <DesignSystemMockup />;
    case "sellerex-agency": return <AgencyMockup />;
    default:                return null;
  }
}

const cardBase: React.CSSProperties = {
  background: "var(--panel)",
  border: "1px solid var(--line)",
  transition: "border-color .3s ease, background .3s ease",
};

export function ProjectCard({ project, layoutVariant = "split", index = 0 }: ProjectCardProps) {
  // ── Dominant (full-width flagship card) ─────────────────────────────────
  if (layoutVariant === "dominant") {
    return (
      <article
        className="fade-up group"
        style={{
          ...cardBase,
          padding: "clamp(20px, 3.5vw, 48px)",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 18,
            marginBottom: 24,
          }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                color: "var(--fg-4)",
              }}
            >
              {project.number}
            </span>
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
              {project.label}
            </span>
          </div>
          <span
            style={{
              fontSize: 11,
              color: "var(--fg-3)",
              fontFamily: "var(--body)",
              letterSpacing: ".04em",
            }}
          >
            {project.period}
          </span>
        </div>

        {/* Headline + blurb + action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">
          <div className="max-w-2xl">
            <h3
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: "clamp(22px, 3.2vw, 42px)",
                letterSpacing: "-.02em",
                textTransform: "uppercase",
                lineHeight: .95,
                color: "var(--fg)",
                marginBottom: 12,
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: "clamp(13px, 1.3vw, 15px)", color: "var(--fg-2)", lineHeight: 1.7 }}>
              {project.description}
            </p>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="btn btn-primary self-start md:self-end shrink-0"
          >
            <span>Case study →</span>
          </Link>
        </div>

        {/* Mockup */}
        <div
          style={{
            overflow: "hidden",
            border: "1px solid var(--line)",
            transition: "transform .35s var(--ease)",
          }}
          className="group-hover:scale-[1.005] w-full"
        >
          {renderMockup(project.id, false)}
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "var(--fg-3)",
                padding: "3px 8px",
                border: "1px solid var(--line)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    );
  }

  // ── Stacked (compact panels in 2-col grid) ───────────────────────────────
  if (layoutVariant === "stacked") {
    return (
      <div style={{ marginTop: 8 }}>
        <div style={{ overflow: "hidden", border: "1px solid var(--line)" }} className="w-full">
          {renderMockup(project.id, true)}
        </div>
      </div>
    );
  }

  // ── Split (default — responsive grid) ─────────────────────────────────
  return (
    <article
      className="fade-up group"
      style={{
        ...cardBase,
        padding: "clamp(20px, 3vw, 36px)",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: 16,
          marginBottom: 22,
        }}
        className="flex items-center justify-between"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 10,
              letterSpacing: ".35em",
              color: "var(--fg-4)",
            }}
          >
            {project.number}
          </span>
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
            {project.label}
          </span>
        </div>
        <span style={{ fontSize: 11, color: "var(--fg-3)", letterSpacing: ".04em" }}>
          {project.period}
        </span>
      </div>

      {/* Responsive Grid: 1 col on mobile/tablet, 12 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
        {/* Left: text */}
        <div className="lg:col-span-5">
          <h3
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.2vw, 26px)",
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              lineHeight: .98,
              color: "var(--fg)",
              marginBottom: 10,
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 18 }}>
            {project.description}
          </p>

          <div
            style={{
              fontSize: 9,
              fontFamily: "var(--display)",
              fontWeight: 800,
              letterSpacing: ".35em",
              textTransform: "uppercase",
              color: "var(--fg-4)",
              marginBottom: 3,
            }}
          >
            My Role
          </div>
          <div style={{ fontSize: 12, color: "var(--fg-2)", marginBottom: 18 }}>
            {project.role}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 9,
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "var(--fg-3)",
                  padding: "3px 8px",
                  border: "1px solid var(--line)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              fontSize: 11,
            }}
          >
            <span>{project.hasCaseStudy ? "Case study" : "View project"}</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Right: mockup */}
        <div
          style={{
            overflow: "hidden",
            border: "1px solid var(--line)",
            transition: "transform .35s var(--ease)",
          }}
          className="lg:col-span-7 w-full group-hover:scale-[1.01]"
        >
          {renderMockup(project.id, false)}
        </div>
      </div>
    </article>
  );
}
