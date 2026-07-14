import React from "react";
import {
  Brain
} from "lucide-react";
import { LuBookOpenText, LuNotebookPen } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import { MdImportantDevices } from "react-icons/md";

const EveryThingYouNeedCards = [
  {
    icon: LuBookOpenText ,
    color:'text-blue',
    title: "Study Resources",
    description:
      "High quality notes, past papers, topical questions and more.",
  },
  {
    icon: Brain ,
    color:'text-purple',
    title: "AI Powered Tools",
    description:
      "AI Assistant, AI Mock Maker, Smart Notes and much more.",
  },
  {
    icon: BsCameraVideo ,
    color:'text-pink-500',
    title: "Live Classes",
    description:
      "Learn live from teachers with 10 to 30+ years of experience.",
  },
  {
    icon: LuNotebookPen ,
    color:'text-green-500',
    title: "Mock & Test",
    description:
      "Create, attempt and analyze mocks in real exam style.",
  },
  {
    icon: TbUsersGroup,
    color:'text-orange-500',
    title: "Communities",
    description:
      "Subject wise student communities to learn, share and grow.",
  },
  {
    icon: MdImportantDevices  ,
    color:'text-blue',
    title: "All on Our Platform",
    description:
      "No external links. No distractions. Everything inside.",
  },
];

export default function EveryThingYouNeed() {
  return (
    <div className="mt-4 mb-4 p-3 sm:p-4 lg:p-5">
      <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-4">EveryThing You Need. <span className="text-blue">All In One Place.</span></h1>
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {EveryThingYouNeedCards.map((card, index) => {
          const Icon = card.icon;
          const showDivider = index !== EveryThingYouNeedCards.length - 1;

          return (
            <div
              key={card.title}
              className={`group h-full flex flex-col items-center justify-between rounded-[22px] px-3 sm:px-4  xl:px-2.5 py-4  xl:py-3 text-center border border-blue bg-[linear-gradient(180deg,rgba(5,11,24,0.96),rgba(3,8,18,0.98))] shadow-[0_22px_54px_rgba(0,0,0,0.3)]
              }`}
            >
            <div>
              <div className="flex justify-center">
                <Icon className={`h-10 w-10 ${card.color} custom-hover`}  />
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-semibold uppercase leading-8 text-white ">
                {card.title}
              </h3>

              <p className="mx-auto mt-2 text-[0.94rem] text-textWhiteLight">
                {card.description}
              </p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
