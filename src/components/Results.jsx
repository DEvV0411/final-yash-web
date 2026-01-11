import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import resultsDashboard from '../assets/features-bg.png';

const Results = () => {
  return (
    <section id="results" className="section bg-black overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 mb-4 border border-green-500/30 rounded-full bg-green-900/10 text-green-400 text-sm font-bold tracking-wide"
          >
            VERIFIED PERFOMANCE
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Real Results</span>, Not Hype
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             We track every trade. 36 Months of consistent profitability verified by third-party audits.
          </p>
        </div>

        {/* Dashboard Visual Panel */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: Interactive/Static Dashboard Image */}
          <div className="lg:col-span-7 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg" />
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={resultsDashboard} 
                  alt="Live Performance Dashboard" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-green-500/30 flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-white text-xs font-bold">SYSTEM ACTIVE</span>
                </div>
             </div>
          </div>

          {/* Right: Stat Blocks */}
          <div className="lg:col-span-5 space-y-6">
             <div className="glass-card p-6 border-l-4 border-l-green-500 bg-gradient-to-r from-green-900/10 to-transparent hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-2">
                   <div className="text-gray-400 text-sm">Total Verified P&L</div>
                   <div className="text-green-400 text-xl">↗ +412%</div>
                </div>
                <div className="text-4xl font-bold text-white mb-1">₹8.5Cr+</div>
                <div className="text-xs text-gray-500">Updated: Today, 09:30 AM</div>
             </div>

             <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 text-center hover:-translate-y-1 transition-transform border border-white/5">
                   <div className="text-3xl mb-2">🎯</div>
                   <div className="text-2xl font-bold text-white mb-1">94%</div>
                   <div className="text-xs text-gray-400">Win Rate</div>
                </div>
                <div className="glass-card p-6 text-center hover:-translate-y-1 transition-transform border border-white/5">
                   <div className="text-3xl mb-2">⚖️</div>
                   <div className="text-2xl font-bold text-white mb-1">1:3</div>
                   <div className="text-xs text-gray-400">Risk Reward</div>
                </div>
             </div>

             <div className="glass-card p-6 border border-white/5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <span className="text-lg">🏆</span> Recent Wins
                </h4>
                <div className="space-y-3">
                   {[
                     { ticker: 'NIFTY', type: 'Call Buy', pnl: '+₹1.2L' },
                     { ticker: 'BANKNIFTY', type: 'Put Spread', pnl: '+₹85K' },
                     { ticker: 'RELIANCE', type: 'Iron Condor', pnl: '+₹42K' }
                   ].map((trade, i) => (
                      <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
                         <span className="font-mono text-cyan-300">{trade.ticker}</span>
                         <span className="text-gray-400">{trade.type}</span>
                         <span className="text-green-400 font-bold">{trade.pnl}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Counter Strip (Re-using component if needed or simplfied) */}
        {/* Keeping explicit simplified counters here if preferred or reusing logic */}
        
        {/* Important Note */}
        <div className="glass-card bg-yellow-500/5 border-yellow-500/30 max-w-4xl mx-auto mt-20">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <div className="font-bold text-white mb-1 text-sm">Market Risk Disclosure</div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Trading in options involves substantial risk. Past performance does not guarantee future results.
                All results shown are verified from actual trading accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
