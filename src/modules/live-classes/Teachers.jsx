"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import TeacherDetail, { teacherDetails } from "./TeacherDetail";

export default function Teachers() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  return (
    <>
    <section className="mt-6 rounded-[28px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] px-4 py-5 shadow-[0_22px_58px_rgba(0,0,0,0.28)] sm:px-6 sm:py-6">
      <h2 className="text-lg font-semibold tracking-[-0.04em] text-white sm:text-2xl">
        <span className="text-blue">Learn From the Best. </span> Achieve the Best.
      </h2>
      <p className="mt-2 text-sm text-textWhiteLight sm:text-base">
        Our world-class teachers with 10 to 30+ years of experience.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teacherDetails.map((teacher) => (
          <button
            key={teacher.id}
            type="button"
            onClick={() => setSelectedTeacher(teacher)}
            className="group overflow-hidden rounded-[22px] border border-lightBlue bg-[linear-gradient(180deg,#091325_0%,#06101c_100%)] text-left shadow-[0_18px_42px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-blue/70 hover:shadow-[0_24px_54px_rgba(12,65,255,0.18)]"
          >
               <div className="relative min-h-[220px] overflow-hidden rounded-[18px]">
                <div className="absolute inset-x-6 top-0 h-20 rounded-full bg-blue/10 blur-3xl transition duration-300 group-hover:bg-blue/20" />
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={teacher.width}
                  height={teacher.height}
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="custom-hover relative z-10 mx-auto h-[220px] w-auto object-contain object-bottom"
                />
              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center whitespace-nowrap">
                <span className={`rounded-[8px] px-3 py-1 text-[0.7rem] font-medium text-white shadow-[0_8px_22px_rgba(111,49,255,0.26)] ${teacher.pill}`}>
                  {teacher.subject}
                </span>
              </div>
              </div>

            <div className="px-4 pb-4 pt-2 text-center">
              <h3 className="text-[1.15rem] font-medium leading-7 text-white">{teacher.name}</h3>
              <p className="mt-1 text-[0.92rem] text-textWhiteLight">{teacher.experience}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#9fb8df]">
                Click to view details
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
    <Modal
      title="Teacher Details"
      isOpen={Boolean(selectedTeacher)}
      onClose={() => setSelectedTeacher(null)}
    >
      <TeacherDetail teacher={selectedTeacher} />
    </Modal>

    </>
  );
}
