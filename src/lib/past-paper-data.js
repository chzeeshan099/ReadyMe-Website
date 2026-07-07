function buildMcqs(topicName, subjectCode, paperTitle, count = 20) {
  const keys = ["A", "B", "C", "D"];

  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const correctOption = keys[index % 4];

    return {
      id: `${subjectCode}-${paperTitle}-${topicName}-${number}`.toLowerCase().replace(/\s+/g, "-"),
      prompt: `${topicName} question ${number}. Choose the best answer using the key concept from this topic.`,
      options: [
        { key: "A", text: `A direct statement linked with ${topicName.toLowerCase()}` },
        { key: "B", text: "A common classroom misunderstanding from this chapter" },
        { key: "C", text: "A complete explanation using the right exam keyword" },
        { key: "D", text: "A partially correct choice missing one important detail" },
      ],
      correctOption,
      answerNote: `The correct answer is ${correctOption} because it matches the syllabus wording expected in this question.`,
    };
  });
}

function buildWrittenQuestions(topicName, label, count = 6) {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      id: `${label}-${topicName}-${number}`.toLowerCase().replace(/\s+/g, "-"),
      label: `Question ${number}`,
      prompt: `${topicName} structured response ${number}. Answer in a clear, stepwise exam style.`,
      explanation: `Answer plan for Question ${number}: define the idea, add one supporting point, and finish with the exact result the examiner expects.`,
    };
  });
}

function createTopicItem(subjectCode, paperTitle, title, questionCount, type) {
  return {
    id: `${subjectCode}-${paperTitle}-${title}`.toLowerCase().replace(/\s+/g, "-"),
    title,
    questionCount,
    type,
    pdfTitle: `${subjectCode} / ${paperTitle} / ${title}`,
    mcqs: type === "mcq" ? buildMcqs(title, subjectCode, paperTitle) : undefined,
    writtenQuestions: type === "mcq" ? undefined : buildWrittenQuestions(title, paperTitle),
  };
}

function sumQuestions(items) {
  return items.reduce((total, item) => total + item.questionCount, 0);
}

function buildBiologyTopicPapers() {
  const paper1Sections = [
    {
      id: "cells",
      title: "Cells",
      items: [
        createTopicItem("5090", "Paper 1", "1.1 Cell Structure And Function", 61, "mcq"),
        createTopicItem("5090", "Paper 1", "1.2 Specialised Cells, Tissues And Organs", 19, "mcq"),
      ],
    },
    {
      id: "classification",
      title: "Classification",
      items: [
        createTopicItem("5090", "Paper 1", "2.1 Concept And Use Of A Classification System", 8, "mcq"),
        createTopicItem("5090", "Paper 1", "2.2 Features Of Organisms", 34, "mcq"),
      ],
    },
    {
      id: "movement",
      title: "Movement Into And Out Of Cells",
      items: [
        createTopicItem("5090", "Paper 1", "3.1 Diffusion And Osmosis", 102, "mcq"),
        createTopicItem("5090", "Paper 1", "3.2 Active Transport", 64, "mcq"),
      ],
    },
    {
      id: "molecules",
      title: "Biological Molecules",
      items: [
        createTopicItem("5090", "Paper 1", "4.1 Carbohydrates, Fats And Proteins", 21, "mcq"),
        createTopicItem("5090", "Paper 1", "4.2 Enzymes", 22, "mcq"),
      ],
    },
  ].map((section) => ({
    ...section,
    totalQuestions: sumQuestions(section.items),
  }));

  const paper2Sections = [
    {
      id: "paper2-cells",
      title: "Cells",
      items: [
        createTopicItem("5090", "Paper 2", "1.1 Cell Structure And Function", 18, "theory"),
        createTopicItem("5090", "Paper 2", "1.2 Cell Transport And Surface Area", 11, "theory"),
      ],
    },
    {
      id: "paper2-organisation",
      title: "Organisation",
      items: [
        createTopicItem("5090", "Paper 2", "2.1 Movement Into And Out Of Cells", 13, "theory"),
        createTopicItem("5090", "Paper 2", "2.2 Biological Molecules", 10, "theory"),
      ],
    },
  ].map((section) => ({
    ...section,
    totalQuestions: sumQuestions(section.items),
  }));

  const paper3Sections = [
    {
      id: "paper3-practical",
      title: "Practical Skills",
      items: [
        createTopicItem("5090", "Paper 3", "3.1 Planning A Food Test", 14, "practical"),
        createTopicItem("5090", "Paper 3", "3.2 Drawing And Observation", 8, "practical"),
      ],
    },
  ].map((section) => ({
    ...section,
    totalQuestions: sumQuestions(section.items),
  }));

  const paper4Sections = [
    {
      id: "paper4-atp",
      title: "Alternative To Practical",
      items: [
        createTopicItem("5090", "Paper 4", "4.1 Experiment Variables And Conclusion", 16, "alternative"),
        createTopicItem("5090", "Paper 4", "4.2 Data Reading And Graph Skills", 12, "alternative"),
      ],
    },
  ].map((section) => ({
    ...section,
    totalQuestions: sumQuestions(section.items),
  }));

  return [
    { id: "paper-1", title: "Paper 1", label: "Multiple Choice", type: "mcq", sections: paper1Sections },
    { id: "paper-2", title: "Paper 2", label: "Theory", type: "theory", sections: paper2Sections },
    { id: "paper-3", title: "Paper 3", label: "Practical Test", type: "practical", sections: paper3Sections },
    { id: "paper-4", title: "Paper 4", label: "Alternative To Practical", type: "alternative", sections: paper4Sections },
  ];
}

