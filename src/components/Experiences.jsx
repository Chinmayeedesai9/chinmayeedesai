import React from "react";
import meexp from "../assets/meexp.jpeg";
import Background1 from "../assets/background2.jpg";
import ContactBackground from '../assets/background1.jpg'; // update path if needed


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
    <div className="text-black py-20 flex flex-col items-center w-full" id="exp">
      <h2 className="text-5xl font-axy text-center mb-12 text-slate-700">
        Experience
      </h2>

      <div className="container mx-auto px-4 md:px-8 lg:px-0 flex flex-col-reverse lg:flex-row-reverse items-center justify-center w-full">

        {/* Image Section */}
        <div
          className="w-full max-w-md lg:max-w-lg h-[400px] md:h-[450px] 
          rounded-bl-[180px] rounded-br-[180px] 
          lg:rounded-bl-none lg:rounded-tr-[180px] lg:rounded-br-[180px]
          relative shadow-lg overflow-hidden"
          style={{ backgroundImage: `url(${ContactBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="w-full h-full p-2 
            rounded-bl-[180px] rounded-br-[180px] 
            lg:rounded-bl-none lg:rounded-tr-[180px] lg:rounded-br-[180px] overflow-hidden">
            <img
              src={meexp}
              alt="Experience"
              className="w-full h-full border-2 border-brandgreen2 object-cover 
              rounded-bl-[180px] rounded-br-[180px] 
              lg:rounded-bl-none lg:rounded-tr-[180px] lg:rounded-br-[180px]"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div
          className="p-8 md:p-10 border-3 border-brandgreen2 rounded-2xl shadow-lg w-full max-w-3xl text-center"
          style={{ backgroundImage: `url(${Background1})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-3 font-axy"
            style={{
              textShadow: `-2px -2px rgb(62, 81, 53), 2px -2px rgb(62, 81, 53), -2px 2px rgb(62, 81, 53), 2px 2px rgb(62, 81, 53)`,
            }}
          >
            {experience.company}
          </h3>
          <p className="text-slate-900 text-lg font-medium">
            {experience.role} | {experience.duration}
          </p>
          <p className="text-white text-base md:text-lg mt-6 leading-relaxed font-three">
            {experience.description}
          </p>

          {/* Skills */}
          <h4
            className="text-2xl font-semibold text-white mt-8 font-axy"
            style={{
              textShadow: `-2px -2px rgb(62, 81, 53), 2px -2px rgb(62, 81, 53), -2px 2px rgb(62, 81, 53), 2px 2px rgb(62, 81, 53)`,
            }}
          >
            Skills Gained
          </h4>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white text-bold text-slate-950 px-4 py-2 rounded-full text-sm shadow-md font-three"
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
