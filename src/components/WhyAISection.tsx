import React from 'react';
import { GraduationCap, Zap, Heart } from 'lucide-react';
const WhyAISection = () => {
  const reasons = [{
    icon: GraduationCap,
    title: "College Advantage",
    description: "AI projects in your portfolio make you stand out in competitive college applications. Show admissions officers you're ahead of the curve."
  }, {
    icon: Zap,
    title: "Future-Proof Skills",
    description: "Every industry is being transformed by AI. From healthcare to entertainment, AI skills open doors to unlimited career opportunities."
  }, {
    icon: Heart,
    title: "Make Real Impact",
    description: "Build AI solutions that solve real-world problems and help people. Create technology that makes a meaningful difference in society."
  }];
  return <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 md:text-4xl">
            Why AI Skills Are Essential for High Schoolers
          </h2>
          <p className="text-purple-100 max-w-4xl mx-auto text-lg">AI is not the future, it's the present. High School Students with AI literacy have a massive advantage in college admissions, scholarships, and future careers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <reason.icon className="w-12 h-12 text-pink-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-pink-100">{reason.title}</h3>
              <p className="text-purple-100 leading-relaxed">{reason.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyAISection;