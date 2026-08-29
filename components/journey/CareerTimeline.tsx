"use client";

import React, { useRef, useState, useEffect } from "react";
import { careerTimeline } from "@/data/career";

export function CareerTimeline({ onOpenResumeModal }: { onOpenResumeModal?: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Chronological order: 1st Intern (2023), 2nd SE (2024), 3rd SE II Active (2026)
  const chronologicalMilestones = [...careerTimeline].reverse();

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const totalScrollDistance = rect.height - window.innerHeight;
          if (totalScrollDistance <= 0) {
            setScrollProgress(0);
          } else {
            const currentScroll = -rect.top;
            const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  // Card 2 animation progress (0 -> 1 during the first 50% of section scroll)
  const card2Progress = Math.max(0, Math.min(1, scrollProgress / 0.5));
  // Card 3 animation progress (0 -> 1 during the second 50% of section scroll)
  const card3Progress = Math.max(0, Math.min(1, (scrollProgress - 0.5) / 0.5));

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{
        borderTop: "1px solid var(--line)",
        height: isDesktop ? "280vh" : "auto",
      }}
    >
      {/* Sticky Viewport on Desktop, natural flow on mobile */}
      <div
        className={`${
          isDesktop
            ? "sticky top-[var(--nav-h)] h-[calc(100vh-var(--nav-h))] flex flex-col justify-between overflow-hidden"
            : "section"
        }`}
        style={{
          paddingTop: isDesktop ? "clamp(20px, 3vh, 36px)" : undefined,
          paddingBottom: isDesktop ? "clamp(20px, 3vh, 36px)" : undefined,
        }}
      >
        <div className="container flex flex-col justify-between h-full">
          {/* Header Fixed on Top */}
          <div className="section-head fade-up mb-6 lg:mb-8 shrink-0">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5">
              <div>
                <span className="eyebrow">02 / Trajectory &amp; Growth</span>
                <h2 className="h-display h-lg">
                  From intern<br />to <span className="text-outline">SE II.</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col sm:items-start lg:items-end justify-between gap-4 max-w-lg">
                <p className="lede text-sm sm:text-base lg:text-right" style={{ margin: 0 }}>
                  Demonstrated track record of taking ownership across product workflows, frontend systems, and AI tooling.
                </p>
                {onOpenResumeModal && (
                  <button
                    onClick={onOpenResumeModal}
                    className="btn btn-ghost shrink-0"
                    style={{ fontSize: 11, padding: "8px 16px" }}
                  >
                    Full Resume ↓
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cards Frame */}
          <div
            className={`relative ${
              isDesktop ? "flex-1 w-full flex items-start justify-center" : "flex flex-col gap-4"
            }`}
          >
            {chronologicalMilestones.map((item, idx) => {
              const num = `0${idx + 1}`;
              const isTopActiveCard = idx === chronologicalMilestones.length - 1; // 2026 SE II is active

              // Compute progressive stacking position & narrowing scale (perspective card deck)
              let transformStyle = "none";
              let opacityStyle = 1;

              if (isDesktop) {
                if (idx === 0) {
                  // 1st Card (Intern 2023): scales down from 1.0 -> 0.92 as cards 2 & 3 stack on top
                  const scale = 1 - 0.08 * (card2Progress * 0.5 + card3Progress * 0.5);
                  transformStyle = `translate3d(0, 0px, 0) scale(${scale})`;
                } else if (idx === 1) {
                  // 2nd Card (SE 2024): slides up to +28px offset, scales down from 1.0 -> 0.96 as card 3 stacks on top
                  const translateY = (1 - card2Progress) * 120;
                  const scale = 1 - 0.04 * card3Progress;
                  transformStyle = `translate3d(0, calc(${translateY}% + 28px), 0) scale(${scale})`;
                  opacityStyle = card2Progress > 0.05 ? 1 : Math.max(0, card2Progress * 10);
                } else if (idx === 2) {
                  // 3rd Card (SE II 2026 Active): slides up to +56px offset at full 100% width (scale 1.0)
                  const translateY = (1 - card3Progress) * 120;
                  transformStyle = `translate3d(0, calc(${translateY}% + 56px), 0) scale(1.0)`;
                  opacityStyle = card3Progress > 0.05 ? 1 : Math.max(0, card3Progress * 10);
                }
              }

              return (
                <article
                  key={item.year}
                  className={`fade-up w-full ${isDesktop ? "absolute top-0 left-0 right-0" : ""}`}
                  style={{
                    zIndex: idx + 1,
                    transform: isDesktop ? transformStyle : "none",
                    transformOrigin: "top center",
                    opacity: isDesktop ? opacityStyle : 1,
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    boxShadow: idx > 0 ? "0 -16px 40px rgba(0,0,0,0.7)" : "none",
                    padding: "clamp(20px, 3.2vw, 36px)",
                    transition: isDesktop ? "opacity 0.15s ease-out" : "none",
                    willChange: isDesktop ? "transform, opacity" : "auto",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                    {/* Left Column: Number */}
                    <div className="lg:col-span-2 flex items-baseline lg:flex-col justify-between">
                      <span
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          fontSize: "clamp(40px, 5vw, 64px)",
                          letterSpacing: "-.03em",
                          lineHeight: .9,
                          color: "var(--acc)",
                        }}
                      >
                        {num}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--display)",
                          fontWeight: 800,
                          fontSize: 11,
                          letterSpacing: ".2em",
                          textTransform: "uppercase",
                          color: "var(--fg-4)",
                          marginTop: 8,
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Right Column: Details */}
                    <div className="lg:col-span-10">
                      {/* Header Row: Company, Role, Status */}
                      <div
                        style={{
                          borderBottom: "1px solid var(--line)",
                          paddingBottom: 12,
                          marginBottom: 14,
                        }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3
                            style={{
                              fontFamily: "var(--display)",
                              fontWeight: 800,
                              fontSize: "clamp(18px, 2vw, 24px)",
                              letterSpacing: "-.01em",
                              textTransform: "uppercase",
                              color: "var(--fg)",
                              lineHeight: 1.1,
                            }}
                          >
                            {item.company}
                          </h3>
                          <span
                            style={{
                              fontSize: 12,
                              fontFamily: "var(--display)",
                              fontWeight: 700,
                              letterSpacing: ".06em",
                              textTransform: "uppercase",
                              color: "var(--fg-3)",
                            }}
                          >
                            / {item.role} · {item.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          {isTopActiveCard && (
                            <span
                              style={{
                                fontSize: 9,
                                fontFamily: "var(--display)",
                                fontWeight: 800,
                                letterSpacing: ".2em",
                                textTransform: "uppercase",
                                padding: "2px 8px",
                                border: "1px solid var(--ok)",
                                color: "var(--ok)",
                                background: "rgba(34, 197, 94, 0.08)",
                              }}
                            >
                              Active
                            </span>
                          )}
                          <span
                            style={{
                              fontSize: 11,
                              color: "var(--fg-3)",
                              letterSpacing: ".05em",
                              fontFamily: "var(--body)",
                            }}
                          >
                            {item.type}
                          </span>
                        </div>
                      </div>

                      {/* Scope description */}
                      <p
                        style={{
                          fontSize: "clamp(13px, 1.25vw, 14.5px)",
                          color: "var(--fg-2)",
                          lineHeight: 1.65,
                          marginBottom: 14,
                        }}
                      >
                        {item.scope}
                      </p>

                      {/* Key Deliverables Grid */}
                      <div className="mb-4">
                        <span
                          style={{
                            display: "block",
                            fontSize: 10,
                            fontFamily: "var(--display)",
                            fontWeight: 800,
                            letterSpacing: ".3em",
                            textTransform: "uppercase",
                            color: "var(--acc)",
                            marginBottom: 8,
                          }}
                        >
                          Key Deliverables &amp; Impact
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0 m-0">
                          {item.highlights.slice(0, 4).map((h, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                gap: 8,
                                fontSize: 12,
                                color: "var(--fg-2)",
                                lineHeight: 1.55,
                              }}
                            >
                              <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Row */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingTop: 8, borderTop: "1px solid var(--line)" }}>
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontFamily: "var(--display)",
                              fontWeight: 800,
                              fontSize: 9,
                              letterSpacing: ".18em",
                              textTransform: "uppercase",
                              padding: "2px 7px",
                              background: "var(--ink-2)",
                              border: "1px solid var(--line)",
                              color: "var(--fg-3)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
