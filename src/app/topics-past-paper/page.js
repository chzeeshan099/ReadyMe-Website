import Link from "next/link";
import AppFrame from "@/components/app-frame";
import PageHero from "@/components/page-hero";
import { TOPIC_SUBJECTS } from "@/lib/past-paper-data";

export default function TopicsPastPaperPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Topics Past Papers"
        title="Pin your subjects and drill down exactly like the app flow."
        description="The web version now supports the same topical structure: choose a subject, open a paper type, browse sections, then launch MCQ or written practice screens."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {TOPIC_SUBJECTS.map((subject) => (
          <Link
            key={subject.id}
            href={`/topics-past-paper/${subject.id}`}
            className="glass rounded-[30px] p-6 transition hover:-translate-y-0.5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{subject.code}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{subject.name}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Open available papers, sections, and topic-wise practice items.
            </p>
          </Link>
        ))}
      </section>
    </AppFrame>
  );
}

