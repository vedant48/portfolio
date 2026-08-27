"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WebExperience } from "@/data/web-experiences";
import { Lock, ArrowUpRight } from "lucide-react";

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
      {/* Browser chrome header */}
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
        {/* macOS traffic light dots */}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#FF5F56",
              opacity: 0.8,
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#FFBD2E",
              opacity: 0.8,
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#27C93F",
              opacity: 0.8,
              display: "inline-block",
            }}
          />
        </div>

        {/* Address pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "var(--ink-2)",
            border: "1px solid var(--line)",
            padding: "2px 10px",
            borderRadius: 3,
            maxWidth: "60%",
          }}
        >
          <Lock size={9} style={{ color: "var(--acc)", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--body)",
              fontSize: 9,
              color: "var(--fg-3)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              letterSpacing: ".02em",
            }}
          >
            {exp.domain || exp.url?.replace(/^https?:\/\//, "")}
          </span>
        </div>

        {/* Live status badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span
            style={{
              width: 5,
              height: 5,
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
              fontSize: 7,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
            }}
          >
            Live
          </span>
        </div>
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
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={exp.image}
              alt={`${exp.name} screenshot preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              onError={() => setImageError(true)}
              priority={exp.id === "logistiex" || exp.id === "naicos-ai"}
            />
            {/* Subtle bottom gradient to blend cleanly */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
                pointerEvents: "none",
                transition: "opacity 0.3s ease",
              }}
              className="group-hover:opacity-40"
            />
          </div>
        ) : (
          /* Fallback aesthetic visual */
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              background: "var(--ink-3)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.04,
                backgroundImage:
                  "linear-gradient(var(--acc) 1px, transparent 1px), linear-gradient(90deg, var(--acc) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "var(--fg)",
                marginBottom: 6,
                position: "relative",
                zIndex: 1,
              }}
            >
              {exp.name}
            </span>
            <span
              style={{
                fontFamily: "var(--body)",
                fontSize: 11,
                color: "var(--fg-3)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {exp.category}
            </span>
          </div>
        )}

        {/* Hover quick overlay pill */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(4px)",
            border: "1px solid var(--line)",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            gap: 4,
            transition: "all 0.25s ease",
          }}
          className="opacity-90 group-hover:border-[var(--acc)] group-hover:bg-black"
        >
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 8,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--fg)",
            }}
            className="group-hover:text-[var(--acc)]"
          >
            Preview
          </span>
          <ArrowUpRight size={10} style={{ color: "var(--acc)" }} />
        </div>
      </div>
    </div>
  );
}
