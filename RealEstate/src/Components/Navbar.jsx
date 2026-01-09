import React, { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Properties",
    "Services",
    "Why Us",
    "About",
    "Process",
    "Reviews",
    "Blogs",
    "FAQ",
  ];

  // 🔹 WhatsApp configuration
  const ownerWhatsAppNumber = "919999999999"; // CHANGE THIS
  const whatsappMessage =
    "Hello, I’m interested in your property listings. Please share more details.";

  const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[1400px] mx-auto mt-5 bg-white rounded-xl">
        <nav className="flex items-center justify-between h-16 px-8 lg:px-3">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#F5F1E9] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 9L12 2L21 9V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22H5C4.47 22 3.96 21.79 3.59 21.41C3.21 21.04 3 20.53 3 20V9Z"
                  stroke="black"
                  strokeWidth="2"
                />
                <path d="M9 22V12H15V22" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-black">
                REA<span className="font-thin">LIST</span>
              </h1>
              <p className="text-[6px] tracking-wider">REAL ESTATE AGENCY</p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-semibold uppercase hover:opacity-70"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA BUTTON (DESKTOP) */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 
            bg-black text-white px-6 py-3.5 rounded-xl 
            font-medium text-sm uppercase tracking-wide 
            transition-all duration-300 
            hover:bg-[#25D366] group"
          >
            <span className="transition-all duration-300 group-hover:translate-x-1">
              Contact Us
            </span>

            {/* Arrow default */}
            <ArrowRight className="w-4 h-4 group-hover:hidden" />

            {/* WhatsApp on hover */}
            <FaWhatsapp className="w-5 h-5 hidden group-hover:block" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF8EE] border-t">
            <div className="px-8 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="uppercase"
                >
                  {item}
                </a>
              ))}

              {/* MOBILE CTA */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 
                bg-black text-white px-6 py-3 rounded-full 
                hover:bg-[#25D366] transition"
              >
                Contact Us
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
