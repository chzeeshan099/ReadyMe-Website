import Image from "next/image";

const companies = [
  {
    image: "/readyMe logo.png",
    text: "AI-Powered learning platform for IGCSE, O Levels & A Levels students.",
  },
  {
    image: "/ankahi-logo.png",
    text: "Elevating everyday style with premium clothing made for confidence and comfort.",
  },
  // {
  //   image: "/hibread.png",
  //   text: "Empowering students with quality education & futuristic learning.",
  // },
  {
    image: "/paradox-logo.png",
    text: "Building young leaders through diplomacy, debates & global exposure.",
  },
  {
    image: "/paradox-logo.png",
    text: "Creating unforgettable experiences through unique & impactful events.",
  },
  {
    image: "/airoplan.png",
    text: "... and many more innovative projects in progress!",
  },
];

export default function CompaniesProjectsSection() {
  return (
    <section className="rounded-[28px] border border-[#15315b] bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-7">
      <h2 className="text-[1.8rem] font-semibold uppercase text-[#1c7bff] sm:text-[2rem]">Companies &amp; Projects</h2>
      <div className="mt-6 grid gap-4">
        {companies.map((item) => (
          <div key={item.image} className="group flex flex-col sm:flex-row gap-3 sm:items-center justify-between rounded-[18px] border border-lightBlue bg-[#071223] px-5 py-4  ">
            <div className="w-[100px] md:w-[150px]">
              <Image
                src={item?.image}
                alt="company project image"
                width={2172}
                height={724}
                priority
                quality={100}
                className="custom-hover h-[50px] w-auto max-w-[80px] sm:max-w-[80px] md:max-w-[100px] object-contain"
              />
            </div>
            <p className="text-[1.05rem] leading-6 text-textWhiteLight sm:w-[90%] md:w-[85%] sm:border-l border-textWhiteLight sm:pl-4">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
