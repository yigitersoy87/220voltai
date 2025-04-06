import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl py-3 shadow-lg shadow-yellow-500/5 border-b border-yellow-500/10'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://oneclickvideo.net/storage/v1/object/public/media/logo/220volt-light.svg" 
                alt="220 Volt AI" 
                className="h-9 hover:opacity-90 transition-opacity" 
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link to="/about" className="relative px-4 py-2.5 text-gray-200 font-medium hover:text-yellow-400 transition-colors duration-300 group">
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/#process">Process</NavLink>
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#work">Work</NavLink>
              
              <a 
                href="/#contact" 
                className="ml-4 relative group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 opacity-90 rounded-full blur-md group-hover:opacity-100 transition duration-300"></span>
                <span className="relative block px-6 py-2.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-full font-medium text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
                  Get Started
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl mt-2 rounded-lg mx-4 border border-yellow-500/20">
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-yellow-400 hover:bg-yellow-400/10 transition duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          <MobileNavLink href="/#services" setMobileMenuOpen={setMobileMenuOpen}>Services</MobileNavLink>
          <MobileNavLink href="/#process" setMobileMenuOpen={setMobileMenuOpen}>Process</MobileNavLink>
          <MobileNavLink href="/#features" setMobileMenuOpen={setMobileMenuOpen}>Features</MobileNavLink>
          <MobileNavLink href="/#work" setMobileMenuOpen={setMobileMenuOpen}>Work</MobileNavLink>
          
          <a 
            href="/#contact"
            className="block w-full text-center px-3 py-2.5 mt-3 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="relative px-4 py-2.5 text-gray-200 font-medium hover:text-yellow-400 transition-colors duration-300 group"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
}

function MobileNavLink({ 
  href, 
  children, 
  setMobileMenuOpen 
}: { 
  href: string; 
  children: React.ReactNode;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <a 
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-yellow-400 hover:bg-yellow-400/10 transition duration-200"
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </a>
  );
}