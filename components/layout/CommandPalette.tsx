"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Layers, FileText, Mail, Moon, Sun, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { useTheme } from "../providers/ThemeProvider";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal?: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenResumeModal }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { toggleTheme, resolvedTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (action: () => void) => {
    action();
    onClose();
  };

  const rowStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    borderBottom: "1px solid var(--line)",
    background: "transparent",
    textAlign: "left",
    transition: "background .15s ease",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 600,
        background: "rgba(0,0,0,.8)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "clamp(64px, 10vh, 120px)",
        padding: "clamp(64px, 10vh, 120px) 16px 16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          background: "var(--panel)",
          border: "1px solid var(--line)",
        }}
        className="animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 16px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <Search size={14} style={{ color: "var(--fg-3)", flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, sections, or commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 13,
              fontFamily: "var(--body)",
              color: "var(--fg)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--fg-4)",
              padding: "2px 6px",
              border: "1px solid var(--line)",
            }}
          >
            ESC
          </span>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 380, overflowY: "auto" }}>
          {/* Projects */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".4em",
                textTransform: "uppercase",
                color: "var(--acc)",
                padding: "12px 16px 8px",
              }}
            >
              Case Studies &amp; Projects
            </span>
            {filteredProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(() => router.push(`/work/${p.slug}`))}
                style={rowStyle}
                className="hover:bg-[var(--panel-2)]"
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Layers size={13} style={{ color: "var(--fg-3)", flexShrink: 0 }} />
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: 11,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--fg)",
                      }}
                    >
                      {p.title}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--fg-3)" }}>{p.tagline}</span>
                  </div>
                </div>
                <ArrowRight size={11} style={{ color: "var(--fg-4)" }} />
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: ".4em",
                textTransform: "uppercase",
                color: "var(--acc)",
                padding: "12px 16px 8px",
              }}
            >
              Quick Actions
            </span>

            <button
              onClick={() => handleSelect(() => { if (onOpenResumeModal) onOpenResumeModal(); else router.push("/resume"); })}
              style={rowStyle}
              className="hover:bg-[var(--panel-2)]"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FileText size={13} style={{ color: "var(--fg-3)" }} />
                <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 500 }}>View &amp; Download Resume</span>
              </div>
              <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 8, letterSpacing: ".3em", color: "var(--fg-4)", textTransform: "uppercase" }}>PDF</span>
            </button>

            <button
              onClick={() => handleSelect(() => router.push("/#contact"))}
              style={rowStyle}
              className="hover:bg-[var(--panel-2)]"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={13} style={{ color: "var(--fg-3)" }} />
                <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 500 }}>Get in Touch</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--fg-3)" }}>{profile.email}</span>
            </button>

            <button
              onClick={() => handleSelect(toggleTheme)}
              style={{ ...rowStyle, borderBottom: "none" }}
              className="hover:bg-[var(--panel-2)]"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {resolvedTheme === "dark" ? (
                  <Sun size={13} style={{ color: "var(--acc)" }} />
                ) : (
                  <Moon size={13} style={{ color: "var(--fg-3)" }} />
                )}
                <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 500 }}>Toggle Color Theme</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--fg-3)", textTransform: "capitalize" }}>
                {resolvedTheme}
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "10px 16px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 8,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--fg-4)",
            }}
          >
            Navigate with arrows or click
          </span>
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 8,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--acc)",
            }}
          >
            ⌘K
          </span>
        </div>
      </div>
    </div>
  );
}
