
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Studio Location",
      details: ["123 Music Avenue", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["melissa@violinstudio.com"]
    },
    {
      icon: Clock,
      title: "Studio Hours",
      details: ["Mon-Fri: 2:00 PM - 8:00 PM", "Saturday: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-burgundy-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your musical journey? Contact us to schedule a consultation 
            and discover how violin lessons can enrich your life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="elegant-shadow border-0">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-gray-800">
                Schedule a Consultation
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-cormorant text-gray-700 block mb-2">First Name</label>
                    <Input className="font-cormorant" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="font-cormorant text-gray-700 block mb-2">Last Name</label>
                    <Input className="font-cormorant" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="font-cormorant text-gray-700 block mb-2">Email</label>
                  <Input className="font-cormorant" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="font-cormorant text-gray-700 block mb-2">Phone</label>
                  <Input className="font-cormorant" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="font-cormorant text-gray-700 block mb-2">Experience Level</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md font-cormorant focus:outline-none focus:ring-2 focus:ring-burgundy-500">
                    <option>Complete Beginner</option>
                    <option>Some Experience</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="font-cormorant text-gray-700 block mb-2">Message</label>
                  <Textarea 
                    className="font-cormorant min-h-[120px]"
                    placeholder="Tell us about your musical goals and any questions you have..."
                  />
                </div>
                <Button className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-cormorant text-lg py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 elegant-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-burgundy-100 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-burgundy-700" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-cormorant text-gray-600 text-lg">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-burgundy-700 to-burgundy-800 text-white border-0">
              <CardContent className="p-8 text-center">
                <h4 className="font-playfair text-2xl font-semibold mb-4">
                  Ready to Start Your Musical Journey?
                </h4>
                <p className="font-cormorant text-lg mb-6 opacity-90">
                  Join our community of passionate musicians and discover the joy of violin.
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-burgundy-700 font-cormorant text-lg px-8"
                >
                  Book Your First Lesson
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
