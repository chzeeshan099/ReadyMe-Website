import AppFrame from "../../components/app-frame";
import PageHero from "../../components/page-hero";

export default function NotesPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Notes"
        title="Revision notes organized for quick web scanning."
        description="This route stands in for the app notes screen and is ready for real notes collections, filters, and subject tabs."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {["Biology diagrams", "Physics formulas", "Math revision checklist"].map((note) => (
          <div key={note} className="glass rounded-[28px] p-6">
            <h2 className="text-xl font-semibold text-white">{note}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Short study material card prepared for a website notes library layout.
            </p>
          </div>
        ))}
      </section>
    </AppFrame>
  );
}
