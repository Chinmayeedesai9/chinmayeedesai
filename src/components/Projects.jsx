import React from "react";
import mainpgImage from "../assets/Attendence.jpeg";
import meImage from "../assets/complainr.jpeg";
import me1Image from "../assets/rfid.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Replace with your actual image imports for certifications
import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";
import cert5 from "../assets/cert5.jpeg";
import cert6 from "../assets/cert6.jpeg";

const projects = [
  {
    id: 1,
    name: "Image Paragraph Generation for Attendance Application",
    description: "Automating attendance tracking with image processing, computer vision, and deep learning techniques.",
    image: mainpgImage,
  },
  {
    id: 2,
    name: "Web Portal for Solar Water Pump Complaint Management",
    description: "Developed a user-friendly web portal for customers to register complaints about solar water pumps.",
    image: meImage,
  },
  {
    id: 3,
    name: "Improved Techniques for School Bus Tracking using RFID Systems",
    description: "Created an RFID-based system for student safety on school buses, addressing parental concerns.",
    image: me1Image,
  },
];

const certifications = [
  {
    image: cert1,
    title: "Google Data Analytics Certificate",
    description: "Learned data cleaning, visualization, and R programming.",
  },
  {
    image: cert2,
    title: "Salesforce Marketing Cloud",
    description: "Hands-on experience with journeys, automations, and SQL queries.",
  },
  {
    image: cert3,
    title: "Python for Data Science",
    description: "Covers data manipulation, Pandas, NumPy, and Matplotlib.",
  },
  {
    image: cert4,
    title: "SQL & Databases Certificate",
    description: "Mastered joins, subqueries, and relational databases.",
  },
  {
    image: cert5,
    title: "React Frontend Development",
    description: "Built components, hooks, and interactive UIs with React.",
  },
  {
    image: cert6,
    title: "Agile with Jira",
    description: "Worked in sprints, storyboarding, and Agile ceremonies.",
  },
];

const Projects = () => {
  return (
    <div className="text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-axy font-bold text-red-500 text-center mb-12">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 
              bg-gradient-to-r from-pink-400 to-red-400 text-white"
            >
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold font-small mb-2">{project.name}</h3>
              <p className="text-white font-three">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Section Below the Projects */}
        <div className="mt-24">
          <h2 className="text-4xl font-axy font-bold text-red-500 text-center mb-12">My Certifications</h2>
          <div className="max-w-5xl mx-auto px-4 py-12">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={4000}
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gradient-to-r from-pink-400 to-red-400 p-10 text-white shadow-xl"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-lg h-[28rem] object-contain mx-auto"
                  />
                  <h3 className="text-3xl font-bold mt-6">{cert.title}</h3>
                  <p className="mt-4 font-three text-lg">{cert.description}</p>
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
