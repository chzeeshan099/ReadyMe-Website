import Image from "next/image";

export default function OwnerIntroSection() {
  return (
     <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 ">
        <div className="w-full md:w-[40%]">

          <div className="">
            <Image
              src="/owner%20images/signature.png"
              alt="Bilawal Arain signature"
              width={2172}
              height={724}
              priority
              quality={100}
              sizes="(max-width: 768px) 80vw, 540px"
              className="h-auto w-full max-w-[460px] object-contain"
            />
          </div>

          <p className="text-[1.2rem] leading-8 text-textWhiteLight sm:text-[1.35rem]">
            Founder &amp; CEO of <span className="text-[#0b7bff]">ReadyMe</span>
          </p>

          <div className="mt-4 inline-flex items-center gap-1 sm:gap-3 rounded-[14px] border border-blue px-2 sm:px-4 py-3 ">
          <Image
              src="/Flag_of_Pakistan.webp"
              alt="Bilawal Arain signature"
              width={2172}
              height={724}
              priority
              quality={100}
              className="h-auto w-[25px] sm:w-[50px] object-contain"
            />
            <span className="text-xs sm:text-sm uppercase sm:tracking-[0.08em] text-textWhiteLight">Pakistan&apos;s Youngest Entrepreneur</span>
          </div>

          <div className="mt-4 max-w-[360px]">
            <p className="text-6xl leading-none">
              <span className="text-8xl leading-none text-purple">‘</span>
              <span className="text-8xl leading-none text-blue">‘</span>
            </p>
            <p className="-mt-12 text-[1.5rem] leading-[1.2] text-textWhiteLight sm:text-[1.8rem]">
              I don&apos;t just dream about the future, I&apos;m building it.
            </p>
            <div className="mt-6 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,#7d3bff,#2f7dff)]" />
          </div>
        </div>

        <div className="relative w-full md:w-[60%]">
          <Image
            src="/owner%20images/about1.png"
            alt="Bilawal Arain portrait"
            width={1705}
            height={922}
            priority
            quality={100}
            className="relative z-10 h-auto md:h-[450px] lg:h-[500px] w-full"
          />
        </div>
      </div>
     </>
  );
}
