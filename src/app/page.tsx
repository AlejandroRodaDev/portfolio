import Link from "next/link";
import Image from "next/image";
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
          <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-12">
            <div className="max-w-2xl">
              {/* Más claro el “quién” sin sobrecargar */}
              <p className="text-xs sm:text-sm text-black/50">
                {site.name} <span className="mx-2 text-black/30">·</span> {site.location}
              </p>

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

            {/* Avatar (desktop) */}
            <div className="hidden sm:block shrink-0">
              <div className="rounded-full bg-white p-2 ring-1 ring-black/10">
                <div className="relative h-36 w-36 overflow-hidden rounded-full">
                  <Image
                    src="/avatar.jpg"
                    alt={`${site.name} portrait`}
                    fill
                    sizes="144px"
                    className="object-cover saturate-0 contrast-105 hover:saturate-100 transition duration-300"
                    priority
                  />
                </div>
              </div>
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
