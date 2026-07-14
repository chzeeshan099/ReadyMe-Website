import React from 'react'
import {
  CalendarDays,
  CloudCog,
  Video,
} from "lucide-react";
import { PiDevicesLight } from 'react-icons/pi';
const liveLearningCards = [
  {
    icon: Video,
    accent: "text-purple",
    title: "Live Interactive Classes",
    description: "Join live sessions, ask questions, and get real-time answers.",
  },
  {
    icon: CloudCog,
    accent: "text-blue",
    title: "Recorded Lectures",
    description: "Missed a class? Watch anytime, anywhere.",
  },
  {
    icon: CalendarDays,
    accent: "text-purple",
    title: "Flexible Schedule",
    description: "Multiple time slots to fit your study routine.",
  },
  {
    icon: PiDevicesLight,
    accent: "text-blue",
    title: "All on Our Platform",
    description: "No Zoom. No links. Everything inside the ReadyMe app.",
  },
];
const Features = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {liveLearningCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group rounded-[22px] border border-lightBlue bg-[linear-gradient(180deg,#071120_0%,#040b16_100%)] px-6 py-7 shadow-[0_18px_38px_rgba(0,0,0,0.24)]"
            >
              <div className={`custom-hover flex justify-center ${card.accent}`}>
                <Icon size={48} strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-center text-[1.2rem] font-medium leading-9 text-white sm:text-[1.35rem]">
                {card.title}
              </h3>
              <p className="mt-3 text-center text-[0.98rem] text-textWhiteLight sm:text-[1.05rem]">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Features
