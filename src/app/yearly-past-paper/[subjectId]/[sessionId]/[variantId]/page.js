import { notFound } from "next/navigation";
import AppFrame from "@/components/app-frame";
import McqPractice from "@/components/mcq-practice";
import WrittenPractice from "@/components/written-practice";
import { getYearlyVariantById, YEARLY_SUBJECTS } from "@/lib/past-paper-data";

export function generateStaticParams() {
  const params = [];

  for (const subject of YEARLY_SUBJECTS) {
    for (const session of subject.sessions) {
      for (const group of session.paperGroups) {
        for (const variant of group.variants) {
          params.push({ subjectId: subject.id, sessionId: session.id, variantId: variant.id });
        }
      }
    }
  }

  return params;
}

export default async function YearlyVariantPage({ params }) {
  const { subjectId, sessionId, variantId } = await params;
  const paperData = getYearlyVariantById(subjectId, sessionId, variantId);

  if (!paperData) {
    notFound();
  }

  return (
    <AppFrame>
      {paperData.variant.type === "mcq" ? (
        <McqPractice
          title={paperData.variant.label}
          subtitle={paperData.variant.pdfTitle}
          questions={paperData.variant.mcqs ?? []}
        />
      ) : (
        <WrittenPractice
          title={paperData.variant.label}
          subtitle={paperData.variant.pdfTitle}
          questions={paperData.variant.writtenQuestions ?? []}
          label={paperData.group.title}
        />
      )}
    </AppFrame>
  );
}
