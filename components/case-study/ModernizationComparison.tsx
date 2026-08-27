import React from "react";

export function ModernizationComparison({
  details,
}: {
  details: {
    title: string;
    context: string;
    highlights: string[];
    comparison: {
      legacy: string[];
      modern: string[];
    };
  };
}) {
  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line)",
        padding: "clamp(24px, 3.5vw, 40px)",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <span className="eyebrow">Architecture Evolution</span>
        <h3 className="h-display h-md" style={{ marginBottom: 8 }}>{details.title}</h3>
        <p className="lede">{details.context}</p>
      </div>

      {/* Architectural Highlights */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 2,
          marginBottom: 20,
        }}
      >
        {details.highlights.map((hl, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--panel-2)",
              border: "1px solid var(--line)",
              padding: "16px 18px",
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <span style={{ color: "var(--acc)", fontWeight: 800, flexShrink: 0 }}>—</span>
            <span style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>
              {hl}
            </span>
          </div>
        ))}
      </div>

      {/* Side-by-Side Comparison */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 2,
        }}
      >
        {/* Legacy Architecture */}
        <div
          style={{
            background: "var(--panel-2)",
            border: "1px solid var(--line)",
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--line)",
              paddingBottom: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "var(--fg-3)",
              }}
            >
              Legacy Architecture
            </span>
            <span style={{ fontSize: 9, fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--fg-4)" }}>Previous</span>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
            {details.comparison.legacy.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontSize: 12, color: "var(--fg-3)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--fg-4)", fontWeight: 800 }}>×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modern Architecture */}
        <div
          style={{
            background: "var(--ink)",
            border: "1px solid var(--line)",
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--line)",
              paddingBottom: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "var(--acc)",
              }}
            >
              Modern Architecture
            </span>
            <span style={{ fontSize: 9, fontFamily: "var(--display)", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ok)" }}>Production</span>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
            {details.comparison.modern.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontSize: 12, color: "var(--fg)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--acc)", fontWeight: 800 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
