import {
  CheckCircle2,
} from "lucide-react";
import ColorButton from "@/components/ColorButton";
import { TbStar } from "react-icons/tb";
import { LuBot, LuShoppingBag } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const missionReasons = [
  "To end expensive tuitions.",
  "To save your time.",
  "To provide everything in one place.",
  "To empower students with the best tools & guidance.",
  "To build a community where you never feel alone.",
];

const promiseItems = [
  { icon: HiOutlineComputerDesktop  , title: "Premium quality", text: "resources." },
  { icon: TbStar , title: "Top teachers,", text: "live & recorded." },
  { icon: LuBot , title: "AI powered", text: "tools & assistant." },
  { icon: GiNewspaper  , title: "Past papers, mocks", text: "& topical MCQs." },
  { icon: IoNewspaperOutline, title: "Communities", text: "that support you." },
  { icon: LuShoppingBag , title: "All in one place,", text: "anytime, anywhere." },
];

export default function StrugglePage() {
  return (
    <section className="overflow-hidden bg-[#02050d] text-white">
      <div className="mx-auto w-[calc(100%-18px)] max-w-[1540px] py-5 sm:w-[calc(100%-28px)]">
          <div className="relative px-4 py-4 sm:px-6 lg:px-8">

            {/* cards */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-7 py-7 sm:py-3 shadow-[0_18px_44px_rgba(0,0,0,0.24)]">
                <p className="text-8xl leading-none text-blue">“</p>
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
                  <span className="text-blue text-[1.5rem] tracking-[-0.04em]">ReadyMe.</span>
                </p>
              </div>

              <div className="rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-7 py-7 sm:py-3 text-center shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue">My Mission</p>
                <p className="mx-auto mt-3 max-w-[560px] text-[1.5rem] sm:text-[2rem] font-semibold leading-[1.25] tracking-[-0.04em] text-white">
                  I built <span className="text-blue">ReadyMe</span> so you never have to face what I went through.
                </p>
                <p className="mx-auto mt-3 sm:mt-5 mb-2 max-w-[520px] leading-5 sm:leading-7 text-textWhiteLight text-sm sm:text-[1.1rem]">
                  One platform. Every resource.
                  <br />
                  Endless support. Unlimited success.
                </p>
                <ColorButton href={''}>
                <p className="text-[10px] font-semibold uppercase">For Every Student. For A Better Future.</p>
                </ColorButton>
              </div>

              <div className="rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-7 py-7 sm:py-3 shadow-[0_18px_44px_rgba(0,0,0,0.24)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">Why ReadyMe Exists</p>
                <div className="mt-5 space-y-4">
                  {missionReasons.map((reason) => (
                    <div key={reason} className="flex items-start gap-3 text-sm sm:text-base leading-7 text-textWhiteLight">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue" />
                      <p>{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[22px] border border-blue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(4,10,20,0.98))] px-4 py-5 shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:px-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">My Promise To You</p>
              <div className="mt-4 grid gap-1 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {promiseItems.map((item , index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={item.title}
                       className={`sm:border-r px-2 last:border-r-0 xl:pr-4 ${
                       isEven ? "border-blue" : "border-purple-500"
                     }`}
                     >
                      <Icon
                         className={`h-6 sm:h-8 w-6 sm:w-8 ${
                         isEven ? "text-blue" : "text-purple-500"
                         }`}
                         strokeWidth={1.7}
                        />
                      <p className="mt-4 text-xs sm:text-sm leading-6 text-textWhiteLight">
                        {item.title}
                        <br />
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}
