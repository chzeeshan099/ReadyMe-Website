import React from 'react'
import {
  Bell,
  Download,
  Heart,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
const bottomHighlights = [
  { icon: Zap, text: "Distraction Free Learning" },
  { icon: ShieldCheck, text: "Secure & Safe Platform" },
  { icon: Download, text: "Download & Study Offline" },
  { icon: Bell, text: "Smart Reminders & Notifications" },
  { icon: Trophy, text: "Built for Top Achievers" },
  { icon: Heart, text: "Loved by Thousands of Students" },
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

          </div>
  )
}

export default Footer