function buildSimpleTopicPapers(subjectCode, subjectName) {
  const makeSections = (paperTitle, type) => {
    const items = [
      createTopicItem(subjectCode, paperTitle, `${subjectName} Core Concepts`, 24, type),
      createTopicItem(subjectCode, paperTitle, `${subjectName} Exam Practice`, 18, type),
    ];

    return [
      {
        id: `${paperTitle}-section-1`.toLowerCase().replace(/\s+/g, "-"),
        title: `${subjectName} Topics`,
        totalQuestions: sumQuestions(items),
        items,
      },
    ];
  };

  return [
    { id: "paper-1", title: "Paper 1", label: "Multiple Choice", type: "mcq", sections: makeSections("Paper 1", "mcq") },
    { id: "paper-2", title: "Paper 2", label: "Theory", type: "theory", sections: makeSections("Paper 2", "theory") },
    { id: "paper-3", title: "Paper 3", label: "Practical Test", type: "practical", sections: makeSections("Paper 3", "practical") },
    { id: "paper-4", title: "Paper 4", label: "Alternative To Practical", type: "alternative", sections: makeSections("Paper 4", "alternative") },
  ];
}

export const TOPIC_SUBJECTS = [
  {
    id: "accounting-7707",
    name: "Accounting",
    code: "7707",
    papers: buildSimpleTopicPapers("7707", "Accounting"),
  },
  {
    id: "additional-math-4037",
    name: "Additional Mathematics",
    code: "4037",
    papers: buildSimpleTopicPapers("4037", "Additional Mathematics"),
  },
  {
    id: "biology-5090",
    name: "Biology",
    code: "5090",
    papers: buildBiologyTopicPapers(),
  },
  {
    id: "business-7115",
    name: "Business Studies",
    code: "7115",
    papers: buildSimpleTopicPapers("7115", "Business Studies"),
  },
  {
    id: "chemistry-5070",
    name: "Chemistry",
    code: "5070",
    papers: buildSimpleTopicPapers("5070", "Chemistry"),
  },
];

function buildYearlyMcqs(subjectName, paperCode) {
  const keys = ["A", "B", "C", "D"];

  return Array.from({ length: 40 }, (_, index) => {
    const number = index + 1;
    const correctOption = keys[index % 4];

    return {
      id: `${paperCode}-q${number}`,
      prompt: `${subjectName} question ${number}. Select the best answer for this past paper item.`,
      options: [
        { key: "A", text: `Concept choice A for question ${number}` },
        { key: "B", text: `Concept choice B for question ${number}` },
        { key: "C", text: `Concept choice C for question ${number}` },
        { key: "D", text: `Concept choice D for question ${number}` },
      ],
      correctOption,
      answerNote: `The correct answer is ${correctOption} because this question tests a core ${subjectName.toLowerCase()} idea.`,
    };
  });
}

