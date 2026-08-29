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
      {/* Full 16:9 Image Viewport */}
      <div className="relative w-full aspect-[16/9] bg-[#0a0c10] overflow-hidden group/viewport">
        <Image
          src="/mockups/sellerfront-mockup.jpg"
          alt="LogistieX Sellerfront Unified Operations Dashboard Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/viewport:scale-[1.01]"
          priority
        />
      </div>
    </div>
  );
}
