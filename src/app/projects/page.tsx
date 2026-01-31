"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { projects, type Project } from "@/content/project";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs rounded-full border border-black/10 px-2 py-1 text-black/70 bg-white">
      {children}
    </span>
  );
}

function ExternalPill({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-black/70 hover:text-black hover:border-black/20"
    >
      {children} <span className="ml-1">→</span>
    </a>
  );
}

function MetaLine({ project }: { project: Project }) {
  if (!project.company && !project.kind) return null;

  return (
    <div className="mt-1 text-xs text-black/50">
      {project.company ? <span>{project.company}</span> : null}
      {project.kind ? (
        <>
          {project.company ? <span className="mx-2 text-black/30">·</span> : null}
          <span>
            {project.kind === "Company" ? "Company project" : "Personal project"}
          </span>
        </>
      ) : null}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-black/10 shadow-xl
                   max-h-[85vh] overflow-hidden overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scroll area */}
        <div
          className="h-full max-h-[85vh] overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Header (sin X) */}
          <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-black/5">
            <div className="p-6 sm:p-8">
              <p className="text-xs text-black/50">Project</p>

              <h3
                id={titleId}
                className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950"
              >
                {project.title}
              </h3>

              <MetaLine project={project} />

              <p className="mt-3 text-sm sm:text-base text-black/70 leading-relaxed">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {project.links ? (
            <div className="px-6 sm:px-8 pb-2">
              <div className="flex flex-wrap gap-2">
                {project.links.web ? (
                  <ExternalPill
                    href={project.links.web}
                    ariaLabel={`${project.title} website`}
                  >
                    Website
                  </ExternalPill>
                ) : null}
                {project.links.appStore ? (
                  <ExternalPill
                    href={project.links.appStore}
                    ariaLabel={`${project.title} on the App Store`}
                  >
                    App Store
                  </ExternalPill>
                ) : null}
                {project.links.playStore ? (
                  <ExternalPill
                    href={project.links.playStore}
                    ariaLabel={`${project.title} on Google Play`}
                  >
                    Google Play
                  </ExternalPill>
                ) : null}
                {project.links.repo ? (
                  <ExternalPill
                    href={project.links.repo}
                    ariaLabel={`${project.title} repository`}
                  >
                    Repo
                  </ExternalPill>
                ) : null}
                {project.links.demo ? (
                  <ExternalPill
                    href={project.links.demo}
                    ariaLabel={`${project.title} demo`}
                  >
                    Demo
                  </ExternalPill>
                ) : null}
                {project.links.article && !project.links.articles?.length ? (
                  <ExternalPill
                    href={project.links.article}
                    ariaLabel={`${project.title} article`}
                  >
                    Article
                  </ExternalPill>
                ) : null}
              </div>

              {project.links.articles?.length ? (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-black/50">Articles</span>
                  {project.links.articles.map((a) => (
                    <a
                      key={a.url}
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-black/60 hover:text-black underline underline-offset-4 decoration-black/10 hover:decoration-black/20"
                    >
                      {a.label} →
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Highlights */}
          <div className="p-6 sm:p-8">
            <div className="text-xs font-medium text-black/50 tracking-tight">
              Highlights
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="rounded-2xl bg-[#f5f5f7] p-4 text-sm text-black/70 leading-relaxed"
                >
                  <span className="mr-2 text-black/40">•</span>
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-black/70 hover:text-black hover:border-black/20"
              >
                Close
              </button>
            </div>
          </div>

          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}



export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main>
      <section className="py-14 sm:py-20 bg-[#f5f5f7]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm text-black/50">Projects</p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-accent">Projects.</span>{" "}
              <span className="text-zinc-950">Selected work</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed">
              A curated selection of projects where I prioritize architecture,
              reliability, and clarity.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <div className="grid gap-4">
            {projects.map((p, idx) => {
              const n = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={p.slug}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelected(p);
                  }}
                  className="cursor-pointer rounded-3xl bg-white border border-black/5 p-6 sm:p-8
                             hover:border-black/10 hover:shadow-md hover:-translate-y-[1px] focus:outline-none
                             focus:ring-2 focus:ring-black/10"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f5f7] text-xs font-semibold text-accent">
                          {n}
                        </div>

                        <div>
                          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950">
                            {p.title}
                          </h2>

                          <MetaLine project={p} />

                          <p className="mt-2 text-sm text-black/70 leading-relaxed">
                            {p.summary}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <Chip key={t}>{t}</Chip>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      {p.links?.web ? (
                        <ExternalPill href={p.links.web} ariaLabel={`${p.title} website`}>
                          Website
                        </ExternalPill>
                      ) : null}
                      {p.links?.appStore ? (
                        <ExternalPill
                          href={p.links.appStore}
                          ariaLabel={`${p.title} on the App Store`}
                        >
                          App Store
                        </ExternalPill>
                      ) : null}
                      {p.links?.playStore ? (
                        <ExternalPill
                          href={p.links.playStore}
                          ariaLabel={`${p.title} on Google Play`}
                        >
                          Google Play
                        </ExternalPill>
                      ) : null}
                      {p.links?.repo ? (
                        <ExternalPill
                          href={p.links.repo}
                          ariaLabel={`${p.title} repository`}
                        >
                          Repo
                        </ExternalPill>
                      ) : null}
                      {p.links?.demo ? (
                        <ExternalPill href={p.links.demo} ariaLabel={`${p.title} demo`}>
                          Demo
                        </ExternalPill>
                      ) : null}
                      {p.links?.article && !p.links?.articles?.length ? (
                        <ExternalPill href={p.links.article} ariaLabel={`${p.title} article`}>
                          Article
                        </ExternalPill>
                      ) : null}
                    </div>
                  </div>

                  {p.links?.articles?.length ? (
                    <div
                      className="mt-4 flex flex-wrap items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-xs text-black/50">Articles</span>
                      {p.links.articles.map((a) => (
                        <a
                          key={a.url}
                          href={a.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-black/60 hover:text-black underline underline-offset-4 decoration-black/10 hover:decoration-black/20"
                        >
                          {a.label} →
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <div className="text-xs font-medium text-black/50 tracking-tight">
                      Highlights
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {p.highlights.map((h) => (
                        <div
                          key={h}
                          className="rounded-2xl bg-[#f5f5f7] p-4 text-sm text-black/70 leading-relaxed"
                        >
                          <span className="mr-2 text-black/40">•</span>
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-sm text-black/60">
                      View details <span className="ml-1">→</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-sm text-black/60">
            Want to get in touch?{" "}
            <Link className="text-black/70 hover:text-black" href="/contact">
              Contact me →
            </Link>
          </div>
        </Container>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
