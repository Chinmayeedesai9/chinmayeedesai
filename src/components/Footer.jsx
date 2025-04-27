import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import footer from "../assets/footer.jpg"; // Make sure path is correct

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-16 mt-20 font-axy"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-bold text-white mb-2 tracking-wide">
            Chinmayee Desai
          </h3>
          <p className="text-gray-300 max-w-md leading-relaxed text-sm">
            Computer Science Engineer specializing in Cloud Computing and Web Development.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/chinmayee-desai-b2b841242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ChinmayeeDesai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Chinmayeedesai9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/chinmayeedesai9/?igsh=emQ4bjhiZzV3dmx3#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-10 text-center text-xs text-gray-400 font-three">
        © {new Date().getFullYear()} Chinmayee Desai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
