import React from 'react';
import { Camera, Image as ImageIcon, Video, Palette } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Clean, cinematic shots tailored for campaigns, products, and profiles.',
    tags: ['Product', 'Portrait', 'Lifestyle'],
  },
  {
    icon: ImageIcon,
    title: 'Thumbnail Design',
    desc: 'High-converting visuals that boost clicks with tasteful composition.',
    tags: ['YouTube', 'Branding', 'CTR'],
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Rhythmic cuts, motion, and color that tell a compelling story.',
    tags: ['Shorts', 'Reels', 'Color Grading'],
  },
  {
    icon: Palette,
    title: 'Photo Retouching',
    desc: 'Subtle, natural retouching that preserves texture and detail.',
    tags: ['Skin', 'Color', 'Cleanup'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Focused offerings designed to elevate your brand presence across platforms.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-900/40 transition hover:translate-y-[-2px] hover:bg-white/[0.07] hover:shadow-slate-900/30"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-500/20 text-teal-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
