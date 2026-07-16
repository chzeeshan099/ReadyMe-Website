"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function FormField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  options = [],
}) {
  const sharedClasses =
    "theme-input w-full rounded-[22px] px-4 py-3.5 text-sm outline-none transition focus:border-[#1b67ff] focus:ring-2 focus:ring-[#0B7BFF]/25";
  const [isOpen, setIsOpen] = useState(false);
  const fieldRef = useRef(null);
  const listboxId = useId();
  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption?.label || placeholder;

  useEffect(() => {
    if (as !== "select") {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!fieldRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [as]);

  const handleSelect = (nextValue) => {
    onChange({ target: { value: nextValue } });
    setIsOpen(false);
  };

  return (
    <div ref={fieldRef} className="relative">
      <label
        htmlFor={id}
        className="theme-text mb-2 block text-sm font-semibold tracking-[0.02em]"
      >
        {label}
      </label>

      {as === "select" ? (
        <div className="relative">
          <button
            id={id}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            onClick={() => setIsOpen((open) => !open)}
            className={`${sharedClasses} flex items-center justify-between gap-3 text-left ${
              value ? "theme-text" : "theme-muted"
            } ${
              isOpen
                ? "border-[#1b67ff] ring-2 ring-[#0B7BFF]/25 shadow-[0_0_0_1px_rgba(116,192,255,0.18),0_18px_45px_rgba(5,20,55,0.3)]"
                : ""
            }`}
          >
            <span className="truncate">{displayValue}</span>
            <span
              aria-hidden="true"
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-[#8ec5ff] transition duration-200 ${
                isOpen ? "rotate-180 bg-[#0b7bff]/15 text-white" : ""
              }`}
            >
              <FaArrowDown />
            </span>
          </button>

          <div
            className={`absolute left-0 right-0 top-[calc(100%+10px)] z-30 origin-top overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,22,41,0.98),rgba(6,13,26,0.98))] shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-200 ${
              isOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7ec7ff]/80 to-transparent" />
            <div
              id={listboxId}
              role="listbox"
              aria-labelledby={id}
              className="custom-dropdown-scroll max-h-72 overflow-y-auto p-2"
            >
              <button
                type="button"
                role="option"
                aria-selected={!value}
                onClick={() => handleSelect("")}
                className={`mb-1 flex w-full items-center rounded-[18px] px-4 py-3 text-sm transition duration-150 ${
                  !value
                    ? "bg-[#0b7bff] text-white shadow-[0_12px_30px_rgba(11,123,255,0.28)]"
                    : "theme-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                {placeholder}
              </button>

              {options.map((option) => {
                const isSelected = option.value === value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value)}
                    className={`mb-1 flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-sm transition duration-150 last:mb-0 ${
                      isSelected
                        ? "bg-[linear-gradient(135deg,#0b7bff,#4eb5ff)] text-white shadow-[0_14px_30px_rgba(11,123,255,0.3)]"
                        : "text-[#d8e8ff] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{option.label}</span>
                    <span
                      aria-hidden="true"
                      className={`text-xs tracking-[0.25em] transition ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      LIVE
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={sharedClasses}
        />
      )}

      {error ? (
        <p className="mt-2 text-sm text-[#ff8ea1]">{error}</p>
      ) : null}
    </div>
  );
}

