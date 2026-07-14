import Image from "next/image";

const teachers = [
  {
    name: "Dr. Hamza Khalid",
    subject: "Physics",
    experience: "20+ Years Experience",
    image: "/male-teacher1.png",
    width: 461,
    height: 541,
    pill: "bg-[linear-gradient(90deg,#6d31ff_0%,#9a44ff_100%)]",
  },
  {
    name: "Dr. Ayesha Malik",
    subject: "Chemistry",
    experience: "15+ Years Experience",
    image: "/feMale-teacher1.png",
    width: 443,
    height: 563,
    pill: "bg-[linear-gradient(90deg,#2466ff_0%,#7d31ff_100%)]",
  },
  {
    name: "Prof. Usman Ahmed",
    subject: "Mathematics",
    experience: "25+ Years Experience",
    image: "/male-teacher2.png",
    width: 447,
    height: 558,
    pill: "bg-[linear-gradient(90deg,#6d31ff_0%,#9a44ff_100%)]",
  },
  {
    name: "Dr. Sana Farooq",
    subject: "Biology",
    experience: "12+ Years Experience",
    image: "/feMale-teacher2.png",
    width: 447,
    height: 558,
    pill: "bg-[linear-gradient(90deg,#1aa861_0%,#34d77e_100%)]",
  },
];

export default function Teachers() {
  return (
    <section className="mt-6 rounded-[28px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] px-4 py-5 shadow-[0_22px_58px_rgba(0,0,0,0.28)] sm:px-6 sm:py-6">
      <h2 className="text-lg sm:text-2xl font-semibold tracking-[-0.04em] text-white ">
        <span className="text-blue">Learn From the Best. </span> Achieve the Best.
      </h2>
      <p className="mt-2 text-sm sm:text-base text-textWhiteLight ">
        Our world-class teachers with 10 to 30+ years of experience.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <article
            key={teacher.name}
            className="group overflow-hidden rounded-[22px] border border-lightBlue bg-[linear-gradient(180deg,#091325_0%,#06101c_100%)] shadow-[0_18px_42px_rgba(0,0,0,0.24)]"
          >
            
              <div className="relative min-h-[220px] overflow-hidden rounded-[18px]">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={teacher.width}
                  height={teacher.height}
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="custom-hover mx-auto h-[220px] w-auto object-contain object-bottom"
                />
              <div className="flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className={`rounded-[8px] px-3 py-1 text-[0.7rem] font-medium text-white shadow-[0_8px_22px_rgba(111,49,255,0.26)] ${teacher.pill}`}>
                  {teacher.subject}
                </span>
              </div>
              </div>

            <div className="px-4 pb-4 pt-2 text-center">
              <h3 className="text-[1.15rem] font-medium leading-7 text-white">{teacher.name}</h3>
              <p className="mt-1 text-[0.92rem] text-textWhiteLight">{teacher.experience}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
