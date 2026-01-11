import React from 'react';
import communityBg from '../assets/community-bg.png';

const Community = () => {
  const features = [
    {
      icon: '👥',
      title: 'Active Trader Community',
      stat: '5,000+ Members',
      description: 'Connect with disciplined traders who follow the same logic-based approach'
    },
    {
      icon: '🎓',
      title: 'Peer Learning',
      stat: 'Daily Discussions',
      description: 'Share setups, review trades, and learn from others\' experiences'
    },
    {
      icon: '🎥',
      title: 'Live Sessions',
      stat: '3x per Week',
      description: 'Live market analysis, trade reviews, and Q&A with expert mentors'
    },
    {
      icon: '💬',
      title: 'Market Discussions',
      stat: '24/7 Active',
      description: 'Real-time market insights and trade ideas from verified traders'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh K.',
      role: 'Full-time Options Trader',
      content: 'Theoptionsera completely changed my trading. I went from emotional revenge trading to systematic execution. Consistency finally makes sense.',
      rating: 5,
      profit: '+₹4.2L in 6 months'
    },
    {
      name: 'Priya M.',
      role: 'Software Engineer & Part-time Trader',
      content: 'The logic-based approach fits perfectly with my analytical mindset. No more tips, no more guess work. Just process and probability.',
      rating: 5,
      profit: '+₹2.8L in 4 months'
    },
    {
      name: 'Amit S.',
      role: 'Business Owner',
      content: 'I used to lose money every month. Now I have a repeatable system that works. The community support is incredible.',
      rating: 5,
      profit: '+₹6.1L in 8 months'
    }
  ];

  return (
    <section id="community" className="section relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
           src={communityBg} 
           alt="Trading Floor Atmosphere" 
           className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 md:to-black/30" />
      </div>

      <div className="container relative z-10 my-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join a Community of <span className="text-gradient">Disciplined Traders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            You're not just getting courses. You're joining a tribe of logic-driven traders who support each other's growth.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card text-center animate-fade-in-up delay-${index + 1}00 bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/60 transition-colors`}>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <div className="text-cyan-400 font-bold text-sm mb-2">{feature.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-10 drop-shadow-md">
            Real Traders, Real Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card space-y-4 bg-black/60 border-white/10">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-200 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{testimonial.profit}</div>
                      <div className="text-xs text-gray-400">Verified P&L</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="glass-card bg-gradient-to-r from-cyan-900/60 to-blue-900/60 border-cyan-500/30 backdrop-blur-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">5,000+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-gray-300">Live Sessions/Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-300">Community Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">94%</div>
              <div className="text-gray-300">Member Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
