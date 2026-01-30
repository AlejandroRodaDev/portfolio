import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/site";

const nav = [
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/resume", label: "CV" },
  { href: "/contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-medium tracking-tight">
            {site.name}
          </Link>

          <nav className="flex items-center gap-5 text-sm text-black/70">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="hover:text-black transition"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
