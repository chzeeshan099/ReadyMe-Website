"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ColorButton from "@/components/ColorButton";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/communities", label: "Communities" },
  { href: "/struggle", label: "Struggle" },
  { href: "/live-classes", label: "Live Classes" },
  { href: "/how-it-works", label: "How It Works" },
];

const aboutLinks = [
  { href: "/about-company", label: "About Company" },
  { href: "/about-founder-and-ceo", label: "About Founder & CEO" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isAboutActive = aboutLinks.some((link) => pathname === link.href);

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#020714]/90 backdrop-blur-xl ">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1500px]">
        <div className="flex min-h-[65px] items-center justify-between gap-4 lg:min-h-24 md:gap-3">
          <Link
            href="/home"
            className="inline-flex shrink-0 items-baseline  text-2xl leading-none font-extrabold tracking-[-0.04em] "
          >
            <span className="text-white">Ready</span>
            <span className="text-[#0B7BFF]">Me</span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex lg:gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2.5 text-sm !font-normal whitespace-nowrap transition-colors duration-200 lg:text-base ${
                    active
                      ? "text-[#0B9DFF]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}

                  {active && (
                    <span className="absolute right-0 -bottom-1 left-0 h-[3px] rounded-full bg-[#0B9DFF] shadow-[0_0_18px_rgba(11,157,255,0.45)]" />
                  )}
                </Link>
              );
            })}

            <div className="group relative">
              <button
                type="button"
                className={`relative flex items-center gap-1 py-2.5 text-sm !font-normal whitespace-nowrap transition-colors duration-200 lg:text-base ${
                  isAboutActive
                    ? "text-[#0B9DFF]"
                    : "text-white/85 group-hover:text-white"
                }`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />

                {isAboutActive && (
                  <span className="absolute right-0 -bottom-1 left-0 h-[3px] rounded-full bg-[#0B9DFF] shadow-[0_0_18px_rgba(11,157,255,0.45)]" />
                )}
              </button>

              <div className="absolute left-1/2 top-full h-4 w-56 -translate-x-1/2" />

              <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.25rem)] z-30 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#081226]/95 p-2 opacity-0 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                {aboutLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                        active
                          ? "bg-[#0B7BFF] text-white"
                          : "text-slate-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <ColorButton href="/pre-register">
              <span className="text-sm">Pre-Register Now</span>
              <ArrowRight size={18} />
            </ColorButton>
           
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mb-4 w-[calc(100%-32px)] max-w-[1180px] rounded-3xl border border-white/10 bg-[#081226]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-normal transition-colors ${
                    active
                      ? "bg-[#0B7BFF] text-white"
                      : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => setAboutOpen((value) => !value)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-normal transition-colors ${
                  isAboutActive
                    ? "bg-[#0B7BFF] text-white"
                    : "text-slate-200 hover:bg-white/10"
                }`}
                aria-expanded={aboutOpen}
                aria-controls="mobile-about-links"
              >
                <span>About</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div id="mobile-about-links" className="space-y-2 px-3 pb-3">
                  {aboutLinks.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                          active
                            ? "bg-[#0B7BFF] text-white"
                            : "border border-white/10 bg-[#0d1830] text-slate-200 hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          <Link
            href="/pre-register"
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#6D28FF] to-[#0B7BFF] px-5 py-4 text-sm font-bold text-white shadow-[0_18px_38px_rgba(17,85,255,0.24)] transition hover:brightness-105"
          >
            <span>Pre-Register Now</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </header>
  );
}
