import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { AiOutlineClose } from 'react-icons/ai';

AOS.init();

const projects = [
    {
        title: "Instant Chef 🍳",
        role: "Backend Developer",
        description: "A smart recipe recommendation platform based on available ingredients.",
        summary: {
            overview: "Instant Chef helps users find recipes based on available ingredients. As a backend developer of the project I implemented",
            features: [
                " An ingredient matching algorithm using Node.js and Express.js.",
                " Firebase Authentication for secure admin access and management.",
                " CRUD operations for managing recipes through an admin panel.",
                " AI chatbot (juniper) "
            ]
        },
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase Authentication", "Axios", "Tailwind css"],
        link: "https://github.com/MaskuraBegum/Instant-Chef",
        liveLink: "https://ourinstantchef.netlify.app/"
    },
    {
        title: "RoyalNest 🏡 ",
        role: "Full-Stack Developer",
        description: "A luxury real estate platform that offers exclusive access to prestigious properties tailored to exceed expectations.",
        summary: {
            overview: "RoyalNest provides a seamless and secure browsing experience with private routes available only to authenticated users. I implemented",
            features: [
                "Restricted access to private pages",
                "Automatic redirection post-login with Firebase for secure login.",
                "Designed a responsive UI with Tailwind CSS.",
                "Implemented profile update functionality"
              ]
        },
        techStack: ["React.js", "Firebase Authentication", "Tailwind CSS", "DaisyUI", "AOS package", "React Hook Form", ],
        link: "https://github.com/MaskuraBegum/Real_estate",
        liveLink: "https://thunderous-melba-9d02c3.netlify.app/"
    },
    {
        title: "Book Vibe 📚",
        role: "Full-Stack Developer",
        description: "A dynamic book exploration platform that allows users to discover, categorize, and manage their reading lists effortlessly.",
        summary: {
          "overview": "Book Vibe offers a seamless experience for users to explore new books, add them to their wishlist, and sort them based on key attributes.",
          features: [
            "Book details accessible from the Home page.",
            "View all books in the Listed Books section.",
            "Categorize books as Read or Wishlist.",
            "Sort books by Rating, Pages, and Year.",
            "Filter books by genre or category.",
            "Show upcoming releases in Coming Soon.",
            "Clean, user-friendly responsive design.",
          ]
        },
        techStack: ["React.js", "Tailwind CSS", "DaisyUI", "Figma"],
        link: "https://github.com/MaskuraBegum/Book_vibe",
        liveLink: "https://poetic-kangaroo-c2c3bd.netlify.app/"
      },
      {
        title: "P-Ticket 🎟️",
        role: "Front-End Developer",
        description: "A modern and user-friendly online ticket booking platform designed for daily commuting, allowing users to select routes, book seats, and manage reservations.",
        summary: {
          "overview": "P-Ticket offers a seamless experience for booking seats with dynamic seat selection, price calculation, and real-time updates.",
          features: [
            "Dynamic seat selection with a maximum of 4 seats per booking.",
            "Real-time updates for selected and available seat count.",
            "Price calculation based on the number of selected seats (550 each).",
            "Coupon code discounts (NEW15 → 15%, Couple 20 → 20%).",
            "alerts to prevent exceeding seat limit or reselecting booked seats.",
            "Enabled 'Apply Coupon' button after selecting 4 seats.",
            "Enabled 'Next' button after selecting at least one seat phone number.",
            "User feedback messages for valid coupon application."
          ]
        },
        techStack: ["HTML", "Tailwind CSS", "JavaScript (DOM Manipulation)"],
        link: "https://github.com/MaskuraBegum/smart-ticket",
        liveLink: "https://maskurabegum.github.io/smart-ticket/"
      }
      
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "auto";
    }, [selectedProject]);

    return (
        <div id="projects" className="relative flex flex-col py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-amber-200 mb-4">My Projects</h2>
                <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto">
                    These are a few handpicked projects that reflect my skills and expertise.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                <div data-aos="fade-right" className="w-full lg:w-[600px] flex flex-col items-center mt-12 lg:mt-0">
                    <img src="/resource/aboutImage.png" alt="Project Representation" className="w-96 lg:w-[550px] rounded-lg shadow-lg mb-4" />
                </div>

                <div className="flex flex-col items-center p-4 gap-6 w-full">
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

            {selectedProject && (
                <motion.div 
                    className="fixed inset-0 flex justify-center w-full items-center p-4 z-50"
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
                        <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white text-3xl">
                            <AiOutlineClose size={30} />
                        </button>
                        <h3 className="text-2xl font-semibold text-amber-200 mb-3">{selectedProject.title}</h3>
                        <p className="text-gray-300 text-base mb-4">{selectedProject.summary.overview}</p>
                        <ul className="text-gray-300 text-sm mb-4 list-disc list-inside">
                            {selectedProject.summary.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <p className="text-gray-300 text-sm mb-4"><span className='font-extrabold'>Tech Stack: </span> {selectedProject.techStack.join(', ')}</p>
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
