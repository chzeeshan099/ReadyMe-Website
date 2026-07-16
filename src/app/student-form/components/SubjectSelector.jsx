import { useMemo, useState } from "react";

export default function SubjectSelector({
  subjects,
  selectedSubjects,
  onToggle,
  error,
}) {
  const [query, setQuery] = useState("");

  const filteredSubjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return subjects.filter((subject) =>
      subject.toLowerCase().includes(normalized)
    );
  }, [query, subjects]);

  return (
    <div>
      <label
        htmlFor="subject-search"
        className="theme-text mb-2 block text-sm font-semibold tracking-[0.02em]"
      >
        Subject Names
      </label>

      <div className="theme-surface rounded-[24px] p-4">
        <input
          id="subject-search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search subjects..."
          className="theme-input w-full rounded-[18px] px-4 py-3 text-sm outline-none transition focus:border-[#1b67ff] focus:ring-2 focus:ring-[#0B7BFF]/25"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {selectedSubjects.length ? (
            selectedSubjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => onToggle(subject)}
                className="theme-chip rounded-full px-3 py-1.5 text-xs font-semibold"
              >
                {subject}
              </button>
            ))
          ) : (
            <p className="theme-muted text-sm">
              Select one or more subjects for your exam plan.
            </p>
          )}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {filteredSubjects.map((subject) => {
            const checked = selectedSubjects.includes(subject);

            return (
              <label
                key={subject}
                className={`flex cursor-pointer items-center gap-3 rounded-[18px] border px-4 py-3 text-sm transition ${
                  checked
                    ? "border-[#1b67ff] bg-[rgba(11,123,255,0.12)] text-white"
                    : "border-white/10 bg-white/[0.03] text-white/72 hover:border-[#1b67ff]/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(subject)}
                  className="h-4 w-4 accent-[#0B7BFF]"
                />
                <span>{subject}</span>
              </label>
            );
          })}
        </div>
      </div>

      {error ? (
        <p className="mt-2 text-sm text-[#ff8ea1]">{error}</p>
      ) : null}
    </div>
  );
}
