"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl tracking-tight">
          {SITE.wordmark}
          <span className="text-ember">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-soft sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm text-paper transition-opacity hover:opacity-80"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
