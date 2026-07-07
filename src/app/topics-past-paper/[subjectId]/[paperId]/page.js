import Link from "next/link";
import { notFound } from "next/navigation";
import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";
import { TOPIC_SUBJECTS, getTopicPaperById, getTopicSubjectById } from "@/lib/past-paper-data";

export function generateStaticParams() {
  const params = [];

  for (const subject of TOPIC_SUBJECTS) {
    for (const paper of subject.papers) {
      params.push({ subjectId: subject.id, paperId: paper.id });
    }
  }

  return params;
}

export default async function TopicPaperPage({ params }) {
  const { subjectId, paperId } = await params;
  const subject = getTopicSubjectById(subjectId);
  const paper = getTopicPaperById(subjectId, paperId);

  if (!subject || !paper) {
    notFound();
  }

  const totalQuestions = paper.sections.reduce((sum, section) => sum + section.totalQuestions, 0);

  return (
    <AppFrame>
      <PageHero
        badge={`${paper.title} Outline`}
        title={`${subject.name} ${paper.label}`}
        description={`Progress-style collection page with ${totalQuestions} mapped questions. Each section opens individual practice items the same way the app's topical collection screen does.`}
      />

      <section className="space-y-4">
        {paper.sections.map((section, index) => (
          <div key={section.id} className="glass rounded-[30px] p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Section {index + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{section.title}</h2>
              </div>
              <p className="text-sm text-slate-300">{section.totalQuestions} total questions</p>
            </div>

            <div className="mt-5 grid gap-3">
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/topics-past-paper/${subject.id}/${paper.id}/${item.id}`}
                  className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.pdfTitle}</p>
                    </div>
                    <div className="text-sm text-sky-300">
                      {item.questionCount} questions • {item.type}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </AppFrame>
  );
}
