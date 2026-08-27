"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Project } from "@/data/projects";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* Back link */}
      <Link
        href="/#work"
        className="hover:text-[var(--acc)] transition-colors"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 11,
          fontFamily: "var(--display)",
          fontWeight: 800,
          letterSpacing: ".25em",
          textTransform: "uppercase",
          color: "var(--fg-3)",
          width: "fit-content",
        }}
      >
        <ArrowLeft size={13} />
        <span>/ Back to work</span>
      </Link>

      {/* Hero Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
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

        <h1
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: "clamp(32px, 6vw, 64px)",
            letterSpacing: "-.02em",
            textTransform: "uppercase",
            lineHeight: .92,
            color: "var(--fg)",
            marginBottom: 20,
          }}
        >
          {project.title}
        </h1>

        <p className="lede" style={{ maxWidth: "64ch" }}>
          {project.tagline}
        </p>
      </div>

      {/* Metadata Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          borderTop: "1px solid var(--line)",
          paddingTop: 24,
        }}
      >
        {[
          { label: "Role", value: project.role },
          { label: "Company", value: project.company },
          { label: "Period", value: project.period },
          { label: "Specialization", value: "Product · Frontend · AI" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--line)",
              padding: "16px 20px",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 6,
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: "var(--body)",
                fontSize: 12,
                color: "var(--fg)",
                fontWeight: 600,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
