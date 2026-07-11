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
import { LiaFileAltSolid, LiaUserAstronautSolid } from 'react-icons/lia';
import { FiSearch } from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { PiDevicesLight, PiRobot } from 'react-icons/pi';
import { LuFilePen } from 'react-icons/lu';
import { TbTargetArrow } from 'react-icons/tb';
import Image from 'next/image';
const featureCards = [
  {
    title: "20,000+ Notes",
    description: "Curated, exam-focused notes for every topic and subject.",
    accent: "text-blue",
    border: "border-blue",
    glow: "shadow-[0_0_28px_rgba(17,128,255,0.16)]",
    icon: LiaFileAltSolid ,
    preview: (
      <div className="mt-6">
      <Image
        src="/book.png"
        alt="ReadyMe feature book"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain"
    />
      </div>
    ),
  },
  {
    title: "850,000+ Topical Questions",
    description: "Practice unlimited topical questions with detailed solutions.",
    accent: "text-purple",
    border: "border-purple",
    glow: "shadow-[0_0_28px_rgba(155,69,255,0.14)]",
    icon: FiSearch ,
    preview: (
        <div className="mt-0">
      <Image
        src="/questions.png"
        alt="ReadyMe feature question"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain"
    />
      </div>
    ),
  },
  {
    title: "40,000+ Past Papers",
    description: "Access past papers from different years and exam boards.",
    accent: "text-blue",
    border: "border-blue",
    glow: "shadow-[0_0_28px_rgba(17,128,255,0.16)]",
    icon: IoNewspaperOutline ,
    preview: (
    <div className="mt-0">
      <Image
        src="/paper.png"
        alt="ReadyMe feature question"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain"
    />
      </div>
    ),
  },
  {
    title: "Live Classes",
    subtitle: "from 10-30+ Years Experienced Teachers",
    description: "Learn live from the best. Ask questions. Get clarity. Boost confidence.",
    accent: "text-purple",
    border: "border-purple",
    glow: "shadow-[0_0_28px_rgba(185,77,255,0.14)]",
    icon: LiaUserAstronautSolid ,
    preview: (
       <div className="mt-0">
      <Image
        src="/live session1.png"
        alt="ReadyMe feature live session"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain"
    />
      </div>
    ),
  },
  {
    title: "AI Study Assistant",
    description: "Get instant help with explanations, summaries, and study guidance.",
    accent: "text-blue",
    border: "border-blue",
    glow: "shadow-[0_0_28px_rgba(29,141,255,0.12)]",
    icon: PiRobot ,
    preview: (
      <div className="mt-6 p-4">
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
    accent: "text-purple",
    border: "border-purple",
    glow: "shadow-[0_0_28px_rgba(185,77,255,0.14)]",
    icon: NotebookPen,
    preview: (
     <div className="mt-6 flex min-h-[105px] w-full items-center justify-between rounded-[15px] border border-[#17345c] bg-[linear-gradient(135deg,#07101f_0%,#071426_55%,#06101f_100%)] px-4 py-3 shadow-[inset_0_0_20px_rgba(0,35,75,0.18)]">
  {/* Left Content */}
  <div className="flex flex-col">
    <p className="text-[17px] font-medium leading-[22px] text-[#e4e8f5]">
      Mock Test
    </p>

    <p className="text-[14px] font-normal leading-[20px] text-[#929cb3]">
      Physics
    </p>

    <p className="mt-2 text-[14px] font-medium leading-[20px] text-[#08d9bd]">
      Great Performance!
    </p>
  </div>

  {/* Progress Circle */}
  <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#12dfbd_0deg_306deg,#17404c_306deg_360deg)]">
    {/* Inner Circle */}
    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#071426]">
      <span className="text-[18px] font-semibold text-[#16dec0]">
        85%
      </span>
    </div>
  </div>
</div>
    ),
  },
  {
    title: "Smart Notes",
    description: "Make smart, beautiful notes. Organize, revise, and optimize learning.",
    accent: "text-blue",
    border: "border-blue",
    glow: "shadow-[0_0_28px_rgba(40,144,255,0.12)]",
    icon: LuFilePen ,
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
    accent: "text-purple",
    border: "border-purple",
    glow: "shadow-[0_0_28px_rgba(161,73,255,0.14)]",
    icon: Sparkles,
    preview: (
      <div className="mt-6 p-4">
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
    accent: "text-blue",
    border: "border-blue",
    glow: "shadow-[0_0_28px_rgba(46,147,255,0.12)]",
    icon: Users,
    preview: (
      <div className="mt-6">
      <Image
        src="/community6.png"
        alt="ReadyMe feature book"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain border border-blue-500 rounded-xl"
    />
      </div>
    ),
  },
  {
    title: "Topical & Past Paper Practice",
    description: "Filter by topic, year, board and level. Practice your way.",
    accent: "text-purple",
    border: "border-purple",
    glow: "shadow-[0_0_28px_rgba(167,77,255,0.14)]",
    icon: TbTargetArrow ,
    preview: (
     <div className="mt-2 rounded-[18px] border border-white/8 bg-[#0a1528] p-4">
  {[
    ["Topic", "Trigonometry"],
    ["Year", "2024"],
  ].map(([label, value], index) => (
    <div
      key={label}
      className={`flex items-center justify-between ${
        index === 0
          ? "mb-2 border-b border-white/10 pb-3"
          : ""
      }`}
    >
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
    accent: "text-blue",
    border: "border-blue",
    glow: "shadow-[0_0_28px_rgba(38,143,255,0.12)]",
    icon: ChartNoAxesCombined,
    preview: (
      <div className="mt-6">
      <Image
        src="/chart.png"
        alt="ReadyMe feature book"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain border border-blue-500 rounded-xl"
    />
      </div>
    ),
  },
  {
    title: "Multi-Device Sync",
    description: "Study anywhere, anytime. Your progress, always in sync.",
    accent: "text-purple",
    border: "border-purple",
    glow: "shadow-[0_0_28px_rgba(159,82,255,0.14)]",
    icon: PiDevicesLight ,
    preview: (
      <div className="mt-6">
      <Image
        src="/multi device.png"
        alt="ReadyMe feature book"
        width={820}
        height={920}
        priority
        className="h-auto w-full object-contain border border-blue-500 rounded-xl"
    />
      </div>
    ),
  },
 
];
const Cards = () => {
  return (
     <div className="relative grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`min-h-[256px] rounded-[24px] border bg-[linear-gradient(180deg,rgba(8,16,31,0.96),rgba(4,9,18,0.98))] p-5 ${card.border} ${card.glow}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center ${card.accent}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className={`mt-5 text-[1.3rem] font-semibold leading-7 ${card.accent}`}>{card.title}</h3>
                  {card.subtitle ? <p className="text-[0.95rem] text-white">{card.subtitle}</p> : null}
                  <p className="mt-2 text-[0.95rem] leading-6 text-[#c3cee2c0]">{card.description}</p>
                  {card.preview}
                </div>
              );
            })}
          </div>
  )
}

export default Cards
