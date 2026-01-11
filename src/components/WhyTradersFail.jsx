import React from 'react';

const WhyTradersFail = () => {
  const problems = [
    { icon: '😰', title: 'Emotional Trading', description: 'Fear and greed dictate every decision' },
    { icon: '📱', title: 'Random Tips', description: 'Following unverified signals from Telegram/WhatsApp' },
    { icon: '🎲', title: 'No Risk Management', description: 'All-in bets with no defined exit strategy' },
    { icon: '🔀', title: 'No Structured System', description: 'Every trade is a different random approach' }
  ];

  const solutions = [
    { icon: '🧠', title: 'Process-Driven Trading', description: 'Mechanical execution with zero emotion' },
    { icon: '📈', title: 'Data-Backed Logic', description: 'Every trade follows backtested, proven setups' },
    { icon: '⚖️', title: 'Execution Discipline', description: 'Pre-defined entries, exits, and position sizes' },
    { icon: '📋', title: 'Systematic Approach', description: 'Same process, every single trade, every day' }
  ];

  return (
    <section className="section bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-red-400">90% of Traders Fail</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The difference between losing traders and profitable traders isn't talent. It's process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold text-red-400 mb-2">❌ The Problems</h3>
              <p className="text-gray-500">What retail traders do</p>
            </div>
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`glass-card border-red-500/20 hover:border-red-500/40 animate-slide-in-left delay-${index + 1}00`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{problem.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{problem.title}</h4>
                    <p className="text-gray-400">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold text-green-400 mb-2">✅ The Theoptionsera Way</h3>
              <p className="text-gray-500">What institutional traders do</p>
            </div>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`glass-card glass-card-glow-green animate-slide-in-right delay-${index + 1}00`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{solution.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{solution.title}</h4>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-500/20 to-green-500/20 border border-gray-700 rounded-2xl">
            <p className="text-white font-semibold text-lg mb-2">
              The choice is clear.
            </p>
            <p className="text-cyan-400 text-xl font-bold">
              Trade like an institution, not like retail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradersFail;
