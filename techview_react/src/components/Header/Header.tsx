import { useState } from 'react';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navigation Card */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-8 py-4 shadow-lg">
          {/* Logo - Left side */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#74f5a2'}}></div>
            <span className="text-xl font-bold text-slate-800">TechView</span>
          </div>

          {/* 20% Space after logo */}
          <div className="w-16"></div>

          {/* Desktop Navigation - 10% space between each item */}
          <nav className="hidden lg:flex items-center">
            <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-4">Services</a>
            <a href="#cases" className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-4">Cases</a>
            <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-4">About</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors px-4">Contact</a>
          </nav>

          {/* 20% Space before button */}
          <div className="w-16"></div>

          {/* Text and Square Button - Right side */}
          <div className="hidden lg:flex items-center space-x-3">
            <span className="text-slate-700 font-medium">Talk with us</span>
            <AnimatedArrowButton arrowDirection="top-right" size="md" />
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Services</a>
              <a href="#cases" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Cases</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-slate-800 font-medium">Talk with us</span>
                <AnimatedArrowButton arrowDirection="top-right" size="md" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;