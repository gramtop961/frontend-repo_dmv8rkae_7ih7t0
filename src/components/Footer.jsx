import React from 'react';
import { Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-500/30 p-2">
              <Camera className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Kiryn</h4>
              <p className="text-sm text-white/70">Photography • Thumbnails • Video • Retouching</p>
            </div>
          </div>

          <div className="text-sm text-white/70">
            Bookings & inquiries: <a className="underline hover:text-white" href="mailto:hello@kiryn.studio">hello@kiryn.studio</a>
          </div>
        </div>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="mt-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Kiryn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
