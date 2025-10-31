import React from 'react';

const items = [
  {
    title: 'Brand Portrait',
    tags: ['Studio', 'Color Grade'],
    gradient: 'from-fuchsia-500/30 via-purple-500/20 to-cyan-400/20'
  },
  {
    title: 'Product Flatlay',
    tags: ['E-commerce', 'Minimal'],
    gradient: 'from-cyan-400/30 via-sky-400/20 to-violet-500/20'
  },
  {
    title: 'YouTube Thumbnail',
    tags: ['Bold', 'Typography'],
    gradient: 'from-amber-400/30 via-orange-400/20 to-rose-400/20'
  },
  {
    title: 'Cinematic Edit',
    tags: ['Film Look', 'Music Sync'],
    gradient: 'from-emerald-400/30 via-teal-400/20 to-blue-400/20'
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Selected Work</h2>
          <p className="mt-3 max-w-xl text-white/70">
            A glimpse into recent projects across photography, thumbnails, and editing.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 md:inline-flex"
        >
          Request a project
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
          >
            <div className={`aspect-[4/3] w-full bg-gradient-to-br ${item.gradient}`} />
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/70">
                {item.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA band */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-6 backdrop-blur-xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold">Bring your vision to life with Kiryn</h3>
            <p className="mt-1 text-white/70">Let’s craft scroll-stopping visuals for your brand, channel, or campaign.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:bg-white/15"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
