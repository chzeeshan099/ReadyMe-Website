import Image from "next/image";
import MobileSecreens from "./MobileSecreens";

export default function HowItWorksPage() {
  return (
        <div className="overflow-hidden">
            <div className="flex items-center justify-between gap-1 sm:gap-3 -mt-2 lg:-mt-3">
              <div className="text-center lg:text-left w-[17%]">
                <Image
                  src="/BA-Group-Logo1.png"
                  alt="missing BA Group Logo"
                  width={1672}
                  height={941}
                  priority
                  quality={100}
                  className="h-auto w-full object-fill"
                />
              </div>

              <div className="text-center w-[60%]">
                <h1 className="text-base sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                  <span className="text-white">HOW IT</span>{" "}
                  <span className="bg-[linear-gradient(90deg,#1369ff_0%,#244cff_30%,#5d38ff_72%,#8d3dff_100%)] bg-clip-text text-transparent">
                    WORKS
                  </span>
                </h1>

                <p className="-mt-1 text-xs sm:text-xl leading-5 text-textWhiteLight ">
                  Just a few steps to join the <span className="text-blue">future of learning.</span>
                </p>

              </div>

              <div className="mx-auto w-[23%]">
                 <Image
                  src="/cap.png"
                  alt="missing cap image"
                  width={1672}
                  height={941}
                  priority
                  quality={100}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="mt-8">
              <MobileSecreens />
            </div>
        </div>
  );
}
