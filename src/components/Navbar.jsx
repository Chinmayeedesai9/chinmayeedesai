import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#exp", label: "Experiences" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="bg-transparent text-white px-6 md:px-16 lg:px-24 fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-sm">
      <div className="py-4 flex items-center justify-between relative">

        {/* Left - Logo */}
        <div className="text-xl sm:text-2xl font-bold font-three text-white drop-shadow-[0_1px_2px_#8B0000]">
          Chinmayee Desai
        </div>

        {/* Center - Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-base font-semibold font-small relative transition-colors duration-200 group"
              style={{
                textShadow: `
                  -1px -1px 0 #8B0000,
                  1px -1px 0 #8B0000,
                  -1px  1px 0 #8B0000,
                  1px  1px 0 #8B0000
                `
              }}
            >
              <span className="relative z-10 group-hover:text-gray-300">
                {link.label}
              </span>
              <span className="absolute inset-0 text-[#8B0000] z-0 stroke-text">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Right - Button */}
        <a
          href="#contact"
          className="hidden md:inline bg-[#FF69B4] font-three text-white px-6 py-2 rounded-full text-sm lg:text-base
          transform transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Connect with me
        </a>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white z-50">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#8B0000]/90 py-4 rounded-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg py-2 font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#FF69B4] text-white px-6 py-2 rounded-full text-base"
          >
            Connect with me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
