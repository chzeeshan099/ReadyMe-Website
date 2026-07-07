import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";

export default function AdminPanelPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Admin Panel"
        title="Website-ready control center for content and accounts."
        description="This route gives you an admin surface matching the app's broader module map and keeps the project future-friendly."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {["Manage users", "Control content", "Track submissions", "Review reports"].map((item) => (
          <div key={item} className="glass rounded-[28px] p-6 text-white">
            {item}
          </div>
        ))}
      </section>
    </AppFrame>
  );
}

