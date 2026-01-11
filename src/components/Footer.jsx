import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { 
      title: 'Company', 
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about' }, // Redirecting to about for now
        { name: 'Contact', path: '/#community' }
      ] 
    },
    { 
      title: 'Programs', 
      links: [
        { name: 'Options Foundation', path: '/#programs' },
        { name: 'Institutional Logic', path: '/#programs' },
        { name: 'Advanced Strategy', path: '/#programs' },
        { name: 'Live Mentorship', path: '/#programs' }
      ] 
    },
    { 
      title: 'Resources', 
      links: [
        { name: 'FAQs', path: '/#curriculum' },
        { name: 'Support', path: '#' }
      ] 
    },
    { 
      title: 'Legal', 
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Disclaimer', path: '#' },
        { name: 'Refund Policy', path: '#' }
      ] 
    }
  ];

  const socialLinks = [
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' }
  ];

  return (
    <footer className="pt-20 pb-8 border-t border-gray-800 bg-black relative">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-xl">
                Theoptionsera<span className="text-cyan-400">.com</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering traders with logic-driven, institutional-grade options trading education. 
              Stop hoping. Start executing.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all group"
                  aria-label={social.name}>
                  <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.path.startsWith('/') ? (
                        link.path.includes('#') ? (
                            <a href={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                {link.name}
                            </a>
                        ) : (
                            <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                {link.name}
                            </Link>
                        )
                    ) : (
                      <a href={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Market Risk Disclaimer */}
        <div className="mb-8 p-6 bg-red-500/5 border border-red-500/20 rounded-lg">
          <div className="text-red-400 font-bold mb-2 text-sm">⚠️ MARKET RISK DISCLOSURE</div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Trading in derivatives, including options, involves substantial risk of loss and is not suitable for all investors. 
            Past performance is not indicative of future results. All trading involves risk. Only risk capital you can afford to lose. 
            This is not investment advice. Theoptionsera.com provides education, not investment recommendations. 
            Please conduct your own research or consult with a licensed financial advisor before making any investment decisions.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Theoptionsera.com. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

