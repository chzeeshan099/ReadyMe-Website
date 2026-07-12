import React from "react";
import Image from "next/image";
import { ArrowRight, Code2, Rocket } from "lucide-react";
import ColorButton from "@/components/ColorButton";
import SimpleButton from "@/components/SimpleButton";

const appBadges = [
  { label: "Download on the", store: "App Store" , image:"/apple logo.webp" },
  { label: "GET IT ON", store: "Google Play",  image:"/playstore logo.png"  },
];

const HeroSection = () => {
  return (
    <>
        <div className="flex flex-col-reverse gap-2 py-8 md:flex-row md:items-start md:justify-between lg:gap-6 lg:py-12">
          <div className="w-full">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-medium tracking-[0.2em] text-white/72 uppercase shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-5 sm:text-xs">
              <Rocket size={15} className="text-[#7c4dff]" />
              <span>AI Powered Learning Platform</span>
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Built for Dreamers.
              <span className="mt-2 block bg-[linear-gradient(90deg,#8b2cff_0%,#405dff_55%,#0b9dff_100%)] bg-clip-text text-transparent">
                Made for Achievers.
              </span>
            </h1>

            <p className="sm:mt-5 text-base lg:text-xl font-medium tracking-[-0.04em] text-white/72">
              Smarter Learning. Stronger Results.
            </p>

            <p className="mt-7 max-w-[660px] text-sm md:text-base leading-8 text-[#aeb8ce] ">
              ReadyMe is the all-in-one study platform for{" "}
              <span className="font-semibold text-[#4f7dff]">
                IGCSE, O Levels, A Levels (AS &amp; A2)
              </span>{" "}
              students. Study, practice, connect, and succeed all in one
              place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 px-8 sm:px-0">
               <ColorButton href="/pre-register">
              <span>Pre-Register Now</span>
              <ArrowRight size={20} />
            </ColorButton>


            <SimpleButton href="/pre-register">
              <span>Explore Features</span>
            </SimpleButton>


            </div>

           <div className="hidden lg:block">
             <div className="mt-10">
              <p className="text-sm font-semibold tracking-[0.18em] text-white/42 uppercase">
                Coming Soon On
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 px-8 sm:px-0">
                {appBadges.map((badge) => (
                  <div
                    key={badge.store}
                    className="inline-flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/14 px-4 py-2 text-white shadow-[0_14px_28px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl">
                      <Image
              src={badge.image}
              alt="ReadyMe hero preview"
              width={100}
              height={100}
              priority
              className=""
            />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-medium tracking-[0.14em] text-white">
                        {badge.label}
                      </p>
                      <p className="text-lg font-semibold tracking-[-0.04em]">
                        {badge.store}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex max-w-full items-start gap-4 rounded-[28px] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(35,120,255,0.2),rgba(72,38,173,0.38))] text-[#5c86ff] shadow-[0_0_32px_rgba(16,96,255,0.22)]">
                <Code2 size={30} />
              </div>
              <p className="text-lg leading-8 text-white/72 sm:text-[1.1rem]">
                World&apos;s best developers are working on{" "}
                <span className="font-semibold text-[#0b9dff]">ReadyMe</span> to
                bring you the ultimate learning experience.
              </p>
            </div>
           </div>
          </div>

          <div className="relative flex w-full items-center justify-center md:max-w-[52%] lg:max-w-[56%]">
            <Image
              src="/owner%20images/home.png"
              alt="ReadyMe hero preview"
              width={1462}
              height={1061}
              priority
              className="relative z-10 h-auto w-full object-contain object-center"
            />
          </div>
        </div>






          <div className="block lg:hidden ">
             <div className="mt-10">
              <p className="text-sm font-semibold tracking-[0.18em] text-white/42 uppercase">
                Coming Soon On
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 px-8 sm:px-0">
                {appBadges.map((badge) => (
                  <div
                    key={badge.store}
                    className="inline-flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/14 px-4 py-2 text-white shadow-[0_14px_28px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl">
                      <Image
              src={badge.image}
              alt="ReadyMe hero preview"
              width={100}
              height={100}
              priority
              className=""
            />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-medium tracking-[0.14em] text-white">
                        {badge.label}
                      </p>
                      <p className="text-lg font-semibold tracking-[-0.04em]">
                        {badge.store}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex max-w-full items-start gap-4 rounded-[28px] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(35,120,255,0.2),rgba(72,38,173,0.38))] text-[#5c86ff] shadow-[0_0_32px_rgba(16,96,255,0.22)]">
                <Code2 size={30} />
              </div>
              <p className="text-lg leading-8 text-white/72 sm:text-[1.1rem]">
                World&apos;s best developers are working on{" "}
                <span className="font-semibold text-[#0b9dff]">ReadyMe</span> to
                bring you the ultimate learning experience.
              </p>
            </div>
           </div>
    </>
  );
};

export default HeroSection;
