import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-white">
      {/* Glow background accents */}
      <div className="pointer-events-none fixed inset-0 blur-3xl" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20" />
        <div className="absolute top-1/3 right-12 h-64 w-64 rounded-full bg-cyan-500/10" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-fuchsia-500/10" />
      </div>

      <Hero />
      <Services />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
