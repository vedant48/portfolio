"use client";

import React from "react";
import Image from "next/image";

interface SellereXUSPMockupProps {
  compact?: boolean;
}

export function SellereXUSPMockup({ compact = false }: SellereXUSPMockupProps) {
  return (
    <div
      style={{
        background: "var(--ink-3)",
        border: "1px solid var(--line)",
      }}
      className="w-full overflow-hidden flex flex-col font-sans"
    >
      {/* Native screenshot aspect ratio so 100% of the image fits without cropping */}
      <div
        style={{ aspectRatio: "1920 / 869" }}
        className="relative w-full bg-[#0c0d10] overflow-hidden group/viewport"
      >
        <Image
          src="/mockups/My-Catalogs-SellereX-09-04-2026_12_27_AM.png"
          alt="SellereX AI Catalog & Image Studio Platform Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover/viewport:scale-[1.01]"
          priority
        />
      </div>
    </div>
  );
}
