"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { href: "/dashboard", label: "Home" },
  { href: "/dashboard#about", label: "About" },
  { href: "/dashboard#features", label: "Features" },
  { href: "/dashboard#communities", label: "Communities" },
  { href: "/dashboard#how-it-works", label: "How It Works" },
  { href: "/dashboard#founder", label: "About Founder & CEO" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <header className="site-header-wrap sticky top-0 z-50 backdrop-blur-xl">
      <div className="shell">
        <div className="site-header-row">
          <Link href="/" className="site-brand">
            <span className="site-brand-ready">Ready</span>
            <span className="site-brand-me">Me</span>
          </Link>

          <nav className="site-nav hidden md:flex">
            {navLinks.map((link) => {
              const activePath = link.href.split("#")[0];
              const active = pathname === activePath && link.label === "Home";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`site-nav-link ${active ? "site-nav-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle rounded-full p-2 transition"
              aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link href="/dashboard#pre-register" className="site-cta">
              <span>Pre-Register Now</span>
              <span aria-hidden="true" className="site-cta-arrow">{">"}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
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
              className="theme-toggle rounded-full p-2"
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="theme-surface shell mb-4 rounded-3xl p-3 md:hidden">
          {navLinks.map((link) => {
            const activePath = link.href.split("#")[0];
            const active = pathname === activePath && link.label === "Home";
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

          <Link
            href="/dashboard#pre-register"
            onClick={() => setOpen(false)}
            className="site-cta mt-3 flex w-full items-center justify-center"
          >
            <span>Pre-Register Now</span>
            <span aria-hidden="true" className="site-cta-arrow">{">"}</span>
          </Link>
        </div>
      ) : null}
    </header>
  );
}
