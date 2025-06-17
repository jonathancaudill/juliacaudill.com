
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Music2, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Private Lessons",
      duration: "30, 45, or 60 minutes",
      description: "One-on-one instruction tailored to your individual goals and learning style. Perfect for focused development and personalized attention.",
      features: ["Customized curriculum", "Flexible scheduling", "All skill levels welcome", "Performance preparation"],
      price: "From $75"
    },
    {
      icon: Music2,
      title: "Group Classes",
      duration: "60 minutes",
      description: "Small group lessons that foster collaboration and ensemble skills while maintaining individual attention for each student.",
      features: ["Chamber music experience", "Peer learning", "Cost-effective option", "Social musical development"],
      price: "From $45"
    },
    {
      icon: Zap,
      title: "Masterclasses",
      duration: "90 minutes",
      description: "Intensive workshops focusing on advanced techniques, interpretation, and performance skills for serious students.",
      features: ["Advanced repertoire", "Performance techniques", "Competition prep", "College audition prep"],
      price: "From $150"
    },
    {
      icon: Clock,
      title: "Adult Lessons",
      duration: "45 or 60 minutes",
      description: "Specialized instruction for adult learners, whether returning to the violin or starting as a complete beginner.",
      features: ["Patient, supportive approach", "Flexible goals", "Adult-friendly repertoire", "Stress-free environment"],
      price: "From $85"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Teaching Services
          </h2>
          <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive violin instruction designed to meet the unique needs of each student, 
            from complete beginners to advanced musicians preparing for professional careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 elegant-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-burgundy-100 p-3 rounded-lg group-hover:bg-burgundy-200 transition-colors">
                    <service.icon className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="font-cormorant text-gold-600 font-medium mb-4">
                      {service.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-playfair text-2xl font-bold text-burgundy-700">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <p className="font-cormorant text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="font-cormorant text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-cormorant text-lg py-3">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
