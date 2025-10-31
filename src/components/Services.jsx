import React from 'react';
import { Camera, Image, Video, Palette } from 'lucide-react';

const items = [
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Crisp, color-true captures for brands, products, and portrait sessions.'
  },
  {
    icon: Image,
    title: 'Thumbnail Design',
    desc: 'High-converting visuals tailored for YouTube, podcasts, and socials.'
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Dynamic cuts, sound design, captions, and motion to tell your story.'
  },
  {
    icon: Palette,
    title: 'Photo Retouching',
    desc: 'Skin/scene refinements, color grading, and cinematic finishing.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          A glassy toolkit built for creators
        </h2>
        <p className="mt-3 text-white/70">
          All your visual work in one seamless, elegant workspace.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 p-2 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full bg-white/5 px-2 py-1">Glassy UI</span>
              <span className="rounded-full bg-white/5 px-2 py-1">Pro Workflow</span>
              <span className="rounded-full bg-white/5 px-2 py-1">Fast Delivery</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
