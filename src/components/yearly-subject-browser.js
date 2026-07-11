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
        <p className="theme-accent text-sm uppercase tracking-[0.35em]">Filter By Book</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroup(group.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedGroup === group.id
                  ? "theme-button-primary"
                  : "theme-button-secondary"
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
          className="theme-input mt-5 w-full rounded-[22px] px-4 py-3 outline-none"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleSubjects.length ? (
          visibleSubjects.map((subject) => (
            <Link key={subject.id} href={`/yearly-past-paper/${subject.id}`} className="glass rounded-[28px] p-6 transition hover:-translate-y-0.5">
              <p className="theme-accent text-xs uppercase tracking-[0.35em]">{subject.group}</p>
              <h2 className="theme-text mt-3 text-2xl font-semibold">{subject.name}</h2>
              <p className="theme-muted mt-2 text-sm">Code {subject.code}</p>
              <p className="theme-muted mt-4 text-sm leading-7">
                Open yearly sessions, paper variants, and exam resources.
              </p>
            </Link>
          ))
        ) : (
          <div className="glass theme-text-soft rounded-[28px] p-6">
            No subjects found. Search ya filter change karke dobara try karein.
          </div>
        )}
      </section>
    </div>
  );
}

