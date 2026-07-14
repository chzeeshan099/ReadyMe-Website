import Image from "next/image";
import Cards from "./Cards";
import Footer from "./Footer";
import { Reveal } from "@/components/motion-system";


export default function FeaturesPage() {
  return (
    <>
          <Reveal direction="left">
          <div className="relative md:flex">
            <div className="w-full md:w-[60%]">

              <h1 className="mt-8 max-w-[720px] text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Everything You Need.
                <span className="mt-1 block "><span className="text-blue">All in One</span> <span className="">Place.</span></span> 
              </h1>

              <p className="mt-6 max-w-[760px] text-lg leading-8 text-[#b8c5de] sm:text-xl">
                ReadyMe brings every study resource, tool, and community together so you can focus on what really matters
                {" "}
                <span className="text-[#0c8eff]">your success.</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm sm:text-2xl">
                <span className="text-white/92">For</span>
                <span className="font-semibold text-[#1dd07f]">IGCSE</span>
                <span className="hidden text-white/30 sm:inline">|</span>
                <span className="font-semibold text-[#ffcd33]">O Levels</span>
                <span className="hidden text-white/30 sm:inline">|</span>
                <span className="font-semibold text-[#9f52ff]">A Levels (AS &amp; A2)</span>
              </div>
            </div>

            <div className="relative mx-auto w-full md:w-[60%] lg:w-[50%] xl:max-w-none pt-8">
              <Image
                src="/owner%20images/feature2.png"
                alt="ReadyMe feature preview"
                width={820}
                height={920}
                priority
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>
          </Reveal>

       <Reveal delay={0.06} direction="right">
         <Cards/>
       </Reveal>
       <Reveal delay={0.12} direction="bottom">
         <Footer/>
       </Reveal>
    </>
  );
}
