"use client";

import { useState } from "react";

export default function WrittenPractice({ title, subtitle, questions, label }) {
  const [activeQuestion, setActiveQuestion] = useState(questions[0] ?? null);

  if (!activeQuestion) {
    return null;
  }

  return (
    <div className="space-y-6">
      <section className="glass rounded-[32px] p-6 md:p-8">
        <p className="theme-accent text-sm uppercase tracking-[0.35em]">{title}</p>
        <h1 className="theme-text mt-3 text-3xl font-semibold md:text-5xl">{subtitle}</h1>
        <p className="theme-muted mt-4 text-base leading-8">{label}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass rounded-[32px] p-6">
          <p className="theme-accent text-sm uppercase tracking-[0.35em]">Answer Guide</p>
          <div className="mt-5 space-y-3">
            {questions.map((question) => (
              <button
                key={question.id}
                type="button"
                onClick={() => setActiveQuestion(question)}
                className={`w-full rounded-[22px] px-4 py-4 text-left transition ${
                  activeQuestion.id === question.id
                    ? "theme-button-primary"
                    : "theme-surface theme-text-soft hover:brightness-105"
                }`}
              >
                <span className="block font-semibold">{question.label}</span>
                <span className="mt-2 block text-sm leading-6 opacity-80">{question.prompt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass rounded-[32px] p-6 md:p-8">
          <div className="theme-surface-strong rounded-[26px] p-6">
            <p className="theme-accent text-sm uppercase tracking-[0.35em]">{activeQuestion.label}</p>
            <h2 className="theme-text mt-3 text-2xl font-semibold">Active explanation</h2>
            <p className="theme-text-soft mt-5 text-base leading-8">{activeQuestion.explanation}</p>
          </div>

          <div className="theme-surface mt-6 rounded-[26px] p-6">
            <p className="theme-accent text-sm uppercase tracking-[0.35em]">Paper Preview</p>
            <div className="mt-5 space-y-4">
              {questions.map((question) => (
                <div
                  key={question.id}
                  className={`rounded-[22px] border px-4 py-4 ${
                    activeQuestion.id === question.id ? "border-sky-400 bg-sky-500/10" : "theme-surface-strong"
                  }`}
                >
                  <p className="theme-text font-semibold">{question.label}</p>
                  <p className="theme-muted mt-2 text-sm leading-7">{question.prompt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

