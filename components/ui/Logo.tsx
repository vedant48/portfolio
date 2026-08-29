"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: number;
  showText?: boolean;
  showSubtitle?: boolean;
  href?: string;
  className?: string;
}

/**
 * Geometric Custom Logo for VEDANT KUMAR
 */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vedant Kumar Logo Mark"
    >
      <rect
        x="1.5"
        y="1.5"
        width="41"
        height="41"
        rx="6"
        fill="var(--panel)"
        stroke="var(--line)"
        strokeWidth="1.5"
      />
      <line x1="1.5" y1="12" x2="42.5" y2="12" stroke="var(--line)" strokeWidth="0.5" opacity="0.6" />
      <line x1="32" y1="1.5" x2="32" y2="42.5" stroke="var(--line)" strokeWidth="0.5" opacity="0.6" />

      {/* Top right gold corner */}
      <path
        d="M32 4H38C39.1 4 40 4.9 40 6V12"
        stroke="var(--acc)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* 'V' monogram */}
      <path
        d="M10 13L18.5 30.5H21L29.5 13H25.2L19.75 24.5L14.3 13H10Z"
        fill="var(--fg)"
      />

      {/* 'K' branches */}
      <path
        d="M21.5 19.5L28.5 13H33L24.8 20.8L21.5 19.5Z"
        fill="var(--acc)"
      />
      <path
        d="M23 20L31.5 30.5H27L19.8 21.8L23 20Z"
        fill="var(--acc)"
      />
      <circle cx="19.75" cy="27.5" r="1" fill="var(--acc)" />
    </svg>
  );
}

export function Logo({
  size = 36,
  showText = true,
  showSubtitle = false,
  href = "/",
  className = "",
}: LogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* Emblem Icon Mark */}
      <div className="transition-transform duration-200 group-hover:scale-105 shrink-0">
        <LogoMark size={size} />
      </div>

      {/* Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-2">
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--fg)",
                lineHeight: 1.1,
              }}
            >
              VEDANT
            </span>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                lineHeight: 1.1,
              }}
              className="text-outline-sm"
            >
              KUMAR
            </span>
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
              SE · PRODUCT · AI
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block no-underline focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
