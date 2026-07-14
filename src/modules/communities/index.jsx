import Image from "next/image";
import Subjects from "./Subjects";
import FeaturePoints from "./FeaturePoints";
import { Reveal } from "@/components/motion-system";

export default function CommunitiesPage() {
  return (
        <div className="">

          <Reveal direction="left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-1">
            <div className="w-full md:w-[40%] lg:-mt-8">
           
              <div className="mt-0 inline-flex rounded-full border border-blue bg-[#07101d]/80 p-2 md:p-3 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] text-textWhiteLight shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                Learn.Connect.Grow Together.
              </div>

              <h1 className="mt-8 text-[44px] md:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-[-0.07em] text-white">
                Communities
                <span className="mt-2 block bg-[linear-gradient(90deg,#1669ff_0%,#456dff_40%,#a948ff_100%)] bg-clip-text text-transparent">
                  That Empower.
                </span>
              </h1>

              <p className="mt-4  text-[1.15rem] leading-7 text-[#c6cfdf] sm:text-[1.45rem]">
                Join thousands of students in subject-wise communities.
                {/* <br /> */}
                Share, learn, discuss, and grow together.
              </p>

            
            </div>

            <div className="mx-auto mt-2 md:mt-0  w-full md:w-[60%]">
              <Image
                src="/communities.png"
                alt="ReadyMe communities app preview"
                width={1535}
                height={1024}
                priority
                quality={100}
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="relative z-10 md:h-[300px] lg:h-88 w-full"
              />
            </div>
          </div>
          </Reveal>


             
             <Reveal delay={0.05} direction="right">
               <FeaturePoints/>
             </Reveal>
             <Reveal delay={0.1} direction="bottom">
               <Subjects/>
             </Reveal>

              {/* <div className="mt-6 grid gap-5 rounded-[28px] border border-[#16325a] bg-[linear-gradient(180deg,rgba(5,11,24,0.94),rgba(3,8,18,0.98))] px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)] lg:grid-cols-[128px_minmax(0,1fr)_320px]">
                <div className="flex md:items-center justify-center text-[#8a4dff]">
                  <Gift size={92} strokeWidth={1.5} />
                </div>

                <div className="border-[#16325a] lg:border-r lg:pr-6">
                  <p className="text-[1.7rem] font-medium leading-10 text-[#1f83ff]">Pre-Register Now &amp; Get</p>
                  <p className="mt-1 text-[4rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[4.8rem]">
                    50% OFF
                  </p>
                  <p className="mt-2 text-[1.15rem] leading-8 text-[#c6cfdf]">On Your Subscription!</p>
                </div>

                <div className="flex flex-col justify-center">
                  <Link
                    href="/pre-register"
                    className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,#6d2cff_0%,#1669ff_100%)] px-6 py-4 text-[1rem] font-semibold text-white shadow-[0_18px_42px_rgba(32,92,255,0.32)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:text-[1.05rem]"
                  >
                    <span>Pre-Register Now</span>
                    <ChevronRight size={22} />
                  </Link>
                  <p className="mt-5 text-[1rem] leading-8 text-[#c6cfdf]">
                    Be the first to experience ReadyMe.
                    <br />
                    <span className="text-[#0b7bff]">Launch Offer - 50% OFF</span>
                  </p>
                </div>
              </div> */}
        </div>
  );
}
