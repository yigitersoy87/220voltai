import React, { useEffect } from 'react';

export function Process() {
  // This effect adds and manages floating particles
  useEffect(() => {
    const processSection = document.getElementById('process');
    if (!processSection) return;
    
    // Create particles
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full opacity-20 z-0 animate-float';
      
      // Randomize properties
      const size = 2 + Math.random() * 6;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 15 + Math.random() * 15;
      const color = i % 5 === 0 ? '#FFE000' : 
                   i % 5 === 1 ? '#6EE7B7' : 
                   i % 5 === 2 ? '#93C5FD' : 
                   i % 5 === 3 ? '#C4B5FD' : '#FCA5A5';
      
      // Apply styles
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        backgroundColor: color,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      });
      
      processSection.appendChild(particle);
    }
    
    // Cleanup function
    return () => {
      const particles = processSection.querySelectorAll('.animate-float');
      particles.forEach(particle => particle.remove());
    };
  }, []);
  
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#131b2e] to-[#0c0e18]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse-slow"></div>
      </div>
      
      {/* Radial gradient in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-yellow-500/20 via-transparent to-transparent opacity-60"></div>
      
      {/* Improved grid lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }}></div>
      
      {/* Circuit patterns */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="url(#grad)" strokeWidth="0.5"></path>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE000" />
              <stop offset="50%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Glow effect behind title */}
          <div className="absolute w-60 h-40 rounded-full bg-yellow-500/20 filter blur-3xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
          
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 heading-font">
            <span className="text-white">From</span> 
            <span className="relative mx-2">
              <span className="gradient-text"> Spark to Live </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500"></span>
            </span> 
            <span className="text-white">in 30 Days</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures rapid progress without sacrificing quality.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - enhanced */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-yellow-500 opacity-70 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Step 1 */}
            <div className="md:pr-12 relative">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center mr-4 shadow-lg shadow-cyan-500/20">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold heading-font text-white">Discovery & Strategy</h3>
              </div>
              <p className="text-gray-300 pl-16">We start with a deep dive into your vision, target audience, and core objectives to define the perfect MVP scope.</p>
            </div>
            
            {/* Step 2 */}
            <div className="md:col-start-2 md:pl-12 md:mt-20 relative">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mr-4 shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-2xl font-bold heading-font text-white">Brand & Design</h3>
              </div>
              <p className="text-gray-300 pl-16">Our designers create a compelling visual identity and intuitive UX flows that resonate with your audience.</p>
            </div>
            
            {/* Step 3 */}
            <div className="md:pr-12 md:mt-20 relative">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold heading-font text-white">AI-Powered Development</h3>
              </div>
              <p className="text-gray-300 pl-16">We build your MVP using AI-assisted coding for speed while maintaining clean, scalable architecture.</p>
            </div>
            
            {/* Step 4 */}
            <div className="md:col-start-2 md:pl-12 md:mt-20 relative">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4 shadow-lg shadow-green-500/20">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-2xl font-bold heading-font text-white">Testing & Refinement</h3>
              </div>
              <p className="text-gray-300 pl-16">Rigorous testing ensures a polished product, with adjustments based on real user feedback.</p>
            </div>
            
            {/* Step 5 */}
            <div className="md:pr-12 md:mt-20 relative">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center mr-4 shadow-lg shadow-yellow-500/20">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-2xl font-bold heading-font text-white">Launch & Iterate</h3>
              </div>
              <p className="text-gray-300 pl-16">We deploy your MVP and help plan next steps based on real-world performance data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}