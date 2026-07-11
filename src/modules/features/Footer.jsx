import React from 'react'
import Image from 'next/image';
import {
  ArrowUpRight,
  Bell,
  Download,
  Heart,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import Link from 'next/link';
const bottomHighlights = [
  { icon: Zap, text: "Distraction Free Learning" },
  { icon: ShieldCheck, text: "Secure & Safe Platform" },
  { icon: Download, text: "Download & Study Offline" },
  { icon: Bell, text: "Smart Reminders & Notifications" },
  { icon: Trophy, text: "Built for Top Achievers" },
  { icon: Heart, text: "Loved by Thousands of Students" },
];
const appBadges = [
  { label: "Download on the", store: "App Store", image: "/apple logo.webp" },
  { label: "GET IT ON", store: "Google Play", image: "/playstore logo.png" },
];
const Footer = () => {
  return (
     <div className="relative mt-4">
            <div className="grid gap-2 rounded-[24px] border border-[#16325c] bg-[#040b17]/90 py-4 px-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {bottomHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.text} className="flex items-center gap-2  px-1 py-3">
                  <span className="flex h-11 w-11 items-center justify-center text-blue">
                    <Icon size={21} />
                  </span>
                  <p className="text-xs md:text-sm leading-5 text-white/84">{item.text}</p>
                </div>
              );
            })}
          </div>

            {/* <div className="rounded-[24px] border border-[#16325c] bg-[#040b17]/90 p-5">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/56">Coming Soon On</p>
              <div className="mt-5 grid gap-3">
                {appBadges.map((badge) => (
                  <div
                    key={badge.store}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-[#060d1a]/90 px-4 py-3 shadow-[0_14px_28px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                      <Image src={badge.image} alt={badge.store} width={64} height={64} className="h-auto w-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/60">{badge.label}</p>
                      <p className="text-xl font-semibold tracking-[-0.04em] text-white">{badge.store}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <div className="rounded-[24px] border border-[#16325c] bg-[linear-gradient(180deg,rgba(10,17,33,0.96),rgba(5,11,22,1))] p-5">
              <div className="mb-4 flex items-center justify-center gap-3 text-[#0b8dff]">
                <ArrowUpRight size={20} />
                <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#235cff,transparent)]" />
              </div>
              <p className="text-center text-[1.15rem] leading-8 text-white/92">
                World&apos;s best developers are building <span className="text-[#0b8dff]">ReadyMe</span> to deliver the ultimate learning
                experience.
              </p>
              <Link
                href="/pre-register"
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(90deg,#7a32ff_0%,#0b7bff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(23,92,255,0.35)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105"
              >
                Pre-Register Now
              </Link>
            </div> */}
          </div>
  )
}

export default Footer
