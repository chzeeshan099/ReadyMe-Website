import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";

export default function FeedbackPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Feedback"
        title="A polished feedback screen ready for web form wiring."
        description="This page mirrors the app's feedback module and gives you a simple place to connect forms, reviews, or support tickets later."
      />

      <section className="glass rounded-[32px] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Your name" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Email address" />
        </div>
        <textarea
          className="mt-4 min-h-48 w-full rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          placeholder="Share your experience, issues, or feature request..."
        />
        <button className="mt-4 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white">Submit feedback</button>
      </section>
    </AppFrame>
  );
}

