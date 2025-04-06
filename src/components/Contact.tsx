import React from 'react';
import { Mail, Calendar, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="contact-glow"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            animationDelay: `${i * 1.5}s`
          }}
        ></div>
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 heading-font"><span className="text-white">Get</span> <span className="gradient-text">Connected</span></h2>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              Have questions about our MVP-as-a-Service? Ready to start your project? Drop us a line or book a call.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-cyan-500 bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Email Us</h4>
                  <p className="text-gray-400">hello@220voltai.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-purple-500 bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Book a Call</h4>
                  <p className="text-gray-400">15-min free consultation</p>
                  <a href="#" className="text-cyan-400 text-sm font-medium inline-flex items-center mt-1">
                    Schedule now
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-500 bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Our HQ</h4>
                  <p className="text-gray-400">San Francisco, CA <br />Remote team worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 heading-font text-white">Send Us a Message</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for your message! We'll get back to you soon.");
              e.currentTarget.reset();
            }}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">What's your idea about?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 heading-font"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}