
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/4676ab46-ae99-4f0b-96a3-bb592bf55d4d.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Melissa White
          </h1>
          <h2 className="font-cormorant text-2xl md:text-3xl font-light mb-8 text-gold-200">
            Violin Studio
          </h2>
          <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional violin instruction combining technical excellence with artistic expression. 
            Discover the beauty of music through personalized teaching and masterful guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 text-lg font-cormorant transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Lesson
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-burgundy-700 px-8 py-4 text-lg font-cormorant transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
