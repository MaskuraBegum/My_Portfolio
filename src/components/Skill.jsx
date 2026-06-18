import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiBootstrap, SiPython, SiDjango, SiMysql, SiFirebase, SiFigma, SiCplusplus } from "react-icons/si";
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
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
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
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
];

const Skill = () => {
    return (
        <section id='skill' style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>

            {/* Grid texture */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
                width: "500px", height: "300px", borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
                    <p style={{
                        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
                        color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace",
                    }}>
                        — Tech Stack
                    </p>
                    <h2 className="animate__animated animate__zoomIn" style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: "0 0 20px", lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        My{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Skills</span>
                    </h2>
                    <p style={{
                        fontSize: "clamp(0.875rem, 2vw, 1rem)", color: "#94A3B8",
                        maxWidth: "680px", margin: "0 auto", lineHeight: 1.8,
                    }}>
                        I'm skilled in <span style={{ color: "#61DAFB" }}>React.js</span>, <span style={{ color: "#68A063" }}>Node.js</span>, <span style={{ color: "#F7DF1E" }}>JavaScript</span>, <span style={{ color: "#FFD43B" }}>Python</span>, <span style={{ color: "#4479A1" }}>MySQL</span>, <span style={{ color: "#4DB33D" }}>MongoDB</span>, and <span style={{ color: "#41B883" }}>Django</span>. I build UIs with <span style={{ color: "#38BDF8" }}>Tailwind CSS</span>, <span style={{ color: "#A78BFA" }}>Daisy UI</span>, or <span style={{ color: "#7952B3" }}>Bootstrap</span> and manage version control with <span style={{ color: "#F05032" }}>Git</span>. I use <span style={{ color: "#FFCA28" }}>Firebase</span> for authentication, <span style={{ color: "#6366F1" }}>Netlify</span> for deployment, and <span style={{ color: "#F24E1E" }}>Figma</span> for UI/UX design. Experienced in <span style={{ color: "#00599C" }}>C++</span> for problem-solving.
                    </p>
                </div>

                {/* Scrolling rows — animation completely unchanged */}
                <div data-aos="fade-up" className="space-y-4 relative w-full overflow-hidden">
                    {[row1Skills, row2Skills].map((skills, row) => (
                        <div key={row} className="w-full overflow-hidden p-2 lg:p-4">
                            <motion.div
                                className="flex space-x-6 text-center w-full"
                                animate={{ x: row % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 25,
                                    ease: "linear",
                                }}
                                style={{ display: "flex", flexWrap: "nowrap" }}
                            >
                                {[...skills, ...skills].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-2 lg:p-4 rounded-lg shadow-lg min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
                                        whileHover={{
                                            y: -10,
                                            scale: 1.05,
                                            boxShadow: "6px 10px 30px rgba(99,102,241,0.25)",
                                        }}
                                        style={{
                                            background: "rgba(15,23,42,0.75)",
                                            borderLeft: "4px solid rgba(99,102,241,0.2)",
                                            borderBottom: "4px solid rgba(99,102,241,0.2)",
                                            transition: "border 0.3s ease-in-out",
                                        }}
                                    >
                                        <motion.div
                                            className="text-4xl sm:text-5xl md:text-6xl mb-3"
                                            initial={{ rotate: 0 }}
                                            whileHover={{
                                                rotate: [0, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <p style={{ margin: 0, color: "#CBD5E1", fontSize: "14px", fontWeight: "600" }}>
                                            {skill.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;