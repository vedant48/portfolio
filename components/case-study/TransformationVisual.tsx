"use client";

import React, { useState } from "react";
import { ArrowDown, ShieldCheck, Layers } from "lucide-react";

interface ChannelData {
  name: string;
  format: string;
  badge: string;
  rules: string;
}

export function TransformationVisual({
  title,
  description,
  channels,
}: {
  title: string;
  description: string;
  channels: ChannelData[];
}) {
  const [selectedChannel, setSelectedChannel] = useState<number>(0);

  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line)",
        padding: "clamp(24px, 3.5vw, 40px)",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <span className="eyebrow">Multi-Channel Mapping Engine</span>
        <h3 className="h-display h-md" style={{ marginBottom: 8 }}>{title}</h3>
        <p className="lede">{description}</p>
      </div>

      {/* Structural Visual Hierarchy */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Source Root */}
        <div
          style={{
            maxWidth: 480,
            margin: "0 auto",
            padding: "16px 20px",
            background: "var(--ink)",
            border: "1px solid var(--line)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--acc)",
              marginBottom: 4,
            }}
          >
            <Layers size={12} /> Canonical Single Source of Truth
          </div>
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--fg)",
              display: "block",
              marginBottom: 4,
            }}
          >
            Unified Product Data Model
          </span>
          <span style={{ fontSize: 10, color: "var(--fg-3)", display: "block" }}>
            34 Attributes · Standardized Units · High-Res Assets
          </span>
        </div>

        {/* Tree branching arrow */}
        <div style={{ display: "flex", justifyContent: "center", color: "var(--acc)" }}>
          <ArrowDown size={18} />
        </div>

        {/* Channel Selection Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 2,
          }}
        >
          {channels.map((ch, idx) => {
            const isSelected = selectedChannel === idx;
            return (
              <button
                key={ch.name}
                onClick={() => setSelectedChannel(idx)}
                style={{
                  padding: "16px 18px",
                  border: "1px solid var(--line)",
                  background: isSelected ? "var(--ink)" : "var(--panel-2)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "border-color .2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
                className="hover:border-[var(--acc)]"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 800,
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: isSelected ? "var(--acc)" : "var(--fg)",
                    }}
                  >
                    {ch.name}
                  </span>
                  {isSelected && (
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--acc)",
                        display: "block",
                      }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--fg-3)",
                  }}
                >
                  {ch.badge}
                </span>
                <span style={{ fontSize: 11, color: "var(--fg-2)", lineHeight: 1.5 }}>
                  {ch.rules}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Channel Schema Inspector */}
        <div
          style={{
            padding: "18px 20px",
            background: "var(--panel-2)",
            border: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--line)",
              paddingBottom: 10,
              marginBottom: 12,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 11, color: "var(--fg)", fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase" }}>
              Target Output: {channels[selectedChannel].format}
            </span>
            <span style={{ color: "var(--ok)", fontSize: 11, display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase" }}>
              <ShieldCheck size={13} /> Schema Validated
            </span>
          </div>
          <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--acc)" }}>Rule Specification:</strong> {channels[selectedChannel].rules}
          </p>
        </div>
      </div>
    </div>
  );
}
