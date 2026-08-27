"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      style={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        border: "1px solid var(--line)",
        background: "transparent",
        color: "var(--fg-2)",
        transition: "color .2s ease, border-color .2s ease",
      }}
      className="hover:text-[var(--acc)] hover:border-[var(--acc)] transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={14} />
      ) : (
        <Moon size={14} />
      )}
    </button>
  );
}
