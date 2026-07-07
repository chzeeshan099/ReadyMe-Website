import Link from "next/link";
import { notFound } from "next/navigation";
import AppFrame from "../../../components/app-frame";
import PageHero from "../../../components/page-hero";
import { TOPIC_SUBJECTS, getTopicSubjectById } from "../../../lib/past-paper-data";

export function generateStaticParams() {
  return TOPIC_SUBJECTS.map((subject) => ({ subjectId: subject.id }));
}

export default async function TopicSubjectPage({ params }) {
  const { subjectId } = await params;
  const subject = getTopicSubjectById(subjectId);

  if (!subject) {
    notFound();
  }

  return (
    <AppFrame>
      <PageHero
        badge="Choose Paper"
        title={`${subject.name} topical papers`}
        description={`Available papers for ${subject.code}. This matches the app's second step where users choose Paper 1, 2, 3, or 4 before opening topic collections.`}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {subject.papers.map((paper) => {
          const totalQuestions = paper.sections.reduce((sum, section) => sum + section.totalQuestions, 0);

          return (
            <Link
              key={paper.id}
              href={`/topics-past-paper/${subject.id}/${paper.id}`}
              className="glass rounded-[30px] p-6 transition hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{paper.label}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{paper.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{totalQuestions} questions mapped across sections</p>
            </Link>
          );
        })}
      </section>
    </AppFrame>
  );
}
