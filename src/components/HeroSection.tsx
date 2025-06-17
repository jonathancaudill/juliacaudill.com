
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-burgundy-50 to-gold-50">
      {/* Content */}
      <div className="relative z-10 text-center text-burgundy-900 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Julia Caudill
          </h1>
          <h2 className="font-cormorant text-2xl md:text-3xl font-light mb-8 text-gold-700">
            Violin Studio
          </h2>
          <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-burgundy-700">
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
              className="border-2 border-burgundy-700 text-burgundy-700 hover:bg-burgundy-700 hover:text-white px-8 py-4 text-lg font-cormorant transition-all duration-300"
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
