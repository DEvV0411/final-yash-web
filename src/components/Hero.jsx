import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import heroChart from '../assets/hero-bg.png';

const TypewriterText = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} style={{ whiteSpace: "nowrap", marginRight: "0.25em", display: "inline-block" }}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span key={letterIndex} variants={child} style={{ display: "inline-block" }}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

const Hero = ({ onJoinClick }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatches
    // Using setTimeout to avoid "setState during render" warning/cascading render
    const timer = setTimeout(() => {
      const newParticles = [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
      }));
      setParticles(newParticles);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-32 lg:pt-20">
      {/* Animated Particle Background - Slower, more subtle */}
      <div className="particle-bg opacity-30">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs - Focused for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* LEFT COLUMN: Content */}
          <div className="text-center lg:text-left space-y-10 max-w-3xl mx-auto lg:mx-0">
             
             {/* Trust Badge - Pill Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-900/10 border border-cyan-500/20 backdrop-blur-sm"
            >
              <div className="flex -space-x-3">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="trader" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
              <span className="text-sm font-medium text-cyan-200/90 tracking-wide">
                Verified by <span className="text-cyan-400 font-bold">5,000+</span> Traders
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="block text-white mb-3 drop-shadow-sm">
                Stop Trading on Tips.
              </span>
              <span className="block text-gradient glow-text pb-2">
                 <TypewriterText text="Start Trading with Logic." />
              </span>
            </h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              90% of traders fail because they follow noise. We teach the <span className="text-white font-medium">institutional frameworks</span> used by top hedge funds to extract consistent profits.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onJoinClick}
                className="btn btn-primary btn-lg group relative overflow-hidden shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Yes, I Want the Edge 
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('the-logic')}
                className="btn btn-secondary btn-lg border-opacity-50 hover:border-opacity-100 text-gray-300 hover:text-cyan-400"
              >
                View Our Logic
              </motion.button>
            </div>
            
             {/* Small Trust Text */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="pt-4 text-xs text-gray-500 font-medium tracking-wider uppercase flex items-center justify-center lg:justify-start gap-2"
             >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Live Mentorship • Data-Driven • Risk Managed</span>
             </motion.div>
          </div>

          {/* RIGHT COLUMN: Visual */}
          <div className="relative hidden lg:block h-full min-h-[600px] flex items-center justify-center pl-10">
             {/* Main Chart Card */}
             <motion.div
               initial={{ opacity: 0, x: 50, rotateY: 10 }}
               animate={{ opacity: 1, x: 0, rotateY: 0 }}
               transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
               className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group perspective-1000"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src={heroChart} 
                  alt="Institutional Trading Dashboard" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Analysis Card 1 */}
                <motion.div 
                   animate={{ y: [0, -12, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-8 -right-8 glass-card p-4 rounded-xl border-l-4 border-l-green-400 bg-black/80 backdrop-blur-xl shadow-2xl min-w-[180px]"
                >
                   <div className="flex justify-between items-start mb-1">
                      <span className="text-gray-400 text-xs font-bold uppercase">Win Rate</span>
                      <span className="text-green-400 text-xs">▲ 2.4%</span>
                   </div>
                   <div className="text-3xl font-extrabold text-white">94%</div>
                   <div className="h-1 w-full bg-gray-700 mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 w-[94%]" />
                   </div>
                </motion.div>

                {/* Floating Analysis Card 2 */}
                <motion.div 
                   animate={{ y: [0, 12, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-12 -left-8 glass-card p-4 rounded-xl border-l-4 border-l-cyan-400 bg-black/80 backdrop-blur-xl shadow-2xl min-w-[200px]"
                >
                   <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                          ⚡
                       </div>
                       <div>
                          <div className="text-xs text-gray-400 font-bold uppercase">Strategy</div>
                          <div className="text-white font-bold">Delta Neutral</div>
                       </div>
                   </div>
                   <div className="text-[10px] text-gray-500 mt-1">
                      Probability of profit: <span className="text-cyan-400">High</span>
                   </div>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
