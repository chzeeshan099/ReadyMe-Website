import Link from "next/link";
import { notFound } from "next/navigation";
import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";
import { getYearlySessionById, getYearlySubjectById, YEARLY_SUBJECTS } from "@/lib/past-paper-data";

export function generateStaticParams() {
  const params = [];

  for (const subject of YEARLY_SUBJECTS) {
    for (const session of subject.sessions) {
      params.push({ subjectId: subject.id, sessionId: session.id });
    }
  }

  return params;
}

export default async function YearlySessionPage({ params }) {
  const { subjectId, sessionId } = await params;
  const subject = getYearlySubjectById(subjectId);
  const session = getYearlySessionById(subjectId, sessionId);

  if (!subject || !session) {
    notFound();
  }

  return (
    <AppFrame>
      <PageHero
        badge={`${session.session} ${session.year}`}
        title={`${subject.name} session hub`}
        description="Grouped cards for Paper 1 to Paper 4 plus resource files, closely following the app's yearly session screen."
      />

      <section className="space-y-4">
        {session.paperGroups.map((group) => (
          <div key={group.id} className="glass rounded-[30px] p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{group.type}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{group.title}</h2>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {group.variants.map((variant) => (
                <Link
                  key={variant.id}
                  href={`/yearly-past-paper/${subject.id}/${session.id}/${variant.id}`}
                  className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{variant.label}</h3>
                      <p className="mt-1 text-sm text-slate-300">{variant.pdfTitle}</p>
                    </div>
                    <div className="text-right text-sm text-sky-300">{variant.questionCount} questions</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {variant.badges.map((badge) => (
                      <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{variant.grade}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="glass rounded-[30px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Resources</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {session.resources.map((resource) => (
              <div key={resource.id} className="rounded-[24px] bg-white/5 px-4 py-4">
                <h3 className="text-lg font-semibold text-white">{resource.label}</h3>
                <p className="mt-2 text-sm text-slate-300">{resource.fileName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppFrame>
  );
}
