import Link from "next/link";

export default function SectionCard({ title, description, href, action = "Open", icon: Icon }) {
  return (
    <div className="glass rounded-[28px] p-6">
      {Icon ? (
        <div className="theme-chip mb-5 inline-flex rounded-2xl p-3">
          <Icon size={24} />
        </div>
      ) : null}
      <h3 className="theme-text text-xl font-semibold">{title}</h3>
      <p className="theme-muted mt-3 text-sm leading-7">{description}</p>
      {href ? (
        <Link
          href={href}
          className="theme-button-primary mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold transition"
        >
          {action}
        </Link>
      ) : null}
    </div>
  );
}

