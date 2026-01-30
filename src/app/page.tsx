import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";
import { projects } from "@/content/project";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="py-12 sm:py-16 bg-[#f5f5f7]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm text-black/50">{site.location}</p>

            {/* Apple-like: red word + neutral title */}
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-accent">Work.</span>{" "}
              <span className="text-zinc-950">{site.role}</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed">
              {site.headline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm text-white hover:bg-zinc-800 transition"
              >
                View projects
              </Link>
              <Link
                href="/resume"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm hover:border-black/20 transition"
              >
                View CV
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm hover:border-black/20 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="py-12">
        <Container>
          <FeaturedProjects projects={projects} />
        </Container>
      </section>
    </main>
  );
}
