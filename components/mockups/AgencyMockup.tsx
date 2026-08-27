"use client";

import React from "react";
import Image from "next/image";

export function AgencyMockup() {
  return (
    <div
      style={{
        background: "var(--ink-3)",
        border: "1px solid var(--line)",
      }}
      className="w-full overflow-hidden flex flex-col font-sans"
    >
      {/* Clean Window Titlebar */}
      <div
        style={{
          background: "var(--panel)",
          borderBottom: "1px solid var(--line)",
          padding: "10px 16px",
        }}
        className="flex items-center justify-between flex-wrap gap-2"
      >
        {/* Left: Window Traffic Light Dots */}
        <div className="flex items-center gap-2">
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F56", opacity: 0.85, display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E", opacity: 0.85, display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F", opacity: 0.85, display: "inline-block" }} />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 10,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
              marginLeft: 8,
            }}
          >
            SellereX · Agency Portal
          </span>
        </div>

        {/* Right: Operations Status */}
        <div className="flex items-center gap-2">
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--ok)",
              display: "inline-block",
              boxShadow: "0 0 6px var(--ok)",
            }}
            className="animate-pulse"
          />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 8,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--acc)",
            }}
          >
            Multi-Tenant Active
          </span>
        </div>
      </div>

      {/* Mockup Viewport */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(300px, 32vw, 440px)",
          background: "#0a0c10",
          overflow: "hidden",
        }}
        className="group/viewport"
      >
        <Image
          src="/mockups/sellerex-agency-mockup.jpg"
          alt="SellereX Agency Multi-Tenant Brand Management Portal"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/viewport:scale-[1.02]"
          priority
        />

        {/* Subtle dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.7) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom Floating Meta Pill */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 14,
            right: 14,
            background: "rgba(10, 10, 12, 0.88)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--line)",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "var(--acc)",
              }}
            >
              SellereX Agency
            </span>
            <span style={{ fontSize: 11, color: "var(--fg-2)" }}>
              Multi-tenant client switcher, cross-brand catalog syndication matrix, and ad campaign ROAS telemetry.
            </span>
          </div>

          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 8,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--ok)",
            }}
          >
            ● High-Density System Design
          </span>
        </div>
      </div>
    </div>
  );
}
