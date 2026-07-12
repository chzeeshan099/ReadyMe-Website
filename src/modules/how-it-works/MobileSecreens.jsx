import {
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: ["Pre-Register"],
    description: "Enter your details to pre-register for ReadyMe.",
    image: "/mobile.png",
    accent: "text-[#1480ff]",
    screen: "pre-register",
  },
  {
    number: "2",
    title: ["Our Team Will Contact You"],
    description: "Our team will receive your details and get in touch with you shortly.",
    image: "/mobile2.png",
    accent: "text-[#1480ff]",
    screen: "contact",
  },
  {
    number: "3",
    title: ["Choose Your Grade"],
    description: "Select your current grade / level.",
    image: "/mobile3.png",
    accent: "text-[#1480ff]",
    screen: "grade",
  },
  {
    number: "4",
    title: ["Choose Your Subjects"],
    description: "Select the subjects you want to learn.",
    image: "/mobile4.png",
    accent: "text-[#1480ff]",
    screen: "subjects",
  },
  {
    number: "5",
    title: ["Select Your Exam Dates"],
    description: "Choose when your exams are.",
    image: "/mobile5.png",
    accent: "text-[#1480ff]",
    screen: "dates",
  },
  {
    number: "6",
    title: ["You're On The List!"],
    description: "You'll be on the list. We'll notify you as soon as we launch.",
    image: "/mobile6.png",
    accent: "text-[#a44dff]",
    screen: "success",
  },
];





export default function MobileSecreens() {
  return (
    <div className="relative rounded-[30px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] px-4 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] sm:px-5 lg:px-6">
         <div className="absolute -top-4.5 sm:-top-7 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-[16px] bg-[linear-gradient(90deg,#1274ff_0%,#7d2eff_100%)] px-4 py-3 text-center text-[0.5rem] font-semibold uppercase tracking-[0.04em] text-white shadow-[0_18px_40px_rgba(35,92,255,0.3)] sm:px-6 sm:text-[1.1rem]">
            Pre-Register Now &amp; Get 50% OFF
         </div>
      <div className="mt-2 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-0">
        {steps.map((step, index) => {

          return (
            <div key={step.number} className={`flex flex-col justify-between items-center relative px-3 py-2 text-center ${index !== steps.length - 1 ? "xl:border-r xl:border-blue" : ""}`}>
             
             <div>
              <div className="flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blue text-[2rem] font-medium text-white shadow-[0_0_24px_rgba(17,108,255,0.2)]">
                  {step.number}
                </span>
              </div>

              <h3 className={`mt-3 text-[1.05rem] font-semibold uppercase leading-8 ${step.accent}`}>
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[200px] text-[0.8rem] sm:text-[0.9rem] leading-6 text-[#c4cddd]">{step.description}</p>

              {index < steps.length - 1 ? (
                <ArrowRight className="absolute right-[-8px] top-[66px] hidden h-8 w-8 text-[#3d5a91] xl:block" />
              ) : null}
             </div>

               <Image
                 src={step?.image}
                 alt="missing mobile image"
                 width={1672}
                 height={941}
                 priority
                 quality={100}
                 className="h-[250px] sm:h-[300px] md:h-[350px] xl:h-95 w-[150px] sm:w-[150px] md:w-[200px] xl:w-full"
               />

            </div>
          );
        })}
      </div>
    </div>
  );
}
