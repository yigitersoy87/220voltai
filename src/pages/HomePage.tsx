import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Clients } from '../components/Clients';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Subtle background patterns */}
      <div className="fixed inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
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
      <Hero />
      <Clients />
      <Services />
      <Features />
      <Process />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
} 