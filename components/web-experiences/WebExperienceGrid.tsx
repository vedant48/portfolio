"use client";

import React, { useState } from "react";
import Image from "next/image";
import { webExperiences, WebExperience } from "@/data/web-experiences";
import { WebExperienceMockup } from "../mockups/WebExperienceMockup";
import { ArrowUpRight, X, ExternalLink, Globe } from "lucide-react";

export function WebExperienceGrid() {
  const [selectedExp, setSelectedExp] = useState<WebExperience | null>(null);

  return (
    <section id="web-experiences" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-head fade-up">
          <span className="eyebrow">03 / Live Systems &amp; Platforms</span>
          <h2 className="h-display h-lg">
            Web <span className="text-outline">Experiences</span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Live enterprise platforms, agentic AI operating systems, logistics engines, and digital homes
            engineered with modern frontend architecture.
          </p>
        </div>

        {/* Responsive Grid — zero-gap sharp cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[var(--line)] border border-[var(--line)]"
        >
          {webExperiences.map((exp, i) => (
            <article
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className="group fade-up flex flex-col justify-between"
              style={{
                background: "var(--panel)",
                cursor: "pointer",
                transition: "border-color .25s var(--ease), background .25s var(--ease)",
                animationDelay: `${i * 0.08}s`,
              }}
              /* Yellow border effect on hover */
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 0 1px var(--acc)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Mockup preview with screenshot */}
              <div>
                <WebExperienceMockup exp={exp} />

                {/* Card body */}
                <div style={{ padding: "clamp(18px, 2vw, 24px)" }}>
                  {/* Category Eyebrow */}
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 8,
                      letterSpacing: ".35em",
                      textTransform: "uppercase",
                      color: "var(--acc)",
                      marginBottom: 8,
                    }}
                  >
                    {exp.category}
                  </span>

                  {/* Name + link icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 10,
                      gap: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: "clamp(15px, 1.4vw, 18px)",
                        letterSpacing: "-.01em",
                        textTransform: "uppercase",
                        color: "var(--fg)",
                        lineHeight: 1.1,
                        transition: "color .2s ease",
                      }}
                      className="group-hover:text-[var(--acc)]"
                    >
                      {exp.name}
                    </h3>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title={`Open ${exp.name} in new tab`}
                        style={{
                          color: "var(--fg-4)",
                          flexShrink: 0,
                          padding: 4,
                          border: "1px solid var(--line)",
                          background: "var(--ink-2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="hover:border-[var(--acc)] hover:text-[var(--acc)] transition-colors"
                      >
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--fg-2)",
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Bottom meta row */}
              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  padding: "14px clamp(18px, 2vw, 24px)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 12px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--ink-2)",
                }}
              >
                {/* Role tag */}
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 8,
                      letterSpacing: ".35em",
                      textTransform: "uppercase",
                      color: "var(--fg-4)",
                    }}
                  >
                    Role
                  </span>
                  <span style={{ fontSize: 11, color: "var(--fg-2)", fontWeight: 500 }}>
                    {exp.role}
                  </span>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {exp.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: 8,
                        letterSpacing: ".15em",
                        textTransform: "uppercase",
                        color: "var(--fg-3)",
                        padding: "2px 6px",
                        border: "1px solid var(--line)",
                        background: "var(--panel)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detail overlay — Kurosawa modal style */}
      {selectedExp && (
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
            padding: "clamp(16px, 4vw, 48px)",
          }}
          onClick={() => setSelectedExp(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 680,
              maxHeight: "90vh",
              overflowY: "auto",
              background: "var(--panel)",
              border: "1px solid var(--line)",
              padding: "clamp(20px, 3vw, 36px)",
            }}
            className="animate-fadeIn shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                borderBottom: "1px solid var(--line)",
                paddingBottom: 16,
                marginBottom: 20,
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 9,
                    letterSpacing: ".45em",
                    textTransform: "uppercase",
                    color: "var(--acc)",
                    marginBottom: 6,
                  }}
                >
                  {selectedExp.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    letterSpacing: "-.02em",
                    textTransform: "uppercase",
                    color: "var(--fg)",
                    lineHeight: .95,
                  }}
                >
                  {selectedExp.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                aria-label="Close modal"
                style={{
                  width: 34,
                  height: 34,
                  border: "1px solid var(--line)",
                  background: "var(--ink-2)",
                  color: "var(--fg-3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "border-color .2s ease, color .2s ease",
                }}
                className="hover:border-[var(--acc)] hover:text-[var(--acc)]"
              >
                <X size={15} />
              </button>
            </div>

            {/* Large screenshot preview in modal */}
            {selectedExp.image && (
              <div
                style={{
                  width: "100%",
                  marginBottom: 20,
                  border: "1px solid var(--line)",
                  background: "var(--ink-3)",
                  overflow: "hidden",
                }}
              >
                {/* Modal Browser Bar */}
                <div
                  style={{
                    height: 28,
                    background: "var(--ink-2)",
                    borderBottom: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ display: "flex", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                  </div>
                  <span style={{ fontFamily: "var(--body)", fontSize: 9, color: "var(--fg-3)" }}>
                    {selectedExp.url}
                  </span>
                  <div style={{ width: 24 }} />
                </div>

                <div style={{ position: "relative", width: "100%", height: 260 }}>
                  <Image
                    src={selectedExp.image}
                    alt={`${selectedExp.name} screenshot preview`}
                    fill
                    sizes="680px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.75, marginBottom: 20 }}>
              {selectedExp.description}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: 9,
                  letterSpacing: ".4em",
                  textTransform: "uppercase",
                  color: "var(--acc)",
                  marginBottom: 12,
                }}
              >
                Key Highlights
              </span>
              <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none" }}>
                {selectedExp.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", gap: 10, fontSize: 12, color: "var(--fg-2)", lineHeight: 1.6 }}
                  >
                    <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer: stack + visit link */}
            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: 8,
                    letterSpacing: ".35em",
                    textTransform: "uppercase",
                    color: "var(--fg-4)",
                    marginBottom: 6,
                  }}
                >
                  Tech Stack
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {selectedExp.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: 8,
                        letterSpacing: ".2em",
                        textTransform: "uppercase",
                        color: "var(--fg-3)",
                        padding: "3px 8px",
                        border: "1px solid var(--line)",
                        background: "var(--ink-2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedExp.url && (
                <a
                  href={selectedExp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "10px 20px", fontSize: 11, display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span>Visit Live Website</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
