import React from 'react';
import { Users, Award, Zap, Clock, Globe, Heart } from 'lucide-react';

export function About() {
  const teamMembers = [
    {
      name: "Yigit Kocak",
      role: "Founder & CEO",
      bio: "10+ years experience in digital product development and AI integration.",
      image: "/images/team-1.jpg"
    },
    {
      name: "Olivia Chen",
      role: "Lead Designer",
      bio: "Award-winning designer specializing in UI/UX for tech startups.",
      image: "/images/team-2.jpg"
    },
    {
      name: "Marcus Johnson",
      role: "Technical Lead",
      bio: "Full-stack developer with expertise in React, Node.js and AI implementations.",
      image: "/images/team-3.jpg"
    },
    {
      name: "Sofia Rodriguez",
      role: "Product Manager",
      bio: "Former Google PM helping startups launch successful MVPs.",
      image: "/images/team-4.jpg"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at center, rgba(255, 224, 0, 0.03) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute w-40 h-40 rounded-full bg-yellow-500/10 filter blur-3xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 heading-font text-gray-800 tracking-wide">
            About <span className="relative inline-block">
              220 Volt
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500/80"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to bringing your ideas to life through cutting-edge technology and design.
          </p>
        </div>
        
        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gray-900 p-12 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 heading-font text-white">Our Story</h3>
                  <p className="text-gray-300 mb-6">
                    Founded in 2020, 220 Volt began with a simple mission: to help innovators and entrepreneurs turn their ideas into reality—fast. 
                  </p>
                  <p className="text-gray-300 mb-6">
                    We noticed a gap in the market. Too many brilliant ideas were getting stuck in development limbo, taking months or years to launch. We knew there had to be a better way.
                  </p>
                  <p className="text-gray-300">
                    By combining cutting-edge AI tools with lean development principles, we created our signature 30-day MVP process. Since then, we've helped launch over 50 startups and innovations, many of which have gone on to raise significant funding.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our team collaboration" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 heading-font text-center text-gray-800">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-transparent rounded-lg flex items-center justify-center mb-6 border border-yellow-200">
                <Zap className="text-yellow-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 heading-font text-gray-800">Speed Without Sacrifice</h4>
              <p className="text-gray-600">We believe in moving fast, but never at the expense of quality. Our processes are designed to eliminate waste, not corners.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-transparent rounded-lg flex items-center justify-center mb-6 border border-yellow-200">
                <Users className="text-yellow-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 heading-font text-gray-800">Client Partnership</h4>
              <p className="text-gray-600">We see ourselves as an extension of your team, not just a vendor. Your success is our success, and we're committed to your vision.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-transparent rounded-lg flex items-center justify-center mb-6 border border-yellow-200">
                <Globe className="text-yellow-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 heading-font text-gray-800">Innovation First</h4>
              <p className="text-gray-600">We stay at the cutting edge of technology, constantly adapting our toolkit to provide the most efficient, effective solutions.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 heading-font text-center text-gray-800">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold heading-font text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-gray-300">MVPs Launched</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">30</div>
              <p className="text-gray-300">Days Average Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">$12M+</div>
              <p className="text-gray-300">Client Funding Raised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">97%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}