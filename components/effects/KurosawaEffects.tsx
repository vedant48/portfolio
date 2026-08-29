"use client";

import { useEffect } from "react";

/**
 * KurosawaEffects
 * Client-only component that wires up:
 *  1. Scroll progress bar
 *  2. Nav scrolled state
 *  3. Reveal animations via IntersectionObserver (.fade-up, .reveal-line)
 */
export function KurosawaEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ─── 1. Scroll Progress Bar ────────────────────────────────────────────────
    function initScrollProgress() {
      const fill = document.getElementById("scroll-fill");
      if (!fill) return;

      const fillEl = fill;
      function onScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
        fillEl.style.transform = `scaleX(${ratio})`;
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // ─── 2. Nav Scrolled State ────────────────────────────────────────────────
    function initNavScroll() {
      const nav = document.getElementById("site-nav");
      if (!nav) return;

      const navEl = nav;
      function onScroll() {
        if (window.scrollY > 20) {
          navEl.classList.add("is-scrolled");
        } else {
          navEl.classList.remove("is-scrolled");
        }
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // ─── 3. Reveal Animations ─────────────────────────────────────────────────
    function initReveal() {
      if (reduceMotion) {
        document.querySelectorAll(".fade-up").forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
        document.querySelectorAll(".reveal-line").forEach((el) => {
          el.classList.add("is-visible");
        });
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );

      document.querySelectorAll(".fade-up, .reveal-line").forEach((el) => io.observe(el));

      return () => io.disconnect();
    }

    const cleanups = [
      initScrollProgress(),
      initNavScroll(),
      initReveal(),
    ].filter(Boolean) as Array<() => void>;

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
