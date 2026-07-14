import ChairmanFirmFutureSection from "./ChairmanFirmFutureSection";
import CompaniesProjectsSection from "./CompaniesProjectsSection";
import JourneySection from "./JourneySection";
import OwnerIntroSection from "./OwnerIntroSection";
import SupportSystemSection from "./SupportSystemSection";
import TrustedCompaniesSection from "./TrustedCompaniesSection";
import VenturesSection from "./VenturesSection";
import { Reveal } from "@/components/motion-system";

export default function AboutPage() {
  return (
        <div className="relative overflow-hidden ">

          <div className="relative space-y-5">
            <Reveal direction="left">
              <OwnerIntroSection />
            </Reveal>

            <Reveal delay={0.04} direction="right">
              <div className="flex flex-col lg:flex-row gap-3 ">
                <JourneySection />
                <SupportSystemSection />
              </div>
            </Reveal>

            <Reveal delay={0.08} direction="bottom">
              <TrustedCompaniesSection />
            </Reveal>
            <Reveal delay={0.12} direction="left">
              <CompaniesProjectsSection />
            </Reveal>
            <Reveal delay={0.16} direction="right">
              <ChairmanFirmFutureSection />
            </Reveal>
            <Reveal delay={0.2} direction="bottom">
              <VenturesSection />
            </Reveal>
          </div>
        </div>
  );
}
