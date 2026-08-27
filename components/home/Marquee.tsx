import React from "react";

const items = [
  "Frontend Engineering",
  "Product Development",
  "UI / UX Design",
  "React & TypeScript",
  "AI Products",
  "Design Systems",
  "React Native",
  "SaaS & E-commerce",
  "Logistics Tech",
  "Next.js",
  "Interaction Design",
  "Accessibility",
];

export function Marquee() {
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {all.map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            <span className="sep">//</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
