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

  return (
    <div>
      <label
        htmlFor={id}
        className="theme-text mb-2 block text-sm font-semibold tracking-[0.02em]"
      >
        {label}
      </label>

      {as === "select" ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`${sharedClasses} appearance-none`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
