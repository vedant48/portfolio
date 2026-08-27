export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Modern type-safe web and mobile development",
    skills: [
      { name: "React", description: "Hooks, Concurrent features, Virtualization, Performance profiling" },
      { name: "TypeScript", description: "Strict typing, Generics, Discriminated unions, API contract safety" },
      { name: "Next.js", description: "App Router, Server/Client components, SSR, Route handlers, SEO" },
      { name: "React Native", description: "Cross-platform mobile apps, Offline sync, Navigation, Device APIs" },
      { name: "JavaScript (ESNext)", description: "Async patterns, Event loop, DOM APIs, WebSockets" },
      { name: "HTML5 & CSS3", description: "Semantic markup, CSS variables, Modern layouts (Grid/Flexbox)" },
    ],
  },
  {
    title: "UI & Design Systems",
    subtitle: "Crafting accessible, pixel-precise interfaces",
    skills: [
      { name: "Tailwind CSS", description: "Utility-first design, Design tokens, Dark mode, Custom plugins" },
      { name: "ShadCN UI", description: "Accessible Radix primitives, Composable compound components" },
      { name: "Material UI (MUI)", description: "Enterprise component suites, Theme customization, Migration bridges" },
      { name: "Design Systems", description: "Component libraries, Token synchronization, Reusable patterns" },
      { name: "Responsive Layouts", description: "Mobile-first architectures, Fluid typography, Touch ergonomics" },
      { name: "Product Prototyping", description: "Figma wireframing, User flow mapping, Interaction specs" },
    ],
  },
  {
    title: "Architecture & Tooling",
    subtitle: "Scalable frontend structures and data layers",
    skills: [
      { name: "Refine.dev", description: "Enterprise CRUD frameworks, Data providers, Auth & Access control" },
      { name: "State Management", description: "Zustand, React Query (TanStack), Redux Toolkit, Context API" },
      { name: "Shared Libraries", description: "NPM workspaces, Monorepo package sharing, Versioning" },
      { name: "API Integration", description: "REST, GraphQL, WebSockets, Server-Sent Events (SSE), FastAPI" },
      { name: "Testing & Tooling", description: "Vite, Turbopack, ESLint, Git workflows, CI/CD deployment" },
      { name: "Web Performance", description: "Core Web Vitals, Bundle analysis, Tree shaking, Lazy loading" },
    ],
  },
  {
    title: "AI & Product Workflows",
    subtitle: "Building intuitive interfaces for complex AI agents",
    skills: [
      { name: "AI Catalog Generation", description: "Multi-modal PDF/Image parsing UI, Attribute extraction flows" },
      { name: "Catalog Transformation", description: "Channel schema mapping engine (Amazon, Flipkart, Shopify)" },
      { name: "Intelligent Content Enrichment", description: "SEO title generation, Bullet points, Keyword inference" },
      { name: "AI Image Studio Workflows", description: "Background replacement UI, Lifestyle prompt pipelines" },
      { name: "Human-in-the-Loop UX", description: "Confidence ratings, Inline diff reviews, Instant manual overrides" },
      { name: "Product Problem Framing", description: "Translating ambiguous business requirements into lean UX" },
    ],
  },
];
