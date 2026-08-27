"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);

    try {
      const rect = e.currentTarget.getBoundingClientRect();
      confetti({
        particleCount: 28,
        spread: 55,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ["#F5C518", "#FFFFFF", "#22C55E"],
        ticks: 120,
      });
    } catch {/* noop */}

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="fade-up" style={{ maxWidth: 680 }}>
          {/* Eyebrow */}
          <span className="eyebrow">06 / Get In Touch</span>

          <h2 className="h-display h-xl" style={{ marginBottom: "clamp(20px, 3vh, 36px)", lineHeight: .9 }}>
            LET&apos;S BUILD<br />
            <span className="text-outline">SOMETHING</span><br />
            EXCEPTIONAL.
          </h2>

          <p className="lede" style={{ marginBottom: "clamp(28px, 5vh, 48px)" }}>
            I&apos;m open to frontend engineering, product engineering, UI/UX, and AI product opportunities.
          </p>

          {/* Primary CTA — yellow button */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 32 }}>
            <a href={profile.links.email} className="btn btn-primary">
              Email me →
            </a>
            <button
              onClick={handleCopy}
              className="btn btn-ghost"
            >
              {copied ? "✓ Copied!" : `Copy ${profile.email}`}
            </button>
          </div>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: 20,
              paddingTop: 24,
              borderTop: "1px solid var(--line)",
              alignItems: "center",
            }}
          >
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--acc)] transition-colors"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".05em",
                color: "var(--fg-2)",
              }}
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--acc)] transition-colors"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".05em",
                color: "var(--fg-2)",
              }}
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
