import AppFrame from "../../components/app-frame";
import PageHero from "../../components/page-hero";

export default function LoginPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Login"
        title="A responsive sign-in page for the website flow."
        description="The auth journey has also been mapped so your client can see how the app experience extends into web entry points."
      />
      <section className="glass mx-auto max-w-xl rounded-[32px] p-6 md:p-8">
        <div className="space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Email" />
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-sky-500 px-5 py-3 font-semibold text-white">Sign in</button>
        </div>
      </section>
    </AppFrame>
  );
}
