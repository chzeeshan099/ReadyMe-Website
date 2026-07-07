import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";

export default function ProfilePage() {
  return (
    <AppFrame>
      <PageHero
        badge="Profile"
        title="Student identity, goals, and study preferences."
        description="The profile route gives the web build a clean account area, matching the app's role-based personalized experience."
      />

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass rounded-[32px] p-6 md:p-8">
          <div className="h-20 w-20 rounded-full bg-sky-500/20" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Muhammad</h2>
          <p className="mt-2 text-sm text-slate-300">Student • Future-ready learning path</p>
        </div>
        <div className="glass rounded-[32px] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Study Snapshot</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Math", "Physics", "Biology"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/5 px-4 py-5 text-center text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppFrame>
  );
}

