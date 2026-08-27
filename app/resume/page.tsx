"use client";

import React from "react";
import Link from "next/link";
import { resumeData } from "@/data/resume";
import { ArrowLeft, Printer, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { KurosawaEffects } from "@/components/effects/KurosawaEffects";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

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
        {/* Top Action Toolbar (Hidden during print) */}
        <div
          className="no-print"
          style={{
            maxWidth: 820,
            margin: "0 auto 32px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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

          <button
            onClick={handlePrint}
            className="btn btn-primary"
            style={{ padding: "9px 18px", fontSize: 11 }}
          >
            <Printer size={13} />
            <span>Print / PDF ↓</span>
          </button>
        </div>

        {/* Main Resume Sheet */}
        <main
          style={{
            maxWidth: 820,
            margin: "0 auto",
            background: "var(--panel)",
            border: "1px solid var(--line)",
            padding: "clamp(32px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
          className="print:border-none print:p-0 print:m-0 print:bg-white print:text-black"
        >
          {/* Header section */}
          <header style={{ borderBottom: "1px solid var(--line)", paddingBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <div>
                <h1
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: "clamp(28px, 4vw, 42px)",
                    letterSpacing: "-.02em",
                    textTransform: "uppercase",
                    color: "var(--fg)",
                    lineHeight: .92,
                  }}
                  className="print:text-black"
                >
                  {resumeData.name}
                </h1>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--fg-3)",
                    marginTop: 8,
                    fontWeight: 500,
                  }}
                  className="print:text-neutral-700"
                >
                  {resumeData.title}
                </p>
              </div>

              <div style={{ fontSize: 11, color: "var(--fg-3)", textAlign: "right" }} className="print:text-neutral-700">
                <p style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                  <MapPin size={11} /> {resumeData.contact.location}
                </p>
                <p style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6, marginTop: 4 }}>
                  <Mail size={11} /> {resumeData.contact.email}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 24px",
                fontSize: 11,
                color: "var(--fg-3)",
                paddingTop: 8,
              }}
              className="print:text-neutral-700"
            >
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors print:text-neutral-700"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit" }}
              >
                <LinkedInIcon className="w-3.5 h-3.5" /> linkedin.com/in/vedantkumar1
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors print:text-neutral-700"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit" }}
              >
                <GitHubIcon className="w-3.5 h-3.5" /> github.com/vedant48
              </a>
            </div>
          </header>

          {/* Executive Summary */}
          <section>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".45em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 12,
              }}
              className="print:text-neutral-700"
            >
              Executive Summary
            </span>
            <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.8 }} className="print:text-neutral-800">
              {resumeData.summary}
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".45em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 20,
              }}
              className="print:text-neutral-700"
            >
              Professional Experience
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {resumeData.experience.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: i === 0 ? "1px solid var(--line)" : "none",
                    borderBottom: "1px solid var(--line)",
                    padding: "20px 0",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <h2
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          fontSize: 13,
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          color: "var(--fg)",
                        }}
                        className="print:text-black"
                      >
                        {exp.role}
                      </h2>
                      <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 9, letterSpacing: ".3em", color: "var(--fg-4)" }}>
                        / {exp.company}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--fg-3)" }} className="print:text-neutral-700">{exp.period}</span>
                  </div>

                  <p style={{ fontSize: 12, color: "var(--fg-3)", fontStyle: "italic", marginBottom: 10 }}>
                    {exp.summary}
                  </p>

                  <ul style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12, listStyle: "none" }}>
                    {exp.highlights.map((hl, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: 12, color: "var(--fg-2)", lineHeight: 1.6 }} className="print:text-neutral-800">
                        <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>—</span>
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
                          letterSpacing: ".25em",
                          textTransform: "uppercase",
                          color: "var(--fg-3)",
                          padding: "2px 7px",
                          border: "1px solid var(--line)",
                        }}
                        className="print:bg-neutral-100 print:text-black"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Domain */}
          <section>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".45em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 16,
              }}
              className="print:text-neutral-700"
            >
              Technical Expertise &amp; Tooling
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {resumeData.skills.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--panel-2)",
                    border: "1px solid var(--line)",
                    padding: "14px 16px",
                  }}
                  className="print:border-neutral-300 print:bg-white"
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: ".25em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      marginBottom: 6,
                    }}
                    className="print:text-black"
                  >
                    {s.category}
                  </span>
                  <p style={{ fontSize: 11, color: "var(--fg-3)", lineHeight: 1.5 }} className="print:text-neutral-800">
                    {s.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".45em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 16,
              }}
              className="print:text-neutral-700"
            >
              Education
            </span>
            {resumeData.education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      marginBottom: 3,
                    }}
                    className="print:text-black"
                  >
                    {edu.degree}
                  </h2>
                  <span style={{ fontSize: 11, color: "var(--fg-3)" }} className="print:text-neutral-700">{edu.institution}</span>
                </div>
                <span style={{ fontSize: 11, color: "var(--fg-3)" }} className="print:text-neutral-700">{edu.period}</span>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
