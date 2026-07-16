"use client";

import Image from "next/image";
import { MapPin, Phone, BookOpen, BriefcaseBusiness, GraduationCap } from "lucide-react";

export const teacherDetails = [
  {
    id: "hamza-khalid",
    name: "Dr. Hamza Khalid",
    subject: "Physics",
    experience: "20+ Years Experience",
    experienceYears: "22 Years",
    mobileNumber: "+92 300 1112233",
    location: "Lahore, Pakistan",
    specialist: "MDCAT Physics Specialist",
    qualification: "PhD in Applied Physics",
    image: "/male-teacher1.png",
    width: 461,
    height: 541,
    pill: "bg-[linear-gradient(90deg,#6d31ff_0%,#9a44ff_100%)]",
    about:
      "Known for concept-based teaching, smart problem-solving methods, and helping students build deep confidence in numerical topics.",
  },
  {
    id: "ayesha-malik",
    name: "Dr. Ayesha Malik",
    subject: "Chemistry",
    experience: "15+ Years Experience",
    experienceYears: "16 Years",
    mobileNumber: "+92 321 4455667",
    location: "Islamabad, Pakistan",
    specialist: "Entry Test Chemistry Mentor",
    qualification: "PhD in Organic Chemistry",
    image: "/feMale-teacher1.png",
    width: 443,
    height: 563,
    pill: "bg-[linear-gradient(90deg,#2466ff_0%,#7d31ff_100%)]",
    about:
      "Focuses on making difficult reactions easy to remember with visual explanations, structured notes, and test-ready revision plans.",
  },
  {
    id: "usman-ahmed",
    name: "Prof. Usman Ahmed",
    subject: "Mathematics",
    experience: "25+ Years Experience",
    experienceYears: "27 Years",
    mobileNumber: "+92 333 7788990",
    location: "Karachi, Pakistan",
    specialist: "Advanced Mathematics Specialist",
    qualification: "MPhil in Pure Mathematics",
    image: "/male-teacher2.png",
    width: 447,
    height: 558,
    pill: "bg-[linear-gradient(90deg,#6d31ff_0%,#9a44ff_100%)]",
    about:
      "Teaches mathematical logic with speed techniques, exam patterns, and practice systems designed to improve student accuracy.",
  },
  {
    id: "sana-farooq",
    name: "Dr. Sana Farooq",
    subject: "Biology",
    experience: "12+ Years Experience",
    experienceYears: "14 Years",
    mobileNumber: "+92 345 9900112",
    location: "Faisalabad, Pakistan",
    specialist: "Biology Concept Builder",
    qualification: "PhD in Molecular Biology",
    image: "/feMale-teacher2.png",
    width: 447,
    height: 558,
    pill: "bg-[linear-gradient(90deg,#1aa861_0%,#34d77e_100%)]",
    about:
      "Helps students master lengthy biology content through memorable explanations, real-life examples, and high-retention revision drills.",
  },
];

const teacherMeta = [
  { label: "Mobile Number", valueKey: "mobileNumber", icon: Phone },
  { label: "Location", valueKey: "location", icon: MapPin },
  { label: "Experience", valueKey: "experienceYears", icon: BriefcaseBusiness },
  { label: "Subject Specialist", valueKey: "specialist", icon: BookOpen },
  { label: "Qualification", valueKey: "qualification", icon: GraduationCap },
];

export default function TeacherDetail({ teacher }) {
  if (!teacher) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <div className="relative overflow-hidden rounded-[26px] border border-lightBlue bg-[radial-gradient(circle_at_top,rgba(24,94,255,0.22),transparent_48%),linear-gradient(180deg,#091325_0%,#050d19_100%)] p-4 shadow-[0_24px_56px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-x-6 top-0 h-24 rounded-full bg-blue/10 blur-3xl" />
        <div className="relative rounded-[22px] border border-white/8 bg-white/[0.03] p-3">
          <div className="flex min-h-[220px] items-end justify-center rounded-[18px] px-2 pt-4 sm:min-h-[280px] lg:min-h-[320px]">
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={teacher.width}
              height={teacher.height}
              className="h-[220px] w-auto max-w-full object-contain object-bottom sm:h-[280px] lg:h-[320px]"
            />
          </div>
          <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-textWhiteLight">
                ReadyMe Teacher
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                {teacher.name}
              </h3>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium text-white shadow-[0_12px_30px_rgba(111,49,255,0.25)] ${teacher.pill}`}
            >
              {teacher.subject}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-[26px] border border-lightBlue bg-[linear-gradient(180deg,rgba(8,18,36,0.88)_0%,rgba(4,10,20,0.96)_100%)] p-5 shadow-[0_20px_48px_rgba(0,0,0,0.24)] sm:p-6">
          <span className="inline-flex rounded-full border border-blue/40 bg-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#bcd5ff]">
            Teacher Profile
          </span>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
            {teacher.name}
          </h3>
          <p className="mt-2 text-base leading-7 text-textWhiteLight">
            {teacher.about}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {teacherMeta.map(({ label, valueKey, icon: Icon }) => (
            <div
              key={label}
              className="rounded-[22px] border border-lightBlue bg-[linear-gradient(180deg,rgba(10,19,34,0.9)_0%,rgba(4,10,20,0.95)_100%)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.2)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue/30 bg-blue/10 text-blue">
                <Icon size={19} />
              </div>
              <p className="mt-4 text-sm text-textWhiteLight">{label}</p>
              <p className="mt-1 text-base font-medium leading-7 text-white">
                {teacher[valueKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
