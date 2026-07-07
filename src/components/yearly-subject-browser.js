"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function YearlySubjectBrowser({ groups, subjects }) {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [query, setQuery] = useState("");

  const visibleSubjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return subjects.filter((subject) => {
      const matchesGroup = selectedGroup === "all" || subject.group === selectedGroup;
      const matchesSearch =
        normalized.length === 0 ||
        subject.name.toLowerCase().includes(normalized) ||
        subject.code.toLowerCase().includes(normalized);

      return matchesGroup && matchesSearch;
    });
  }, [groups, query, selectedGroup, subjects]);

  return (
    <div className="space-y-6">
      <section className="glass rounded-[32px] p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Filter By Book</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroup(group.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedGroup === group.id
                  ? "bg-sky-500 text-white"
                  : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by subject name or code..."
          className="mt-5 w-full rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleSubjects.length ? (
          visibleSubjects.map((subject) => (
            <Link key={subject.id} href={`/yearly-past-paper/${subject.id}`} className="glass rounded-[28px] p-6 transition hover:-translate-y-0.5">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{subject.group}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{subject.name}</h2>
              <p className="mt-2 text-sm text-slate-300">Code {subject.code}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Open yearly sessions, paper variants, and exam resources.
              </p>
            </Link>
          ))
        ) : (
          <div className="glass rounded-[28px] p-6 text-slate-200">
            No subjects found. Search ya filter change karke dobara try karein.
          </div>
        )}
      </section>
    </div>
  );
}

