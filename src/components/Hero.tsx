import React from 'react';

export function Hero() {
  return (
    <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="neural-bg"></div>
      <div className="circuit-lines"></div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="data-stream absolute"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            height: `${100 + Math.random() * 150}px`
          }}
        ></div>
      ))}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="mb-6 flex items-center bg-black bg-opacity-40 rounded-full w-max px-4 py-2 border border-gray-800">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2 pulse"></div>
              <span className="text-sm text-yellow-400">MVP-as-a-Service for Founders & Innovators</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 heading-font">
              <span className="gradient-text">Plug In Your Idea.</span> <span className="text-white">Launch in 30 Days.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              You've got the spark. We bring the voltage.
              We turn your idea into a <span className="text-yellow-400 font-medium">branded, working web or mobile app</span> — complete with design, code, and go-to-market clarity — <span className="text-white">in 30 days</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="neon-border bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 heading-font">
                Get Started
              </a>
              <a href="#work" className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:bg-opacity-10 transition-all duration-300 heading-font">
                See Our Work
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-spark"></div>
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="AI Development" className="w-full h-auto rounded-xl border-2 border-gray-800 shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}