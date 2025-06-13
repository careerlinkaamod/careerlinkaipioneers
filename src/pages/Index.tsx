
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyAISection from '../components/WhyAISection';
import FlagshipProjects from '../components/FlagshipProjects';
import WeeklyJourney from '../components/WeeklyJourney';
import TechStack from '../components/TechStack';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50">
      <HeroSection />
      <WhyAISection />
      <FlagshipProjects />
      <WeeklyJourney />
      <TechStack />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
