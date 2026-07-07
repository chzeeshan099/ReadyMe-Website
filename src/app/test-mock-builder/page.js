import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";

export default function TestMockBuilderPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Mock Builder"
        title="Assemble custom practice tests from the browser."
        description="The mock builder page provides a clean web foundation for test generation, timing controls, and subject selection."
      />

      <section className="glass rounded-[32px] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {["Choose subject", "Select difficulty", "Generate timed test"].map((step) => (
            <div key={step} className="rounded-[24px] bg-white/5 px-4 py-6 text-center text-slate-100">
              {step}
            </div>
          ))}
        </div>
      </section>
    </AppFrame>
  );
}

