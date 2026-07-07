import Link from "next/link";
import { notFound } from "next/navigation";
import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";
import { getYearlySubjectById, YEARLY_SUBJECTS } from "@/lib/past-paper-data";

export function generateStaticParams() {
  return YEARLY_SUBJECTS.map((subject) => ({ subjectId: subject.id }));
}

export default async function YearlySubjectPage({ params }) {
  const { subjectId } = await params;
  const subject = getYearlySubjectById(subjectId);

  if (!subject) {
    notFound();
  }

  return (
    <AppFrame>
      <PageHero
        badge={subject.code}
        title={`${subject.name} yearly sessions`}
        description="Open a session first, then choose from grouped paper variants the same way the app's yearly subject screen works."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {subject.sessions.map((session) => (
          <Link
            key={session.id}
            href={`/yearly-past-paper/${subject.id}/${session.id}`}
            className="glass rounded-[30px] p-6 transition hover:-translate-y-0.5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{session.difficulty}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {session.session} {session.year}
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              {session.paperGroups.length} grouped paper sections and {session.resources.length} resource file
              {session.resources.length > 1 ? "s" : ""}.
            </p>
          </Link>
        ))}
      </section>
    </AppFrame>
  );
}
