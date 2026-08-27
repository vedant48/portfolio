"use client";

import { useEffect } from "react";

/**
 * KurosawaEffects
 * Client-only component that wires up:
 *  1. Custom cursor (desktop fine pointer only)
 *  2. Scroll progress bar
 *  3. Nav scrolled state
 *  4. Reveal animations via IntersectionObserver (.fade-up, .reveal-line)
 */
export function KurosawaEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ─── 1. Custom Cursor ─────────────────────────────────────────────────────
    function initCursor() {
      if (!finePointer || reduceMotion) return;
      const dot = document.getElementById("vk-cursor");
      const ring = document.getElementById("vk-cursor-ring");
      if (!dot || !ring) return;

      document.body.classList.add("has-cursor");

      let mx = -200, my = -200;
      let rx = -200, ry = -200;

      function onMove(e: MouseEvent) { mx = e.clientX; my = e.clientY; }
      document.addEventListener("mousemove", onMove);

      let rafId: number;
      const dotEl = dot;
      const ringEl = ring;
      function loop() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        dotEl.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
        ringEl.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
        rafId = requestAnimationFrame(loop);
      }
      loop();

      function onOver(e: MouseEvent) {
        if ((e.target as Element).closest("a, button, [data-cursor-hot]")) {
          document.body.classList.add("cursor-hot");
        }
      }
      function onOut(e: MouseEvent) {
        if ((e.target as Element).closest("a, button, [data-cursor-hot]")) {
          document.body.classList.remove("cursor-hot");
        }
      }
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);

      return () => {
        document.body.classList.remove("has-cursor", "cursor-hot");
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
        cancelAnimationFrame(rafId);
      };
    }

    // ─── 2. Scroll Progress Bar ────────────────────────────────────────────────
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

    // ─── 3. Nav Scrolled State ────────────────────────────────────────────────
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

    // ─── 4. Reveal Animations ─────────────────────────────────────────────────
    function initReveal() {
      if (reduceMotion) {
        // Show everything immediately if reduce motion
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
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".fade-up, .reveal-line").forEach((el) => io.observe(el));

      return () => io.disconnect();
    }

    const cleanups = [
      initCursor(),
      initScrollProgress(),
      initNavScroll(),
      initReveal(),
    ].filter(Boolean) as Array<() => void>;

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