function buildYearlyWrittenQuestions(subjectName, paperLabel, count = 8) {
  return Array.from({ length: count }, (_, index) => ({
    id: `${paperLabel.toLowerCase().replace(/\s+/g, "-")}-q${index + 1}`,
    label: `Question ${index + 1}`,
    prompt: `${subjectName} ${paperLabel} Question ${index + 1}`,
    explanation: `Explanation for Question ${index + 1}: identify the command word, split the marking points, then answer with precise exam phrasing.`,
  }));
}

function buildPaperSections(subjectName, code) {
  return [
    {
      id: "mcq",
      title: "Paper 1: Multiple Choice",
      type: "mcq",
      variants: [
        {
          id: `${code}-paper11`,
          paperCode: "11",
          label: "Paper 11",
          grade: "A grade: 30/40",
          badges: ["QP", "MS"],
          type: "mcq",
          pdfTitle: `${code}/11 Multiple Choice`,
          questionCount: 40,
          mcqs: buildYearlyMcqs(subjectName, `${code}-11`),
        },
        {
          id: `${code}-paper12`,
          paperCode: "12",
          label: "Paper 12",
          grade: "A grade: 30/40",
          badges: ["QP", "MS"],
          type: "mcq",
          pdfTitle: `${code}/12 Multiple Choice`,
          questionCount: 40,
          mcqs: buildYearlyMcqs(subjectName, `${code}-12`),
        },
      ],
    },
    {
      id: "theory",
      title: "Paper 2: Theory",
      type: "theory",
      variants: [
        {
          id: `${code}-paper21`,
          paperCode: "21",
          label: "Paper 21",
          grade: "A grade: 49/80",
          badges: ["QP", "MS"],
          type: "theory",
          pdfTitle: `${code}/21 Theory`,
          questionCount: 8,
          writtenQuestions: buildYearlyWrittenQuestions(subjectName, "Paper 21"),
        },
        {
          id: `${code}-paper22`,
          paperCode: "22",
          label: "Paper 22",
          grade: "A grade: 51/80",
          badges: ["QP", "MS"],
          type: "theory",
          pdfTitle: `${code}/22 Theory`,
          questionCount: 8,
          writtenQuestions: buildYearlyWrittenQuestions(subjectName, "Paper 22"),
        },
      ],
    },
    {
      id: "practical",
      title: "Paper 3: Practical Test",
      type: "practical",
      variants: [
        {
          id: `${code}-paper31`,
          paperCode: "31",
          label: "Paper 31",
          grade: "A grade: 27/40",
          badges: ["QP", "MS", "CI"],
          type: "practical",
          pdfTitle: `${code}/31 Practical Test`,
          questionCount: 6,
          writtenQuestions: buildYearlyWrittenQuestions(subjectName, "Paper 31", 6),
        },
        {
          id: `${code}-paper32`,
          paperCode: "32",
          label: "Paper 32",
          grade: "A grade: 29/40",
          badges: ["QP", "MS", "CI"],
          type: "practical",
          pdfTitle: `${code}/32 Practical Test`,
          questionCount: 6,
          writtenQuestions: buildYearlyWrittenQuestions(subjectName, "Paper 32", 6),
        },
      ],
    },
    {
      id: "alternative",
      title: "Paper 4: Alternative To Practical",
      type: "alternative",
      variants: [
        {
          id: `${code}-paper41`,
          paperCode: "41",
          label: "Paper 41",
          grade: "A grade: 27/40",
          badges: ["QP", "MS"],
          type: "alternative",
          pdfTitle: `${code}/41 Alternative To Practical`,
          questionCount: 6,
          writtenQuestions: buildYearlyWrittenQuestions(subjectName, "Paper 41", 6),
        },
        {
          id: `${code}-paper42`,
          paperCode: "42",
          label: "Paper 42",
          grade: "A grade: 29/40",
          badges: ["QP", "MS"],
          type: "alternative",
          pdfTitle: `${code}/42 Alternative To Practical`,
          questionCount: 6,
          writtenQuestions: buildYearlyWrittenQuestions(subjectName, "Paper 42", 6),
        },
      ],
    },
  ];
}

