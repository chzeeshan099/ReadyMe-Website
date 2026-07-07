import Link from "next/link";

export default function SectionCard({ title, description, href, action = "Open", icon: Icon }) {
  return (
    <div className="glass rounded-[28px] p-6">
      {Icon ? (
        <div className="mb-5 inline-flex rounded-2xl border border-sky-400/20 bg-sky-500/10 p-3 text-sky-300">
          <Icon size={24} />
        </div>
      ) : null}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      {href ? (
        <Link
          href={href}
          className="mt-5 inline-flex rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          {action}
        </Link>
      ) : null}
    </div>
  );
}
