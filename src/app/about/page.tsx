import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="py-14 sm:py-18 bg-[#f5f5f7]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm text-black/50">About</p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-accent">About.</span>{" "}
              <span className="text-zinc-950">How I build</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed">
              I’m{" "}
              <span className="font-medium text-black/80">{site.name}</span>, a
              software engineer based in{" "}
              <span className="font-medium text-black/80">Zaragoza (Spain)</span>.
              I build enterprise-grade systems across web and mobile, with a focus
              on maintainability, reliability, and clean architecture.
            </p>

            {/* CTA (no repetición) */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm text-white hover:bg-zinc-800 transition"
              >
                View CV →
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm hover:border-black/20 transition"
              >
                See projects
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Current work */}
            <div className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition">
              <h2 className="text-sm font-medium text-black/70">Current work</h2>

              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                I’m part of the{" "}
                <span className="font-medium text-black/80">Salud Informa</span>{" "}
                ecosystem (Government of Aragón): a large healthcare platform
                including a web portal, Android & iOS apps, support operations, and
                multiple integrations via REST/SOAP services and Oracle databases.
              </p>

              <div className="mt-4 grid gap-2 text-sm text-black/70">
                <div className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3">
                  <span className="text-black/60">Scope</span>
                  <span className="font-medium text-black/80">
                    Portal · Apps · Services
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3">
                  <span className="text-black/60">Integrations</span>
                  <span className="font-medium text-black/80">
                    REST · SOAP · Oracle
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3">
                  <span className="text-black/60">Priority</span>
                  <span className="font-medium text-black/80">
                    Reliability in production
                  </span>
                </div>
              </div>
            </div>

            {/* Principles (reemplaza “Additional experience”) */}
            <div className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition">
              <h2 className="text-sm font-medium text-black/70">Principles</h2>

              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                I like systems that are easy to operate in production: clear
                boundaries, predictable behavior, and strong observability.
              </p>

              <div className="mt-4 grid gap-2 text-sm text-black/70">
                <div className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3">
                  <span className="text-black/60">Architecture</span>
                  <span className="font-medium text-black/80">
                    Clean layers & ownership
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3">
                  <span className="text-black/60">Quality</span>
                  <span className="font-medium text-black/80">
                    Validation & error contracts
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3">
                  <span className="text-black/60">Operations</span>
                  <span className="font-medium text-black/80">
                    Logs · traceability · retries
                  </span>
                </div>
              </div>
            </div>

            {/* Focus */}
            <div className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition">
              <h2 className="text-sm font-medium text-black/70">What I focus on</h2>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Clean separation of concerns (services, DAOs, DTOs)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  API quality: validation, clear error codes, predictable responses
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Observability: useful logs, traceability, production-friendly debugging
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Reliability: scheduled jobs, retries, edge cases, time tolerances
                </li>
              </ul>
            </div>

            {/* Value */}
            <div className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition">
              <h2 className="text-sm font-medium text-black/70">Where I add value</h2>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Enterprise backends (Java/.NET) and integrations
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Healthcare-scale ecosystems: portal + apps + services
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Legacy modernization with pragmatic, safe refactors
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Push notifications and mobile platform nuances
                </li>
              </ul>
            </div>
          </div>

          {/* Footer CTA (discreto, sin repetir botones) */}
          <div className="mt-10 text-sm text-black/60">
            Want to reach out?{" "}
            <Link className="text-black/70 hover:text-black transition" href="/contact">
              Contact me →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
