import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-xs font-medium tracking-wide text-purple-100/90">Kiryn — Creative SaaS Suite</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
          Elevate Your Visual Storytelling
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Kiryn is your aesthetic, glassy workspace for photography, thumbnails, video edits, and photo retouching—
          crafted for modern creators.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:bg-white/15"
          >
            Explore Capabilities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
