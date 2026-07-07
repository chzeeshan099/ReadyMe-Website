"use client";

import { useMemo, useState } from "react";

export default function McqPractice({ title, subtitle, questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const currentQuestion = questions[currentIndex];

  const correctCount = useMemo(
    () =>
      Object.entries(selectedAnswers).filter(([questionId, answer]) => {
        const item = questions.find((question) => question.id === questionId);
        return item?.correctOption === answer;
      }).length,
    [questions, selectedAnswers],
  );

  if (!currentQuestion) {
    return null;
  }

  const selectedOption = selectedAnswers[currentQuestion.id];
  const revealed = revealedAnswers[currentQuestion.id];

  return (
    <div className="space-y-6">
      <section className="glass rounded-[32px] p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{title}</p>
        <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{subtitle}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white/5 px-4 py-4 text-slate-200">Score: {correctCount}</div>
          <div className="rounded-2xl bg-white/5 px-4 py-4 text-slate-200">
            Progress: {currentIndex + 1}/{questions.length}
          </div>
          <button
            type="button"
            onClick={() =>
              setRevealedAnswers((current) => ({ ...current, [currentQuestion.id]: !current[currentQuestion.id] }))
            }
            className="rounded-2xl bg-white/5 px-4 py-4 text-left text-slate-200"
          >
            {revealed ? "Hide Answer" : "Reveal Answer"}
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentIndex(0);
              setSelectedAnswers({});
              setRevealedAnswers({});
            }}
            className="rounded-2xl bg-sky-500 px-4 py-4 text-left font-semibold text-white"
          >
            Restart
          </button>
        </div>
      </section>

      <section className="glass rounded-[32px] p-6 md:p-8">
        <div className="rounded-[28px] border border-white/10 bg-[#030916] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Question {currentIndex + 1}</p>
          <p className="mt-4 text-lg leading-8 text-white">{currentQuestion.prompt}</p>

          <div className="mt-6 grid gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option.key;
              const isCorrect = currentQuestion.correctOption === option.key;
              const shouldHighlight = revealed && isCorrect;

              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() =>
                    setSelectedAnswers((current) => ({
                      ...current,
                      [currentQuestion.id]: option.key,
                    }))
                  }
                  className={`rounded-[22px] border px-4 py-4 text-left transition ${
                    shouldHighlight
                      ? "border-emerald-400 bg-emerald-500/15 text-white"
                      : isSelected
                        ? "border-sky-400 bg-sky-500/15 text-white"
                        : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span className="block text-sm font-semibold text-sky-300">{option.key}</span>
                  <span className="mt-2 block text-sm leading-7">{option.text}</span>
                </button>
              );
            })}
          </div>

          {revealed ? (
            <div className="mt-6 rounded-[24px] bg-emerald-500/10 px-4 py-4 text-sm leading-7 text-emerald-100">
              {currentQuestion.answerNote}
            </div>
          ) : null}
        </div>
      </section>

      <section className="glass rounded-[32px] p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {questions.map((question, index) => {
              const answered = selectedAnswers[question.id];
              return (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-11 w-11 rounded-full text-sm font-semibold ${
                    currentIndex === index
                      ? "bg-sky-500 text-white"
                      : answered
                        ? "bg-white text-slate-950"
                        : "bg-white/10 text-slate-200"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setCurrentIndex((current) => Math.min(current + 1, questions.length - 1))}
            className="rounded-full bg-sky-500 px-5 py-3 font-semibold text-white"
          >
            Next question
          </button>
        </div>
      </section>
    </div>
  );
}

