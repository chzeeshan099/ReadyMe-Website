import AppFrame from "@/components/app-frame";
import CourseCard from "@/components/course-card";
import PageHero from "@/components/page-hero";
import { courses } from "@/lib/site-data";

export default function CoursesPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Courses"
        title="Featured learning tracks for focused students."
        description="The web version preserves the same featured course flow from the app and turns each offering into a responsive details route."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </section>
    </AppFrame>
  );
}

