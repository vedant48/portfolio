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
          padding: "clamp(28px, 4vw, 56px)",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            borderBottom: "1px solid var(--line)",
            paddingBottom: 24,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
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
              fontSize: 12,
              color: "var(--fg-3)",
              fontFamily: "var(--body)",
              letterSpacing: ".04em",
            }}
          >
            {project.period}
          </span>
        </div>

        {/* Headline + blurb */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(16px, 3vw, 48px)",
            alignItems: "end",
            marginBottom: "clamp(24px, 4vw, 40px)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: "clamp(26px, 4vw, 48px)",
                letterSpacing: "-.02em",
                textTransform: "uppercase",
                lineHeight: .92,
                color: "var(--fg)",
                marginBottom: 16,
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: "clamp(13px, 1.4vw, 15px)", color: "var(--fg-2)", lineHeight: 1.7, maxWidth: "64ch" }}>
              {project.description}
            </p>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="btn btn-primary"
            style={{ flexShrink: 0, alignSelf: "flex-end" }}
          >
            Case study →
          </Link>
        </div>

        {/* Mockup */}
        <div
          style={{
            overflow: "hidden",
            border: "1px solid var(--line)",
            transition: "transform .35s var(--ease)",
          }}
          className="group-hover:scale-[1.005]"
        >
          {renderMockup(project.id, false)}
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20 }}>
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: "var(--fg-3)",
                padding: "4px 10px",
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
        <div style={{ overflow: "hidden", border: "1px solid var(--line)", height: 180 }}>
          {renderMockup(project.id, true)}
        </div>
      </div>
    );
  }

  // ── Split (default — content left, mockup right) ─────────────────────────
  return (
    <article
      className="fade-up group"
      style={{
        ...cardBase,
        padding: "clamp(24px, 3.5vw, 40px)",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--line)",
          paddingBottom: 18,
          marginBottom: 28,
        }}
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
        <span style={{ fontSize: 11, color: "var(--fg-3)", letterSpacing: ".04em" }}>
          {project.period}
        </span>
      </div>

      {/* Content + Mockup */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(20px, 4vw, 48px)",
          alignItems: "center",
        }}
      >
        {/* Left: text */}
        <div>
          <h3
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.4vw, 28px)",
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              lineHeight: .96,
              color: "var(--fg)",
              marginBottom: 12,
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 20 }}>
            {project.description}
          </p>

          <div
            style={{
              fontSize: 10,
              fontFamily: "var(--display)",
              fontWeight: 800,
              letterSpacing: ".35em",
              textTransform: "uppercase",
              color: "var(--fg-4)",
              marginBottom: 4,
            }}
          >
            My Role
          </div>
          <div style={{ fontSize: 12, color: "var(--fg-2)", marginBottom: 20 }}>
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
              marginTop: 6,
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
          className="group-hover:scale-[1.01]"
        >
          {renderMockup(project.id, false)}
        </div>
      </div>
    </article>
  );
}
