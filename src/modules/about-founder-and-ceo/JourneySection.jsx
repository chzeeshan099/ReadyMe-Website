import { Crown, Gamepad2, MountainSnow } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";

const points = [
  {
    icon: MountainSnow,
    text: "At the age of 15, Bilawal Arain made a decision that changed his life.",
  },
  {
    icon: Gamepad2,
    text: "He stopped playing games and watching family vlogs because he realized it was all a waste of time.",
  },
  {
    icon: GoGoal ,
    text: "He deleted everything that distracted him and focused 100% on business, self-growth & building something meaningful.",
  },
  {
    icon: RiTeamLine ,
    text: "Coming from a family where everyone is involved in business, Bilawal was always inspired to think bigger.",
  },
  {
    icon: Crown,
    text: "Today, he is the Founder & CEO of ReadyMe and Chairman of BA Group leading multiple successful ventures.",
  },
];

export default function JourneySection() {
  return (
    <section className="rounded-[28px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-7">
      <h2 className="text-base sm:text-2xl font-semibold uppercase tracking-[-0.03em] text-white ">
        The <span className="text-blue">Journey</span>
      </h2>

      <div className="mt-6 space-y-5">
        {points.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.text} className="group flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-lightBlue bg-[#071224] text-[#1f7eff]">
                <Icon className="h-6 w-6 custom-hover"  />
              </div>
              <p className="text-sm md:text-base text-textWhiteLight">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
