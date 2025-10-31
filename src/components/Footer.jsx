import React from 'react';
import { Mail, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Let’s build something beautiful</h3>
            <p className="mt-2 max-w-xl text-slate-300">
              Describe your project goals and timeline — you’ll get a thoughtful response within 24 hours.
            </p>

            <form
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form));
                alert(`Thanks ${data.name || 'friend'} — your message was captured locally in this demo.`);
                form.reset();
              }}
            >
              <input
                name="name"
                required
                placeholder="Your name"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-teal-400"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-teal-400"
              />
              <textarea
                name="message"
                required
                placeholder="Tell me about your project"
                rows={4}
                className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-teal-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400 sm:w-max"
              >
                Send message
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={18} className="text-teal-300" />
                <span>contact@kiryn.studio</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <Youtube size={16} />
                  YouTube
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} Kiryn Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
