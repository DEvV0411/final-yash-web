import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import TheLogic from '../components/TheLogic';
import WhyTradersFail from '../components/WhyTradersFail';
import Programs from '../components/Programs';
import Curriculum from '../components/Curriculum';
import Results from '../components/Results';
import Community from '../components/Community';
import CTASection from '../components/CTASection';

const Home = ({ onJoinClick }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state to avoid scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <div className="min-h-screen">
      <Hero onJoinClick={onJoinClick} />
      <TrustStrip />
      <TheLogic />
      <WhyTradersFail />
      <Programs onJoinClick={onJoinClick} />
      <Curriculum />
      <Results />
      <Community />
      <CTASection onJoinClick={onJoinClick} />
    </div>
  );
};

export default Home;

