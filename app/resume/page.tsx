"use client";

import React from "react";
import Link from "next/link";
import { resumeData } from "@/data/resume";
import { ArrowLeft, Download, Mail, MapPin, Phone, Globe } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { KurosawaEffects } from "@/components/effects/KurosawaEffects";

export default function ResumePage() {
  return (
    <>
      <KurosawaEffects />
      <div
        style={{
          minHeight: "100vh",
          background: "var(--ink)",
          color: "var(--fg)",
          padding: "clamp(24px, 4vh, 48px) var(--gut)",
        }}
      >
        {/* Top Action Toolbar */}
        <div
          className="no-print"
          style={{
            maxWidth: 860,
            margin: "0 auto 32px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <Link
            href="/"
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
            }}
          >
            <ArrowLeft size={13} />
            <span>/ Back to portfolio</span>
          </Link>

          <a
            href="/Vedant_Kumar_Resume.pdf"
            download="Vedant_Kumar_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: "10px 20px", fontSize: 11 }}
          >
            <Download size={13} />
            <span>Download PDF ↓</span>
          </a>
        </div>

        {/* Main Resume Sheet */}
        <main
          style={{
            maxWidth: 860,
            margin: "0 auto",
            background: "var(--panel)",
            border: "1px solid var(--line)",
            padding: "clamp(28px, 4.5vw, 56px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 22, marginBottom: 26 }}>
            <h1
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.5vw, 38px)",
                letterSpacing: "-.02em",
                textTransform: "uppercase",
                color: "var(--fg)",
                lineHeight: .95,
                marginBottom: 8,
              }}
            >
              {resumeData.name}
            </h1>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--acc)",
                letterSpacing: ".05em",
                textTransform: "uppercase",
                fontFamily: "var(--display)",
                marginBottom: 14,
              }}
            >
              {resumeData.title}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", fontSize: 12, color: "var(--fg-3)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Phone size={11} style={{ color: "var(--acc)" }} /> {resumeData.contact.phone}
              </span>
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <Mail size={11} style={{ color: "var(--acc)" }} /> {resumeData.contact.email}
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <LinkedInIcon className="w-3 h-3 text-[var(--acc)]" /> linkedin.com/in/vedantkumar1
              </a>
              <a
                href={resumeData.contact.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <Globe size={11} style={{ color: "var(--acc)" }} /> vedantkumar.vercel.app
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <GitHubIcon className="w-3 h-3 text-[var(--acc)]" /> github.com/vedant48
              </a>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 10,
              }}
            >
              Professional Summary
            </span>
            <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.75 }}>
              {resumeData.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 12,
              }}
            >
              Technical Skills
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {resumeData.skills.map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      minWidth: 150,
                      flexShrink: 0,
                    }}
                  >
                    {s.category}:
                  </span>
                  <span style={{ color: "var(--fg-3)", lineHeight: 1.5 }}>
                    {s.items.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 16,
              }}
            >
              Professional Experience
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {resumeData.experience.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: 16,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          fontSize: 15,
                          letterSpacing: "-.01em",
                          textTransform: "uppercase",
                          color: "var(--fg)",
                          display: "inline",
                          marginRight: 8,
                        }}
                      >
                        {exp.company}
                      </h3>
                      <span style={{ fontSize: 12, color: "var(--fg-3)" }}>
                        — {exp.role} ({exp.location})
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--fg-4)", fontFamily: "var(--body)", fontWeight: 700 }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12, listStyle: "none", padding: 0 }}>
                    {exp.highlights.map((hl, j) => (
                      <li key={j} style={{ display: "flex", gap: 8, fontSize: 12, color: "var(--fg-2)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          fontSize: 8,
                          letterSpacing: ".2em",
                          textTransform: "uppercase",
                          color: "var(--fg-3)",
                          padding: "2px 6px",
                          border: "1px solid var(--line)",
                          background: "var(--ink-2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Products & Websites */}
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 14,
              }}
            >
              Selected Products &amp; Deployed Systems
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {resumeData.keyProjects.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 14px",
                    background: "var(--ink-2)",
                    border: "1px solid var(--line)",
                  }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs"
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--fg)",
                        marginRight: 6,
                      }}
                    >
                      {p.name}:
                    </span>
                    <span style={{ color: "var(--fg-2)" }}>{p.description}</span>
                  </div>
                  <span style={{ color: "var(--fg-4)", fontSize: 10, flexShrink: 0 }}>
                    {p.technologies.slice(0, 3).join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 12,
              }}
            >
              Education
            </span>
            {resumeData.education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 4 }}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 12,
                      letterSpacing: ".05em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      display: "block",
                      marginBottom: 2,
                    }}
                  >
                    {edu.degree}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--fg-3)" }}>{edu.institution} {edu.score ? `· ${edu.score}` : ""}</span>
                </div>
                <span style={{ fontSize: 11, color: "var(--fg-3)" }}>{edu.period}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
