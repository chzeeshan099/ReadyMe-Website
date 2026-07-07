import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";

export default function ForgotPasswordPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Forgot Password"
        title="A recovery page is ready in the web route map."
        description="This keeps the auth flow complete so the website project starts with practical routing coverage."
      />
      <section className="glass mx-auto max-w-xl rounded-[32px] p-6 md:p-8">
        <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Enter your email" />
        <button className="mt-4 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white">Send reset link</button>
      </section>
    </AppFrame>
  );
}

