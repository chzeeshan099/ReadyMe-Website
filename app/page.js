import Link from "next/link";
import AppFrame from "../components/app-frame";
import CourseCard from "../components/course-card";
import SectionCard from "../components/section-card";
import {
  courses,
  founderFeatures,
  quickLinks,
  stats,
  toolPages,
} from "../lib/site-data";

export default function HomePage() {
  return (
    <AppFrame>
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass grid-fade rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-sky-300">Tuesday 23 June</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-7xl">
            Welcome back. Ready Me is now shaped for web.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Same learning story, same premium study vibe, now rebuilt as a fully responsive Next.js website
            with clean page routing and desktop-first structure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-full bg-sky-500 px-5 py-3 font-semibold text-white">
              Open dashboard
            </Link>
            <Link href="/courses" className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white">
              Browse courses
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => (
              <SectionCard key={item.href} {...item} action="Explore" />
            ))}
          </div>
        </div>

        <div className="glass overflow-hidden rounded-[36px] p-4 md:p-6">
          <img
            src="/hero-image.png"
            alt="Ready Me hero"
            className="h-full min-h-[380px] w-full rounded-[28px] object-cover object-top"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="glass rounded-[28px] p-6">
            <item.icon className="text-sky-300" size={26} />
            <div className="mt-6 text-4xl font-semibold text-white">{item.value}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300">{item.label}</div>
          </div>
        ))}
      </section>

      <section className="glass rounded-[36px] px-6 py-10 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-sky-300">Founder's Message</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          This is not just an app. It is the future of education, now redesigned for the browser.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {founderFeatures.map((feature) => (
            <SectionCard
              key={feature.title}
              title={feature.title}
              description={feature.subtitle}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Featured Courses</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Same study paths, web-ready cards</h2>
          </div>
          <Link href="/courses" className="text-sm font-semibold text-sky-300">
            See all courses
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Platform Routes</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Major modules already mapped to pages</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPages.map((item) => (
            <SectionCard key={item.href} {...item} action="Open route" />
          ))}
        </div>
      </section>
    </AppFrame>
  );
}
