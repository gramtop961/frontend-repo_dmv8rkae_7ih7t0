import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7C8Y1Lwq8i30W0Qp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and noise overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay [background-image:radial-gradient(transparent,rgba(2,6,23,0.6))]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-32 text-center md:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles size={16} className="text-teal-300" />
          <span className="text-xs tracking-wide text-slate-200">Glassy, cinematic visuals crafted for modern brands</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Kiryn — Aesthetic SaaS Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Photography. Thumbnails. Video editing. Photo retouching. A minimal, immersive showcase of creative work
          with a touch of 3D.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#showcase"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
          >
            Explore Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
