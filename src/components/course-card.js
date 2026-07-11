import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="glass rounded-[30px] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="theme-accent text-xs uppercase tracking-[0.35em]">{course.level}</p>
          <h3 className="theme-text mt-3 text-2xl font-semibold">{course.title}</h3>
        </div>
        <span className="theme-chip rounded-full px-3 py-1 text-xs">
          {course.duration}
        </span>
      </div>

      <p className="theme-muted mt-4 text-sm leading-7">{course.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {course.syllabus.map((item) => (
          <span key={item} className="theme-surface theme-text-soft rounded-full px-3 py-1 text-xs">
            {item}
          </span>
        ))}
      </div>

      <Link
        href={`/courses/${course.slug}`}
        className="theme-button-secondary mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold transition"
      >
        View details
      </Link>
    </div>
  );
}

