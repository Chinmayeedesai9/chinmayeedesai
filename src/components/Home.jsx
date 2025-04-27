import React from 'react';
import MyImg from '../assets/me4.jpeg';
import Background3 from '../assets/background2.jpg'; // Import your background image
import Background4 from '../assets/background1.jpg';

const Home = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-screen overflow-hidden" id="home">
      
      {/* Left-side Background Image */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full rounded-r-[50%] z-0 bg-cover bg-center animate-float" 
        style={{ backgroundImage: `url(${Background3})` }}
      ></div>

      {/*<div 
        className="absolute top-0 left-0 w-1/2 h-full rounded-r-[50%] z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${Background3})` }}
      ></div>*/}

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-[90%] max-w-6xl z-10 mt-10 space-y-10 lg:space-y-0">
      
        {/* Left: Text Section */}
        <div className="w-full lg:w-[50%] text-white p-6 sm:p-10 lg:p-12 z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-axy leading-tight text-white"
            style={{
              textShadow: `
                -2px -2px rgb(91, 125, 135),
                2px -2px rgb(91, 125, 135),
                -2px  2px rgb(91, 125, 135),
                2px  2px rgb(91, 125, 135)
              `
            }}
          >
            Chinmayee Desai
          </h1>

          <p 
            className="mt-4 text-base sm:text-lg lg:text-xl font-small font-bold max-w-md text-white"
            style={{
              textShadow: `
                -1px -1px rgb(39, 58, 65),
                1px -1px rgb(39, 58, 65),
                -1px  1px rgb(39, 58, 65),
                1px  1px rgb(39, 58, 65)
              `
            }}
            
          >
            Designing dreams and coding them into reality — one pixel at a time.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <a 
              href="#contact" 
              className="bg-white font-three text-emerald-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full 
              shadow-md transition-transform duration-300 hover:scale-105 text-base sm:text-lg text-center border-2 border-emerald-700"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-white font-three text-emerald-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full 
              shadow-md transition-transform duration-300 hover:scale-105 text-base sm:text-lg text-center border-2 border-emerald-700"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div 
          className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[360px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-tl-[50%] rounded-tr-[50%] rounded-b-[20px] shadow-2xl flex justify-center items-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${Background4})` }}
        >
          <div className="relative w-[92%] h-[92%] rounded-tl-[45%] rounded-tr-[45%] rounded-b-[15px] overflow-hidden border-2 border-teal-900 shadow-xl">
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
