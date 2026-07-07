import AppFrame from "../../components/app-frame";
import PageHero from "../../components/page-hero";

export default function TeacherDashboardPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Teacher Dashboard"
        title="Faculty insights and class tracking for web."
        description="A responsive teaching route has been added so the website can grow beyond the student side just like the app structure does."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {["Class progress", "Pending reviews", "Performance snapshots"].map((item) => (
          <div key={item} className="glass rounded-[28px] p-6 text-white">
            {item}
          </div>
        ))}
      </section>
    </AppFrame>
  );
}
