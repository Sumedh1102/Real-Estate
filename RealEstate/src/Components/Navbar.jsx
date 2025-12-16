import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    "About",
    "Explore",
    "Sell",
    "Submit Property",
    "Reviews",
    "Blogs",
    "Contact"
  ];

  return (
    <>
        <header className="fixed top-0 left-0 right-0 w-full rounded-xl z-50 transition-transform duration-300 max-w-[1400px] mt-5 mx-auto bg-white">
        <nav className="max-w-[1400px] mx-auto px-8 lg:px-3 h-16 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
            <div className="w-10 h-10 bg-[#F5F1E9] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-black tracking-wide">REA
                <span className='font-thin'>
                LIST
                </span>
                </span>
              <span className="text-[6px] font-medium tracking-wider text-gray-700">REAL ESTATE AGENCY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative flex items-center gap-1 text-[15px] font-semibold text-black hover:opacity-70 transition-opacity duration-200 tracking-wide uppercase text-sm"
              >
                {item}
                {item === "Explore" && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 hover:translate-y-0.5" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden lg:flex items-center gap-2 bg-black text-white px-5 py-3.5 rounded-xl font-medium text-sm hover:scale-105 transition-all duration-250 uppercase tracking-wide">
            Buy Template
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF8EE] border-t border-black/10">
            <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between text-base font-medium text-black hover:opacity-70 transition-opacity py-2 uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                  {item === "Explore" && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform mt-2 uppercase tracking-wide">
                Buy Template
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;