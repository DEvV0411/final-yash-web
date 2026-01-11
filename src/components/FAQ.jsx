import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const faqs = [
      {
        q: "Is this course suitable for complete beginners?",
        a: "Yes. Module 1 starts with the absolute basics of market structure. However, the learning curve is steep because we don't teach retail fluff. We teach institutional logic from Day 1."
      },
      {
        q: "Do you provide trade signals?",
        a: "No. We build independent traders. If you are looking for someone to tell you when to buy or sell, this is not for you. We give you the system to find your own high-probability trades."
      },
      {
        q: "How long do I have access to the content?",
        a: "You get Lifetime Access to all recorded modules and future updates. The community access serves as your ongoing mentorship hub."
      },
      {
        q: "What capital do I need to start?",
        a: "You can start learning with zero capital (paper trading). To execute our strategies effectively, we recommend a starting capital of at least ₹50,000 to manage risk properly."
      }
    ];
  
    return (
      <section className="py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked <span className="text-[#00ff9d]">Questions</span></h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-white/10">
                <button 
                  onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-[#00ff9d] transition-colors"
                >
                  <span className="text-lg font-medium">{faq.q}</span>
                  <span className="text-2xl">{idx === openIndex ? '−' : '+'}</span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    idx === openIndex ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
