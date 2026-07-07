import AppFrame from "../../components/app-frame";
import PageHero from "../../components/page-hero";
import YearlySubjectBrowser from "../../components/yearly-subject-browser";
import { SUBJECT_GROUPS, YEARLY_SUBJECTS } from "../../lib/past-paper-data";

export default function YearlyPastPaperPage() {
  return (
    <AppFrame>
      <PageHero
        badge="Yearly Past Papers"
        title="Search, filter, and open sessions just like the app."
        description="The yearly web flow now supports book filters, subject search, session pages, paper groups, resource blocks, and dedicated MCQ or written viewers."
      />

      <YearlySubjectBrowser groups={SUBJECT_GROUPS} subjects={YEARLY_SUBJECTS} />
    </AppFrame>
  );
}
