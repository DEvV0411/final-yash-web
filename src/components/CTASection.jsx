import React from 'react';

const CTASection = ({ onJoinClick }) => {
  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            <span className="block mb-4">Stop Hoping.</span>
            <span className="block text-gradient glow-text">Start Executing.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            The market rewards process, not predictions. Join traders who've made the shift from retail to institutional thinking.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={onJoinClick}
              className="btn btn-primary btn-lg">
              Join Theoptionsera
            </button>
            <button
              onClick={onJoinClick}
              className="btn btn-outline btn-lg">
              Talk to Our Team
            </button>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">5,000+</div>
              <div className="text-sm text-gray-500">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">₹8.5Cr+</div>
              <div className="text-sm text-gray-500">Verified P&L</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">94%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">4.9/5</div>
              <div className="text-sm text-gray-500">Avg Rating</div>
            </div>
          </div>

          {/* Final Push */}
          <div className="pt-8">
            <div className="inline-block px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-400 font-semibold">
                ⚡ Limited seats available for the next cohort
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
