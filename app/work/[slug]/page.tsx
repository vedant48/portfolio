import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { WorkflowDiagram } from "@/components/case-study/WorkflowDiagram";
import { TransformationVisual } from "@/components/case-study/TransformationVisual";
import { ModernizationComparison } from "@/components/case-study/ModernizationComparison";
import { ChallengeGrid } from "@/components/case-study/ChallengeGrid";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { SellereXUSPMockup } from "@/components/mockups/SellereXUSPMockup";
import { LogistieXDashboardMockup } from "@/components/mockups/LogistieXDashboardMockup";
import { MobileAppMockup } from "@/components/mockups/MobileAppMockup";
import { DesignSystemMockup } from "@/components/mockups/DesignSystemMockup";
import { AgencyMockup } from "@/components/mockups/AgencyMockup";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { KurosawaEffects } from "@/components/effects/KurosawaEffects";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Vedant Kumar`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Vedant Kumar`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  const renderProductMockup = () => {
    switch (project.id) {
      case "sellerex-usp":
        return <SellereXUSPMockup />;
      case "logistiex":
        return <LogistieXDashboardMockup />;
      case "logistics-mobile":
        return <MobileAppMockup />;
      case "sellerex-common":
        return <DesignSystemMockup />;
      case "sellerex-agency":
        return <AgencyMockup />;
      default:
        return null;
    }
  };

  return (
    <>
      <KurosawaEffects />
      <Navbar />

      <main style={{ paddingTop: "calc(var(--nav-h) + clamp(32px, 5vh, 64px))", paddingBottom: "clamp(64px, 10vh, 120px)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 8vh, 80px)" }}>
          {/* Header & Meta Matrix */}
          <CaseStudyHero project={project} />

          {/* Large Visual Anchor */}
          <section className="fade-up">
            <span className="eyebrow">
              Interface &amp; Live System Preview
            </span>
            <div style={{ border: "1px solid var(--line)", overflow: "hidden", background: "var(--panel)" }}>
              {renderProductMockup()}
            </div>
          </section>

          {/* The Problem Section */}
          <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
            <span className="eyebrow">Context &amp; Business Need</span>
            <h2 className="h-display h-md" style={{ marginBottom: 20 }}>
              The Problem &amp; Architecture Challenge
            </h2>
            <p className="lede" style={{ maxWidth: "70ch" }}>
              {project.overview.problem}
            </p>
          </section>

          {/* Core Interactive Diagrams */}
          {project.workflow && (
            <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
              <WorkflowDiagram steps={project.workflow} />
            </section>
          )}

          {project.transformationDetails && (
            <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
              <TransformationVisual
                title={project.transformationDetails.title}
                description={project.transformationDetails.description}
                channels={project.transformationDetails.channels}
              />
            </section>
          )}

          {project.modernizationDetails && (
            <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
              <ModernizationComparison details={project.modernizationDetails} />
            </section>
          )}

          {/* Challenges & Outcomes */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
              <ChallengeGrid challenges={project.challenges} />
            </section>
          )}

          {/* Key Contributions / Learnings */}
          {project.contributions && project.contributions.length > 0 && (
            <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
              <span className="eyebrow">Key Contributions</span>
              <h2 className="h-display h-md" style={{ marginBottom: 24 }}>
                Personal Engineering Ownership
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
                {project.contributions.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--panel)",
                      border: "1px solid var(--line)",
                      padding: "20px 24px",
                      display: "flex",
                      gap: 12,
                    }}
                  >
                    <span style={{ color: "var(--acc)", fontWeight: 800 }}>—</span>
                    <span style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.6 }}>{c}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quantitative Impact Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="fade-up" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(32px, 5vh, 48px)" }}>
              <span className="eyebrow">Measurable Outcomes</span>
              <h2 className="h-display h-md" style={{ marginBottom: 28 }}>
                Quantitative Impact
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 2,
                }}
              >
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--panel)",
                      border: "1px solid var(--line)",
                      padding: "clamp(20px, 3vw, 32px)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: "clamp(32px, 4vw, 48px)",
                        letterSpacing: "-.02em",
                        lineHeight: 1,
                        color: "var(--acc)",
                        marginBottom: 8,
                      }}
                    >
                      {metric.value}
                    </div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--display)",
                        fontWeight: 800,
                        fontSize: 10,
                        letterSpacing: ".25em",
                        textTransform: "uppercase",
                        color: "var(--fg)",
                      }}
                    >
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Navigation to Other Case Studies */}
          <CaseStudyNav prevProject={prevProject} nextProject={nextProject} />
        </div>
      </main>

      <Footer />
    </>
  );
}
