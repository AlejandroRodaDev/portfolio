import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = new URL(
  "https://alejandro-roda-portfolio.alexroda96.chatgpt.site"
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: `${site.name} · ${site.role}`,
  description: site.headline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${site.name} · ${site.role}`,
    description: site.headline,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: `${site.name} — Backend Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.headline,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-zinc-950 min-h-screen flex flex-col`}>
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <footer className="mt-16 border-t border-black/5 py-10">
          <div className="mx-auto max-w-5xl px-6 text-center text-sm text-black/50">
            © {new Date().getFullYear()} Alejandro Roda. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
