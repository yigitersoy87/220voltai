import React from 'react';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
                <Link to="/">
                  <img src="https://oneclickvideo.net/storage/v1/object/public/media/logo/220volt-light.svg" alt="220 Volt AI" className="h-8" />
                </Link>
            </div>
            <p className="text-gray-400 mb-6">
              MVP-as-a-Service for founders & innovators. <span className="text-white">From</span> spark to live <span className="text-white">in 30 days</span>.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                <span className="text-white">→</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                <span className="text-white">→</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors duration-300">
                <span className="text-white">→</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 heading-font">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">MVP Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">AI Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">UX/UI Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 heading-font">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
              <li><a href="/#process" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Our Process</a></li>
              <li><a href="/#work" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 heading-font">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 220 Volt AI Agency. All rights reserved.</p>
          <div>
            <span className="text-gray-500 text-sm mr-4">Made with ⚡ by 220V</span>
            <span className="text-gray-500 text-sm">San Francisco, CA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}