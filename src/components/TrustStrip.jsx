import React from 'react';
import { motion } from 'framer-motion';

const TrustStrip = () => {
  const stats = [
    { label: 'Active Students', value: '5,000+' },
    { label: 'Success Rate', value: '94%' },
    { label: 'Verified P&L', value: '₹8.5Cr+' },
    { label: 'Student Rating', value: '4.9/5' }
  ];

  return (
    <div className="w-full border-b border-gray-800 bg-black/50 backdrop-blur-sm z-20 relative">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-0">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex items-center gap-3"
              >
                 <div className="h-10 w-1 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-50 block lg:hidden" />
                 <div className="text-center lg:text-left">
                   <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                   <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                 </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
