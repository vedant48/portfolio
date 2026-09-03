"use client";

import React from "react";
import { profile } from "@/data/profile";

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <div style={{ position: "relative" }}>
      {/* Hero — Full viewport, Kurosawa structure */}
      <header
        style={{
          minHeight: "100vh",
          background: "var(--ink)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 var(--gut) clamp(56px,9vh,90px)",
          paddingTop: "var(--nav-h)",
          position: "relative",
        }}
      >
        {/* Availability Status — top left */}
        <div
          data-hero-fade
          className="fade-up"
          style={{
            position: "absolute",
            top: "calc(var(--nav-h) + clamp(20px, 4vh, 48px))",
            left: "var(--gut)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 600,
            color: "var(--fg-2)",
            letterSpacing: ".05em",
          }}
        >
          <i
            className="animate-pulse-ok"
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--ok)",
              fontStyle: "normal",
            }}
          />
          <span>Available for work</span>
        </div>

        {/* Location + Year — top right */}
        <div
          className="fade-up fade-up-delay-1"
          style={{
            position: "absolute",
            top: "calc(var(--nav-h) + clamp(20px, 4vh, 48px))",
            right: "var(--gut)",
            fontSize: 11,
            fontWeight: 500,
            color: "var(--fg-3)",
            letterSpacing: ".08em",
            fontFamily: "var(--body)",
          }}
        >
          Sitamarhi, Bihar · India · 2026
        </div>

        {/* Main hero copy block */}
        <div className="fade-up fade-up-delay-2" style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <span
            style={{
              display: "block",
              marginBottom: "clamp(16px, 3vh, 32px)",
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 10,
              letterSpacing: ".5em",
              textTransform: "uppercase",
              color: "var(--acc)",
            }}
          >
            Software Engineer
          </span>

          {/* Name — Kurosawa massive display treatment */}
          <div>
            <div className="reveal-line">
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: "clamp(52px, 12vw, 140px)",
                  letterSpacing: "-.02em",
                  lineHeight: .88,
                  textTransform: "uppercase",
                  color: "var(--fg)",
                  marginRight: 32,
                }}
              >
                VEDANT
              </span>
            </div>
            <div className="reveal-line">
              <span
                className="text-outline"
                style={{
                  display: "block",
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: "clamp(52px, 12vw, 140px)",
                  letterSpacing: "-.02em",
                  lineHeight: .88,
                  textTransform: "uppercase",
                }}
              >
                KUMAR
              </span>
            </div>
          </div>

          {/* Tag line with bar */}
          <div
            style={{
              marginTop: "clamp(24px, 4vh, 48px)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <i
              style={{
                display: "block",
                width: 48,
                height: 2,
                background: "var(--acc)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "clamp(13px, 1.4vw, 16px)",
                fontWeight: 500,
                color: "var(--fg-2)",
                letterSpacing: ".03em",
              }}
            >
              Frontend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Product&nbsp;&nbsp;·&nbsp;&nbsp;
              <b style={{ color: "var(--fg)", fontWeight: 700 }}>AI Builder</b>
            </span>
          </div>

          {/* Blurb */}
          <p
            className="lede fade-up fade-up-delay-3"
            style={{ marginTop: "clamp(16px, 3vh, 28px)" }}
          >
            {profile.supportingText}
          </p>

          {/* CTAs */}
          <div
            className="fade-up fade-up-delay-4"
            style={{
              marginTop: "clamp(28px, 5vh, 48px)",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
            }}
          >
            <a href="#work" className="btn btn-primary">
              /view work
            </a>
            <button onClick={onOpenResumeModal} className="btn btn-ghost">
              Download CV ↓
            </button>
          </div>
        </div>

        {/* Scroll hint — desktop only, removed on phone view */}
        <div
          className="hidden md:flex fade-up"
          style={{
            position: "absolute",
            bottom: "clamp(28px, 5vh, 48px)",
            right: "var(--gut)",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".35em",
            textTransform: "uppercase",
            color: "var(--fg-3)",
            fontFamily: "var(--display)",
          }}
        >
          <span>scroll</span>
          <svg width="1" height="48" viewBox="0 0 1 48" fill="none">
            <line x1="0.5" y1="0" x2="0.5" y2="48" stroke="var(--line)" strokeWidth="1" />
          </svg>
        </div>
      </header>
    </div>
  );
}
