"use client";

import React, { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const update = () => {
      setIstTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "clamp(32px, 5vw, 48px) var(--gut)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {/* Brand mark */}
      <div>
        <span
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: 11,
            letterSpacing: ".35em",
            textTransform: "uppercase",
            color: "var(--fg)",
          }}
        >
          VEDANT&nbsp;&nbsp;<span className="text-outline-sm">KUMAR</span>
        </span>
        <span
          style={{
            display: "block",
            fontSize: 11,
            color: "var(--fg-3)",
            letterSpacing: ".04em",
            marginTop: 3,
          }}
        >
          © {new Date().getFullYear()} · All rights reserved.
        </span>
      </div>

      {/* Live time */}
      <div
        style={{
          fontSize: 11,
          color: "var(--fg-3)",
          fontFamily: "var(--body)",
          letterSpacing: ".06em",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--ok)",
            display: "inline-block",
          }}
          className="animate-pulse-ok"
        />
        Sitamarhi, Bihar, IN · {istTime || "--:--"}
      </div>

      {/* Links + back to top */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {[
          { label: "LinkedIn", href: profile.links.linkedin },
          { label: "GitHub", href: profile.links.github },
          { label: "Email", href: profile.links.email },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="hover:text-[var(--acc)] transition-colors"
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".06em",
              color: "var(--fg-3)",
            }}
          >
            {l.label}
          </a>
        ))}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            width: 32,
            height: 32,
            border: "1px solid var(--line)",
            background: "transparent",
            color: "var(--fg-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color .2s ease, border-color .2s ease",
          }}
          className="hover:text-[var(--acc)] hover:border-[var(--acc)] transition-colors"
        >
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
