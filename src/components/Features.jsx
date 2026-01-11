import React from 'react';
import featuresBg from '../assets/features-bg.png';

const Features = () => {
  return (
    <section id="logic" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${featuresBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Most Traders <span className="text-red-500">Fail.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The market is designed to take money from the emotional and give it to the logical. Which side are you on?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: The Problem */}
          <div className="glass-panel border-l-4 border-red-500/50 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300 group-hover:text-white transition-colors">The Amateur's Cycle</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-red-500">✖</span> Chasing 'hot tips' and signals
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">✖</span> Trading based on gut feeling
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">✖</span> No risk management
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">✖</span> Blowing up accounts repeatedly
              </li>
            </ul>
          </div>

          {/* Card 2: The Solution */}
          <div className="glass-panel border-l-4 border-cyan-500/50 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-400">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400 glow-text">The Institutional Edge</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Data-driven entry & exits
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Hedging strategies used by hedge funds
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Asymmetric risk/reward ratios
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Consistent, scalable growth
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
