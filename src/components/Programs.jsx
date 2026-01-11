import React from 'react';

const Programs = ({ onJoinClick }) => {
  const programs = [
    {
      title: "Options Foundation",
      level: "Beginner",
      duration: "4 Weeks",
      whoFor: "New traders or those who've been losing consistently",
      whatYouLearn: [
        "Market structure fundamentals",
        "Option Greeks explained simply",
        "Risk-first trade planning",
        "Avoiding retail traps"
      ],
      price: "₹12,999"
    },
    {
      title: "Institutional Options Logic",
      level: "Intermediate",
      duration: "8 Weeks",
      whoFor: "Traders ready to think like institutions",
      whatYouLearn: [
        "Probability-based setups",
        "Reading institutional order flow",
        "Building repeatable systems",
        "Advanced risk management"
      ],
      price: "₹24,999",
      popular: true
    },
    {
      title: "Advanced Strategy Execution",
      level: "Advanced",
      duration: "12 Weeks",
      whoFor: "Experienced traders seeking consistency",
      whatYouLearn: [
        "Complex multi-leg strategies",
        "Volatility arbitrage techniques",
        "Portfolio-level risk management",
        "Algorithmic pattern recognition"
      ],
      price: "₹39,999"
    },
    {
      title: "Live Market Mentorship",
      level: "Elite",
      duration: "Ongoing",
      whoFor: "Serious traders committed to mastery",
      whatYouLearn: [
        "Live market analysis daily",
        "Real-time trade execution guidance",
        "1-on-1 mentor sessions",
        "Direct feedback on your trades"
      ],
      price: "₹69,999"
    }
  ];

  return (
    <section id="programs" className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Structured learning paths designed to transform you from retail trader to institutional thinker.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`glass-card relative overflow-hidden flex flex-col h-full animate-fade-in-up delay-${idx + 1}00 ${
                program.popular ? 'border-cyan-400/40' : ''
              }`}>
              {program.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-4 py-1 text-xs font-bold rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-wider">
                  {program.level}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{program.duration}</p>

              <div className="mb-6 pb-6 border-b border-gray-700">
                <div className="text-sm text-gray-500 mb-2">WHO IT'S FOR</div>
                <p className="text-gray-300">{program.whoFor}</p>
              </div>

              <div className="mb-8 flex-grow">
                <div className="text-sm text-gray-500 mb-3">WHAT YOU'LL LEARN</div>
                <ul className="space-y-2">
                  {program.whatYouLearn.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-700 mt-auto">
                <div>
                  <div className="text-3xl font-bold text-white">{program.price}</div>
                  <div className="text-xs text-gray-500">One-time payment</div>
                </div>
                <button
                  onClick={onJoinClick}
                  className="btn btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

