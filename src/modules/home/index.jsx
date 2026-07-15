import React from "react";
import HeroSection from "@/modules/home/HeroSection.jsx";
import FeaturesPage from "@/modules/features";
import CommunitiesPage from "@/modules/communities";
import LiveClassesPage from "@/modules/live-classes";
import HowItWorksPage from "@/modules/how-it-works";
import StrugglePage from "@/modules/struggle";
import { Reveal } from "@/components/motion-system";

function HomeSectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-[900px] text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0B9DFF]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-[760px] text-base leading-8 text-[#b8c5de] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

const index = () => {
  return (
    <div className="space-y-20 pb-12 sm:space-y-24">
      <Reveal>
        <HeroSection />
      </Reveal>

      <section className="space-y-10">
        <Reveal delay={0.04} direction="bottom">
          <HomeSectionIntro
            eyebrow="Everything In One Place"
            title="A richer homepage that shows the full ReadyMe experience."
            description="We have brought the strongest parts of ReadyMe together on the home page so visitors can instantly understand the platform, the learning tools, the communities, and the support waiting for them."
          />
        </Reveal>

        <FeaturesPage />
      </section>

      <section className="space-y-10">
        <Reveal delay={0.04} direction="bottom">
          <HomeSectionIntro
            eyebrow="Student Journey"
            title="Learn smarter, connect faster, and stay supported."
            description="From subject communities to guided learning spaces, the home page now gives a stronger picture of how students study, collaborate, and grow inside ReadyMe."
          />
        </Reveal>

        <CommunitiesPage />
      </section>

      <section className="space-y-10">
        <Reveal delay={0.04} direction="bottom">
          <HomeSectionIntro
            eyebrow="Expert Support"
            title="Live classes and real teachers, not just static content."
            description="Visitors can now see that ReadyMe is more than resources. It also brings live teaching, trusted mentors, and classroom-quality support into one platform."
          />
        </Reveal>

        <LiveClassesPage />
      </section>

      <section className="space-y-10">
        <Reveal delay={0.04} direction="bottom">
          <HomeSectionIntro
            eyebrow="How It Works"
            title="A clearer path from discovery to daily learning."
            description="Adding the onboarding flow to the home page helps users quickly understand how ReadyMe fits into their routine across devices and study sessions."
          />
        </Reveal>

        <HowItWorksPage />
      </section>

      <section className="space-y-10">
        <Reveal delay={0.04} direction="bottom">
          <HomeSectionIntro
            eyebrow="Why ReadyMe"
            title="The mission behind the platform now appears on the homepage too."
            description="We also surfaced the strongest trust-building story elements so the home page communicates not only what ReadyMe offers, but why it matters for students."
          />
        </Reveal>

        <StrugglePage />
      </section>
    </div>
  );
};

export default index;
