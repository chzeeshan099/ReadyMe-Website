import React from "react";
import {
  BrainCircuit,
  Crown,
  FileText,
  Flame,
  GraduationCap,
  MessageSquareText,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import Image from "next/image";

const quickStats = [
  { icon: Zap, value: "2", label: "DAY STREAK" },
  { icon: Target, value: "78%", label: "WEEKLY PROGRESS" },
  { icon: Trophy, value: "Top 5%", label: "GLOBAL RANK" },
  { icon: Flame, value: "351", label: "DAYS TO EXAM" },
];

const featureCards = [
  { icon: GraduationCap, value: "EXPERT FACULTY", label: "10-30+ YEARS" },
  { icon: BrainCircuit, value: "AI POWERED", label: "STUDY TOOLS" },
  { icon: FileText, value: "40,000+", label: "PAST PAPERS" },
  { icon: Target, value: "100,000+", label: "TOPIC QUESTIONS" },
  { icon: MessageSquareText, value: "20,000+", label: "REVISION NOTES" },
];

const badgeCards = [
  {
    icon: Crown,
    title: "CHAIRMAN OF",
    emphasis: "BILAWAL",
    subtitle: "ARAIN GROUP",
  },
  {
    icon: Sparkles,
    title: "CEO & FOUNDER OF",
    emphasis: "READYME",
    subtitle: "",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden  px-4 py-4 sm:px-5  lg:px-7 lg:py-6">

      <div className="relative z-10 flex flex-col gap-4">

        <div className="grid gap-6 px-2 pb-2 pt-3 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:px-6 ">
          <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#0d6efd] sm:text-base">
              Tuesday 23 June
            </p>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white">
              Welcome back, Muhammad.
            </h1>
            <p className="mt-5 max-w-105 text-lg leading-8 text-slate-300 sm:text-[22px] sm:leading-9">
              Your journey to academic excellence starts with focus and consistency.
            </p>

            <div className="mt-8 flex max-w-[430px] items-start gap-4 rounded-[24px] border border-sky-500/25 bg-[#071120]/88 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
              <div className="flex h-12 sm:h-16 w-12 sm:w-16 shrink-0 items-center justify-center rounded-[22px] border border-sky-400/30 bg-[#0b60ff]/10 text-[#0d6efd] shadow-[0_0_28px_rgba(13,110,253,0.24)]">
                <Sparkles size={28} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm sm:text-base text-slate-100 ">Stay consistent, stay ahead.</p>
                <p className="mt-1 text-xl sm:text-3xl font-medium leading-tight tracking-[-0.04em] text-[#0d6efd]">
                  We&apos;re here to help you win.
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-300 ">ReadyMe. Built for Top Achievers.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-end justify-center overflow-hidden">

            <Image
              src="/owner%20images/dashboard1.png"
              alt="Bilawal Arain portrait"
              width={300}
              height={300}
              className="h-auto w-full object-contain object-bottom"
            />

            {/* <div className="absolute bottom-6 right-3 z-20 max-w-[310px] text-right sm:right-6 sm:max-w-[360px] lg:bottom-10 lg:right-8">
              <p className="font-['Brush_Script_MT','Segoe_Script',cursive] text-[36px] leading-none text-[#0d6efd] sm:text-[56px]">
                Bilawal Arain
              </p>
              <p className="mt-2 text-[28px] font-medium tracking-[-0.04em] text-white sm:text-[38px]">
                Bilawal Arain
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#0d6efd] sm:text-base">
                Chairman of Bilawal Arain Group
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-200 sm:text-base">
                CEO & Founder of ReadyMe
              </p>
            </div> */}
          </div>
        </div>











        <div className="grid gap-3 rounded-[24px] border border-sky-500/20 bg-[#040b18]/88 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {quickStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-[20px] border border-sky-500/10 bg-[linear-gradient(180deg,rgba(8,18,36,0.52),rgba(4,10,20,0.86))] px-4 py-4 lg:border-0 lg:bg-transparent lg:px-0"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0b60ff]/10 text-[#0d6efd] shadow-[inset_0_0_0_1px_rgba(13,110,253,0.15)]">
                <Icon size={28} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[20px] font-semibold text-white sm:text-[24px]">{value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300 sm:text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 rounded-[24px] border border-sky-500/20 bg-[#040b18]/88 p-4 lg:grid-cols-[1.0fr_2.2fr] lg:p-6">
          <div className="rounded-[22px] border border-sky-500/10 bg-[linear-gradient(180deg,rgba(7,16,32,0.8),rgba(4,10,20,0.96))] px-5 py-6 lg:px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0d6efd]">
              Founder&apos;s Message
            </p>
            <div className="mt-6 flex gap-4">
              <p className="text-6xl leading-none text-[#0d6efd]">&ldquo;</p>
              <div className="pt-2">
                <p className="text-[28px] leading-tight tracking-[-0.04em] text-white">
                  This is not just an app.
                </p>
                <p className="mt-3 text-[26px] leading-tight tracking-[-0.04em] text-[#0d6efd]">
                  It&apos;s the future of education.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {featureCards.map(({ icon: Icon, value, label }) => (
              <div
                key={`${value}-${label}`}
                className="rounded-[22px] border border-sky-500/20 bg-[linear-gradient(180deg,rgba(7,16,32,0.76),rgba(4,10,20,0.98))] px-2 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#0b60ff]/10 text-[#0d6efd]">
                  <Icon size={28} strokeWidth={2.1} />
                </div>
                <p className="mt-5 text-xs font-medium text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-sky-500/20 bg-[#040b18]/92 px-5 py-6 lg:px-8 lg:py-7">
          {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_20%_100%,rgba(13,110,253,0.40),transparent_26%),radial-gradient(circle_at_50%_110%,rgba(13,110,253,0.22),transparent_22%),radial-gradient(circle_at_80%_100%,rgba(13,110,253,0.34),transparent_24%)] opacity-90" /> */}
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-2xl font-semibold uppercase tracking-[-0.03em] text-[#0d6efd]">
                Ready to dominate?
              </p>
              <p className="mt-2 text-lg text-slate-200">
                Choose your focus and let&apos;s achieve greatness.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex min-h-[72px] items-center justify-center rounded-[20px] bg-[#1a6cff] px-8 text-xl font-medium text-white shadow-[0_20px_45px_rgba(13,110,253,0.32)] transition hover:bg-[#2c79ff] sm:min-w-[320px] sm:text-[26px]"
            >
              Plan Your Day <span className="ml-3 text-3xl leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
