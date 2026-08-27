export interface WebExperience {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  url: string;
  domain: string;
  image: string;
  accentColor: string;
  highlights: string[];
  visualType?: "ai-enterprise" | "seller-portal" | "logistics-d2c" | "tech-studio" | "creative-agency" | string;
}

export const webExperiences: WebExperience[] = [
  {
    id: "logistiex",
    name: "LogistieX",
    category: "AI-Native Commerce Infrastructure",
    description:
      "AI-native commerce backend infrastructure enabling automated multi-channel logistics, real-time inventory synchronization, and intelligent order routing for modern enterprise brands.",
    role: "Frontend Lead & System Architect",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "FastAPI"],
    url: "https://www.logistiex.com/",
    domain: "logistiex.com",
    image: "/screenshots/logistiex.png",
    accentColor: "#F5C518",
    highlights: [
      "AI-orchestrated multi-carrier routing engine",
      "Sub-second real-time inventory sync across channels",
      "Enterprise multi-warehouse control center",
    ],
    visualType: "seller-portal",
  },
  {
    id: "naicos-ai",
    name: "Naicos.ai",
    category: "AI Commerce Operating System",
    description:
      "Enterprise native AI commerce operating system featuring agentic intelligence workflows, dynamic catalog transformations, and high-performance editorial marketing.",
    role: "Frontend Engineer & UI Implementation",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://www.naicos.ai/",
    domain: "naicos.ai",
    image: "/screenshots/naicos.png",
    accentColor: "#3B82F6",
    highlights: [
      "Interactive AI product showcase & agentic workflows",
      "Editorial typography layout & motion choreography",
      "Responsive high-contrast dark/light aesthetics",
    ],
    visualType: "ai-enterprise",
  },
  {
    id: "delverd",
    name: "Delverd",
    category: "Hyperlocal Logistics & Commerce",
    description:
      "Consumer and merchant facing web portal for rapid on-demand logistics, courier tracking, and instant delivery estimation for fast-moving brands.",
    role: "Frontend Engineer & UI Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API"],
    url: "https://www.delverd.com/",
    domain: "delverd.com",
    image: "/screenshots/delverd.png",
    accentColor: "#F59E0B",
    highlights: [
      "Live route & courier tracker map interface",
      "Instant pincode rate & ETA calculator",
      "Mobile-optimized frictionless booking flow",
    ],
    visualType: "logistics-d2c",
  },
  {
    id: "noetiex",
    name: "Noetiex",
    category: "Agentic OS & AI Architecture",
    description:
      "Clean digital home for an AI engineering group developing agentic operating systems, contemporary commerce automation, and high-scale SaaS architectures.",
    role: "Design Implementation & Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://noetiex.com",
    domain: "noetiex.com",
    image: "/screenshots/noetiex.png",
    accentColor: "#6366F1",
    highlights: [
      "Minimalist high-contrast editorial structure",
      "Agentic orchestration interface & workflows",
      "Smooth micro-interactions & fluid animations",
    ],
    visualType: "tech-studio",
  },
  {
    id: "studio-noetiex",
    name: "Studio Noetiex",
    category: "Product & Strategy Consulting",
    description:
      "Bespoke digital studio portfolio and strategy consulting showcase engineered for digital commerce growth, branding, and cutting-edge product design.",
    role: "Product Designer & Frontend Engineer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://studionoetiex.com",
    domain: "studionoetiex.com",
    image: "/screenshots/studionoetiex.png",
    accentColor: "#EC4899",
    highlights: [
      "Curated strategic case studies & galleries",
      "Custom typography pairings & subtle motion",
      "Interactive showcase of growth frameworks",
    ],
    visualType: "creative-agency",
  },
];
