import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-sm">
      <div className="container py-3 flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-white 
          [text-shadow:_-2px_-2px_0_#8B0000,2px_-2px_0_#8B0000,-2px_2px_0_#8B0000,2px_2px_0_#8B0000]">
          Chinmayee Desai
        </div>

        {/* Center - Navigation Links */}
        <div className="flex-1 flex justify-center space-x-6">
          <a href="#home" className="hover:text-gray-300 text-white text-lg font-semibold 
            [-webkit-text-stroke:1px_#8B0000]">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 text-white text-lg font-semibold 
            [-webkit-text-stroke:1px_#8B0000]">
            About Me
          </a>
          <a href="#exp" className="hover:text-gray-300 text-white text-lg font-semibold 
            [-webkit-text-stroke:1px_#8B0000]">
            Experiences
          </a>
          <a href="#projects" className="hover:text-gray-300 text-white text-lg font-semibold 
            [-webkit-text-stroke:1px_#8B0000]">
            Projects
          </a>
        </div>

        {/* Right Side - Fully Rounded Pink Button */}
        <a 
          href="#contact"
          className="bg-[#FF69B4] text-white hidden md:inline 
          px-6 py-3 rounded-full 
          transform transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Connect with me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
