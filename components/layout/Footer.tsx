"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--panel)",
        borderTop: "1px solid var(--line)",
        padding: "clamp(24px, 4vw, 36px) var(--gut)",
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
            letterSpacing: ".25em",
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
            letterSpacing: ".02em",
            marginTop: 3,
          }}
        >
          © {new Date().getFullYear()} · All rights reserved.
        </span>
      </div>

      {/* Location and time */}
      <div
        style={{
          fontSize: 11,
          color: "var(--fg-3)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span>Sitamarhi, Bihar, IN</span>
        {time && <span>· {time} IST</span>}
      </div>

      {/* Links + Back to top */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--acc)] transition-colors"
          style={{ fontSize: 11, color: "var(--fg-3)", letterSpacing: ".04em" }}
        >
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--acc)] transition-colors"
          style={{ fontSize: 11, color: "var(--fg-3)", letterSpacing: ".04em" }}
        >
          GitHub
        </a>
        <a
          href={profile.links.email}
          className="hover:text-[var(--acc)] transition-colors"
          style={{ fontSize: 11, color: "var(--fg-3)", letterSpacing: ".04em" }}
        >
          Email
        </a>

        <button
          onClick={scrollToTop}
          style={{
            background: "var(--ink-2)",
            border: "1px solid var(--line)",
            color: "var(--fg-3)",
            width: 28,
            height: 28,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all .2s ease",
          }}
          className="hover:text-[var(--acc)] hover:border-[var(--acc)]"
          aria-label="Back to top"
        >
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
