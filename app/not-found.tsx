import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 dark:bg-[#0C0C0E] text-neutral-900 dark:text-neutral-100 px-4 text-center">
      <div className="space-y-4 max-w-md">
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
          404 / Page Not Found
        </span>
        <h1 className="text-3xl font-bold tracking-tight">
          This page does not exist.
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The case study or link you are trying to visit might have been moved or updated.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
