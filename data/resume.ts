export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies?: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    portfolio: string;
  };
  summary: string;
  experience: ResumeExperience[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    score?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  keyProjects: {
    name: string;
    description: string;
    period?: string;
    highlights?: string[];
    technologies: string[];
    url?: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Vedant Kumar",
  title: "Software Engineer II | Full-Stack & Frontend Systems",
  contact: {
    phone: "+91 88253 76583",
    email: "vedantkumar48@gmail.com",
    location: "Ghaziabad, UP, India",
    github: "https://github.com/vedant48",
    linkedin: "https://www.linkedin.com/in/vedantkumar1/",
    portfolio: "https://vedantkumar.vercel.app",
  },
  summary:
    "Full-Stack Engineer with nearly 3 years of experience shipping scalable systems across commerce, logistics, and AI. Proficient in React, Next.js, NestJS, and PostgreSQL, cutting delivery turnaround by 40% while supporting 100k+ enterprise orders.",
  experience: [
    {
      company: "Noetic Logistiex",
      role: "Software Engineer II",
      period: "Apr 2026 – Present",
      location: "Delhi NCR, India",
      highlights: [
        "Architected a React/TypeScript catalog onboarding flow, slashing creation time from hours to ~5 mins via automated variant mapping and AI extraction.",
        "Reduced catalog enrichment to ~2 mins by building one-click AI workflows generating SEO titles, descriptions, and variant attributes.",
        "Led frontend architecture across 4 squads, building SellereX Common (NPM Workspaces, Storybook) and migrating MUI to Tailwind/ShadCN UI, cutting turnaround by 40%.",
        "Enabled ~1-min catalog sync across 50+ marketplaces via reusable TypeScript schemas for Amazon, Shopify, Flipkart, and Noon.",
        "Improved AI workflow resilience using state machines, error boundaries, retries, and polling, reducing bug reports by 15%.",
      ],
    },
    {
      company: "Noetic Logistiex",
      role: "Software Engineer",
      period: "May 2024 – Mar 2026",
      location: "Delhi NCR, India",
      highlights: [
        "Scaled order workflows to 100k+ orders, 2k+ daily orders, and 100+ merchants by building React/TypeScript/Refine.dev CRUD systems.",
        "Automated courier selection by developing engines evaluating carrier rates, SLAs, pincodes, and real-time carrier performance.",
        "Boosted dashboard performance with TanStack Query caching, Recharts, and webhooks for real-time delivery exception alerts.",
      ],
    },
    {
      company: "Noetic Logistiex",
      role: "Software Engineer Intern",
      period: "Dec 2023 – Apr 2024",
      location: "Delhi NCR, India",
      highlights: [
        "Engineered cross-platform React Native booking/tracking flows with barcode scanning, offline queues, and courier rate comparisons.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "IIIT Senapati, Manipur",
      period: "May 2024",
      location: "Manipur, India",
      score: "CPI 8.03 / 10.0",
    },
  ],
  skills: [
    {
      category: "Languages & Frontend",
      items: ["TypeScript", "JavaScript", "React.js", "Next.js", "React Native", "Tailwind CSS", "ShadCN", "HTML/CSS"],
    },
    {
      category: "Backend & Databases",
      items: ["NestJS", "Node.js", "REST APIs", "GraphQL", "Swagger", "PostgreSQL", "Prisma", "Redis"],
    },
    {
      category: "State & Testing",
      items: ["TanStack Query", "Redux Toolkit", "Zustand", "Jest", "React Testing Library"],
    },
    {
      category: "Architecture & Tools",
      items: ["Design Systems", "Storybook", "Vite", "NPM Workspaces", "Webpack", "CI/CD", "Git"],
    },
  ],
  keyProjects: [
    {
      name: "Link Expiry",
      description: "Ephemeral Message Sharing Platform",
      period: "Sept 2026",
      highlights: [
        "Built an ephemeral sharing platform with configurable TTL expiration, bcrypt hashing, Swagger docs, and API rate limiting.",
        "Guaranteed strict concurrency limits via atomic Prisma/PostgreSQL claims, Redis caching, and automated cleanup cron jobs.",
        "Engineered a responsive React UI featuring secure link sharing, clipboard integration, and optimistic error handling.",
      ],
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "React"],
      url: "https://link-expiry-ui.vercel.app/",
    },
  ],
};
