import React from "react";
import { TbUsersGroup } from "react-icons/tb";
import { LuBookOpenText } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { ChartNoAxesCombined } from "lucide-react";

const Cards = [
  {
    icon: IoEarthOutline,
    title:"",
    description: "Trusted by Thousands of Students Worldwide",
    color:"text-blue"
  },
  {
    icon: TbUsersGroup ,
    title:"",
    description: "Built by Students Who Understand Students",
    color:"text-blue"
  },
  {
    icon: GoShieldLock,
    title:"",
    description: "Secure & Ad-Free Learning Environment",
    color:"text-blue"
  },
  {
    icon: ChartNoAxesCombined,
    title:"",
    description: "Constantly Improving For Your Success",
    color:"text-purple"
  },
  {
    icon: IoMdHeartEmpty,
    title:"Ready Me",
    description: "More Than an App. It’s a Revolution in Education.",
    color:"text-purple"
  },
];

export default function Card2() {
  return (
    <div className="mt-4 mb-4 rounded-[26px] border border-blue bg-[linear-gradient(180deg,rgba(5,11,24,0.96),rgba(3,8,18,0.98))] p-3 shadow-[0_22px_54px_rgba(0,0,0,0.3)]">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3  lg:grid-cols-5">
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
                <Icon className={`h-7 w-7 ${card.color} custom-hover`}  />
              </div>
            <div className="text-left">

             {
              card.title && 
               <p className="mx-auto text-base text-white">
                 {card.title === "Ready Me" ? (
                  <span className="font-semibold">
                    Ready <span className="text-blue">Me</span>
                  </span>
                  ) : (
                    card.title
                   )}
              </p>
             }
              <p className="mx-auto text-sm text-textWhiteLight">
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