function buildSessions(subjectName, code) {
  return [
    {
      id: `${code}-2024-oct-nov`,
      year: "2024",
      session: "Oct/Nov",
      difficulty: "Easy",
      resources: [{ id: `${code}-gt`, label: "Grade Threshold", fileName: `${code.toLowerCase()}_w24_gt.pdf` }],
      paperGroups: buildPaperSections(subjectName, code),
    },
    {
      id: `${code}-2024-may-june`,
      year: "2024",
      session: "May/June",
      difficulty: "Moderate",
      resources: [{ id: `${code}-gt-2`, label: "Grade Threshold", fileName: `${code.toLowerCase()}_s24_gt.pdf` }],
      paperGroups: buildPaperSections(subjectName, code),
    },
    {
      id: `${code}-2023-oct-nov`,
      year: "2023",
      session: "Oct/Nov",
      difficulty: "Hard",
      resources: [{ id: `${code}-gt-3`, label: "Grade Threshold", fileName: `${code.toLowerCase()}_w23_gt.pdf` }],
      paperGroups: buildPaperSections(subjectName, code),
    },
  ];
}

export const SUBJECT_GROUPS = [
  { id: "all", label: "All Subjects" },
  { id: "commerce", label: "Commerce Book" },
  { id: "mathematics", label: "Mathematics Book" },
  { id: "languages", label: "Languages Book" },
  { id: "science", label: "Science Book" },
  { id: "humanities", label: "Humanities Book" },
];

export const YEARLY_SUBJECTS = [
  { id: "acc-7707", name: "Accounting", code: "7707", group: "commerce", sessions: buildSessions("Accounting", "7707") },
  { id: "add-math-4037", name: "Additional Mathematics", code: "4037", group: "mathematics", sessions: buildSessions("Additional Mathematics", "4037") },
  { id: "biology-5090", name: "Biology", code: "5090", group: "science", sessions: buildSessions("Biology", "5090") },
  { id: "arabic-3180", name: "Arabic", code: "3180", group: "languages", sessions: buildSessions("Arabic", "3180") },
  { id: "business-7115", name: "Business Studies", code: "7115", group: "commerce", sessions: buildSessions("Business Studies", "7115") },
  { id: "bangladesh-2094", name: "Bangladesh Studies", code: "2094", group: "humanities", sessions: buildSessions("Bangladesh Studies", "2094") },
];

export function getTopicSubjectById(subjectId) {
  return TOPIC_SUBJECTS.find((subject) => subject.id === subjectId) ?? null;
}

export function getTopicPaperById(subjectId, paperId) {
  const subject = getTopicSubjectById(subjectId);
  return subject?.papers.find((paper) => paper.id === paperId) ?? null;
}

export function getTopicItemById(subjectId, paperId, itemId) {
  const paper = getTopicPaperById(subjectId, paperId);

  if (!paper) {
    return null;
  }

  for (const section of paper.sections) {
    const item = section.items.find((entry) => entry.id === itemId);

    if (item) {
      return { paper, section, item };
    }
  }

  return null;
}

export function getYearlySubjectById(subjectId) {
  return YEARLY_SUBJECTS.find((subject) => subject.id === subjectId) ?? null;
}

export function getYearlySessionById(subjectId, sessionId) {
  const subject = getYearlySubjectById(subjectId);
  return subject?.sessions.find((session) => session.id === sessionId) ?? null;
}

export function getYearlyVariantById(subjectId, sessionId, variantId) {
  const session = getYearlySessionById(subjectId, sessionId);

  if (!session) {
    return null;
  }

  for (const group of session.paperGroups) {
    const variant = group.variants.find((item) => item.id === variantId);
    if (variant) {
      return { group, variant };
    }
  }

  return null;
}
