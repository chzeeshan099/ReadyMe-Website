import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";
import { pricingPlans } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Plans"
        title="Pricing that matches the app's premium learning story."
        description="Starter and premium options are laid out as scalable website cards, giving your client a clean sales page foundation."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="glass rounded-[32px] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{plan.badge}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">{plan.name}</h2>
              </div>
              <div className="text-right text-3xl font-semibold text-white">{plan.price}</div>
            </div>
            <div className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </AppFrame>
  );
}

