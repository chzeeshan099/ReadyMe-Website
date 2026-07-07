import Link from "next/link";
import { notFound } from "next/navigation";
import AppFrame from "../../../components/app-frame";
import { courses, getCourseBySlug } from "../../../lib/site-data";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <AppFrame>
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{course.level}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{course.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{course.description}</p>

          <div className="mt-8 inline-flex rounded-full border border-sky-300/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-200">
            Duration: {course.duration}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">What students cover</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {course.syllabus.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[36px] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Website Flow</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Responsive detail route</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            This route shows how app-level course navigation has been translated into browser pages with clean URLs.
          </p>
          <div className="mt-8 space-y-3">
            <Link href="/ai-chat" className="block rounded-2xl bg-white/5 px-4 py-4 text-slate-100 hover:bg-white/10">
              Open AI chat for study support
            </Link>
            <Link href="/pricing" className="block rounded-2xl bg-white/5 px-4 py-4 text-slate-100 hover:bg-white/10">
              View premium plan options
            </Link>
            <Link href="/courses" className="block rounded-2xl bg-sky-500 px-4 py-4 font-semibold text-white">
              Back to all courses
            </Link>
          </div>
        </div>
      </section>
    </AppFrame>
  );
}
