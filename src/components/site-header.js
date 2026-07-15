"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Compass,
  GraduationCap,
  Menu,
  Sparkles,
  Users,
  Video,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ColorButton from "@/components/ColorButton";

const navLinks = [
  { href: "/home", label: "Home", icon: Compass },
  { href: "/features", label: "Features", icon: Sparkles },
  { href: "/communities", label: "Communities", icon: Users },
  { href: "/struggle", label: "Struggle", icon: CircleHelp },
  { href: "/live-classes", label: "Live Classes", icon: Video },
  { href: "/how-it-works", label: "How It Works", icon: BookOpen },
];

const aboutLinks = [
  { href: "/about-company", label: "About Company", icon: Bell },
  { href: "/about-founder-and-ceo", label: "About Founder & CEO", icon: GraduationCap },
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
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#22406d] bg-[linear-gradient(180deg,rgba(11,20,40,0.92),rgba(7,15,28,0.98))] text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition duration-200 hover:border-[#2a5ca3] hover:bg-[#0c1730] lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-[65px] z-40 bg-[rgba(2,6,17,0.58)] backdrop-blur-md"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 top-full z-50 mx-auto w-[calc(100%-24px)] max-w-[460px]">
            <div className="mt-3 overflow-hidden rounded-[32px] border border-[#1d355d] bg-[linear-gradient(180deg,rgba(7,16,32,0.98),rgba(4,10,21,0.98))] shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
              <div className="border-b border-white/10 px-5 pb-5 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6ea8ff]">
                      ReadyMe Menu
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-white">
                      Explore ReadyMe
                    </p>
                    <p className="mt-1 max-w-[260px] text-sm leading-6 text-white/58">
                      A premium learning space for focused students.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10"
                    aria-label="Close navigation"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="max-h-[calc(100vh-180px)] overflow-y-auto px-5 pb-5 pt-3">
                <nav className="space-y-1.5">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    const Icon = link.icon;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between rounded-[20px] px-3 py-3.5 transition-all duration-200 ${
                          active ? "text-white" : "text-slate-200 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
                              active
                                ? "border-[#2a66c5] bg-[linear-gradient(180deg,rgba(17,81,170,0.38),rgba(8,29,66,0.9))] text-[#ffd24d]"
                                : "border-white/10 bg-white/[0.04] text-white/70 group-hover:border-[#23477d] group-hover:text-[#ffd24d]"
                            }`}
                          >
                            <Icon size={18} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="text-[1rem] font-semibold tracking-[-0.03em]">
                              {link.label}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {active && (
                            <span className="h-2 w-2 rounded-full bg-[#0B9DFF] shadow-[0_0_14px_rgba(11,157,255,0.9)]" />
                          )}

                          <ArrowRight
                            size={17}
                            className={`transition-transform duration-200 ${
                              active
                                ? "translate-x-0 text-[#7cb8ff]"
                                : "text-white/30 group-hover:translate-x-1 group-hover:text-white/70"
                            }`}
                          />
                        </div>
                      </Link>
                    );
                  })}

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setAboutOpen((value) => !value)}
                      className={`flex w-full items-center justify-between rounded-[20px] px-3 py-3.5 text-left transition-colors ${
                        isAboutActive ? "text-white" : "text-slate-200 hover:text-white"
                      }`}
                      aria-expanded={aboutOpen}
                      aria-controls="mobile-about-links"
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
                            isAboutActive
                              ? "border-[#2a66c5] bg-[linear-gradient(180deg,rgba(17,81,170,0.38),rgba(8,29,66,0.9))] text-[#ffd24d]"
                              : "border-white/10 bg-white/[0.04] text-white/70"
                          }`}
                        >
                          <Bell size={18} strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-[1rem] font-semibold tracking-[-0.03em]">
                            About
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {isAboutActive && (
                          <span className="h-2 w-2 rounded-full bg-[#0B9DFF] shadow-[0_0_14px_rgba(11,157,255,0.9)]" />
                        )}

                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {aboutOpen && (
                      <div id="mobile-about-links" className="space-y-1 pb-2 pl-12 pr-1 pt-1">
                        {aboutLinks.map((link) => {
                          const active = pathname === link.href;
                          const Icon = link.icon;

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors ${
                                active
                                  ? "bg-[rgba(11,123,255,0.12)] text-white"
                                  : "text-slate-300 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon size={16} className="text-[#ffd24d]" />
                                <span>{link.label}</span>
                              </div>
                              <ArrowRight size={15} className="text-white/35" />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </nav>

                <div className="mt-5 overflow-hidden rounded-[28px] border border-[#24467a] bg-[radial-gradient(circle_at_top_left,rgba(15,88,199,0.3),transparent_34%),linear-gradient(180deg,rgba(12,24,50,0.98),rgba(7,14,29,0.98))]">
                  <div className="px-4 pb-3 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd24d]">
                      Early Access
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white">
                      Pre-register with ReadyMe
                    </p>
                    <p className="mt-1 max-w-[240px] text-sm leading-6 text-white/58">
                      Join early and unlock the launch offer with the full learning experience.
                    </p>

                    <Link
                      href="/pre-register"
                      onClick={() => setOpen(false)}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6D28FF] to-[#0B7BFF] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(17,85,255,0.24)] transition hover:brightness-110"
                    >
                      <span>Pre-Register</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
