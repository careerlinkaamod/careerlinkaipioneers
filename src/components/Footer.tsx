import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <img 
            src="/careerlink.png" 
            alt="Careerlink Logo" 
            className="w-[192px] h-[192px] mx-auto object-contain mb-2"
          />
          <h3 className="text-2xl font-bold mb-4">Careerlink AI Pioneers Academy</h3>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Empowering the next generation of AI innovators through hands-on learning and 
            real-world projects while in high school.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <a href="mailto:jack@careerlink.ai" className="text-pink-300 hover:text-pink-200 transition-colors">
            jack@careerlink.ai
          </a>
          <a href="tel:(857)545-4233" className="text-pink-300 hover:text-pink-200 transition-colors">
            (857) 545-4233
          </a>
        </div>

        <div className="text-center text-purple-300">
          <p>&copy; 2025 Careerlink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
