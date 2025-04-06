import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Work() {
  // Referanslarımız - gerçek projeler
  const projects = [
    {
      title: "Swiftr Marketplace",
      category: "eCommerce Platform",
      description: "AI-powered personalized shopping MVP built and launched in 28 days, processing real transactions from day one.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: ["28-day turnaround", "$85k seed raised"]
    },
    {
      title: "MediSync AI",
      category: "HealthTech SaaS",
      description: "Physician scheduling assistant with AI optimization, deployed to first hospital partner in 23 days.",
      image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: ["23-day turnaround", "$120k ARR in 3 months"]
    },
    {
      title: "FinanceGPT",
      category: "FinTech App",
      description: "AI financial advisor that provides personalized investment strategies and budget recommendations based on user data.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: ["30-day turnaround", "$150k initial investment"]
    },
    {
      title: "TrendSpotter",
      category: "Marketing Analytics",
      description: "Real-time social media analytics platform with AI-powered trend prediction and content recommendation engine.",
      image: "https://images.unsplash.com/photo-1533750516278-4555380af2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: ["25-day turnaround", "1,500+ beta users"]
    },
    {
      title: "EduMentor",
      category: "EdTech Platform",
      description: "Personalized learning companion that adapts to student's pace and delivers custom curriculum based on performance.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: ["21-day turnaround", "$200k angel investment"]
    }
  ];

  // CSS için inline stil
  const hideScrollbarStyle = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Stil tanımları */}
      <style dangerouslySetInnerHTML={{ __html: hideScrollbarStyle }} />
      
      {/* Parçacık animasyonları */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="work-particles"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        ></div>
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 heading-font"><span className="gradient-text">MVPs</span> <span className="text-white">We've Powered Up</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Real products launched in record time using our MVP-as-a-Service</p>
        </div>
        
        {/* Kaydırma navigasyon butonları */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <button 
              className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-yellow-500/50 transition-colors duration-300"
              onClick={() => {
                const slider = document.getElementById('projects-slider');
                if (slider) slider.scrollBy({ left: -640, behavior: 'smooth' });
              }}
            >
              <ArrowLeft className="text-white w-6 h-6" />
            </button>
            <button 
              className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-yellow-500/50 transition-colors duration-300"
              onClick={() => {
                const slider = document.getElementById('projects-slider');
                if (slider) slider.scrollBy({ left: 640, behavior: 'smooth' });
              }}
            >
              <ArrowRight className="text-white w-6 h-6" />
            </button>
          </div>
          <span className="text-gray-400 text-sm">Swipe to see more</span>
        </div>
        
        {/* Yatay kaydırmalı portfolyo - Sadece 2'li görünecek şekilde */}
        <div 
          id="projects-slider" 
          className="flex space-x-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex-shrink-0 w-[calc(50%-1rem)] min-w-[460px] h-[500px] snap-start overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10 opacity-70"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[45%] object-cover transform group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute top-[40%] left-0 z-20 p-6 w-full">
                <span className="text-yellow-500 font-medium uppercase text-sm">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3 heading-font text-white">{project.title}</h3>
                <p className="text-gray-300 mb-5 text-base">{project.description}</p>
                <div className="flex items-center flex-wrap">
                  {project.stats.map((stat, i) => (
                    <React.Fragment key={i}>
                      <span className="text-base text-yellow-400 mr-3">{stat}</span>
                      {i < project.stats.length - 1 && <span className="text-sm text-white mr-3">•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {/* Hover efekti */}
              <div className="absolute bottom-5 left-6 right-6 bg-yellow-500/10 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-white text-sm mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "AI", "UI/UX"].map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#contact" className="neon-border bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-10 py-5 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 heading-font inline-flex items-center">
            Power Up Your Idea
          </a>
        </div>
      </div>
    </section>
  );
}