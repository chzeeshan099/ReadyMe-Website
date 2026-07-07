import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="glass rounded-[30px] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{course.level}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{course.title}</h3>
        </div>
        <span className="rounded-full border border-sky-300/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">
          {course.duration}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{course.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {course.syllabus.map((item) => (
          <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
            {item}
          </span>
        ))}
      </div>

      <Link
        href={`/courses/${course.slug}`}
        className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
      >
        View details
      </Link>
    </div>
  );
}

