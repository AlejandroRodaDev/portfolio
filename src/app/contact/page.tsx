import { Container } from "@/components/Container";
import { site } from "@/content/site";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 sm:py-20 bg-[#f5f5f7]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-black/60">Contact</p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="text-accent">Contact.</span>{" "}
              <span className="text-zinc-950">Let’s talk</span>
            </h1>
            <p className="mt-4 text-black/70 leading-relaxed">
              If you want to discuss a project, collaboration, or an opportunity,
              you can reach me here:
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition"
              href={`mailto:${site.links.email}`}
            >
              <div className="flex items-center gap-2 text-sm text-black/60">
                <Mail className="h-4 w-4 text-black/70" />
                <span>Email</span>
              </div>
              <div className="mt-1 font-medium text-zinc-950">{site.links.email}</div>
              <div className="mt-3 text-sm text-black/60">Send a message →</div>
            </a>

            <a
              className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition"
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2 text-sm text-black/60">
                <Linkedin className="h-4 w-4 text-black/70" />
                <span>LinkedIn</span>
              </div>
              <div className="mt-1 font-medium text-zinc-950">Open profile</div>
              <div className="mt-3 text-sm text-black/60">Connect →</div>
            </a>

            <a
              className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-sm transition sm:col-span-2"
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2 text-sm text-black/60">
                <Github className="h-4 w-4 text-black/70" />
                <span>GitHub</span>
              </div>
              <div className="mt-1 font-medium text-zinc-950">View repositories</div>
              <div className="mt-3 text-sm text-black/60">Browse code →</div>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
