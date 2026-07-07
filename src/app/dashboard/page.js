import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";
import SectionCard from "@/components/section-card";
import { toolPages } from "@/lib/site-data";

export default function DashboardPage() {
  const pastPaperPages = toolPages.filter((item) =>
    ["/topics-past-paper", "/yearly-past-paper", "/test-mock-builder"].includes(item.href),
  );

  return (
    <AppFrame>
      <PageHero
        badge="Past Papers"
        title="Past paper practice, sorted for fast revision."
        description="Open topic-wise drills, yearly sessions, and custom mock flows from one place so students can jump straight into practice."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {pastPaperPages.map((item) => (
          <SectionCard key={item.href} title={item.title} description={item.description} icon={item.icon} action="Open" />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-[32px] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Practice Flow</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Choose the paper style that matches your revision plan</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Topic-wise papers help with weak chapters, yearly papers simulate the real exam, and mock builder lets
            you combine sets into one timed session.
          </p>
          <img
            src="/hero-image.png"
            alt="Past papers preview"
            className="mt-8 h-[360px] w-full rounded-[28px] object-cover object-top"
          />
        </div>

        <div className="grid gap-4">
          {toolPages.slice(3).map((item) => (
            <SectionCard key={item.href} {...item} action="More tools" />
          ))}
        </div>
      </section>
    </AppFrame>
  );
}

