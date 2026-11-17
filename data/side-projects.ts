export interface SideProject {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  repo: string;
  live?: string;
}

const gh = (name: string) => `https://github.com/vedant48/${name}`;

export const sideProjects: SideProject[] = [
  {
    id: "taskly",
    name: "Taskly",
    summary:
      "Kanban task manager with drag-and-drop columns, optimistic updates, tags and task insights.",
    stack: ["React 19", "NestJS", "Prisma", "PostgreSQL", "Tailwind"],
    repo: gh("mern-task-manager"),
    live: "https://mern-task-frontend-gwue.onrender.com/",
  },
  {
    id: "shopflow",
    name: "ShopFlow POS",
    summary:
      "Offline-first point-of-sale and inventory PWA for small retail counters, syncing through an idempotent queue.",
    stack: ["React 19", "Dexie", "Cloudflare Workers", "D1"],
    repo: gh("ShopFlow-POS"),
    live: "https://shopflow-drab.vercel.app",
  },
  {
    id: "papervault",
    name: "PaperVault",
    summary:
      "Local-first mobile document scanner with perspective correction, on-device OCR hooks and SQLite full-text search.",
    stack: ["React Native", "Expo", "SQLite FTS5", "Reanimated"],
    repo: gh("PaperVault"),
  },
  {
    id: "velora",
    name: "Velora",
    summary:
      "Streaming discovery app tuned for slow networks, with an image CDN proxy, cached queries and 60/120 FPS lists.",
    stack: ["React Native", "Expo", "TanStack Query", "FlashList"],
    repo: gh("velora"),
  },
  {
    id: "sangati",
    name: "Companion Ride",
    summary:
      "Carpooling app that matches commuters on pickup, destination, time and direction, with realtime chat and a safety hub.",
    stack: ["React Native", "Supabase", "PostGIS", "Next.js"],
    repo: gh("sangati"),
    live: "https://sangati-lovat.vercel.app",
  },
  {
    id: "sales-orders",
    name: "Sales Order Management",
    summary:
      "Order app where every new order pushes a Firebase notification to connected devices and refreshes the list.",
    stack: ["React", "NestJS", "PostgreSQL", "Firebase FCM"],
    repo: gh("sales-order-management"),
    live: "https://sales-order-management-wheat.vercel.app",
  },
  {
    id: "link-expiry",
    name: "Link Expiry",
    summary:
      "Self-destructing message links with TTLs, visit caps, password protection and a Redis fast path.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "React"],
    repo: gh("link-expiry-api"),
    live: "https://link-expiry-ui.vercel.app",
  },
  {
    id: "applyfeed",
    name: "ApplyFeed",
    summary:
      "Syncs Gmail and Outlook to track job applications, classifying ATS emails into pipeline stages.",
    stack: ["TypeScript", "OAuth 2.0", "Gmail API", "Microsoft Graph"],
    repo: gh("ApplyFeed"),
    live: "https://apply-feed.vercel.app",
  },
  {
    id: "propsoch",
    name: "Propsoch Redesign",
    summary:
      "Audit-led redesign of the Propsoch landing page, with Lighthouse mobile performance taken from 41 to 96.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind"],
    repo: gh("propsoch-landing-page-redesign"),
    live: "https://propsoch-landing-page-redesign.vercel.app",
  },
];
