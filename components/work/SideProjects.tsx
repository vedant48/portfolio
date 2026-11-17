import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { sideProjects } from "@/data/side-projects";

const tag: React.CSSProperties = {
  fontFamily: "var(--display)",
  fontWeight: 800,
  fontSize: 8,
  letterSpacing: ".15em",
  textTransform: "uppercase",
  color: "var(--fg-3)",
  padding: "2px 6px",
  border: "1px solid var(--line)",
  background: "var(--ink-2)",
};

const linkBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: 11,
  fontWeight: 600,
  color: "var(--fg-2)",
  padding: "6px 10px",
  border: "1px solid var(--line)",
  background: "var(--ink-2)",
};

export function SideProjects() {
  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-head fade-up">
          <span className="eyebrow">04 / Side Projects</span>
          <h2 className="h-display h-lg">
            Built <span className="text-outline">Outside Work</span>
          </h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Apps and tools I build on my own, from offline-first retail to mobile scanners and APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {sideProjects.map((p, i) => (
            <article
              key={p.id}
              className="web-exp-card fade-up flex flex-col justify-between"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div style={{ padding: "clamp(18px, 2vw, 24px)" }}>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 800,
                    fontSize: "clamp(15px, 1.4vw, 18px)",
                    letterSpacing: "-.01em",
                    textTransform: "uppercase",
                    color: "var(--fg)",
                    lineHeight: 1.1,
                    marginBottom: 10,
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>{p.summary}</p>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  padding: "14px clamp(18px, 2vw, 24px)",
                  background: "var(--ink-2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {p.stack.map((s) => (
                    <span key={s} style={tag}>
                      {s}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" style={linkBtn}>
                    <Code2 size={12} /> Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" style={linkBtn}>
                      Live <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
