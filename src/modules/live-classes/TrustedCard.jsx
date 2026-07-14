import Image from "next/image";
import { Trophy } from "lucide-react";
import { GoTrophy } from "react-icons/go";

const trustedFaces = [
  { src: "/male-teacher1.png", alt: "Student success story 1", className: "object-[center_18%]" },
  { src: "/male-teacher2.png", alt: "Student success story 2", className: "object-[center_16%] grayscale-[0.1]" },
  { src: "/male-teacher1.png", alt: "Student success story 3", className: "object-[center_18%] grayscale-[0.2]" },
  { src: "/male-teacher2.png", alt: "Student success story 4", className: "object-[center_16%] grayscale-[0.35]" },
  { src: "/male-teacher1.png", alt: "Student success story 5", className: "object-[center_18%]" },
];

const TrustedCard = () => {
  return (
    <section className="mt-6">
      <div className="overflow-hidden rounded-[22px] border border-lightBlue bg-[radial-gradient(circle_at_0%_0%,rgba(29,78,216,0.12),transparent_34%),linear-gradient(180deg,#050b17_0%,#020611_100%)] px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(78,132,255,0.18)] sm:px-7 sm:py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="group flex items-center gap-3 sm:gap-4">
            <div className="flex h-auto w-11 w-[52px] items-center justify-center rounded-[14px] text-border">
              <GoTrophy className="h-10 w-10 text-blue custom-hover" />
            </div>

            <h3 className="text-[1rem] sm:text-[1.45rem] md:text-[1.9rem] font-medium leading-[1.34] tracking-[-0.04em] text-white">
              Trusted by Thousands of Students Worldwide
            </h3>
          </div>

          <div className="flex items-center justify-between gap-1 lg:flex-none">
            <div className="flex gap-2 flex-1 justify-end pr-1">
              {trustedFaces.map((face, index) => (
                <div
                  key={`${face.src}-${index}`}
                  className={`group relative h-[34px] w-[34px] sm:h-[72px] sm:w-[72px] overflow-hidden rounded-full bg-[linear-gradient(180deg,#3d2c1f_0%,#171a25_100%)] shadow-[0_10px_22px_rgba(0,0,0,0.32)]`}
                >
                  <Image
                    src={face.src}
                    alt={face.alt}
                    fill
                    sizes="68px"
                    className={`object-cover custom-hover ${face.className}`}
                  />
                </div>
              ))}
            </div>

            <div className="flex h-[34px] w-[34px] sm:h-[72px] sm:w-[72px] shrink-0 items-center justify-center rounded-full border border-lightBlue bg-[radial-gradient(circle_at_30%_30%,rgba(34,122,255,0.28),rgba(3,18,46,0.98)_70%)] text-[0.6rem] sm:text-[1.25rem] font-medium tracking-[-0.03em] text-[#3aa2ff] shadow-[0_0_0_1px_rgba(35,91,181,0.14),0_12px_24px_rgba(0,0,0,0.28)]">
              +50K
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCard;
