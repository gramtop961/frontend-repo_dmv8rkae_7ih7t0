import React from 'react';
import { ArrowRight } from 'lucide-react';

const items = [
  {
    title: 'Studio Portraits',
    img: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Product Minimalism',
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Urban Lifestyle',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Color Grading',
    img: 'https://images.unsplash.com/photo-1520975922323-24a503950f6b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Editorial Series',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Natural Retouch',
    img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop',
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Showcase</h2>
            <p className="mt-2 max-w-xl text-slate-300">Selected works across photography, thumbnails, and post-production.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 p-6 text-center">
          <p className="text-slate-200">
            Looking for something specific? Let’s design a custom visual system for your brand.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
          >
            Get in touch
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
