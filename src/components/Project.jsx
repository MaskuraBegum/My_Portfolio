import React from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'animate.css';
AOS.init();

const projects = [
    {
        title: "Project 1",
        description: "A short description of Project 1 that highlights its main features and technologies used.",
        link: "https://github.com/yourusername/project1",
        liveLink: "https://yourwebsite.com/project1"
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2, including the problem it solves and the tech stack used.",
        link: "https://github.com/yourusername/project2",
        liveLink: "https://yourwebsite.com/project2"
    },
    {
        title: "Project 3",
        description: "An overview of Project 3, explaining its functionality and the technologies involved.",
        link: "https://github.com/yourusername/project3",
        liveLink: "https://yourwebsite.com/project3"
    },
    {
        title: "Project 4",
        description: "A summary of Project 4, showcasing the key features and the tools/technologies used.",
        link: "https://github.com/yourusername/project4",
        liveLink: "https://yourwebsite.com/project4"
    }
];

const Project = () => {
    return (
        <div id="projects" className="relative flex flex-col py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
            
            {/* Title and Description at the Very Top */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-amber-200 mb-4">My Projects</h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                    These are a few handpicked projects that reflect my skills and expertise. 
                    Explore each one to see how I solve real-world problems using cutting-edge technologies.
                </p>
            </div>

            {/* Project Cards Section */}
            <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">
                
                {/* Project Cards (Larger Space) */}
                <div className="w-full md:w-2/3">
                    <div data-aos="zoom-out-up" className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index}
                                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
                                    translateY: "-5px"
                                }}
                            >
                                <h3 className="text-2xl font-semibold text-amber-200 mb-3">{project.title}</h3>
                                <p className="text-gray-300 text-base mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <a href={project.link} className="text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={project.liveLink} className="text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image and Video Section (Smaller Space) */}
                <div data-aos="fade-right" className="w-full md:w-1/3 flex flex-col items-center">
                    <img src="/resource/aboutImage.png" alt="Project Representation" className="w-80 md:w-96 lg:w-[450px] rounded-lg shadow-lg mb-4" />
                </div>

            </div>
        </div>
    );
};

export default Project;
