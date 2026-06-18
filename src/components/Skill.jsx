import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiBootstrap, SiPython, SiDjango, SiMysql, SiFirebase, SiFigma, SiCplusplus, SiExpress, SiMongodb } from "react-icons/si";
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
        <section id='skill' style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>

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
                <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 clamp(16px, 4vw, 24px)" }}>
                    <p style={{
                        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
                        color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace",
                    }}>
                        — Tech Stack
                    </p>
                    <h2 className="animate__animated animate__zoomIn" style={{
                        fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: "0 0 20px", lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        My{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Skills</span>
                    </h2>
                    <p style={{
                        fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#94A3B8",
                        maxWidth: "680px", margin: "0 auto", lineHeight: 1.8,
                    }}>
                        I'm skilled in <span style={{ color: "#61DAFB" }}>React.js</span>, <span style={{ color: "#68A063" }}>Node.js</span>, <span style={{ color: "#F7DF1E" }}>JavaScript</span>, <span style={{ color: "#FFD43B" }}>Python</span>, <span style={{ color: "#4479A1" }}>MySQL</span>, <span style={{ color: "#4DB33D" }}>MongoDB</span>, and <span style={{ color: "#41B883" }}>Django</span>. I build UIs with <span style={{ color: "#38BDF8" }}>Tailwind CSS</span>, <span style={{ color: "#A78BFA" }}>Daisy UI</span>, or <span style={{ color: "#7952B3" }}>Bootstrap</span> and manage version control with <span style={{ color: "#F05032" }}>Git</span>.
                    </p>
                </div>

                {/* Scrolling rows */}
                <div data-aos="fade-up" style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", width: "100%", overflow: "hidden" }}>
                    {[row1Skills, row2Skills].map((skills, row) => (
                        <div key={row} style={{ width: "100%", overflow: "hidden", padding: "8px 0" }}>
                            <motion.div
                                animate={{ x: row % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 28,
                                    ease: "linear",
                                }}
                                style={{ display: "flex", flexWrap: "nowrap", gap: "16px" }}
                            >
                                {[...skills, ...skills].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.05,
                                            boxShadow: "6px 10px 30px rgba(99,102,241,0.25)",
                                        }}
                                        style={{
                                            background: "rgba(15,23,42,0.75)",
                                            borderLeft: "4px solid rgba(99,102,241,0.2)",
                                            borderBottom: "4px solid rgba(99,102,241,0.2)",
                                            borderRadius: "8px",
                                            padding: "clamp(8px, 2vw, 16px)",
                                            minWidth: "clamp(80px, 15vw, 150px)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "border 0.3s ease-in-out",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <motion.div
                                            style={{ fontSize: "clamp(28px, 5vw, 48px)", marginBottom: "8px", lineHeight: 1 }}
                                            initial={{ rotate: 0 }}
                                            whileHover={{
                                                rotate: [0, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <p style={{ margin: 0, color: "#CBD5E1", fontSize: "clamp(11px, 1.5vw, 14px)", fontWeight: "600", whiteSpace: "nowrap" }}>
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