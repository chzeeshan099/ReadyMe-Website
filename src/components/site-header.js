"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";
import { useTheme } from "@/components/theme-provider";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <header className="theme-header sticky top-0 z-50 backdrop-blur-xl">
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/readyme-logo.png" alt="Ready Me" className="h-10 w-10 rounded-xl object-cover" />
          <div>
            <div className="theme-accent text-sm uppercase tracking-[0.35em]">Ready Me</div>
            <div className="theme-muted text-xs">Future of education</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active ? "theme-button-primary" : "theme-button-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle rounded-full p-2 transition"
            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="theme-toggle rounded-full p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="theme-surface shell mb-4 rounded-3xl p-3 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm ${
                  active ? "theme-button-primary" : "theme-button-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}

