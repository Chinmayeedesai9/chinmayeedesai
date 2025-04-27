import React, { useEffect, useState } from 'react';
import AboutImg from '../assets/me.jpeg';
import Background4 from '../assets/background1.jpg';


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
    <div className="text-gray-800 py-20 flex flex-col items-center w-full" id="about">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 w-full">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center font-axy text-slate-700">
          About Me
        </h2>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 lg:gap-20">
          
          {/* Profile Image with muted green-blue border */}
          <div className="relative w-[90%] sm:w-[400px] h-[500px] mx-auto mb-12 md:mb-0 p-[8px] rounded-tl-[60px] rounded-br-[60px] rounded-tr-[25px] rounded-bl-[25px] shadow-md" 
          style={{ backgroundImage: `url(${Background4})` }}>
            <div className="w-full h-full border-[6px] bg-gradient-to-r from-teal-700 to-teal-950 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[25px] rounded-bl-[25px] overflow-hidden">
              <img
                src={AboutImg}
                alt="Chinmayee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div 
            className="flex-1 border-5 border-brandgreen p-6 sm:p-10 rounded-lg shadow-md font-three text-white bg-brandblue" 
          >
            <p className="text-base sm:text-lg font-medium mb-6">
              As a dedicated B.Tech Computer Science student at MIT Academy of Engineering, Alandi, Pune, I am passionate about leveraging cloud technologies, web development, and AI/ML to develop innovative solutions for real-world challenges. With a strong foundation in computer vision and data science, I am committed to continuous learning and applying my technical expertise to create impactful and efficient systems.
            </p>
            <p className="text-base sm:text-lg font-medium mb-6">
            Beyond technical skills, I bring a creative spark into everything I do — blending artistic thinking with technological expertise to create impactful systems, intuitive user experiences, and fresh ideas. I see technology not just as a tool, but as a canvas for innovation.</p>
            <p className="text-base sm:text-lg font-medium">
             Apart from this, my interests lie at the intersection of technology and problem-solving, where I strive to harness the power of artificial intelligence, data-driven insights, and scalable cloud solutions to drive innovation. I am actively seeking opportunities to collaborate with forward-thinking organizations that align with my vision of using technology to shape a smarter, more connected world.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-20 mb-10 text-center font-axy text-slate-600">
          My Skills
        </h2>
        <div className="space-y-6 w-full max-w-4xl mx-auto" id="skills">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full cursor-pointer"
              onClick={() => setClickedSkill(index)}
            >
              <span className="w-full sm:w-3/12 font-semibold text-lg sm:text-xl font-three text-cyan-950">
                {skill.name}
              </span>
              <div className="grow bg-gray-100 border-2 border-cyan-950 rounded-full h-3 w-full sm:w-9/12 overflow-hidden">
                <div
                className={`h-3 rounded-full transition-all duration-1000 ${animate || clickedSkill === index ? skill.width : 'w-0'} bg-gradient-to-r from-emerald-800 to-slate-800 `}
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
