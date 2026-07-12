import React from "react";
import {
  BookOpen,
  CircleHelp,
  Clock3,
  GraduationCap,
  Users,
  WalletCards,
} from "lucide-react";
import ColorButton from "@/components/ColorButton";
import { IoWalletOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";

const struggleCards = [
  {
    icon: IoWalletOutline ,
    title: ["Expensive", "Tuitions"],
    description:
      "High tuition fees were a huge burden. Quality education felt like a luxury, not a right.",
    note: "Rs. 5,000 - 20,000+ per subject monthly",
  },
  {
    icon: Clock3,
    title: ["Wasted Time", "In Travel"],
    description:
      "2-3 hours daily in traffic just to attend tuitions. Exhausting and unproductive.",
    note: "Less time to study, less time for myself.",
  },
  {
    icon: SlBookOpen ,
    title: ["No Organized", "Resources"],
    description:
      "Scattered notes, low quality content, and no proper past papers in one place.",
    note: "Wasted time finding resources everywhere.",
  },
  {
    icon: LiaChalkboardTeacherSolid ,
    title: ["Inconsistent", "Teaching"],
    description:
      "Some teachers were great, others just focused on money, not your future.",
    note: "No standard. No accountability.",
  },
  {
    icon: CircleHelp,
    title: ["Limited Practice", "& Guidance"],
    description:
      "Not enough topical questions, past papers or mock tests to truly prepare for exams.",
    note: "Felt unprepared, always anxious.",
  },
  {
    icon: PiUsersThree ,
    title: ["No Student", "Community"],
    description:
      "No platform to connect with serious students, share, discuss and grow together.",
    note: "Felt alone in the whole journey.",
  },
];

export default function Card() {
  return (
    <div className="mt-4 mb-4 rounded-[26px] border border-blue bg-[linear-gradient(180deg,rgba(5,11,24,0.96),rgba(3,8,18,0.98))] p-3 shadow-[0_22px_54px_rgba(0,0,0,0.3)] sm:p-4 lg:p-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6 xl:gap-0">
        {struggleCards.map((card, index) => {
          const Icon = card.icon;
          const showDivider = index !== struggleCards.length - 1;

          return (
            <div
              key={card.title.join(" ")}
              className={`h-full flex flex-col items-center justify-between rounded-[22px] xl:rounded-none px-3 sm:px-4  xl:px-2.5 py-4  xl:py-3 text-center  ${
                showDivider ? "xl:border-r xl:border-[#10284f]" : ""
              }`}
            >
            <div>
              <div className="flex justify-center">
                <Icon className={`h-10 w-10 text-purple`}  />
              </div>

              <h3 className="mt-4 text-[1rem] font-semibold uppercase leading-8 text-white sm:text-[1.1rem]">
                {card.title[0]}
                <br />
                {card.title[1]}
              </h3>

              <p className="mx-auto mt-4 max-w-[188px] text-[0.94rem] leading-8 text-[#c1c9db]">
                {card.description}
              </p>
                </div>

              <ColorButton>
              <p className="text-xs"> {card.note}</p>
              </ColorButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
