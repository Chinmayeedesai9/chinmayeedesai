import React from "react";
import mainpgImage from "../assets/Attendence.jpeg";
import meImage from "../assets/complainr.jpeg";
import me1Image from "../assets/rfid.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Background1 from "../assets/background2.jpg"


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
    title: "Cloud Computing NPTEL",
    description: "Learned data complete Cloud computing and passed with 91% aggregate.",
  },
  {
    image: cert2,
    title: "IR4.0 Foundation",
    description: "Completed the IR 4.0 foundation course provided by Techsaksham and edunet.",
  },
  {
    image: cert3,
    title: "AI-ML virtual Internship",
    description: "Completed AICTE virtual internship supported by Google for Developers and earned all the badges.",
  },
  {
    image: cert4,
    title: "Data Engineering virtual internship",
    description: "Completed AICTE virtual internship supported by AWS Academy.",
  },
  {
    image: cert5,
    title: "Supervised Machine Learning",
    description: "Learned Supervised Machine-learning: Regression and classification from coursera supported by Stanford University.",
  },
  {
    image: cert6,
    title: "Avniya Conference",
    description: "Participated in Avinya Conference for my research paper for Image Paragraph Generation for Attendance Application.",
  },
];

const Projects = () => {
  return (
    <div className="text-white py-20 " id="projects">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h2 className="text-4xl font-axy font-bold text-slate-700 text-center mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 
              bg-gradient-to-br from-[#576f55] to-[#3e5135] text-white shadow-md"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-axy font-bold text-slate-700 text-center mb-12">
            My Certifications
          </h2>
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
                  className="rounded-lg p-8 sm:p-10 text-white shadow-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Background1})`
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-lg h-[24rem] sm:h-[28rem] object-contain mx-auto"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold mt-6 text-center">
                    {cert.title}
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-center">
                    {cert.description}
                  </p>
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
