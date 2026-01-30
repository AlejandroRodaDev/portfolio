import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { certifications } from "@/content/certifications";
import { skills } from "@/content/skills";

function SectionTitle({
  accent,
  children,
}: {
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mt-12 text-2xl sm:text-3xl font-semibold tracking-tight">
      {accent ? <span className="text-accent">{accent}.</span> : null}{" "}
      <span className="text-black/70">{children}</span>
    </h2>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs rounded-full border border-black/10 bg-white px-2.5 py-1 text-black/70">
      {children}
    </span>
  );
}

function formatRange(start: string, end?: string) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fmt = (v: string) => {
    if (v === "Present") return "Present";
    const [y, m] = v.split("-");
    if (!y || !m) return v;
    const idx = Number(m) - 1;
    const mon = monthNames[idx] ?? m;
    return `${mon} ${y}`;
  };

  return `${fmt(start)} — ${fmt(end ?? "Present")}`;
}

export default function ResumePage() {
  return (
    <main>
      {/* HERO */}
      <section className="py-16 sm:py-20 bg-[#f5f5f7]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-black/60">Resume</p>

            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="text-accent">Resume.</span>{" "}
              <span className="text-zinc-950">{site.name}</span>
            </h1>

            <p className="mt-4 text-black/70 leading-relaxed">
              {site.role}. {site.headline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm text-white hover:bg-zinc-800 transition"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
              <a
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm hover:border-black/20 transition"
                href={`mailto:${site.links.email}`}
              >
                Email
              </a>
              <Link
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm hover:border-black/20 transition"
                href="/projects"
              >
                Projects
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-12">
        <Container>
          {/* EXPERIENCE */}
          <SectionTitle accent="Experience">Selected roles</SectionTitle>
          <div className="mt-6 space-y-4">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}-${item.start}`}
                className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="text-base sm:text-lg font-semibold tracking-tight">
                      {item.role}
                    </div>
                    <div className="mt-1 text-sm text-black/70">
                      {item.company}
                      {item.location ? ` · ${item.location}` : ""}
                    </div>
                  </div>
                  <div className="text-sm text-black/60">
                    {formatRange(item.start, item.end)}
                  </div>
                </div>

                <ul className="mt-4 list-disc pl-5 text-sm text-black/70 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {item.tech?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <SectionTitle accent="Skills">Core stack</SectionTitle>
          <div className="mt-6 rounded-2xl bg-white border border-black/5 p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <SectionTitle accent="Education">Background</SectionTitle>
          <div className="mt-6 space-y-4">
            {education.map((e) => (
              <div
                key={`${e.title}-${e.institution}`}
                className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="text-base sm:text-lg font-semibold tracking-tight">
                      {e.title}
                    </div>
                    <div className="mt-1 text-sm text-black/70">
                      {e.institution}
                    </div>
                  </div>
                  <div className="text-sm text-black/60">
                    {e.start && e.end ? `${e.start} — ${e.end}` : ""}
                  </div>
                </div>

                {e.notes?.length ? (
                  <ul className="mt-4 list-disc pl-5 text-sm text-black/70 space-y-1.5">
                    {e.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <SectionTitle accent="Certifications">Selected</SectionTitle>
          <div className="mt-6 rounded-2xl bg-white border border-black/5 p-6">
            {certifications.length === 0 ? (
              <p className="text-sm text-black/60">
                Add only relevant, verifiable certifications here.
              </p>
            ) : (
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div className="text-black/80">
                        <span className="font-medium">{c.name}</span>
                        {c.issuer ? (
                          <span className="text-black/60"> · {c.issuer}</span>
                        ) : null}
                      </div>
                      <div className="text-black/60">
                        {c.year ?? ""}
                        {c.url ? (
                          <>
                            {" · "}
                            <a
                              className="hover:text-black transition"
                              href={c.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Verify →
                            </a>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-12 text-sm text-black/50">
            <Link className="hover:text-black transition" href="/">
              ← Back to home
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
