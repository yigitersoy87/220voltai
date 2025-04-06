import React from 'react';
import { Users, Palette, Code, Globe, Notebook as Robot, Calendar, ArrowRight } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Arka plan gradyanı */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f7f7f7]"></div>
      
      {/* Animasyonlu arka plan elementleri */}
      <div className="features-grid opacity-10"></div>
      
      {/* İnce veri akışı animasyonları */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="data-stream absolute"
          style={{
            left: `${15 + i * 25}%`,
            animationDelay: `${i * 1.5}s`,
            opacity: 0.1,
            background: 'linear-gradient(to bottom, transparent, rgba(255, 190, 0, 0.3), transparent)'
          }}
        ></div>
      ))}
      
      {/* Ana içerik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Başlık üzerinde ince parlama efekti */}
          <div className="absolute w-40 h-40 rounded-full bg-yellow-500/10 filter blur-3xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 heading-font relative text-gray-800 tracking-wide">
            What's Included in Your <span className="relative inline-block">
              MVP Package
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500/80"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive package delivers everything you need to go from idea to launch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="text-xl text-yellow-600" />}
            title="1:1 product working session"
            description="Collaborate directly with our product experts to refine your vision."
          />
          
          <FeatureCard
            icon={<Palette className="text-xl text-yellow-600" />}
            title="Branding (logo, type, colors)"
            description="Professional brand identity that makes your product stand out."
          />
          
          <FeatureCard
            icon={<Code className="text-xl text-yellow-600" />}
            title="UI/UX design for web or mobile"
            description="Intuitive, beautiful interfaces designed for your target users."
          />
          
          <FeatureCard
            icon={<Globe className="text-xl text-yellow-600" />}
            title="Frontend + backend build"
            description="Complete with authentication, database, and APIs."
          />
          
          <FeatureCard
            icon={<Robot className="text-xl text-yellow-600" />}
            title="AI integrations"
            description="Chat, generation, and other AI capabilities built right in."
          />
          
          <FeatureCard
            icon={<Calendar className="text-xl text-yellow-600" />}
            title="Marketing site + Deployment"
            description="Ready-to-go marketing site deployed on Netlify."
          />
        </div>
        
        <div className="text-center mt-16">
          <a href="#contact" className="group inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-800 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 heading-font relative overflow-hidden">
            <span className="relative z-10">Get Full Details</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 group hover:translate-y-[-5px] transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100">
      {/* İkon kutucuk */}
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-transparent rounded-lg flex items-center justify-center mb-4 border border-yellow-200 group-hover:border-yellow-300 transition-colors">
        {icon}
      </div>
      
      {/* İçerik */}
      <h3 className="text-xl font-bold mb-3 heading-font text-gray-800 group-hover:text-yellow-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {/* Animasyonlu ayrıcı */}
      <div className="w-10 h-0.5 bg-gradient-to-r from-yellow-400/60 to-transparent rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}