export interface CareerMilestone {
  year: string;
  role: string;
  company: string;
  location: string;
  type: string;
  scope: string;
  highlights: string[];
  technologies: string[];
}

export const careerTimeline: CareerMilestone[] = [
  {
    year: "2026",
    role: "Software Engineer II",
    company: "Noetic LogistieX",
    location: "Ghaziabad, UP / Hybrid",
    type: "Full-time",
    scope: "Core AI Products, Frontend Architecture & Design Systems",
    highlights: [
      "Led frontend development and interface design for SellereX USP — the flagship AI catalog intelligence platform.",
      "Built end-to-end multi-modal ingestion, channel transformation, enrichment, and AI image studio workflows.",
      "Architected SellereX Common design system and component ecosystem used across internal and customer products.",
      "Modernized frontend codebase from legacy MUI to Tailwind CSS + ShadCN UI, improving developer speed and UI consistency.",
      "Engineered SellereX Agency multi-tenant workspace for high-volume enterprise e-commerce brand management.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "FastAPI", "Zustand", "Storybook"],
  },
  {
    year: "2024",
    role: "Software Engineer",
    company: "LogistieX",
    location: "Ghaziabad, UP",
    type: "Full-time",
    scope: "Seller Platform, OMS, Pricing Intelligence & Courier Systems",
    highlights: [
      "Engineered high-density Order Management System (OMS) handling multi-channel order lifecycles and bulk manifests.",
      "Built Pricing Intelligence dashboards with real-time competitor tracking and dynamic margin analytics.",
      "Developed Intract / Chat customer communication module integrated directly into order dispute workflows.",
      "Implemented intelligent courier assignment system dynamically comparing rate cards, SLAs, and destination pincodes.",
      "Maintained and extended shared frontend libraries using React, Material UI, and Refine.dev.",
    ],
    technologies: ["React", "TypeScript", "Material UI", "Refine.dev", "React Query", "WebSockets", "Recharts"],
  },
  {
    year: "2023",
    role: "Software Engineer Intern",
    company: "LogistieX",
    location: "Ghaziabad, UP",
    type: "Internship",
    scope: "Logistics Mobile Application & Marketing Web Properties",
    highlights: [
      "Developed cross-platform mobile screens for the LogistieX React Native application (B2B/B2C order booking).",
      "Built parcel barcode scanner integration and offline-friendly order queueing.",
      "Designed and coded the core LogistieX marketing website with responsive layouts.",
      "Implemented courier price comparison calculators and tracking milestone timelines.",
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "React", "HTML/CSS"],
  },
];
