import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { AiOutlineClose } from 'react-icons/ai'; // Import from react-icons

AOS.init();

const projects = [
    {
        title: "Instant Chef",
        description: "A smart recipe recommendation platform based on available ingredients, where I worked as a backend developer, designing the ingredient matching algorithm and integrating secure authentication.",
        summary: "Instant Chef is a platform that helps users find recipes based on the ingredients they have at home. As a backend developer, I designed and implemented an ingredient matching algorithm using Node.js and Express.js, ensuring fast and relevant recipe recommendations. I integrated Firebase Authentication to provide secure admin access, allowing administrators to manage recipes through CRUD operations. The recipe data is stored and retrieved using MongoDB with Mongoose, enabling fast, scalable, and efficient data handling. Additionally, I utilized Axios for making asynchronous requests to the backend and ensured a smooth user experience. This project showcases my expertise in backend development, authentication, database management, and API integration, providing a seamless and intuitive platform for users.",
        link: "https://github.com/MaskuraBegum/Instant-Chef",
        liveLink: "https://ourinstantchef.netlify.app/"
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2 and its core features.",
        summary: "An overview of Project 2, explaining the problem it solves and the tech stack used.",
        link: "https://github.com/yourusername/project2",
        liveLink: "https://yourwebsite.com/project2"
    },
    {
        title: "Project 3",
        description: "An overview of Project 3 and its key functionalities.",
        summary: "A summary of Project 3, showcasing the tools and technologies involved.",
        link: "https://github.com/yourusername/project3",
        liveLink: "https://yourwebsite.com/project3"
    },
    {
        title: "Project 4",
        description: "A summary of Project 4 and its unique features.",
        summary: "Project 4 description highlighting its innovation and impact.",
        link: "https://github.com/yourusername/project4",
        liveLink: "https://yourwebsite.com/project4"
    }
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Disable scrolling when the modal is open
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedProject]);

    return (
        <div id="projects" className="relative flex flex-col py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
            {/* Title and Description */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-amber-200 mb-4">My Projects</h2>
                <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto">
                    These are a few handpicked projects that reflect my skills and expertise.
                    Explore each one to see how I solve real-world problems using cutting-edge technologies.
                </p>
            </div>

            {/* Projects and Image Section as Flex */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                {/* Image Section */}
                <div data-aos="fade-right" className="w-full lg:w-[600px] flex flex-col items-center mt-12 lg:mt-0">
                    <img src="/resource/aboutImage.png" alt="Project Representation" className="w-96 lg:w-[550px] rounded-lg shadow-lg mb-4" />
                </div>

                {/* Projects Section */}
                <div className="flex flex-col items-center p-4 gap-6 w-full ">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800 rounded-xl p-6 shadow-lg w-full flex justify-between items-center relative hover:shadow-2xl transition-transform duration-500 hover:scale-105"
                            whileTap={{ scale: 0.95 }}
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-amber-200 mb-2">{project.title}</h3>
                                <p className="text-gray-300 w-xl text-base">{project.description}</p>
                            </div>
                            
                            {/* View Button */}
                            <button 
                                onClick={() => setSelectedProject(project)} 
                                className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 transition-all"
                            >
                                View
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Overlay for Page Opacity */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            )}

            {/* Modal */}
            {selectedProject && (
                <motion.div 
                    className="fixed inset-0 flex justify-center items-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedProject(null)} 
                            className="absolute top-4 right-4 text-white text-3xl"
                        >
                            <AiOutlineClose size={30} />
                        </button>
                        
                        <h3 className="text-2xl font-semibold text-amber-200 mb-3">{selectedProject.title}</h3>
                        <p className="text-gray-300 text-base mb-4">{selectedProject.summary}</p>
                        <div className="flex justify-between items-center">
                            <a href={selectedProject.link} className="text-blue-400 hover:text-blue-300 font-semibold" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={selectedProject.liveLink} className="text-blue-400 hover:text-blue-300 font-semibold" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Project;
