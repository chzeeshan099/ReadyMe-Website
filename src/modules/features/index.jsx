import Image from "next/image";
import {
  Code2,
  Sparkles,
  Trophy,
} from "lucide-react";
import Cards from "./Cards";
import Footer from "./Footer";

const badges = [
  { icon: Sparkles, label: "AI Powered", value: "Learning Platform" },
  { icon: Trophy, label: "Built for", value: "Achievers" },
];

const appBadges = [
  { label: "Download on the", store: "App Store", image: "/apple logo.webp" },
  { label: "GET IT ON", store: "Google Play", image: "/playstore logo.png" },
];



export default function FeaturesPage() {
  return (
    <section className="overflow-hidden bg-[#010103] text-white">
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1520px] py-6 sm:w-[calc(100%-32px)] lg:py-8">

          <div className="relative md:flex">
            <div className="w-full md:w-[60%]">
              {/* <div className="flex flex-wrap gap-3">
                {badges.map((badge) => {
                  const Icon = badge.icon;

                  return (
                    <div
                      key={badge.value}
                      className="inline-flex items-center gap-3 rounded-2xl border border-[#1b3d74] bg-[#07101f]/85 px-4 py-3 shadow-[0_16px_32px_rgba(5,10,20,0.35)] backdrop-blur-xl"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#091a33] text-[#7e4dff]">
                        <Icon size={18} />
                      </span>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                        <p>{badge.label}</p>
                        <p className="mt-1 text-sm tracking-[0.04em] text-white">{badge.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div> */}

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

            {/* <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/56">Coming Soon On</p>
                <div className="mt-4 grid gap-3">
                  {appBadges.map((badge) => (
                    <div
                      key={badge.store}
                      className="flex items-center gap-3 rounded-2xl border border-white/14 bg-[#060d1a]/80 px-4 py-3 shadow-[0_14px_28px_rgba(0,0,0,0.24)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl">
                        <Image src={badge.image} alt={badge.store} width={64} height={64} className="h-auto w-full object-contain" />
                      </div>
                      <div>
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/60">{badge.label}</p>
                        <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{badge.store}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[26px] border border-[#1a3d74] bg-[linear-gradient(180deg,rgba(10,17,33,0.92),rgba(5,11,22,0.98))] p-5 shadow-[0_22px_48px_rgba(0,0,0,0.28)]">
                <div className="mb-4 flex items-center gap-3 text-[#0b8dff]">
                  <Code2 size={22} />
                  <span className="h-px flex-1 bg-[linear-gradient(90deg,#235cff,transparent)]" />
                </div>
                <p className="text-[1.9rem] leading-10 tracking-[-0.04em] text-white">
                  World&apos;s best developers are building <span className="text-[#0b8dff]">ReadyMe</span> to deliver the ultimate learning
                  experience.
                </p>
              </div>
            </div> */}
          </div>

       <Cards/>
       {/* <Footer/> */}

      </div>
    </section>
  );
}
