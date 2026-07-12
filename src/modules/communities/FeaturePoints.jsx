import React from 'react'
import {
  ChartNoAxesCombined,
  MessageSquareText,
  Users,
} from "lucide-react";
const featurePoints = [
  {
    icon: MessageSquareText,
    title: "Subject-wise Groups",
    text: "Connect with students who share your subjects and goals.",
  },
  {
    icon: Users,
    title: "Share & Learn",
    text: "Ask questions, share notes, and help others understand better.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Grow Together",
    text: "Learn from toppers, stay motivated, and achieve more together.",
  },
];
const FeaturePoints = () => {
  return (
   <>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featurePoints?.map((item) => {
                  const Icon = item?.icon;

                  return (
                    <div key={item?.title} className="group flex items-start gap-4">
                      <div className="flex  h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[18px] border border-blue bg-[linear-gradient(180deg,#08152a_0%,#061122_100%)] text-blue shadow-[0_16px_34px_rgba(0,0,0,0.24)]">
                        <Icon size={28} strokeWidth={1.8} className="custom-hover"/>
                      </div>
                      <div>
                        <h2 className="text-[1.2rem] font-semibold text-blue">{item?.title}</h2>
                        <p className="mt-1 text-sm sm:text-[1rem] leading-6 text-[#bcc6d8]">{item?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
   </>
  )
}

export default FeaturePoints
