import React from "react";
import meexp from "../assets/meexp.jpeg";

const experience = {
  company: "Colgate-Palmolive (India) Ltd.",
  role: "Intern - Data Engineer Intern",
  duration: "July 1st 2024 - January 1st 2025",
  description:
    "During my internship at Colgate-Palmolive, I worked as a Data Engineer, collaborating with a US-based project team under the Agile framework using Jira. I specialized in CRM-CDP, working on platforms such as Salesforce Marketing Cloud, Google Storage Buckets, and BlueConic. My role involved optimizing data pipelines, ensuring data integrity, and developing data-driven solutions to enhance customer relationship management.",
  skills: [
    "Data Engineering",
    "SFMC",
    "Google CLoud Storage",
    "BlueConic",
    "Agile Methodology",
    "JIRA",
    "Team Collaboration",
  ],
};

const Experience = () => {
  return (
    <div className="text-black py-20 relative overflow-hidden flex flex-col items-center" id="exp">
      <h2 className="text-5xl font-axy text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
        Experience
      </h2>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center relative z-10 mt-20">
        {/* Experience Section */}
        <div className="relative bg-white p-10 rounded-3xl shadow-xl border-2 border-red-400 w-full max-w-3xl text-center">
          <h3 className="text-4xl font-axy text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-4">
            {experience.company}
          </h3>
          <p className="text-gray-600 text-lg font-small">
            {experience.role} | {experience.duration}
          </p>
          <p className="text-gray-700 text-lg mt-6 leading-relaxed font-three">
            {experience.description}
          </p>
          
          {/* Skills */}
          <h4 className="text-2xl font-axy text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mt-8">
            Skills Gained
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm shadow-md font-three"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative flex justify-end items-center mt-0 md:mt-0 md:ml-0 w-[500px] h-[400px]">
          <div className="relative inline-block w-full h-full">
            <div className="absolute inset-0 border-10 border-red-500" style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderTopRightRadius: "180px", borderBottomRightRadius: "180px" }}></div>
            <div className="absolute inset-1 border-7 border-pink-300 rounded-r-full" style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}></div>
            <img
              src={meexp}
              alt="Experience"
              className="w-full h-full object-cover border-4 border-red-500"
              style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderTopRightRadius: "200px", borderBottomRightRadius: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
