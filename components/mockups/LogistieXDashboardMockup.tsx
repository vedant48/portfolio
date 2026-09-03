"use client";

import React from "react";
import Image from "next/image";

export function LogistieXDashboardMockup() {
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
        className="relative w-full bg-[#0a0c10] overflow-hidden group/viewport"
      >
        <Image
          src="/mockups/Customer-Orders-Logistiex-09-04-2026_12_28_AM.png"
          alt="LogistieX Sellerfront Unified Operations Dashboard Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover/viewport:scale-[1.01]"
          priority
        />
      </div>
    </div>
  );
}
