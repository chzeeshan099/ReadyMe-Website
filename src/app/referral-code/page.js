import AppFrame from "../../components/app-frame";
import PageHero from "../../components/page-hero";

export default function ReferralCodePage() {
  return (
    <AppFrame>
      <PageHero
        badge="Referral Code"
        title="Invite classmates and grow the learning network."
        description="This route mirrors the referral module and gives the website a marketing-friendly share page."
      />

      <section className="glass rounded-[32px] p-6 md:p-8">
        <div className="rounded-[24px] bg-white/5 px-5 py-5 text-center text-2xl font-semibold tracking-[0.25em] text-white">
          READYME-2026
        </div>
      </section>
    </AppFrame>
  );
}
