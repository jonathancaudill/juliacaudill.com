
import React from 'react';
import { Award, Music, Users, Star } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Master's Degree",
      description: "Advanced studies in violin performance and pedagogy"
    },
    {
      icon: Music,
      title: "20+ Years Experience",
      description: "Professional performance and teaching expertise"
    },
    {
      icon: Users,
      title: "100+ Students",
      description: "Successfully taught students of all ages and levels"
    },
    {
      icon: Star,
      title: "Award Winner",
      description: "Multiple competition victories and recognition"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Julia
            </h2>
            <div className="space-y-6 font-cormorant text-lg text-gray-700 leading-relaxed">
              <p>
                With over two decades of experience as both a performer and educator, 
                Julia Caudill brings exceptional artistry and pedagogical expertise to her violin studio. 
                Her approach combines traditional classical techniques with modern teaching methods, 
                ensuring each student develops both technical proficiency and musical expression.
              </p>
              <p>
                Julia has performed with renowned orchestras and in prestigious venues worldwide. 
                Her teaching philosophy centers on nurturing each student's unique musical voice while 
                building a solid foundation of technique, theory, and performance skills.
              </p>
              <p>
                Whether you're a beginner discovering the violin for the first time or an advanced 
                student preparing for auditions, Julia's personalized approach ensures meaningful 
                progress and a lifelong love of music.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg elegant-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <achievement.icon className="w-8 h-8 text-burgundy-700 mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gray-800">
                  {achievement.title}
                </h3>
                <p className="font-cormorant text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
