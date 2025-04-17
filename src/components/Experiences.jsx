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
    "Google Cloud Storage",
    "BlueConic",
    "Agile Methodology",
    "JIRA",
    "Team Collaboration",
  ],
};

const Experience = () => {
  return (
    <div className="text-black py-20 flex flex-col items-center w-full " id="exp">
      <h2 className="text-5xl font-axy text-center mb-12 text-red-500">
        Experience
      </h2>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row-reverse items-center justify-center gap-12 w-full">

        {/* Image Section */}
        <div className="w-full max-w-md lg:max-w-lg h-[400px] md:h-[450px] relative">
          <div className="w-full h-full p-2 border-4 border-red-500 rounded-tr-[180px] rounded-br-[180px] overflow-hidden">
            <img
              src={meexp}
              alt="Experience"
              className="w-full h-full object-cover rounded-tr-[180px] rounded-br-[180px]"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white p-8 md:p-10 border-2 border-red-500 rounded-2xl shadow-lg w-full max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-3 font-axy">
            {experience.company}
          </h3>
          <p className="text-gray-700 text-lg font-medium">
            {experience.role} | {experience.duration}
          </p>
          <p className="text-gray-700 text-base md:text-lg mt-6 leading-relaxed font-three">
            {experience.description}
          </p>

          {/* Skills */}
          <h4 className="text-2xl font-semibold text-red-600 mt-8 font-axy">
            Skills Gained
          </h4>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-red-500 text-white px-4 py-2 rounded-full text-sm shadow-md font-three"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
