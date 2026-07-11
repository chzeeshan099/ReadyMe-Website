export default function PageHero({ badge, title, description }) {
  return (
    <section className="glass rounded-[32px] px-6 py-10 md:px-10 md:py-14">
      <p className="theme-accent text-xs font-semibold uppercase tracking-[0.45em]">{badge}</p>
      <h1 className="theme-text mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
        {title}
      </h1>
      <p className="theme-muted mt-5 max-w-3xl text-base leading-8 md:text-lg">{description}</p>
    </section>
  );
}

