import React from 'react';

const Curriculum = () => {
  const modules = [
    {
      title: "Market Structure",
      icon: "🏗️",
      duration: "Weeks 1-2",
      lessons: ["Understanding Auction Theory", "Supply & Demand Zones", "Institutional vs Retail Levels", "Volume Profile Analysis"]
    },
    {
      title: "Option Greeks",
      icon: "📐",
      duration: "Weeks 3-4",
      lessons: ["Delta: Directional Exposure", "Gamma: Risk Acceleration", "Theta: Time Decay Mastery", "Vega: Volatility Sensitivity"]
    },
    {
      title: "Probability & Risk",
      icon: "🎲",
      duration: "Weeks 5-6",
      lessons: ["Probability-Based Trade Selection", "Expected Value Calculation", "Risk-Reward Framework", "Position Sizing Formula"]
    },
    {
      title: "Trade Execution",
      icon: "⚡",
      duration: "Weeks 7-8",
      lessons: ["Entry Precision Techniques", "Stop Loss Placement Logic", "Profit Target Setting", "Scaling In/Out Strategy"]
    },
    {
      title: "Psychology & Discipline",
      icon: "🧠",
      duration: "Ongoing",
      lessons: ["Removing Emotion from Trading", "Process Over Outcome", "Handling Losing Streaks", "Trade Journaling System"]
    }
  ];

  return (
    <section id="curriculum" className="section bg-gray-950 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
           The <span className="text-gradient">Logic Roadmap</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A structured, step-by-step path from basic concepts to institutional-level execution.
        </p>
      </div>

      <div className="container relative z-10 max-w-5xl">
        {/* Timeline Container */}
        <div className="relative">
             {/* Center Line */}
             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-gray-800 -translate-x-1/2 md:transform-none rounded-full" />

             {modules.map((module, idx) => (
                 <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Timestamp / Duration (Desktop Center) */}
                    <div className="absolute left-10 md:left-1/2 top-0 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black border-4 border-cyan-500 z-20">
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                        <div className="glass-card hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                             <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                 <div className="text-4xl bg-gray-800/50 p-2 rounded-lg">{module.icon}</div>
                                 <div>
                                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{module.title}</h3>
                                     <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-500/20">{module.duration}</span>
                                 </div>
                             </div>
                             
                             <ul className={`space-y-2`}>
                                 {module.lessons.map((lesson, i) => (
                                     <li key={i} className={`text-gray-400 text-sm flex items-center gap-2 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                         <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                         {lesson}
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </div>
                 </div>
             ))}
        </div>

        <div className="text-center mt-12">
            <div className="inline-block px-8 py-4 glass-card bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
               <span className="text-2xl mr-2">🎯</span>
               <span className="text-white font-semibold">Outcome: </span>
               <span className="text-gray-300">You stop guessing and start trading with </span>
               <span className="text-cyan-400 font-bold">Institutional Logic</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

