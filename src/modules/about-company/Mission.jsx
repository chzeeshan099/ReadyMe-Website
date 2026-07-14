import React from "react";
import { Eye, Send } from "lucide-react";

const infoCards = [
  {
    title: "Our Mission",
    description:
      "To make world-class education accessible to every student, everywhere and empower them to achieve their dreams.",
    titleClassName: "text-[#2e7bff]",
    iconClassName:
      "border-[#1e62ff] text-[#3a86ff] shadow-[0_0_24px_rgba(36,99,255,0.38),inset_0_0_20px_rgba(15,64,205,0.22)]",
    Icon: Send,
  },
  {
    title: "Our Vision",
    description:
      "To become the world's most trusted learning platform, built by students, for students.",
    titleClassName: "text-purple",
    iconClassName:
      "border-purple text-purple shadow-[0_0_24px_rgba(139,50,255,0.4),inset_0_0_20px_rgba(111,33,218,0.22)]",
    Icon: Eye,
  },
];

const Mission = () => {
  return (
      <div className="overflow-hidden rounded-[12px] border border-blue bg-[linear-gradient(180deg,#07101e_0%,#050b17_100%)] px-5 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(104,146,255,0.08)] sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 md:gap-0">
          {infoCards.map((item, index) => {
            const Icon = item.Icon;

            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  index === 1 ? "md:border-l md:border-blue md:pl-8" : "pe-3"
 }`}
              >
                <div
                  className={`flex h-[30px] sm:h-[48px] w-[30px] sm:w-[48px] shrink-0 items-center justify-center rounded-full border bg-[radial-gradient(circle_at_center,rgba(19,28,58,0.9)_0%,rgba(7,14,28,0.98)_72%)] ${item.iconClassName}`}
                >
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>

                <div className="pe-2">
                  <h3 className={`text-[1.35rem] font-medium leading-none tracking-[-0.03em] ${item.titleClassName}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[0.98rem] leading-[1.55] text-textWhiteLight">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Mission;
