import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CaseStudyNav({
  prevProject,
  nextProject,
}: {
  prevProject?: Project;
  nextProject?: Project;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: "clamp(24px, 4vh, 40px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {prevProject ? (
        <Link
          href={`/work/${prevProject.slug}`}
          className="btn btn-ghost"
          style={{ padding: "12px 20px" }}
        >
          <ArrowLeft size={13} />
          <span>/ {prevProject.title}</span>
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link
          href={`/work/${nextProject.slug}`}
          className="btn btn-ghost"
          style={{ padding: "12px 20px" }}
        >
          <span>/ {nextProject.title}</span>
          <ArrowRight size={13} />
        </Link>
      ) : (
        <Link
          href="/#work"
          className="btn btn-primary"
          style={{ padding: "12px 20px" }}
        >
          <span>/ View all work</span>
          <ArrowRight size={13} />
        </Link>
      )}
    </div>
  );
}
