import { notFound } from "next/navigation";
import AppFrame from "@/components/app-frame";
import McqPractice from "@/components/mcq-practice";
import WrittenPractice from "@/components/written-practice";
import { TOPIC_SUBJECTS, getTopicItemById } from "@/lib/past-paper-data";

export function generateStaticParams() {
  const params = [];

  for (const subject of TOPIC_SUBJECTS) {
    for (const paper of subject.papers) {
      for (const section of paper.sections) {
        for (const item of section.items) {
          params.push({ subjectId: subject.id, paperId: paper.id, itemId: item.id });
        }
      }
    }
  }

  return params;
}

export default async function TopicItemPage({ params }) {
  const { subjectId, paperId, itemId } = await params;
  const paperData = getTopicItemById(subjectId, paperId, itemId);

  if (!paperData) {
    notFound();
  }

  return (
    <AppFrame>
      {paperData.item.type === "mcq" ? (
        <McqPractice
          title={paperData.paper.title}
          subtitle={paperData.item.pdfTitle}
          questions={paperData.item.mcqs ?? []}
        />
      ) : (
        <WrittenPractice
          title={paperData.paper.title}
          subtitle={paperData.item.pdfTitle}
          questions={paperData.item.writtenQuestions ?? []}
          label={paperData.section.title}
        />
      )}
    </AppFrame>
  );
}
