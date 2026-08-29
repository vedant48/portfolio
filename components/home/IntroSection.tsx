import React from "react";
import { profile } from "@/data/profile";

export function IntroSection() {
  const stats = [
    { num: "3+", label: "Years Experience", sub: "Logistics, SaaS & AI" },
    { num: "05+", label: "Production Platforms", sub: "Enterprise & Customer facing" },
    { num: "100%", label: "TypeScript & React", sub: "Type-safe architecture" },
  ];

  return (
    <section className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        {/* Top Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left: Eyebrow + Big Headline */}
          <div className="lg:col-span-5 fade-up">
            <span className="eyebrow">00 / Philosophy &amp; Approach</span>
            <h2
              className="h-display h-lg"
              style={{
                lineHeight: .95,
                marginTop: 6,
              }}
            >
              I build products from idea to <span className="text-outline">interface.</span>
            </h2>
          </div>

          {/* Right: Narrative + Stats Grid */}
          <div className="lg:col-span-7 fade-up fade-up-delay-1">
            <p className="lede" style={{ marginBottom: 32 }}>
              {profile.introBody}
            </p>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[var(--line)] border border-[var(--line)]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--panel)",
                    padding: "clamp(16px, 2vw, 22px)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: "clamp(26px, 3vw, 38px)",
                      letterSpacing: "-.02em",
                      lineHeight: 1,
                      color: "var(--acc)",
                      marginBottom: 8,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      marginBottom: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--fg-3)" }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
