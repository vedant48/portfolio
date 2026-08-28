"use client";

import React from "react";
import Image from "next/image";

interface SellereXUSPMockupProps {
  compact?: boolean;
}

export function SellereXUSPMockup({ compact = false }: SellereXUSPMockupProps) {
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
            SellereX · AI Catalog Engine
          </span>
        </div>

        {/* Right: Status */}
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
            AI Multi-Channel Platform
          </span>
        </div>
      </div>

      {/* Full 16:9 Image Viewport (Unclipped & fully visible) */}
      <div className="relative w-full aspect-[16/9] bg-[#0c0d10] overflow-hidden group/viewport">
        <Image
          src="/mockups/sellerex-mockup.jpg"
          alt="SellereX AI Catalog & Image Studio Platform Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/viewport:scale-[1.01]"
          priority
        />
      </div>

      {/* Clean Bottom Meta Strip (Unobtrusive & below the image) */}
      <div
        style={{
          background: "var(--panel)",
          borderTop: "1px solid var(--line)",
          padding: "8px 14px",
        }}
        className="flex items-center justify-between flex-wrap gap-2 text-xs"
      >
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--acc)",
            }}
          >
            SellereX USP
          </span>
          <span style={{ fontSize: 11, color: "var(--fg-3)" }}>
            AI-powered catalog generation &amp; multi-channel syndication
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
          ● Full UI Preview
        </span>
      </div>
    </div>
  );
}
