"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  links?: { repo?: string; demo?: string };
  details?: string[];
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs rounded-full border border-black/10 px-2 py-1 text-black/70 bg-white">
      {children}
    </span>
  );
}

function useIsDesktopSm() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return isDesktop;
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const isDesktop = useIsDesktopSm();
  const visibleCount = isDesktop ? 2 : 1;

  const [index, setIndex] = useState(0);

  const maxIndex = useMemo(
    () => Math.max(0, projects.length - visibleCount),
    [projects.length, visibleCount]
  );

  const clamp = (v: number) => Math.min(Math.max(v, 0), maxIndex);
  const prev = () => setIndex((i) => clamp(i - 1));
  const next = () => setIndex((i) => clamp(i + 1));

  useEffect(() => {
    setIndex((i) => clamp(i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, projects.length]);

  const translatePct = isDesktop ? index * 50 : index * 100;

  return (
    <>
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            <span className="text-accent">Featured.</span>{" "}
            <span className="text-black/70">Quick selection</span>
          </h2>
          <p className="mt-2 text-sm text-black/60 max-w-2xl">
            Projects focused on architecture, reliability, and clarity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              className="rounded-full border border-black/10 bg-white p-2 text-black/70 hover:border-black/20 hover:text-black disabled:opacity-40 disabled:hover:border-black/10 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index === maxIndex}
              className="rounded-full border border-black/10 bg-white p-2 text-black/70 hover:border-black/20 hover:text-black disabled:opacity-40 disabled:hover:border-black/10 transition"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <Link
            href="/projects"
            className="text-sm text-black/60 hover:text-black transition whitespace-nowrap"
          >
            View all →
          </Link>
        </div>
      </div>

      {/* Track */}
      <div className="mt-6 overflow-hidden">
        <div
          className="-mx-2 flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${translatePct}%)` }}
        >
          {projects.map((p) => (
            <div key={p.slug} className="w-full sm:w-1/2 shrink-0 px-2">
              <Link
                href={`/projects#${p.slug}`}
                aria-label={`Open ${p.title}`}
                className="group block w-full rounded-2xl bg-white border border-black/5 p-6 transition
                           hover:border-black/10 hover:shadow-sm"
              >
                <div className="text-lg font-semibold tracking-tight">
                  {p.title}
                </div>

                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  {p.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Dots */}
        {maxIndex > 0 ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-black/40"
                    : "w-2 bg-black/15 hover:bg-black/25"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        ) : null}

        {/* Mobile arrows */}
        {maxIndex > 0 ? (
          <div className="mt-4 flex sm:hidden justify-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70 hover:border-black/20 disabled:opacity-40 transition"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index === maxIndex}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70 hover:border-black/20 disabled:opacity-40 transition"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
