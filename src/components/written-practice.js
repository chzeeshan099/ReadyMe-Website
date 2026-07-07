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
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{title}</p>
        <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{subtitle}</h1>
        <p className="mt-4 text-base leading-8 text-slate-300">{label}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass rounded-[32px] p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Answer Guide</p>
          <div className="mt-5 space-y-3">
            {questions.map((question) => (
              <button
                key={question.id}
                type="button"
                onClick={() => setActiveQuestion(question)}
                className={`w-full rounded-[22px] px-4 py-4 text-left transition ${
                  activeQuestion.id === question.id
                    ? "bg-sky-500 text-white"
                    : "bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                <span className="block font-semibold">{question.label}</span>
                <span className="mt-2 block text-sm leading-6 opacity-80">{question.prompt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass rounded-[32px] p-6 md:p-8">
          <div className="rounded-[26px] border border-white/10 bg-[#030916] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{activeQuestion.label}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Active explanation</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">{activeQuestion.explanation}</p>
          </div>

          <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Paper Preview</p>
            <div className="mt-5 space-y-4">
              {questions.map((question) => (
                <div
                  key={question.id}
                  className={`rounded-[22px] border px-4 py-4 ${
                    activeQuestion.id === question.id ? "border-sky-400 bg-sky-500/10" : "border-white/10 bg-[#09111f]"
                  }`}
                >
                  <p className="font-semibold text-white">{question.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{question.prompt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
