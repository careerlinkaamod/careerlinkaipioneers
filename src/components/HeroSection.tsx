import React from 'react';
import { Calendar, Users, Award, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-start justify-center px-4 pt-2 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-bounce" style={{
        animationDuration: '3s'
      }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-25 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        {/* New bubbles on the right side */}
        <div className="absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse" style={{
          animationDelay: '1.5s'
        }}></div>
        <div className="absolute top-64 right-20 w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-25 animate-bounce" style={{
          animationDuration: '4s'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mt-0">
        {/* Logo */}
        <div className="-mb-12">
          <img 
            src="/careerlink.png" 
            alt="Careerlink Logo" 
            className="w-[288px] h-[288px] mx-auto object-contain"
          />
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full inline-block mb-2 animate-fade-in">
          Limited to 10 Students
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <span className="bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent text-6xl">
            Careerlink AI
          </span>
        </h1>
        
        <h2 style={{
        animationDelay: '0.4s'
      }} className="text-3xl font-semibold text-purple-800 mb-4 animate-fade-in md:text-3xl">Pioneers Academy for High School</h2>

        <p style={{
        animationDelay: '0.6s'
      }} className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in md:text-xl">Hands-on AI Summer Bootcamp for Students in Upper K-12 Levels</p>

        <p style={{
        animationDelay: '0.8s'
      }} className="text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in text-base">
          Today's AI enthusiasts in school are tomorrow's AI developers, leaders & entrepreneurs in industry. 
          Build meaningful AI applications, master deep-learning fundamentals, and become an AI innovator in just 4 weeks.
        </p>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{
        animationDelay: '1s'
      }}>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Calendar className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-purple-800 mb-2">Duration</h3>
            <p className="text-gray-600">July 31 - Aug 30, 2025</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Users className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-purple-800 mb-2">Class Size</h3>
            <p className="text-gray-600">Limited to 10 Students</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Award className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-purple-800 mb-2">Certificate</h3>
            <p className="text-gray-600">Included</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <DollarSign className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-purple-800 mb-2">Investment</h3>
            <p className="text-gray-600">$800 Cost-friendly</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
        animationDelay: '1.2s'
      }}>
          <a href="https://gps.careerlink.ai/circle/learn-essential-ai-skills-summer-course-targeted-to-high-school-students-833933b32c" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Apply Now - Early Registration $800
            </Button>
          </a>
          <a href="https://gps.careerlink.ai" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 hover:text-pink-700 px-8 py-3 text-lg rounded-full">
              Learn More
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-pink-600 font-medium mt-4 mb-16">
          <span>7 spots remaining</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></span>
        </div>
      </div>
    </section>;
};
export default HeroSection;