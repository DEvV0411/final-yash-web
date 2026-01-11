import React from 'react';

const About = ({ onJoinClick }) => {
  const values = [
    {
      icon: '🎯',
      title: 'Discipline',
      description: 'We don\'t chase markets. We execute with precision, following our proven systems without deviation.'
    },
    {
      icon: '🔍',
      title: 'Transparency',
      description: 'Real results, verified P&L, honest education. No fake screenshots, no unrealistic promises.'
    },
    {
      icon: '⚡',
      title: 'Execution',
      description: 'Process over outcome. Consistent execution beats perfect prediction every single time.'
    }
  ];

  const team = [
    {
      role: 'Founder & Lead Mentor',
      description: '15+ years in institutional trading. Former derivatives desk trader. Built systematic strategies for hedge funds.'
    },
    {
      role: 'Senior Trading Coach',
      description: 'Ex-proprietary trader with proven track record. Specializes in options strategy and risk management.'
    },
    {
      role: 'Head of Education',
      description: 'Curriculum designer with background in quantitative finance. Makes complex concepts simple.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              About <span className="text-gradient">Theoptionsera</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We don't teach tips. We don't sell signals. We build disciplined traders who understand probability, manage risk, and execute with institutional precision.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-black">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-cyan-400 font-bold mb-4 uppercase tracking-wider">Our Mission</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Create Disciplined Traders
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                95% of retail traders lose money because they trade on emotion, follow tips, and lack systematic edge. 
                Our mission is to transform retail traders into disciplined, logic-driven executors who understand the game they're playing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We teach you to think like institutions, manage risk like professionals, and execute with the discipline of world-class traders.
              </p>
            </div>
            <div className="glass-card bg-cyan-500/5 border-cyan-500/30 p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <div className="font-bold text-white mb-1">Logic-Based Trading</div>
                    <div className="text-gray-400 text-sm">Probability, not prediction</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <div className="font-bold text-white mb-1">Institutional Methods</div>
                    <div className="text-gray-400 text-sm">How the smart money trades</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <div className="font-bold text-white mb-1">Repeatable Systems</div>
                    <div className="text-gray-400 text-sm">Consistency over one-off wins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-gray-900">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  A Trading Ecosystem Built on Logic
                </h3>
                <p className="text-gray-400">
                  A community where traders make decisions based on data, not emotions. Where risk is managed, not ignored. 
                  Where execution follows process, not impulse.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-cyan-400 font-bold mb-4 uppercase tracking-wider">Our Vision</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Logic-Based Trading Ecosystem
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We envision a future where retail traders stop gambling and start trading. 
                Where education replaces hype. Where process beats prediction.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Theoptionsera is building that future - one disciplined trader at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do - from curriculum design to community standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="glass-card text-center">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Former institutional traders, prop desk veterans, and quantitative analysts who've been in the trenches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="glass-card">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 flex items-center justify-center text-white font-bold text-2xl mx-auto">
                  {member.role.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{member.role}</h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black">
        <div className="container">
          <div className="glass-card bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-center max-w-4xl mx-auto p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Trade Like an Institution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 5,000+ traders who've made the shift from retail to professional thinking.
            </p>
            <button
              onClick={onJoinClick}
              className="btn btn-primary btn-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
