import { Globe, Rocket } from "lucide-react";
import Image from "next/image";
import { FaArrowPointer } from "react-icons/fa6";

export default function ChairmanFirmFutureSection() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      <div className="group rounded-[26px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-blue">Chairman Of</h2>
        <div className="mt-5">
          <Image
            src="/BA-Group-Logo1.png"
            alt="BA-Group-Logo"
            width={2172}
            height={724}
            priority
            quality={100}
            className="h-auto w-[150px] object-contain custom-hover"
          />
        </div>
        <p className="mt-4 text-textWhiteLight">
          BA Group is a dynamic holding company with diverse ventures across multiple industries in Pakistan and internationally.
        </p>
      </div>






      <div className="group rounded-[26px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-blue">Our Firm</h2>
        <div className="mt-5 flex items-center gap-1 sm:gap-4 rounded-[18px] border border-[#17345e] bg-[#071223] px-2 sm:px-4 py-4">
          <div className="flex h-8 sm:h-12 w-8 sm:w-12 items-center justify-center rounded-full text-blue">
            <Globe className="h-5 w-5 custom-hover"/>
          </div>
          <p className="text-sm sm:text-base text-textWhiteLight">bilawalarraingroup.com</p>
          <FaArrowPointer className="text-blue custom-hover" />
        </div>
        <p className="mt-5 text-textWhiteLight">
          Visit our website to explore our companies, services, achievements &amp; impact.
        </p>
      </div>






      <div className="group rounded-[26px] border border-lightBlue bg-[linear-gradient(180deg,rgba(4,11,24,0.96),rgba(3,9,18,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-blue">The Future Is Limitless</h2>
        <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full border border-blue bg-[radial-gradient(circle,rgba(41,119,255,0.18),transparent_60%)] text-[#1c7bff]">
          <Image
            src="/airoplan.png"
            alt="airoplan logo"
            width={2172}
            height={724}
            priority
            quality={100}
            className="h-auto max-w-[40px] object-contain custom-hover"
          />
        </div>
        <p className="mt-5 text-textWhiteLight">
          Bilawal Arain is just getting started. Many more projects, global collaborations, and life-changing opportunities for students are on the way.
        </p>
        <p className="mt-1 text-lg font-medium text-blue">The best is yet to come.</p>
      </div>

    </section>
  );
}
