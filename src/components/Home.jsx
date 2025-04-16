import React from 'react';
import MyImg from '../assets/me4.jpeg';

const Home = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-screen overflow-hidden" id="home">
      
      {/* Semi-Circle Background - Positioned to the Left */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-red-400 to-pink-400 rounded-r-[50%] z-0"></div>

      {/* Main Content Section - Split into Two */}
      <div className="relative flex flex-row items-center justify-between w-[80%] max-w-6xl z-10 mt-10">

        {/* Left Side - Name, Bio & Buttons (Inside Colored Block) */}
        <div className="flex flex-col justify-center w-[45%] text-white p-12 z-10">{/* Adjusted width and padding */}
          <h1 className="text-6xl font-bold">{/* Increased text size */}
            <span className="text-white font-axy">Chinmayee Desai</span>
          </h1>
          <p className="font-small mt-5 text-xl max-w-md">{/* Made text slightly larger */}
            Designing dreams and coding them into reality—one pixel at a time.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex space-x-6">{/* Adjusted spacing */}
            <a 
              href="#contact" 
              className="bg-white font-three text-red-500 px-8 py-4 rounded-full 
              shadow-md transition-transform duration-300 hover:scale-110 text-lg"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-white font-three text-red-500 px-8 py-4 rounded-full 
              shadow-md transition-transform duration-300 hover:scale-110 text-lg"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side - Asymmetrical Grave-Like Shape */}
        <div className="relative w-[450px] h-[550px] bg-gradient-to-br from-red-500 to-pink-500 rounded-tl-[50%] rounded-tr-[50%] rounded-b-[20px] shadow-2xl flex justify-center items-center overflow-hidden">{/* Increased size */}
          <div className="relative w-[92%] h-[92%] rounded-tl-[45%] rounded-tr-[45%] rounded-b-[15px] overflow-hidden border-8 border-red-700 shadow-xl">{/* Slightly increased size */}
            <img 
              src={MyImg} 
              alt="Chinmayee Desai" 
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
 