import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";

export default function RegisterPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Register"
        title="A web signup route for new students."
        description="This page gives the website a matching registration entry point aligned with the app's auth flow."
      />
      <section className="glass mx-auto max-w-2xl rounded-[32px] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Full name" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Email" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Role" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Subjects" />
        </div>
        <button className="mt-4 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white">Create account</button>
      </section>
    </AppFrame>
  );
}

