import React from 'react';
import mentorImg from '../assets/mentor.png';

const Mentor = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="glass-panel p-0 md:p-12 border-none bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="relative h-[500px] md:h-full order-2 md:order-1">
              <div className="absolute inset-0 bg-[#00ff9d] opacity-10 blur-[100px] rounded-full transform -translate-x-1/2"></div>
              <img 
                src={mentorImg} 
                alt="Institutional Trader" 
                className="relative z-10 w-full h-full object-cover rounded-2xl md:rounded-lg shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform duration-500 grayscale hover:grayscale-0"
              />
            </div>
            
            <div className="p-8 md:p-0 order-1 md:order-2">
              <div className="text-[#00ff9d] font-bold tracking-widest uppercase mb-4">Institutional Pedigree</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built by <span className="text-gray-600">Experts.</span></h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">"We don't guess. We calculate."</strong>
                </p>
                <p>
                  Our curriculum is designed by ex-Prop Desk traders and Quantitative Analysts who have managed significant capital in Indian and US markets.
                </p>
                <p>
                  We strip away the noise of social media trading and focus purely on <span className="text-white">Order Flow, Volume Profiling, and Quantitative Risk Management</span>. You aren't learning from influencers; you are learning from the market's veterans.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8">
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-gray-500">Combined Exp.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4k+</div>
                  <div className="text-xs text-gray-500">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">₹100Cr+</div>
                  <div className="text-xs text-gray-500">Volume Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
