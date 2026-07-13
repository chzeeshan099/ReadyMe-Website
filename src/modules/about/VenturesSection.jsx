import Image from "next/image";

const ventures = [
  { image: "/readyMe logo.png", text: "AI-powered learning platform for students." },
  { image: "/hibread.png", text: "Shaping the future through education." },
  { image: "/paradox.png", text: "Empowering youth through leadership & diplomacy." },
  { image: "/paradox-event.png", text: "Delivering remarkable events & experiences." },
  { image: "/airoplan.png", text: "Many more exciting ventures in progress." },
];

export default function VenturesSection() {
  return (
      <div className="rounded-[28px] border border-[#15315b] bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-7">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,#17345e,transparent)]" />
          <h2 className="text-center text-lg sm:text-2xl font-semibold uppercase text-blue ">Ventures Under BA Group</h2>
          <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#17345e)]" />
        </div>

        <div className="mt-7 grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          {ventures.map((item, index) => (
            <div key={item.image} className={`px-2 ${index !== ventures.length - 1 ? "lg:border-r lg:border-lightBlue" : ""}`}>
               <Image
                 src={item?.image}
                 alt="brand images"
                 width={2172}
                 height={724}
                 priority
                 quality={100}
                 className="h-auto w-[100px] object-contain"
               />
              <p className="mt-4 text-textWhiteLight">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
