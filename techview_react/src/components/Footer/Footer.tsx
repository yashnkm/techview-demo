import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Add scroll trigger animations here if needed
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative min-h-[50vh] overflow-hidden border-4 border-red-500" style={{backgroundColor: '#1a1a1a'}}>
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-sm" style={{backgroundColor: '#74f5a2'}}></div>
      <div className="absolute top-16 right-16 w-6 h-6 rounded-sm" style={{backgroundColor: '#74f5a2'}}></div>
      <div className="absolute top-8 right-32 w-4 h-4 rounded-sm" style={{backgroundColor: '#74f5a2'}}></div>

      <div className="absolute inset-0 flex items-center justify-center border-4 border-blue-500">
        <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[9.24xl] mx-auto border-4 border-green-500" style={{maxWidth: '110.88rem'}}>
          <div ref={containerRef} className="space-y-16">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
              
              {/* Contact Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4 font-familjen">Contact TechView</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-familjen">hello@techview.ai</p>
                  <p className="text-gray-300 text-sm font-familjen">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4 font-familjen">TechView San Francisco</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-familjen">123 Innovation St, 5th floor</p>
                  <p className="text-gray-300 text-sm font-familjen">94105 San Francisco</p>
                </div>
              </div>

              {/* Services Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4 font-familjen">Services</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">AI Development</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Web Applications</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Data Analytics</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Cloud Solutions</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Consulting</p>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4 font-familjen">Expertise</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Machine Learning</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">React & TypeScript</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Node.js & Python</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Cloud Architecture</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">DevOps</p>
                </div>
              </div>

              {/* Resources Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4 font-familjen">Resources</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Case Studies</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Blog</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Documentation</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Newsletter</p>
                </div>
              </div>

              {/* Company Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4 font-familjen">Company</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">About</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Careers</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Contact</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
                  <p className="text-gray-300 text-sm font-familjen hover:text-white transition-colors cursor-pointer">Terms of Service</p>
                </div>
              </div>

            </div>

            {/* Logo and Bottom Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-t border-gray-700 pt-8 space-y-8 lg:space-y-0">
              
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{backgroundColor: '#74f5a2'}}>
                    <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-white font-familjen">TechView</span>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="flex items-center space-x-6">
                  <p className="text-gray-400 text-sm font-familjen">© 2025 TechView</p>
                  <p className="text-gray-400 text-sm font-familjen">Privacy Policy</p>
                  <p className="text-gray-400 text-sm font-familjen">Terms and Conditions</p>
                </div>
                
                <div className="flex items-center space-x-6">
                  <p className="text-gray-400 text-sm font-familjen">Design by TechView</p>
                  <p className="text-gray-400 text-sm font-familjen">Code by TechView</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;