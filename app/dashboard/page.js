import AppFrame from "../../components/app-frame";
import PageHero from "../../components/page-hero";
import SectionCard from "../../components/section-card";
import { dashboardCards, toolPages } from "../../lib/site-data";

export default function DashboardPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Dashboard"
        title="A browser-friendly Ready Me command center."
        description="This page mirrors the app dashboard idea with hero content, practice hubs, planning prompts, and quick route access for larger screens and phones."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {dashboardCards.map((card) => (
          <SectionCard key={card.title} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-[32px] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Visual Preview</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Current app artwork reused for web</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            The new site carries over the same bold study-tech visual direction so the client can feel continuity
            between the mobile product and the website version.
          </p>
          <img
            src="/dashboard-preview.png"
            alt="Dashboard preview"
            className="mt-8 h-[360px] w-full rounded-[28px] object-contain bg-[#020611]"
          />
        </div>

        <div className="grid gap-4">
          {toolPages.slice(0, 3).map((item) => (
            <SectionCard key={item.href} {...item} action="Jump in" />
          ))}
        </div>
      </section>
    </AppFrame>
  );
}
