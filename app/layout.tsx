import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vedant Kumar — Software Engineer · Product · AI",
  description:
    "Vedant Kumar is a Software Engineer building products at the intersection of frontend engineering, product development, UI/UX and AI.",
  keywords: [
    "Vedant Kumar",
    "Software Engineer",
    "Frontend Engineer",
    "Product Designer",
    "AI Product Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "SellereX",
    "LogistieX",
  ],
  authors: [{ name: "Vedant Kumar" }],
  creator: "Vedant Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vedantkumar.dev",
    title: "Vedant Kumar — Software Engineer · Product · AI",
    description:
      "Vedant Kumar is a Software Engineer building products at the intersection of frontend engineering, product development, UI/UX and AI.",
    siteName: "Vedant Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Kumar — Software Engineer · Product · AI",
    description:
      "3+ years building SaaS, logistics and AI-powered products — from mobile applications to AI catalog workflows.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Kurosawa-style grain overlay */}
        <div className="grain" aria-hidden="true" />

        {/* Custom cursor elements */}
        <div id="vk-cursor" aria-hidden="true" />
        <div id="vk-cursor-ring" aria-hidden="true" />

        {/* Scroll progress bar */}
        <div className="scroll-progress" aria-hidden="true">
          <div className="scroll-progress-fill" id="scroll-fill" />
        </div>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
