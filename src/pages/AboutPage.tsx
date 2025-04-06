import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Users, Zap, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  // Founder information
  const founders = [
    {
      name: "Yigit Kocak",
      role: "Founder & CEO",
      bio: "With over 10 years in digital product development, Yigit founded 220 Volt in 2020 with a mission to accelerate innovation. His background in AI and system design has helped dozens of startups move from concept to launch in record time.",
      image: "/images/team-1.jpg",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Olivia Chen",
      role: "Co-Founder & Creative Director",
      bio: "Olivia brings 8+ years of experience in UX/UI design and brand development. After leading design at several tech unicorns, she joined forces with Yigit to create a new type of agency that combines speed and quality through AI-powered workflows.",
      image: "/images/team-2.jpg",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
        
        {/* Top right yellow accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10">
          <div 
            className="w-full h-full rounded-bl-full"
            style={{
              background: 'radial-gradient(circle at top right, #FFD700, transparent 70%)'
            }}
          ></div>
        </div>
        
        {/* Bottom left yellow accent */}
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-10">
          <div 
            className="w-full h-full rounded-tr-full"
            style={{
              background: 'radial-gradient(circle at bottom left, #FFD700, transparent 70%)'
            }}
          ></div>
        </div>
      </div>
      
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 relative">
              <div className="absolute w-40 h-40 rounded-full bg-yellow-500/10 filter blur-3xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 heading-font text-white tracking-wide">
                <span className="relative">
                  About Us
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-500/80"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the team behind 220 Volt and learn about our mission to transform how startups launch their MVPs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Mission */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 md:p-16 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 heading-font text-white">Our Mission</h2>
                    <div className="w-20 h-1 bg-yellow-500 mb-6 rounded-full"></div>
                    <p className="text-gray-300 mb-6 text-lg">
                      Founded in 2020, 220 Volt began with a clear mission: to help innovators and entrepreneurs turn their ideas into reality—faster than they ever thought possible.
                    </p>
                    <p className="text-gray-300 mb-6 text-lg">
                      We believe that great ideas deserve to see the light of day quickly. In a world where technology moves at lightning speed, waiting months or years to launch means missed opportunities.
                    </p>
                    <p className="text-gray-300 text-lg">
                      By combining cutting-edge AI tools with lean development principles, we've created a streamlined 30-day MVP process that has helped launch over 50 successful startups.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our team collaboration" 
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founders Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 heading-font text-white">Meet Our Founders</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The visionaries behind 220 Volt who are passionate about helping innovators bring their ideas to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 h-full">
                      <div className="h-full relative overflow-hidden">
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <a 
                          href={founder.linkedin} 
                          className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 9H2V21H6V9Z" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold heading-font text-white mb-2">{founder.name}</h3>
                      <p className="text-yellow-500 font-medium mb-4">{founder.role}</p>
                      <p className="text-gray-300 mb-6">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <div className="text-center mt-8 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 