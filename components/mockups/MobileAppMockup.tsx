"use client";

import React from "react";
import Image from "next/image";

export function MobileAppMockup() {
  return (
    <div className="w-full flex justify-center py-2">
      {/* Realistic iPhone 15 Pro device frame */}
      <div
        style={{
          width: "clamp(260px, 28vw, 320px)",
          borderRadius: 42,
          background: "#0c0d0e",
          border: "5px solid #232528",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08)",
          padding: 8,
          position: "relative",
          overflow: "hidden",
        }}
        className="group/phone"
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 20,
            background: "#000",
            borderRadius: 20,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 8px",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#111" }} />
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#064e3b" }} />
        </div>

        {/* Screen Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "9 / 19.5",
            borderRadius: 32,
            overflow: "hidden",
            background: "#120a2a",
          }}
        >
          <Image
            src="/screenshots/logistics-mobile.png"
            alt="LogistieX Mobile App interface"
            fill
            sizes="340px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover/phone:scale-[1.03]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
