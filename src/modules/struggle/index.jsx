import { CheckCircle2 } from "lucide-react";
import ColorButton from "@/components/ColorButton";
import { TbStar } from "react-icons/tb";
import { LuBot, LuShoppingBag } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Reveal } from "@/components/motion-system";
import Hero from "./Hero";
import Card from "./Card";

const missionReasons = [
  "To end expensive tuitions.",
  "To save your time.",
  "To provide everything in one place.",
  "To empower students with the best tools & guidance.",
  "To build a community where you never feel alone.",
];

const promiseItems = [
  { icon: HiOutlineComputerDesktop, title: "Premium quality", text: "resources." },
  { icon: TbStar, title: "Top teachers,", text: "live & recorded." },
  { icon: LuBot, title: "AI powered", text: "tools & assistant." },
  { icon: GiNewspaper, title: "Past papers, mocks", text: "& topical MCQs." },
  { icon: IoNewspaperOutline, title: "Communities", text: "that support you." },
  { icon: LuShoppingBag, title: "All in one place,", text: "anytime, anywhere." },
];

export default function StrugglePage() {
  return (
    <>
      <div className="relative">
        <Reveal direction="left">
          <Hero />
        </Reveal>

        <Reveal delay={0.04} direction="right">
          <Card />
        </Reveal>

        <Reveal delay={0.08} direction="bottom">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-7 py-7 shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:py-3">
              <p className="text-8xl leading-none text-blue">"</p>
              <p className="-mt-14 text-[1.1rem] leading-8 text-textWhiteLight">
                I lived these struggles.
                <br />
                I felt this pain.
                <br />
                I know what it&apos;s like to want more, but not have the right support.
              </p>
              <p className="mt-4 text-[1.3rem] font-medium leading-9 text-white">
                That&apos;s why I built
                <br />
                <span className="text-[1.5rem] tracking-[-0.04em] text-blue">ReadyMe.</span>
              </p>
            </div>

            <div className="rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-7 py-7 text-center shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:px-8 sm:py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue">My Mission</p>
              <p className="mx-auto mt-3 max-w-[560px] text-[1.5rem] font-semibold leading-[1.25] tracking-[-0.04em] text-white sm:text-[2rem]">
                I built <span className="text-blue">ReadyMe</span> so you never have to face what I went through.
              </p>
              <p className="mx-auto mb-2 mt-3 max-w-[520px] text-sm leading-5 text-textWhiteLight sm:mt-5 sm:text-[1.1rem] sm:leading-7">
                One platform. Every resource.
                <br />
                Endless support. Unlimited success.
              </p>
              <ColorButton href="">
                <p className="text-[10px] font-semibold uppercase">For Every Student. For A Better Future.</p>
              </ColorButton>
            </div>

            <div className="rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-7 py-7 shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">Why ReadyMe Exists</p>
              <div className="mt-5 space-y-4">
                {missionReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3 text-sm leading-7 text-textWhiteLight sm:text-base">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue" />
                    <p>{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} direction="left">
          <div className="mt-4 rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-4 py-5 shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:px-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">My Promise To You</p>
            <div className="mt-4 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
              {promiseItems.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.title}
                    className={`group px-2 last:border-r-0 sm:border-r xl:pr-4 ${
                      isEven ? "border-blue" : "border-purple-500"
                    }`}
                  >
                    <Icon
                      className={`custom-hover h-6 w-6 sm:h-8 sm:w-8 ${
                        isEven ? "text-blue" : "text-purple-500"
                      }`}
                      strokeWidth={1.7}
                    />
                    <p className="mt-4 text-xs leading-6 text-textWhiteLight sm:text-sm">
                      {item.title}
                      <br />
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
