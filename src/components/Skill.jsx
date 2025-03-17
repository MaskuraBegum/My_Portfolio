import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiBootstrap, SiPython, SiDjango, SiMysql, SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'animate.css';
AOS.init();

const row1Skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Daisy UI", icon: <SiDaisyui className="text-purple-500" /> },
];

const row2Skills = [
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Mongoose", icon: <SiMongodb className="text-green-700" /> },
];

const Skill = () => {
    return (
        <div className='bg-gray-900 p-4'>
            <div className="p-0 lg:p-10 mx-10 text-white overflow-hidden">
                <h2 className="text-4xl text-amber-200 font-bold text-center mb-6 animate__animated animate__zoomIn">My Skills</h2>
                <p className="text-sm lg:text-lg font-medium text-center mb-8 max-w-4xl mx-auto">
                    I am a developer proficient in <span className="text-blue-400">React.js</span>, <span className="text-green-500">Node.js</span>,<span className="text-yellow-500">JavaScript</span> and <span className='text-blue-700'>Python</span>. Skilled in building dynamic applications with <span className="text-blue-700">MySQL</span>, <span className="text-green-700">MongoDB</span>, and <span className="text-green-600">Django</span>. Expertise in UI development using <span className="text-blue-400">Tailwind CSS</span> and <span className="text-purple-500">Daisy UI</span>, with experience in version control via <span className="text-red-500">Git</span>, deployment using <span className="text-blue-500">Netlify</span>, and authentication with <span className="text-yellow-400">Firebase</span>.
                </p>

                <div data-aos="fade-up" className="space-y-4 relative">
                    {[row1Skills, row2Skills].map((skills, row) => (
                        <div key={row} className="overflow-hidden w-full relative p-2 lg:p-4">
                            <motion.div
                                className="flex space-x-6 text-center"
                                animate={{ x: row % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 40, // Default transition duration for large devices
                                    ease: "linear",
                                }}
                                style={{ display: "flex", flexWrap: "nowrap" }}
                            >
                                {[...skills, ...skills].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-2 lg:p-4 rounded-lg bg-gray-800 shadow-lg min-w-[120px] sm:min-w-[150px] relative"
                                        whileHover={{
                                            y: -10,
                                            scale: 1.05,
                                            boxShadow: "6px 10px 30px rgba(255,255,255,0.2)",
                                            borderColor: "#ffffff",
                                        }}
                                        style={{
                                            borderLeft: "4px solid rgba(255, 255, 255, 0.2)",
                                            borderBottom: "4px solid rgba(255, 255, 255, 0.2)",
                                            transition: "border 0.3s ease-in-out",
                                        }}
                                    >
                                        <motion.div
                                            className="text-4xl sm:text-5xl md:text-6xl mb-3 relative"
                                            initial={{ rotate: 0 }}
                                            whileHover={{
                                                rotate: [0, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <p className="text-sm sm:text-lg font-semibold relative z-10">{skill.name}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
