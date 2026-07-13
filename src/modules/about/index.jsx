import ChairmanFirmFutureSection from "./ChairmanFirmFutureSection";
import CompaniesProjectsSection from "./CompaniesProjectsSection";
import JourneySection from "./JourneySection";
import OwnerIntroSection from "./OwnerIntroSection";
import SupportSystemSection from "./SupportSystemSection";
import TrustedCompaniesSection from "./TrustedCompaniesSection";
import VenturesSection from "./VenturesSection";

export default function AboutPage() {
  return (
        <div className="relative overflow-hidden ">

          <div className="relative space-y-5">
            <OwnerIntroSection />

            <div className="flex flex-col lg:flex-row gap-3 ">
              <JourneySection />
              <SupportSystemSection />
            </div>

            <TrustedCompaniesSection />
            <CompaniesProjectsSection />
            <ChairmanFirmFutureSection />
            <VenturesSection /> 
          </div>
        </div>
  );
}
