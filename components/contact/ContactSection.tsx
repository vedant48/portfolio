"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="fade-up" style={{ maxWidth: 720 }}>
          {/* Eyebrow */}
          <span className="eyebrow">06 / Get In Touch</span>

          {/* Big headline */}
          <h2 className="h-display h-xl" style={{ marginBottom: "clamp(20px, 3vh, 36px)", lineHeight: .9 }}>
            LET&apos;S BUILD<br />
            <span className="text-outline">SOMETHING</span><br />
            EXCEPTIONAL.
          </h2>

          <p className="lede" style={{ marginBottom: "clamp(28px, 5vh, 44px)" }}>
            Open to frontend engineering, product development, UI/UX, and AI product roles.
          </p>

          {/* Primary CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 36 }}>
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

          {/* Direct link pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              paddingTop: 24,
              borderTop: "1px solid var(--line)",
            }}
          >
            {[
              { label: "LinkedIn", href: profile.links.linkedin },
              { label: "GitHub", href: profile.links.github },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 12,
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--fg-3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "color .2s ease",
                }}
                className="hover:text-[var(--acc)]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
