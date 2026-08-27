"use client";

import React from "react";
import Link from "next/link";
import { resumeData } from "@/data/resume";
import { Download, Printer, X, ExternalLink, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "rgba(0,0,0,.85)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 3vw, 40px)",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 780,
          background: "var(--panel)",
          border: "1px solid var(--line)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        className="animate-fadeIn no-print"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div
          style={{
            padding: "14px clamp(16px, 2.5vw, 28px)",
            borderBottom: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "var(--fg)",
              }}
            >
              {resumeData.name} — Resume
            </span>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 8,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: "var(--ok)",
                padding: "2px 7px",
                border: "1px solid var(--ok)",
              }}
            >
              PDF Ready
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => window.print()}
              className="btn btn-ghost"
              style={{ padding: "7px 14px", fontSize: 11 }}
            >
              <Printer size={12} />
              Print / PDF
            </button>
            <Link
              href="/resume"
              className="btn btn-ghost"
              style={{ padding: "7px 14px", fontSize: 11 }}
            >
              <ExternalLink size={12} />
              Full page
            </Link>
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: 32,
                height: 32,
                border: "1px solid var(--line)",
                background: "transparent",
                color: "var(--fg-3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color .2s ease, color .2s ease",
              }}
              className="hover:border-[var(--acc)] hover:text-[var(--acc)] transition-colors"
            >
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Scrollable Document */}
        <div style={{ overflowY: "auto", padding: "clamp(24px, 4vw, 48px)", flex: 1 }}>

          {/* Name + title */}
          <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 24, marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              <h1
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  letterSpacing: "-.02em",
                  textTransform: "uppercase",
                  color: "var(--fg)",
                  lineHeight: .95,
                }}
              >
                {resumeData.name}
              </h1>
              <span style={{ fontSize: 12, color: "var(--fg-3)", fontFamily: "var(--body)", fontWeight: 500 }}>
                {resumeData.title}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: 11, color: "var(--fg-3)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <MapPin size={11} /> {resumeData.contact.location}
              </span>
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <Mail size={11} /> {resumeData.contact.email}
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <LinkedInIcon className="w-3 h-3" /> linkedin.com/in/vedantkumar1
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--acc)] transition-colors"
                style={{ display: "flex", alignItems: "center", gap: 5, color: "inherit" }}
              >
                <GitHubIcon className="w-3 h-3" /> github.com/vedant48
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
                fontSize: 9,
                letterSpacing: ".45em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 12,
              }}
            >
              Summary
            </span>
            <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.75 }}>
              {resumeData.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: 28 }}>
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
            >
              Work Experience
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {resumeData.experience.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: i === 0 ? "1px solid var(--line)" : "none",
                    borderBottom: "1px solid var(--line)",
                    padding: "18px 0",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, flexWrap: "wrap", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          fontSize: 12,
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          color: "var(--fg)",
                        }}
                      >
                        {exp.role}
                      </span>
                      <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 9, letterSpacing: ".3em", color: "var(--fg-4)" }}>
                        / {exp.company}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--fg-3)", fontFamily: "var(--body)" }}>{exp.period}</span>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                    {exp.highlights.map((hl, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: 12, color: "var(--fg-2)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>—</span>
                        {hl}
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
                          fontSize: 7,
                          letterSpacing: ".25em",
                          textTransform: "uppercase",
                          color: "var(--fg-3)",
                          padding: "2px 6px",
                          border: "1px solid var(--line)",
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

          {/* Skills grid */}
          <div style={{ marginBottom: 28 }}>
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
            >
              Technical Domain &amp; Stack
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {resumeData.skills.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--panel-2)",
                    border: "1px solid var(--line)",
                    padding: "12px 14px",
                  }}
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
                  >
                    {s.category}
                  </span>
                  <p style={{ fontSize: 11, color: "var(--fg-3)", lineHeight: 1.5 }}>
                    {s.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
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
            >
              Education
            </span>
            {resumeData.education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      display: "block",
                      marginBottom: 3,
                    }}
                  >
                    {edu.degree}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--fg-3)" }}>{edu.institution}</span>
                </div>
                <span style={{ fontSize: 11, color: "var(--fg-3)" }}>{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
