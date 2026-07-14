import React from "react";
import { TbUsersGroup } from "react-icons/tb";
import { LuBookOpenText } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";

const Cards = [
  {
    icon: TbUsersGroup  ,
    value: "50,000+",
    title: "Students",
    description: "Trust ReadyMe",
  },
  {
    icon: LuBookOpenText ,
    value: "20,000+",
    title: "Notes",
    description: "Exam Focused",
  },
  {
    icon: FaRegFileAlt  ,
    value: "40,000+",
    title: "Past Papers",
    description: "All Variants",
  },
  {
    icon: BsQuestionCircle  ,
    value: "850,000+",
    title: "Topical Questions",
    description: "With Solutions",
  },
];

export default function Card() {
  return (
    <div className="lg:inline-block mt-4 mb-4 rounded-[26px] border border-blue bg-[linear-gradient(180deg,rgba(5,11,24,0.96),rgba(3,8,18,0.98))] p-3 shadow-[0_22px_54px_rgba(0,0,0,0.3)] sm:p-4 lg:p-5">
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:gap-0">
        {Cards.map((card, index) => {
          const Icon = card.icon;
          const showDivider = index !== Cards.length - 1;

          return (
            <div
              key={card.title}
              className={`group h-full flex items-start sm:justify-center gap-3 rounded-[22px] xl:rounded-none px-3 sm:px-4  xl:px-2.5 py-4  xl:py-3 text-center  ${
                showDivider ? "xl:border-r xl:border-blue" : ""
              }`}
            >
              <div className="flex justify-center">
                <Icon className={`h-10 w-10 text-blue custom-hover`}  />
              </div>
            <div className="text-left">

              <h3 className="text-[1rem] sm:text-[1.1rem] font-semibold uppercase text-blue ">
                {card.value}
              </h3>

              <p className="mx-auto max-w-[188px] text-[0.94rem] text-white">
                {card.title}
              </p>
              <p className="mx-auto max-w-[188px] text-[0.94rem] text-textWhiteLight">
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
