import React, { useEffect, useState } from 'react';
import AboutImg from '../assets/me.jpeg';

const skills = [
  { name: 'HTML & CSS', width: 'w-11/12' },
  { name: 'Web Development', width: 'w-9/12' },
  { name: 'Cloud Computing', width: 'w-12/12' },
  { name: 'AI/ML', width: 'w-8/12' },
  { name: 'JavaScript', width: 'w-10/12' },
  { name: 'C++', width: 'w-9/12' },
  { name: 'React.js', width: 'w-9/12' },
  { name: 'Python', width: 'w-10/12' },
  { name: 'SQL & Databases', width: 'w-8/12' },
  { name: 'UI/UX', width: 'w-6/12' },
];

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [clickedSkill, setClickedSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-black py-20 flex flex-col items-center w-full bg-white" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center w-full">
        <h2 className="text-5xl font-bold mb-16 font-axy text-red-500">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center md:gap-16 w-full">
          {/* Image with Single Red Border and Gradient Border */}
          <div className="relative w-[400px] h-[500px] p-[10px] bg-gradient-to-br from-pink-200 to-red-400 shadow-2xl rounded-tl-[60px] rounded-br-[60px] rounded-tr-[25px] rounded-bl-[25px]">
              <div className="w-full h-full border-[10px] border-red-500 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[25px] rounded-bl-[25px] overflow-hidden">
                <img 
                  src={AboutImg} 
                  alt="Chinmayee Image" 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
          
          {/* Description Box with Heading */}
          <div className="relative border-4 border-red-500 bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl w-full">
            <p className="text-xl font-small text-red-600 mt-6">
              As a dedicated B.Tech Computer Science student at MIT Academy of Engineering, Alandi, Pune, I am passionate about leveraging cloud technologies, web development, and AI/ML to develop innovative solutions for real-world challenges. With a strong foundation in computer vision and data science, I am committed to continuous learning and applying my technical expertise to create impactful and efficient systems.
            </p>
            <p className="text-xl font-small text-red-600 mt-6">  
              My interests lie at the intersection of technology and problem-solving, where I strive to harness the power of artificial intelligence, data-driven insights, and scalable cloud solutions to drive innovation. I am actively seeking opportunities to collaborate with forward-thinking organizations that align with my vision of using technology to shape a smarter, more connected world. Through every project and challenge, I aim to refine my skills, expand my knowledge, and make meaningful contributions to the tech industry.
            </p>
          </div>
        </div>

        {/* Skills Section Full Width */}
        <h2 className="text-4xl font-bold mt-20 mb-12 font-axy text-red-500">My Skills</h2>
        <div className="mt-8 space-y-6 w-full max-w-screen-lg mx-auto" id="skills">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-6 w-full cursor-pointer" onClick={() => setClickedSkill(index)}>
              <span className="w-3/12 font-bold text-xl text-red-800 font-small">{skill.name}</span>
              <div className="grow bg-white border-2 border-red-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-pink-500 to-red-500 h-3 rounded-full transition-all duration-1000 ${animate || clickedSkill === index ? skill.width : 'w-0'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;