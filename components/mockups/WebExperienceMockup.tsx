"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WebExperience } from "@/data/web-experiences";
import { ArrowUpRight } from "lucide-react";

export function WebExperienceMockup({ exp }: { exp: WebExperience }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: 220,
        background: "var(--ink-3)",
        borderBottom: "1px solid var(--line)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      className="group/mockup"
    >
      {/* Clean top bar */}
      <div
        style={{
          height: 32,
          minHeight: 32,
          background: "var(--panel)",
          borderBottom: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: 9,
            letterSpacing: ".15em",
            textTransform: "uppercase",
            color: "var(--fg-3)",
          }}
        >
          {exp.domain || exp.url?.replace(/^https?:\/\//, "")}
        </span>

        <span
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: 8,
            letterSpacing: ".15em",
            textTransform: "uppercase",
            color: "var(--acc)",
          }}
        >
          {exp.category}
        </span>
      </div>

      {/* Screenshot Viewport Container */}
      <div
        style={{
          position: "relative",
          flex: 1,
          width: "100%",
          overflow: "hidden",
          background: "var(--ink-2)",
        }}
      >
        {exp.image && !imageError ? (
          <Image
            src={exp.image}
            alt={`${exp.name} platform interface`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-105"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          /* Fallback */
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              background: "linear-gradient(135deg, var(--ink-2) 0%, var(--panel) 100%)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "var(--fg)",
                textAlign: "center",
                marginBottom: 6,
              }}
            >
              {exp.name}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--fg-3)",
                textAlign: "center",
              }}
            >
              {exp.description}
            </span>
          </div>
        )}

        {/* Hover action prompt */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity .25s ease",
          }}
          className="group-hover/mockup:opacity-100"
        >
          <div
            style={{
              background: "var(--panel)",
              border: "1px solid var(--acc)",
              padding: "6px 14px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 10,
              fontWeight: 800,
              fontFamily: "var(--display)",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "var(--acc)",
            }}
          >
            <span>Explore Overview</span>
            <ArrowUpRight size={11} />
          </div>
        </div>
      </div>
    </div>
  );
}
