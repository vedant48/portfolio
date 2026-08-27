"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { FileText, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface NavbarProps {
  onOpenResumeModal?: () => void;
  onOpenCommandPalette?: () => void;
}

const navLinks = [
  { label: "/home",       href: "/#" },
  { label: "/work",       href: "/#work" },
  { label: "/experience", href: "/#experience" },
  { label: "/web",        href: "/#web-experiences" },
  { label: "/skills",     href: "/#skills" },
  { label: "/about",      href: "/#about" },
];

export function Navbar({ onOpenResumeModal, onOpenCommandPalette: _onOpenCommandPalette }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Nav — transparent → glass on scroll via KurosawaEffects */}
      <nav id="site-nav" className="site-nav" role="navigation" aria-label="Primary">
        {/* SVG Brand Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Vedant Kumar Home"
        >
          <Logo size={34} />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center" style={{ gap: "clamp(12px, 1.8vw, 26px)", listStyle: "none" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: ".05em",
                  color: "var(--fg-2)",
                  transition: "color .2s ease",
                  fontFamily: "var(--body)",
                }}
                className="hover:text-[var(--acc)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onOpenResumeModal}
            className="btn btn-primary"
            style={{ padding: "9px 18px", fontSize: 12, letterSpacing: ".08em" }}
          >
            <FileText size={13} />
            Resume ↓
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 40,
              height: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {open ? <X size={20} style={{ color: "var(--fg)" }} /> : <Menu size={20} style={{ color: "var(--fg)" }} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[210] flex flex-col"
          style={{
            background: "var(--ink)",
            paddingTop: "var(--nav-h)",
          }}
          onClick={() => setOpen(false)}
        >
          <nav
            className="flex flex-col"
            style={{ padding: "clamp(32px,8vw,64px) var(--gut)", gap: 2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="h-display h-lg hover:text-[var(--acc)] transition-colors"
                style={{
                  animationDelay: `${i * 60}ms`,
                  display: "block",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: "clamp(14px,3vw,24px)",
                  marginBottom: "clamp(14px,3vw,24px)",
                }}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => { setOpen(false); if (onOpenResumeModal) onOpenResumeModal(); }}
              className="btn btn-primary"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              Resume ↓
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
