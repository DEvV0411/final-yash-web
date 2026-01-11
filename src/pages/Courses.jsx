import React from 'react';

const Courses = ({ onJoinClick }) => {
  const courses = [
    {
      title: "Price Action Masterclass",
      level: "Beginner",
      price: "₹14,999",
      desc: "Learn to read the naked chart without any indicators. Understand candlesticks, support/resistance, and trendlines.",
      tags: ["Fundamentals", "Chart Patterns"]
    },
    {
      title: "Institutional Option Selling",
      level: "Advanced",
      price: "₹29,999",
      desc: "Stop buying lottery tickets. Learn to sell options like a hedge fund. Master theta decay, delta management, and adjustments.",
      tags: ["Options", "Theta Decays", "Hedging"]
    },
    {
      title: "Algo Trading Blueprint",
      level: "Pro",
      price: "₹49,999",
      desc: "Automate your logic. Learn to code simple Python strategies or use no-code tools to execute trades while you sleep.",
      tags: ["Python", "Backtesting", "Automation"]
    },
    {
      title: "Psychology & Risk Management",
      level: "All Levels",
      price: "₹9,999",
      desc: "The missing link. 90% of trading is psychology. Learn to master your emotions and manage your capital.",
      tags: ["Mindset", "Risk Control"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our <span className="text-[#00ff9d]">Curriculum</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized modules designed to take you from a novice to a funded trader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, idx) => (
            <div key={idx} className="glass-panel p-8 bg-zinc-900/50 hover:border-[#00ff9d]/50 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold tracking-widest text-[#00ff9d] uppercase border border-[#00ff9d]/30 px-2 py-1 rounded">
                  {course.level}
                </span>
                <span className="text-xl font-bold text-white">{course.price}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              <p className="text-gray-400 mb-6 min-h-[80px]">{course.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

              <button onClick={onJoinClick} className="btn w-full bg-white/5 hover:bg-[#00ff9d] hover:text-black transition-colors border border-white/10">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
