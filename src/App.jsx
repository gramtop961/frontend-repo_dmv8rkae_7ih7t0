import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-teal-300/30 selection:text-white">
      {/* Glow backdrop layers */}
      <div className="pointer-events-none fixed inset-0 -z-[1]">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Hero />
      <Services />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
