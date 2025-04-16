import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-300 via-pink-200 to-red-200 relative overflow-hidden text-black py-14 mt-20 font-axy">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_25%)] opacity-30 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-red-600 font-small">
            Chinmayee Desai
          </h3>
          <p className="text-white mt-2 text-sm max-w-md">
            Computer Science Engineer specialising in Cloud Computing and Web Development.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/chinmayee-desai-b2b841242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ChinmayeeDesai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Chinmayeedesai9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/chinmayeedesai9/?igsh=emQ4bjhiZzV3dmx3#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600 font-three">
        © {new Date().getFullYear()} Chinmayee Desai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
