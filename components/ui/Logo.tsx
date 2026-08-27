import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showSubtitle?: boolean;
  size?: number;
}

export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
    >
      {/* Background Frame */}
      <rect
        x="1.5"
        y="1.5"
        width="41"
        height="41"
        rx="8"
        fill="var(--ink-2)"
        stroke="var(--line)"
        strokeWidth="1.5"
        className="transition-colors duration-300 group-hover:stroke-[var(--acc)] group-hover:fill-[var(--panel)]"
      />

      {/* Subtle architectural grid lines */}
      <line x1="1.5" y1="12" x2="42.5" y2="12" stroke="var(--line)" strokeWidth="0.5" opacity="0.4" />
      <line x1="32" y1="1.5" x2="32" y2="42.5" stroke="var(--line)" strokeWidth="0.5" opacity="0.4" />

      {/* Top right signal accent bracket */}
      <path
        d="M32 4H38C39.1 4 40 4.9 40 6V12"
        stroke="var(--acc)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* 'V' Geometric Monogram in Primary Foreground */}
      <path
        d="M10 13L18.5 30.5H21L29.5 13H25.2L19.75 24.5L14.3 13H10Z"
        fill="var(--fg)"
        className="transition-colors duration-300"
      />

      {/* 'K' Upper Branch (Signal Yellow Accent) */}
      <path
        d="M21.5 19.5L28.5 13H33L24.8 20.8L21.5 19.5Z"
        fill="var(--acc)"
      />

      {/* 'K' Lower Leg (Signal Yellow Accent) */}
      <path
        d="M23 20L31.5 30.5H27L19.8 21.8L23 20Z"
        fill="var(--acc)"
      />

      {/* Center Precision Vertex Spark */}
      <circle cx="19.75" cy="27.5" r="1" fill="var(--acc)" />
    </svg>
  );
}

export function Logo({
  className = "",
  showText = true,
  showSubtitle = true,
  size = 36,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* SVG Icon Emblem */}
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoMark size={size} />
      </div>

      {/* Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--fg)",
                lineHeight: 1.1,
                marginRight: 4,
              }}
              className="group-hover:text-[var(--acc)] transition-colors duration-200"
            >
              VEDANT
            </span>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                lineHeight: 1.1,
              }}
              className="text-outline-sm"
            >
              KUMAR
            </span>
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--acc)",
                marginBottom: 2,
              }}
              className="group-hover:animate-ping"
            />
          </div>

          {showSubtitle && (
            <span
              style={{
                fontFamily: "var(--body)",
                fontWeight: 500,
                fontSize: 9,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--fg-3)",
                marginTop: 4,
              }}
            >
              SE · Product · AI
            </span>
          )}
        </div>
      )}
    </div>
  );
}
