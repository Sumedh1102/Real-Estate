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
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
             <img src="https://i.postimg.cc/YSvpJ7gK/Chat-GPT-Image-Jan-12-2026-07-17-29-PM.png" alt="" />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-thin">
                BEST<span className="font-black text-blue-500">DEAL</span>
                <span className="font-thin">PROPERTY</span>
              </h1>
              <p className="text-[6px] tracking-wider ml-14">REAL ESTATE AGENCY</p>
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
