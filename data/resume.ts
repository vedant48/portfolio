export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    location: string;
    github: string;
    linkedin: string;
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
    role: string;
    description: string;
    technologies: string[];
  }[];
}

export const resumeData: ResumeData = {
  name: "Vedant Kumar",
  title: "Software Engineer · Product · AI",
  contact: {
    email: "vedantkumar48@gmail.com",
    location: "Sitamarhi, Bihar, India",
    github: "https://github.com/vedant48",
    linkedin: "https://www.linkedin.com/in/vedantkumar1/",
  },
  summary:
    "Product-minded Software Engineer with 3+ years of experience building high-performance web and mobile applications across SaaS, logistics, e-commerce, and AI. Specializes in React, TypeScript, modern frontend architecture, and turning complex product workflows into clean, intuitive interfaces.",
  experience: [
    {
      company: "Noetic LogistieX",
      role: "Software Engineer II",
      period: "2025 – Present",
      location: "Gurugram, India",
      summary:
        "Leading frontend architecture and interface design for AI catalog intelligence platforms and enterprise operations software.",
      highlights: [
        "Architected SellereX USP frontend from inception, delivering AI-powered catalog ingestion, transformation, enrichment, and studio image generation workflows.",
        "Engineered multi-channel schema mapping engine converting unified catalog records into Amazon, Flipkart, and Shopify formats.",
        "Built SellereX Common design system and component library adopting Tailwind CSS and ShadCN UI, accelerating team feature delivery across multiple apps.",
        "Constructed SellereX Agency multi-tenant workspace with account switching and bulk review capabilities for enterprise agency operators.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "FastAPI", "Zustand", "Storybook"],
    },
    {
      company: "LogistieX",
      role: "Software Engineer",
      period: "2024 – 2025",
      location: "Gurugram, India",
      summary:
        "Developed core e-commerce seller platform, order management systems, pricing intelligence dashboards, and courier routing modules.",
      highlights: [
        "Built high-throughput Order Management System (OMS) handling multi-channel order lifecycles, bulk manifest printing, and status transitions.",
        "Engineered Pricing Intelligence module providing real-time competitor price tracking and dynamic margin analytics.",
        "Developed Intract customer communication chat system directly integrated with order dispute resolution workflows.",
        "Implemented real-time courier rate comparison and routing interface supporting Delhivery, BlueDart, Xpressbees, and Shadowfax.",
      ],
      technologies: ["React", "TypeScript", "Material UI", "Refine.dev", "React Query", "WebSockets", "Recharts"],
    },
    {
      company: "LogistieX",
      role: "Software Engineer Intern",
      period: "2023",
      location: "Gurugram, India",
      summary:
        "Contributed to React Native mobile applications and core customer-facing web properties.",
      highlights: [
        "Developed cross-platform mobile booking and pickup scheduling screens using React Native and Redux Toolkit.",
        "Integrated camera-based barcode scanner and offline order queueing for warehouse dispatch staff.",
        "Designed and implemented the responsive LogistieX marketing website.",
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React", "JavaScript"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Computer Science & Engineering",
      period: "2020 – 2024",
      location: "India",
    },
  ],
  skills: [
    {
      category: "Frontend & Mobile",
      items: ["React", "TypeScript", "Next.js", "React Native", "JavaScript (ES6+)", "HTML5 / CSS3"],
    },
    {
      category: "UI & Design Systems",
      items: ["Tailwind CSS", "ShadCN UI", "Material UI (MUI)", "Design Tokens", "Responsive Design", "Figma"],
    },
    {
      category: "State & Architecture",
      items: ["Refine.dev", "React Query", "Zustand", "Redux Toolkit", "WebSockets", "Monorepo Workspaces"],
    },
    {
      category: "AI & Product Workflows",
      items: [
        "Multi-modal AI Workflows",
        "Catalog Schema Mapping",
        "SEO Content Enrichment",
        "AI Image Studio Pipelines",
        "Human-in-the-Loop UX",
      ],
    },
  ],
  keyProjects: [
    {
      name: "SellereX USP",
      role: "Software Engineer II · Product & Frontend",
      description: "AI-powered catalog creation, transformation, enrichment and image generation workspace.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Zustand"],
    },
    {
      name: "LogistieX Seller Platform",
      role: "Software Engineer",
      description: "Multi-channel operations platform covering OMS, pricing intelligence, and courier assignment.",
      technologies: ["React", "Material UI", "Refine.dev", "React Query"],
    },
    {
      name: "Logistics Mobile App",
      role: "Software Engineer Intern",
      description: "React Native mobile ordering and dispatch application with barcode scanning.",
      technologies: ["React Native", "Redux Toolkit", "React Navigation"],
    },
  ],
};
