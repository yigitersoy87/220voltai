import React from 'react';
import { Bolt, ChevronRight as ChessKnight, Rocket, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] to-[#111111]"></div>
      <div className="neural-bg opacity-20"></div>
      
      {/* Parlak üst çizgi */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 heading-font">
            <span className="text-white">Built by</span> <span className="gradient-text">expert designers, devs, and operators</span> <span className="text-white">using</span> <br /><span className="text-white">AI superpowers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine human expertise with AI acceleration to deliver market-ready MVPs at startup speed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bolt className="w-8 h-8 text-yellow-400" />}
            title="End-to-end MVP delivery"
            description="Not just design or code, but a usable product people can test or even start using."
            iconBg="yellow"
          />
          
          <ServiceCard
            icon={<ChessKnight className="w-8 h-8 text-yellow-400" />}
            title="Business-thinking baked in"
            description="Positioning, user flows, and lean feature sets aligned to the goal."
            iconBg="yellow"
          />
          
          <ServiceCard
            icon={<Rocket className="w-8 h-8 text-yellow-400" />}
            title="Speed & efficiency via AI"
            description="AI-assisted coding, agents for repetitive tasks, and AI-infused ops."
            iconBg="yellow"
          />
        </div>
        
        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <a href="#features" className="inline-flex items-center px-6 py-3 rounded-full border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition group">
            <span>Discover how we work</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, iconBg }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}) {
  return (
    <div className="premium-card rounded-xl p-8 glow-effect">
      <div className={`w-16 h-16 bg-gradient-to-br from-${iconBg}-500/20 to-${iconBg}-500/5 rounded-lg flex items-center justify-center mb-6 border border-${iconBg}-500/10`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 heading-font text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500/50 to-transparent rounded-full"></div>
    </div>
  );
}