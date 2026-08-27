import React from "react";
import { profile } from "@/data/profile";
import { HeroFlowVisual } from "@/components/hero/HeroFlowVisual";

export function IntroSection() {
  const stats = [
    { num: "3+", label: "Years Experience", desc: "Production software" },
    { num: "5+", label: "Products Shipped", desc: "SaaS & AI platforms" },
    { num: "100%", label: "Type-Safe Code", desc: "TypeScript & React" },
  ];

  return (
    <section id="intro" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        {/* Top Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
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

            {/* 3 Metric Cards with Kurosawa borders */}
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
                      fontSize: "clamp(24px, 3vw, 36px)",
                      letterSpacing: "-.02em",
                      lineHeight: 1,
                      color: "var(--fg)",
                      marginBottom: 6,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--fg-3)",
                      marginBottom: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--fg-4)",
                    }}
                  >
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Interactive Execution Spectrum */}
        <div
          className="fade-up fade-up-delay-2"
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "clamp(32px, 5vh, 48px)",
          }}
        >
          <HeroFlowVisual />
        </div>
      </div>
    </section>
  );
}
