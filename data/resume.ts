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
    role: string;
    description: string;
    technologies: string[];
    url?: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Vedant Kumar",
  title: "Software Engineer | Frontend | Product Engineering | AI Applications",
  contact: {
    phone: "8825376583",
    email: "vedantkumar48@gmail.com",
    location: "Sitamarhi, Bihar, India",
    github: "https://github.com/vedant48",
    linkedin: "https://www.linkedin.com/in/vedantkumar1/",
    portfolio: "https://vedantkumar.vercel.app",
  },
  summary:
    "Software Engineer with 3+ years of experience building frontend products and SaaS platforms across e-commerce, logistics, and AI-powered workflows. Experienced in React, TypeScript, React Native, Material UI, Refine.dev, Tailwind CSS, and ShadCN UI, with hands-on experience in frontend architecture, reusable component systems, product workflows, and AI-assisted catalog experiences. Progressed from Software Engineer Intern to Software Engineer II while contributing to products from early design and frontend development through production delivery.",
  experience: [
    {
      company: "Noetic LogistieX",
      role: "Software Engineer II",
      period: "2025 – Present (2026)",
      location: "Ghaziabad, UP / Hybrid, India",
      summary:
        "Leading frontend architecture and product development for enterprise AI catalog intelligence and shared design systems.",
      highlights: [
        "SellereX USP: Designed and developed the platform and website from scratch, covering product experience and frontend implementation for AI-powered catalog workflows.",
        "Built catalog creation workflows supporting images, PDFs, Excel files, and product information, with AI agents generating product catalogs.",
        "Built Transformation and Enrichment modules for marketplace-specific formats and AI-generated SEO titles, descriptions, attributes, and content.",
        "Built AI image-generation workflows for product creatives and catalog imagery using catalog information.",
        "Modernized frontend architecture from a Material UI-heavy approach toward Tailwind CSS and ShadCN UI while retaining required MUI components; introduced reusable UI components for maintainability and consistency.",
        "SellereX Agency: Built operational modules, configurable dashboards, workflow systems, and management tools.",
        "SellereX Common: Built and maintained shared components and utility packages used across applications to improve reuse, consistency, and development speed.",
        "Collaborated with backend, AI, product, and design teams on scalable frontend architecture and product workflows.",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "FastAPI", "Zustand", "Storybook"],
    },
    {
      company: "Noetic LogistieX",
      role: "Software Engineer",
      period: "2024 – 2025",
      location: "Ghaziabad, UP, India",
      summary:
        "Engineered scalable frontend modules for multi-channel commerce operations, order lifecycle management, and pricing intelligence.",
      highlights: [
        "Built and maintained scalable frontend features for a multi-channel e-commerce operations platform using React.js, Material UI, Refine.dev, and internal shared libraries.",
        "Developed interfaces for Pricing Intelligence, Order Management System (OMS), and Intract chat module.",
        "Worked with backend teams on catalog syncing, order lifecycle from creation through RTO, courier assignment, and pricing analytics workflows.",
        "Contributed to product listing, order management, customer communication, and pricing workflows across Amazon, Flipkart, Myntra, and Shopify.",
        "Worked with WhatsApp Business API integration and multi-platform data synchronization.",
      ],
      technologies: ["React.js", "TypeScript", "Material UI", "Refine.dev", "React Query", "WebSockets", "Recharts"],
    },
    {
      company: "LogistieX",
      role: "Software Engineer Intern",
      period: "2023 – 2024",
      location: "Ghaziabad, UP, India",
      summary:
        "Contributed to mobile ordering applications, warehouse scanner integrations, and marketing web properties.",
      highlights: [
        "Built the LogistieX website and contributed to a React Native ordering application for B2B and B2C workflows.",
        "Worked on order creation, seller dashboards, courier integrations, and courier price comparison workflows.",
        "Gained hands-on experience building production frontend and mobile features for logistics and e-commerce operations.",
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React.js", "HTML/CSS"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Computer Science and Engineering",
      period: "2020 – 2024",
      location: "India",
      score: "First Class",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Frontend & Mobile",
      items: ["React.js", "Next.js (App Router)", "React Native", "Tailwind CSS", "ShadCN UI", "Material UI (MUI)", "Refine.dev"],
    },
    {
      category: "Architecture & Systems",
      items: ["Frontend Architecture", "Reusable Component Libraries", "Design Systems (SellereX Common)", "UI Modernization", "NPM Workspaces", "State Management (Zustand / TanStack React Query)"],
    },
    {
      category: "Product & AI Workflows",
      items: ["AI-powered Catalog Generation", "AI Schema Transformation", "AI Content Enrichment (SEO Titles & Bullets)", "AI Image Studio Workflows", "Human-in-the-Loop UX"],
    },
    {
      category: "Integrations & Domains",
      items: ["REST APIs", "WhatsApp Business API", "Marketplace Data Sync (Amazon/Flipkart/Shopify)", "Courier Integrations (Delhivery/BlueDart)", "OMS", "Pricing Intelligence"],
    },
  ],
  keyProjects: [
    {
      name: "SellereX USP",
      role: "Lead Frontend Engineer",
      description: "AI-powered catalog creation, transformation, enrichment, and image-generation platform.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Zustand", "AI Pipelines"],
      url: "https://vedantkumar.vercel.app/work/sellerex-usp",
    },
    {
      name: "Naicos.ai",
      role: "Frontend Engineer & UI Implementation",
      description: "Built the Naicos.ai website and contributed to the Naicos AI commerce platform.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      url: "https://www.naicos.ai/",
    },
    {
      name: "Delverd",
      role: "Frontend Engineer & UI Developer",
      description: "Built the Delverd hyperlocal logistics web platform with route mapping and live estimation.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API"],
      url: "https://www.delverd.com/",
    },
    {
      name: "NoetieX & Studio NoetieX",
      role: "Product Designer & Frontend Engineer",
      description: "Built the NoetieX AI operating system website and Studio NoetieX consulting showcase.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      url: "https://noetiex.com",
    },
  ],
};
