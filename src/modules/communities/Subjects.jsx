import React from 'react'
import {
  Atom,
  BriefcaseBusiness,
  FlaskConical,
  Leaf,
  MoreHorizontal,
  NotebookText,
} from "lucide-react";
import { IoCalculatorOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";const subjects = [
  { icon: IoCalculatorOutline , label: "Maths", accent: "text-[#1d77ff]" },
  { icon: Atom, label: "Physics", accent: "text-[#9a47ff]" },
  { icon: FlaskConical, label: "Chemistry", accent: "text-[#ff3e58]" },
  { icon: Leaf, label: "Biology", accent: "text-[#1ce48b]" },
  { icon: NotebookText, label: "English", accent: "text-[#21e1a5]" },
  { icon: BriefcaseBusiness, label: "Business", accent: "text-[#c145ff]" },
  { icon: HiOutlineComputerDesktop  , label: "Computer Science", accent: "text-[#ff424f]" },
];
const Subjects = () => {
  return (
    <>
       <div className="mt-10 rounded-[26px] border border-blue bg-[linear-gradient(180deg,rgba(5,11,24,0.94),rgba(3,8,18,0.98))] px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
                <p className="text-[1.1rem] font-semibold text-blue sm:text-[1.25rem]">Explore Communities</p>
                <div className="mt-5 grid grid-cols-2 gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-8">
                  {subjects?.map((subject) => {
                    const Icon = subject.icon;

                    return (
                      <div key={subject.label} className="flex flex-col items-center text-center">
                        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-blue bg-[#071122] shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
                          <Icon className={`h-7 w-7 ${subject.accent}`} strokeWidth={1.8} />
                        </div>
                        <p className="mt-3 leading-4 text-sm text-textWhiteLight">{subject.label}</p>
                      </div>
                    );
                  })}

                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-[#14325a] bg-[#071122] text-white/72 shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
                      <MoreHorizontal className="h-7 w-7" />
                    </div>
                    <p className="mt-3 text-sm leading-4 text-textWhiteLight">and more...</p>
                  </div>
                </div>
       </div>
    </>
  )
}

export default Subjects
