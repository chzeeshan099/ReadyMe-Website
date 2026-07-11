import React from 'react'
import {
  Bell,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronDown,
  CircleCheckBig,
  FileText,
  LaptopMinimalCheck,
  MessageCircleMore,
  NotebookPen,
  ScanSearch,
  Sparkles,
  Users,
} from "lucide-react";
const featureCards = [
  {
    title: "20,000+ Notes",
    description: "Curated, exam-focused notes for every topic and subject.",
    accent: "text-[#1180ff]",
    border: "border-[#1180ff]/30",
    glow: "shadow-[0_0_28px_rgba(17,128,255,0.16)]",
    icon: FileText,
    preview: (
      <div className="mt-6 flex h-[118px] items-end justify-center rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(17,128,255,0.15),transparent_60%)]">
        <div className="relative h-[82px] w-[134px] rounded-[18px] border border-[#155ee9]/35 bg-[#071328] before:absolute before:left-2 before:top-6 before:h-[54px] before:w-[54px] before:-rotate-[24deg] before:rounded-[14px] before:border before:border-[#156dff]/40 before:bg-[#071635] before:content-[''] after:absolute after:right-2 after:top-6 after:h-[54px] after:w-[54px] after:rotate-[24deg] after:rounded-[14px] after:border after:border-[#156dff]/40 after:bg-[#071635] after:content-['']" />
      </div>
    ),
  },
  {
    title: "850,000+ Topical Questions",
    description: "Practice unlimited topical questions with detailed solutions.",
    accent: "text-[#9b45ff]",
    border: "border-[#9b45ff]/30",
    glow: "shadow-[0_0_28px_rgba(155,69,255,0.14)]",
    icon: ScanSearch,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#071328] p-4">
        {["A", "B", "C", "D"].map((item) => (
          <div key={item} className="mb-2 flex items-center gap-3 last:mb-0">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#28406f] text-xs text-[#6687c7]">
              {item}
            </span>
            <span className="h-2 flex-1 rounded-full bg-[#0e1b35]" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "40,000+ Past Papers",
    description: "Access past papers from different years and exam boards.",
    accent: "text-[#1180ff]",
    border: "border-[#1180ff]/30",
    glow: "shadow-[0_0_28px_rgba(17,128,255,0.16)]",
    icon: BriefcaseBusiness,
    preview: (
      <div className="mt-6 flex h-[118px] items-end justify-center">
        <div className="relative h-[86px] w-[132px] rounded-[22px] border border-[#156dff]/30 bg-[#071328]">
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className="absolute bottom-5 h-[56px] w-[28px] rounded-[8px] border border-[#95bbff]/18 bg-[linear-gradient(180deg,#7eb0ff_0%,#2b4f88_100%)]"
              style={{ left: `${18 + item * 20}px`, transform: `rotate(${item % 2 === 0 ? -12 : 10}deg)` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Live Classes",
    subtitle: "from 10-30+ Years Experienced Teachers",
    description: "Learn live from the best. Ask questions. Get clarity. Boost confidence.",
    accent: "text-[#b94dff]",
    border: "border-[#b94dff]/30",
    glow: "shadow-[0_0_28px_rgba(185,77,255,0.14)]",
    icon: Users,
    preview: (
      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="flex -space-x-2">
          {[0, 1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e2a45] bg-[linear-gradient(180deg,#2a2f3c_0%,#10192f_100%)] text-[10px] font-semibold text-white/80"
            >
              RM
            </div>
          ))}
        </div>
        <span className="rounded-full bg-[#b94dff] px-3 py-1 text-xs font-semibold text-white">LIVE</span>
      </div>
    ),
  },
  {
    title: "AI Study Assistant",
    description: "Get instant help with explanations, summaries, and study guidance.",
    accent: "text-[#1d8dff]",
    border: "border-[#1d8dff]/30",
    glow: "shadow-[0_0_28px_rgba(29,141,255,0.12)]",
    icon: Bot,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <div className="rounded-[14px] bg-[#101c31] px-4 py-3 text-sm text-white/86">
          Explain photosynthesis in simple words.
        </div>
        <div className="mt-3 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
      </div>
    ),
  },
  {
    title: "AI Mock Maker & Test Maker",
    description: "Create custom mocks. Real-time checking, smart evaluation.",
    accent: "text-[#b94dff]",
    border: "border-[#b94dff]/30",
    glow: "shadow-[0_0_28px_rgba(185,77,255,0.14)]",
    icon: NotebookPen,
    preview: (
      <div className="mt-6 flex items-end gap-4 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <div className="flex-1">
          <p className="text-lg text-white">Mock Test</p>
          <p className="text-sm text-white/56">Physics</p>
          <p className="mt-2 text-sm font-medium text-[#20e4bf]">Great Performance!</p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#20e4bf]/85 text-lg font-bold text-[#20e4bf]">
          85%
        </div>
      </div>
    ),
  },
  {
    title: "Smart Notes",
    description: "Make smart, beautiful notes. Organize, revise, and optimize learning.",
    accent: "text-[#2890ff]",
    border: "border-[#2890ff]/30",
    glow: "shadow-[0_0_28px_rgba(40,144,255,0.12)]",
    icon: MessageCircleMore,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <p className="text-sm font-medium text-white">My Notes</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#10213f] px-3 py-1 text-xs text-white/80">Physics</span>
          <span className="rounded-full bg-[#10213f] px-3 py-1 text-xs text-[#688dff]">Chapter 3</span>
        </div>
        <p className="mt-3 text-sm text-white/72">Laws of Motion...</p>
      </div>
    ),
  },
  {
    title: "ReadyMeGPT",
    description: "Your personal AI study partner. Ask anything, learn everything.",
    accent: "text-[#a149ff]",
    border: "border-[#a149ff]/30",
    glow: "shadow-[0_0_28px_rgba(161,73,255,0.14)]",
    icon: Sparkles,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <p className="rounded-[14px] bg-[#101c31] px-4 py-3 text-sm text-white/86">
          Give me 5 tips to score A* in IGCSE Maths.
        </p>
        <div className="mt-3 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
      </div>
    ),
  },
  {
    title: "Subject-wise Communities",
    description: "Connect with students worldwide. Share, learn, grow together.",
    accent: "text-[#2e93ff]",
    border: "border-[#2e93ff]/30",
    glow: "shadow-[0_0_28px_rgba(46,147,255,0.12)]",
    icon: Users,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <p className="text-sm text-white/72">IGCSE Mathematics</p>
        <p className="mt-1 text-xs text-white/50">12.5K Members</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-8 w-8 rounded-full border border-[#1e2a45] bg-[linear-gradient(180deg,#efc1a2_0%,#9f5d47_100%)]"
              />
            ))}
          </div>
          <span className="text-xl text-white/85">+12.5K</span>
        </div>
      </div>
    ),
  },
  {
    title: "Topical & Past Paper Practice",
    description: "Filter by topic, year, board and level. Practice your way.",
    accent: "text-[#a74dff]",
    border: "border-[#a74dff]/30",
    glow: "shadow-[0_0_28px_rgba(167,77,255,0.14)]",
    icon: CircleCheckBig,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        {[
          ["Topic", "Trigonometry"],
          ["Year", "2024"],
        ].map(([label, value]) => (
          <div key={label} className="mb-3 flex items-center justify-between last:mb-0">
            <div>
              <p className="text-xs text-white/45">{label}</p>
              <p className="text-sm text-white/88">{value}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-white/55" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Progress Tracker",
    description: "Track your progress, analyze performance, and stay ahead.",
    accent: "text-[#268fff]",
    border: "border-[#268fff]/30",
    glow: "shadow-[0_0_28px_rgba(38,143,255,0.12)]",
    icon: ChartNoAxesCombined,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <p className="text-xs text-white/45">This Week</p>
        <p className="text-2xl font-bold text-[#0fa3ff]">78%</p>
        <div className="mt-4 flex h-16 items-end gap-2">
          {[18, 24, 36, 28, 22, 39, 34, 52].map((height) => (
            <span
              key={height}
              className="flex-1 rounded-full bg-[linear-gradient(180deg,rgba(15,163,255,0.1),#0f7dff)]"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Multi-Device Sync",
    description: "Study anywhere, anytime. Your progress, always in sync.",
    accent: "text-[#9f52ff]",
    border: "border-[#9f52ff]/30",
    glow: "shadow-[0_0_28px_rgba(159,82,255,0.14)]",
    icon: LaptopMinimalCheck,
    preview: (
      <div className="mt-6 flex items-end justify-center gap-3 rounded-[18px] bg-[radial-gradient(circle_at_center,rgba(21,109,255,0.1),transparent_70%)] py-3">
        <div className="h-10 w-8 rounded-[8px] border border-[#205eff]/35 bg-[#08152b]" />
        <div className="flex h-14 w-20 items-end justify-center rounded-t-[10px] border border-[#205eff]/35 bg-[#08152b] pb-1">
          <div className="h-1.5 w-10 rounded-full bg-[#175cff]" />
        </div>
        <div className="h-8 w-8 rounded-full border border-[#205eff]/35 bg-[#08152b]" />
      </div>
    ),
  },
  {
    title: "Exam Planner",
    description: "Plan revision smarter with structured goals, schedules, and daily targets.",
    accent: "text-[#1f8fff]",
    border: "border-[#1f8fff]/30",
    glow: "shadow-[0_0_28px_rgba(31,143,255,0.12)]",
    icon: Bell,
    preview: (
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <p className="text-sm font-medium text-white">Today&apos;s Plan</p>
          <span className="rounded-full bg-[#10335d] px-2.5 py-1 text-[11px] text-[#66b6ff]">3 Tasks</span>
        </div>
        <div className="mt-3 space-y-2">
          {["Math Revision", "Past Paper", "Mock Review"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-white/78">
              <span className="h-2 w-2 rounded-full bg-[#1f8fff]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];
const Cards = () => {
  return (
     <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`min-h-[256px] rounded-[24px] border bg-[linear-gradient(180deg,rgba(8,16,31,0.96),rgba(4,9,18,0.98))] p-5 ${card.border} ${card.glow}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#091427] ${card.accent}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`mt-5 text-[1.05rem] font-semibold leading-7 ${card.accent}`}>{card.title}</h3>
                  {card.subtitle ? <p className="text-[0.95rem] text-white">{card.subtitle}</p> : null}
                  <p className="mt-2 text-[0.95rem] leading-8 text-[#c3cee2]">{card.description}</p>
                  {card.preview}
                </div>
              );
            })}
          </div>
  )
}

export default Cards
