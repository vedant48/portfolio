"use client";

import React, { useState } from "react";
import { KurosawaEffects } from "@/components/effects/KurosawaEffects";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/home/Marquee";
import { IntroSection } from "@/components/home/IntroSection";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { CareerTimeline } from "@/components/journey/CareerTimeline";
import { WebExperienceGrid } from "@/components/web-experiences/WebExperienceGrid";
import { SkillGroups } from "@/components/skills/SkillGroups";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { CommandPalette } from "@/components/layout/CommandPalette";

export default function HomePage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <>
      {/* Kurosawa client-side effects: cursor, scroll progress, nav scroll, reveal animations */}
      <KurosawaEffects />

      {/* Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main>
        {/* Full-viewport Kurosawa hero */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Scrolling skills/capabilities marquee */}
        <Marquee />

        {/* Intro / philosophy */}
        <IntroSection />

        {/* Selected Work & Case Studies */}
        <ProjectGrid />

        {/* Career Trajectory */}
        <CareerTimeline onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Web Experiences */}
        <WebExperienceGrid />

        {/* Skills & Domain */}
        <SkillGroups />

        {/* About */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResumeModal={() => {
          setIsCommandPaletteOpen(false);
          setIsResumeModalOpen(true);
        }}
      />
    </>
  );
}
