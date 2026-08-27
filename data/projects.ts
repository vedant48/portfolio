export interface ProjectWorkflowStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface ChallengeItem {
  title: string;
  challenge: string;
  decision: string;
  outcome: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  label: string;
  description: string;
  role: string;
  roleType: string;
  period: string;
  company: string;
  technologies: string[];
  featured: boolean;
  hasCaseStudy: boolean;
  metrics?: { label: string; value: string }[];
  overview: {
    problem: string;
    solution: string;
    impact: string;
  };
  contributions: string[];
  workflow?: ProjectWorkflowStep[];
  transformationDetails?: {
    title: string;
    description: string;
    channels: { name: string; format: string; badge: string; rules: string }[];
  };
  enrichmentDetails?: {
    title: string;
    description: string;
    features: { title: string; desc: string }[];
  };
  imageGenDetails?: {
    title: string;
    description: string;
    pipeline: string[];
  };
  modernizationDetails?: {
    title: string;
    context: string;
    highlights: string[];
    comparison: {
      legacy: string[];
      modern: string[];
    };
  };
  sections?: {
    title: string;
    description: string;
    features?: string[];
  }[];
  challenges: ChallengeItem[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: "sellerex-usp",
    slug: "sellerex-usp",
    number: "01",
    title: "SellereX USP",
    tagline: "AI-powered catalog intelligence & multi-channel generation platform",
    label: "AI · SaaS · Product Engineering",
    description:
      "AI-powered catalog creation, transformation, enrichment and image generation platform for e-commerce sellers.",
    role: "Software Engineer II · Product · Frontend",
    roleType: "Software Engineer II",
    period: "2025 – 2026",
    company: "Noetic LogistieX",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Material UI", "Zustand", "FastAPI"],
    featured: true,
    hasCaseStudy: true,
    overview: {
      problem:
        "E-commerce brands and agencies spend dozens of hours manually structuring product data from unstructured manufacturer PDFs, raw spreadsheets, and phone photos. Furthermore, each marketplace (Amazon, Flipkart, Myntra) enforces distinct schemas, character limits, attribute keys, and image standards, leading to listing rejections and high operational overhead.",
      solution:
        "Engineered SellereX USP as a unified catalog intelligence workspace. The platform ingests arbitrary inputs, parses them via multi-modal AI agents into a canonical product schema, allows one-click channel transformation, optimizes content for search algorithms, and produces studio-grade lifestyle product imagery.",
      impact:
        "Replaced fragmented manual Excel and Photoshop workflows with an integrated multi-step web application, enabling sellers to take products from raw specs to marketplace-compliant listings in minutes.",
    },
    contributions: [
      "Designed and developed the platform and core web workspace from scratch.",
      "Built multi-modal catalog creation workflows supporting PDF, Excel, and image batch uploads.",
      "Architected marketplace transformation engine adapting canonical data into Amazon, Flipkart, and custom schemas.",
      "Built content enrichment workflows generating SEO titles, bullet points, attribute values, and compliance tags.",
      "Implemented AI studio image generation workflow with prompt presets and real-time canvas preview.",
      "Modernized frontend architecture by migrating legacy UI patterns toward Tailwind CSS + ShadCN UI.",
      "Built reusable UI components, data tables, filter builders, and design tokens.",
    ],
    workflow: [
      {
        number: "01",
        title: "Upload",
        description: "Ingest unstructured files",
        detail: "Users upload product spec PDFs, manufacturer Excel sheets, or raw mobile photos.",
        iconName: "UploadCloud",
      },
      {
        number: "02",
        title: "Understand",
        description: "Multi-modal AI extraction",
        detail: "Vision models and LLM agents parse text, identify product categories, attributes, and variations.",
        iconName: "Cpu",
      },
      {
        number: "03",
        title: "Generate Catalog",
        description: "Unified normalized schema",
        detail: "Constructs a clean canonical representation of the product with universal attribute mapping.",
        iconName: "Layers",
      },
      {
        number: "04",
        title: "Transform",
        description: "Channel-specific mapping",
        detail: "Adapts the unified schema into Amazon A+, Flipkart flat-file, or Shopify inventory models.",
        iconName: "GitBranch",
      },
      {
        number: "05",
        title: "Enrich",
        description: "SEO & attribute optimization",
        detail: "Generates high-converting titles, keyword-dense bullet points, and compliance descriptions.",
        iconName: "Sparkles",
      },
      {
        number: "06",
        title: "Generate Images",
        description: "AI virtual studio & scenes",
        detail: "Synthesizes studio backgrounds, shadows, lifestyle placements, and banner compositions.",
        iconName: "Image",
      },
      {
        number: "07",
        title: "Publish",
        description: "Ready-to-list export",
        detail: "Exports channel-validated listing templates or synchronizes directly via marketplace APIs.",
        iconName: "Send",
      },
    ],
    transformationDetails: {
      title: "Marketplace-Specific Transformation",
      description:
        "Every marketplace has strict taxonomic rules and validation constraints. SellereX transforms the single canonical catalog into exact channel formats without duplicating data entry.",
      channels: [
        {
          name: "Amazon Marketplace",
          format: "A+ Content & Flat File Feed",
          badge: "Amazon Feed Schema v3.2",
          rules: "Strict character limits on bullet points, specific search term backend fields, and exact taxonomy nodes.",
        },
        {
          name: "Flipkart",
          format: "Listing Template XLSX & JSON",
          badge: "Flipkart Seller API",
          rules: "Mandatory vertical-specific attributes (fabric, weave, neck type) and curated image aspect ratios.",
        },
        {
          name: "Myntra / Ajio",
          format: "Fashion Schema Model",
          badge: "Enterprise Fashion API",
          rules: "Rich style attributes, color swatches, model measurements, and strict size chart mapping.",
        },
        {
          name: "Shopify / D2C",
          format: "REST & GraphQL Product Model",
          badge: "Shopify Admin API",
          rules: "HTML descriptions, handle generation, variant matrix, and custom meta-fields.",
        },
      ],
    },
    enrichmentDetails: {
      title: "Intelligent Attribute & Content Enrichment",
      description:
        "Raw manufacturer data is rarely optimized for consumer search. The enrichment engine expands sparse information into rich, searchable product attributes.",
      features: [
        {
          title: "Algorithmic SEO Titles",
          desc: "Constructs high-ranking search titles combining Brand + Primary Feature + Material + Gender + Pack Size according to channel rules.",
        },
        {
          title: "Structured Value-Prop Bullets",
          desc: "Generates benefit-driven bullet points highlighting durability, dimensions, care instructions, and warranty.",
        },
        {
          title: "Missing Attribute Inference",
          desc: "Detects missing mandatory fields and infers values using visual cues from uploaded product imagery.",
        },
        {
          title: "Compliance & Safety Validation",
          desc: "Validates country of origin, manufacturer details, and statutory warnings prior to export.",
        },
      ],
    },
    imageGenDetails: {
      title: "Studio-Quality AI Image Workflow",
      description:
        "Allows sellers to turn flat white-background product shots into context-rich commercial photography without costly studio shoots.",
      pipeline: [
        "Product Isolation (Automated subject mask and edge refinement)",
        "Prompt-Guided Scene Synthesis (Studio marble table, Scandinavian living room, outdoor sunlight)",
        "Contact Shadow & Lighting Harmonization (Realistic depth projection and ambient reflection)",
        "Multi-Format Canvas Export (1:1 Square, 4:5 Portrait, 16:9 Banner ads)",
      ],
    },
    modernizationDetails: {
      title: "Frontend Architecture & Modernization",
      context:
        "The project required migrating from a legacy Material UI monolithic approach toward an agile, utility-first Tailwind CSS + ShadCN UI stack, while preserving critical operational MUI components where appropriate.",
      highlights: [
        "Constructed a cohesive design token bridge matching typography scales and color CSS variables.",
        "Replaced heavy runtime CSS-in-JS style injection with zero-runtime Tailwind CSS utilities.",
        "Introduced composable Radix-based primitives (ShadCN) for accessible modals, dropdowns, and drawers.",
        "Abstracted complex form state and asynchronous AI generation pipelines using Zustand and custom hooks.",
      ],
      comparison: {
        legacy: [
          "Heavy runtime CSS-in-JS (Emotion / styled components)",
          "Monolithic card wrappers with rigid default styling",
          "Deeply nested prop drilling for multi-step catalog forms",
          "Inconsistent custom overrides across team features",
        ],
        modern: [
          "Zero-runtime utility classes with instant HMR",
          "Composable Radix UI primitives with accessible ARIA semantics",
          "Decoupled state stores (Zustand) with optimistic UI updates",
          "Unified shared design system tokens with full Dark/Light mode support",
        ],
      },
    },
    challenges: [
      {
        title: "Managing Asynchronous Multi-Step AI Pipelines",
        challenge:
          "Multi-modal AI operations (parsing PDFs, generating 50+ attributes, creating multiple images) take time and can fail intermittently if network or model limits are exceeded.",
        decision:
          "Built a robust state management layer with optimistic progress polling, WebSocket status streams, and granular retry buttons at the individual attribute and image level.",
        outcome:
          "Users never face frozen screens; they can continue inspecting and editing generated fields while background generation runs smoothly.",
      },
      {
        title: "Complex Dynamic Marketplace Schema Validation",
        challenge:
          "Marketplaces change attribute validation rules frequently, and users would only discover errors after downloading and failing validation on the seller portal.",
        decision:
          "Designed an inline real-time validator with visual status badges (Missing required, Character limit exceeded, Format error) directly beside each input field.",
        outcome:
          "Drastically reduced upload failure rates by catching data discrepancies directly within the SellereX workspace before export.",
      },
      {
        title: "Incremental Migration from MUI to Tailwind/ShadCN",
        challenge:
          "Refactoring an active production codebase without disrupting daily feature releases or causing visual regressions.",
        decision:
          "Implemented a design-token abstraction layer mapping CSS variables across both systems, allowing new modules to be written cleanly in ShadCN while legacy modules continued functioning.",
        outcome:
          "Shipped the new AI catalog and image studio on modern architecture with zero downtime or release delays.",
      },
    ],
    learnings: [
      "Designing for AI requires transparent UX: users must always see what the AI generated, why, and have instant single-click manual override capability.",
      "A disciplined design system is the highest-leverage investment for engineering velocity in a fast-evolving product.",
      "Understanding the exact e-commerce domain constraints (Amazon Flat File taxonomy, Flipkart vertical rules) was essential to building an intuitive UI.",
    ],
  },
  {
    id: "logistiex",
    slug: "logistiex",
    number: "02",
    title: "LogistieX Seller Platform",
    tagline: "Multi-channel e-commerce operations, order management & pricing platform",
    label: "E-COMMERCE · SaaS · FRONTEND",
    description:
      "Multi-channel e-commerce operations platform covering catalog, orders, pricing, courier workflows and customer communication.",
    role: "Software Engineer",
    roleType: "Software Engineer",
    period: "2024 – 2025",
    company: "LogistieX",
    technologies: ["React", "TypeScript", "Material UI", "Refine.dev", "React Query", "WebSockets", "Recharts"],
    featured: true,
    hasCaseStudy: true,
    overview: {
      problem:
        "High-volume e-commerce sellers managing multiple channels (Amazon, Flipkart, Myntra, Shopify) face severe operational fragmentation. Inventory falls out of sync, order statuses require manual verification across multiple portals, courier rate comparison is tedious, and customer disputes get lost across communication silos.",
      solution:
        "Built comprehensive frontend modules for the LogistieX Seller Platform. Developed real-time order processing pipelines, intelligent courier assignment dashboards, dynamic pricing analytics, and an integrated customer chat dispute system.",
      impact:
        "Centralized daily operations for sellers into a single high-performance dashboard, reducing multi-platform context switching and operational lag.",
    },
    contributions: [
      "Developed high-density Order Management System (OMS) screens with multi-column filtering, bulk status updates, and invoice generation.",
      "Built Pricing Intelligence dashboards visualizing real-time competitor price movements and dynamic margin recommendations.",
      "Engineered the Intract / Chat communication module connecting sellers directly to order disputes and customer queries.",
      "Integrated bidirectional catalog syncing across Amazon, Flipkart, Myntra, and Shopify.",
      "Implemented intelligent courier assignment interfaces comparing real-time rate cards, transit SLAs, and pincode serviceability.",
      "Built reusable data grid tables, status timeline components, and analytical charts.",
    ],
    sections: [
      {
        title: "Order Management System (OMS)",
        description:
          "Engineered high-throughput order queues handling pending, processing, shipped, and returned states across multiple sales channels with batch label printing.",
        features: [
          "Unified multi-channel order ingestion",
          "Bulk manifest generation and barcode printing",
          "Automated status sync via WebSockets",
          "Custom filter presets for warehouse dispatch teams",
        ],
      },
      {
        title: "Pricing Intelligence",
        description:
          "Created interactive pricing matrices displaying competitor price shifts, Buy Box ownership percentages, and margin-safe discount limits.",
        features: [
          "Real-time Buy Box tracking charts",
          "Automated rule-based repricing simulation UI",
          "Historical price vs. sales volume correlation",
        ],
      },
      {
        title: "Intract / Chat Module",
        description:
          "Integrated in-app customer messaging directly into the order detail view, enabling support teams to resolve return requests, address address changes, and attach proof photos.",
        features: [
          "Real-time message streaming with status ticks",
          "Contextual order metadata sidebar during active chats",
          "Template canned responses for common logistics queries",
        ],
      },
      {
        title: "Courier Assignment & Rate Comparison",
        description:
          "Constructed routing UI that compares courier partners (Delhivery, BlueDart, Xpressbees, Shadowfax) dynamically based on destination pincode, volumetric weight, and delivery SLA.",
        features: [
          "Side-by-side shipping cost breakdown",
          "Automated best-courier recommendation engine",
          "One-click pickup scheduling and tracking URL generation",
        ],
      },
    ],
    challenges: [
      {
        title: "Rendering High-Density Data Grids Without Frame Drops",
        challenge:
          "Sellers frequently manage thousands of orders simultaneously with complex columns (SKU images, customer addresses, live courier tracking pills, action buttons).",
        decision:
          "Implemented virtualized list rendering, memoized column cell renderers, and paginated server-side queries via Refine.dev and React Query.",
        outcome:
          "Maintained 60 FPS buttery smooth scrolling and instant multi-criteria filtering even on heavy inventory tables.",
      },
      {
        title: "Synchronizing Disparate Marketplace Webhook States",
        challenge:
          "Order lifecycles across Amazon, Flipkart, and Shopify use conflicting state naming conventions and webhook frequencies.",
        decision:
          "Standardized a canonical frontend order state machine with visual badges and contextual fallback indicators for pending synchronization.",
        outcome:
          "Provided clear, unmistakable order statuses to warehouse operators, preventing duplicate dispatches.",
      },
    ],
    learnings: [
      "Enterprise B2B users prioritize information density, keyboard navigation, and fast bulk operations over flashy animations.",
      "Close collaboration with backend engineers on payload shapes and pagination contracts drastically simplifies frontend state management.",
    ],
  },
  {
    id: "logistics-mobile",
    slug: "logistics-mobile",
    number: "03",
    title: "Logistics Mobile Application",
    tagline: "React Native mobile experience for B2B/B2C ordering & courier workflows",
    label: "MOBILE · LOGISTICS",
    description:
      "React Native ordering experience supporting B2B/B2C workflows, seller operations and courier integrations.",
    role: "Software Engineer Intern",
    roleType: "Software Engineer Intern",
    period: "2023",
    company: "LogistieX",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation", "NativeBase"],
    featured: true,
    hasCaseStudy: true,
    overview: {
      problem:
        "Sellers on the go and local dispatch managers needed an accessible mobile interface to create shipping orders, verify pickup dispatches, scan barcode labels, and check delivery status without sitting at a desktop.",
      solution:
        "Built key user flows and UI components for the LogistieX React Native mobile application, optimizing for quick one-thumb interactions, camera barcode scanning, and unreliable mobile network conditions.",
      impact:
        "Delivered a responsive mobile companion that enabled sellers to generate shipping labels and track shipments on the road.",
    },
    contributions: [
      "Developed mobile order booking and pickup scheduling screens.",
      "Implemented barcode scanning integration for fast parcel verification.",
      "Built real-time shipment tracking timeline with step-by-step milestone updates.",
      "Created offline-friendly cached screens using Redux Toolkit and AsyncStorage.",
      "Collaborated with senior engineers on component architecture and cross-platform iOS/Android UI parity.",
    ],
    challenges: [
      {
        title: "Unstable Connectivity in Warehouse & Transit Environments",
        challenge:
          "Delivery drivers and warehouse staff frequently experienced intermittent connectivity while scanning and updating package states.",
        decision:
          "Implemented local queueing with Redux Persist, storing pending status actions and syncing sequentially once connectivity was restored.",
        outcome:
          "Prevented data loss and allowed continuous barcode scanning without blocking user interactions.",
      },
    ],
    learnings: [
      "Gained deep foundational experience in mobile performance, state persistence, touch gestures, and responsive mobile layouts.",
      "Learned the importance of defensive error handling and clear offline status indicators in utility mobile apps.",
    ],
  },
  {
    id: "sellerex-common",
    slug: "sellerex-common",
    number: "04",
    title: "SellereX Common",
    tagline: "Shared component and utility ecosystem for product consistency",
    label: "DESIGN SYSTEM · FRONTEND ARCHITECTURE",
    description:
      "Shared component and utility ecosystem used across multiple applications to improve consistency, reuse and development speed.",
    role: "Software Engineer II · Core Frontend",
    roleType: "Software Engineer II",
    period: "2025 – 2026",
    company: "Noetic LogistieX",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Material UI", "Storybook"],
    featured: false,
    hasCaseStudy: true,
    overview: {
      problem:
        "As multiple internal and customer-facing products emerged across the organization (SellereX USP, SellereX Agency, Internal Ops), teams were rewriting common UI components and introducing visual inconsistencies.",
      solution:
        "Architected SellereX Common—a centralized UI library and design token system providing accessible components, table builders, form primitives, and API hooks across all repositories.",
      impact:
        "Reduced new feature kickoff time and ensured a unified brand feel and interaction standard across all company tools.",
    },
    contributions: [
      "Designed and documented core UI primitives: DataTables, FilterBuilders, FileUploader, ModalManager, and PromptEditor.",
      "Established shared Tailwind configuration and CSS variable tokens for unified Dark/Light mode.",
      "Created reusable HTTP interceptors, error boundaries, and telemetry tracking utilities.",
    ],
    challenges: [
      {
        title: "Balancing Flexibility with Design Consistency",
        challenge:
          "Different apps needed specialized table actions and filtering behaviors without bloating the base component API.",
        decision:
          "Utilized compound component patterns and headless slot composition (leveraging Radix UI primitives), giving consuming apps full render control.",
        outcome:
          "Adopted across 4+ internal applications with high developer satisfaction and zero breaking regressions.",
      },
    ],
    learnings: [
      "A great design system is not just code; it's clear documentation, sensible defaults, and intuitive component composition.",
    ],
  },
  {
    id: "sellerex-agency",
    slug: "sellerex-agency",
    number: "05",
    title: "SellereX Agency",
    tagline: "Operations & multi-tenant workflow platform for e-commerce agencies",
    label: "INTERNAL PRODUCT · OPERATIONS",
    description:
      "Operational modules, configurable dashboards and workflow systems for agency operations.",
    role: "Software Engineer II",
    roleType: "Software Engineer II",
    period: "2025",
    company: "Noetic LogistieX",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Zustand", "Recharts"],
    featured: false,
    hasCaseStudy: true,
    overview: {
      problem:
        "Agency account managers handling dozens of seller brands simultaneously needed a consolidated command center to track catalog progress, review AI outputs, manage team allocations, and approve listings in bulk.",
      solution:
        "Built high-productivity agency dashboards with multi-tenant account switching, client milestone tracking, batch review queues, and role-based action workflows.",
      impact:
        "Streamlined internal operations, enabling agency teams to manage significantly more client accounts with higher delivery speed.",
    },
    contributions: [
      "Built multi-account switching workspace allowing managers to swap client brand contexts seamlessly.",
      "Developed batch review and approval queues for AI-generated product content and imagery.",
      "Constructed operational analytics showing client turnaround times, catalog volumes, and pending reviews.",
    ],
    challenges: [
      {
        title: "Multi-Tenant Context State Management",
        challenge:
          "Ensuring zero state leakage when account managers switch rapidly between different client brands and catalog databases.",
        decision:
          "Scoped all cache keys and client stores to active account IDs with explicit cache invalidation guards on tenant transitions.",
        outcome:
          "Guaranteed complete data isolation and instant tenant switching without redundant page reloads.",
      },
    ],
    learnings: [
      "High-volume internal tools demand extreme focus on ergonomics: keyboard shortcuts, bulk selection, and clear feedback states.",
    ],
  },
];
