import React from 'react';

const TheLogic = () => {
  const principles = [
    {
      icon: '📊',
      title: 'Trading is Probability, Not Prediction',
      description: 'We don\'t predict markets. We trade probabilities with statistical edges, just like institutional traders.'
    },
    {
      icon: '🎯',
      title: 'Logic > Patterns > Indicators',
      description: 'Market structure and logic drive our decisions. Patterns confirm. Indicators are secondary tools, not primary signals.'
    },
    {
      icon: '🛡️',
      title: 'Risk-Managed Execution',
      description: 'Every trade has defined risk. Position sizing is calculated. Capital preservation is priority #1.'
    },
    {
      icon: '🔄',
      title: 'Repeatable Systems',
      description: 'One-off wins mean nothing. We build systems that work consistently across market conditions.'
    }
  ];

  return (
    <section id="the-logic" className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Institutions <span className="text-gradient">Actually Trade</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Retail traders chase tips and patterns. Institutional traders follow logic, probability, and process.
            Here's the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`glass-card relative group overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-${index + 1}00`}>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="relative z-10 flex flex-col h-full p-2">
                <div className="text-5xl mb-6 bg-gray-800/50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-cyan-500/30">{principle.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block glass-card">
            <p className="text-cyan-400 font-semibold text-lg">
              💡 This is not retail trading. This is institutional-grade execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLogic;
