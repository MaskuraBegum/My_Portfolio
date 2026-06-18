import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineClose } from 'react-icons/ai';

AOS.init();

const projects = [
    {
        title: "Instant Chef 🍳",
        role: "Backend Developer",
        roleColor: "#10B981",
        description: "A smart recipe recommendation platform based on available ingredients. Juniper AI suggests ingredients, lets users save favorite recipes.",
        summary: {
            overview: "Instant Chef helps users find recipes based on available ingredients. As a backend developer of the project I implemented",
            features: [
                "An ingredient matching algorithm using Node.js and Express.js.",
                "Firebase Authentication for secure admin access and management.",
                "CRUD operations for managing recipes through an admin panel.",
                "AI chatbot (Juniper)"
            ]
        },
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase Auth", "Axios", "Tailwind CSS"],
        link: "https://github.com/MaskuraBegum/Instant-Chef",
        liveLink: "https://ourinstantchef.netlify.app/",
        accent: "#10B981",
    },
    {
        title: "RoyalNest 🏡",
        role: "Front-End Develope",
        roleColor: "#6366F1",
        description: "A luxury real estate platform that offers exclusive access to prestigious properties tailored to exceed expectations.",
        summary: {
            overview: "RoyalNest provides a seamless and secure browsing experience with private routes available only to authenticated users. I implemented",
            features: [
                "Restricted access to private pages.",
                "Automatic redirection post-login with Firebase for secure login.",
                "Responsive UI with Tailwind CSS.",
                "Profile update functionality."
            ]
        },
        techStack: ["React.js", "Firebase Auth", "Tailwind CSS", "DaisyUI", "AOS", "React Hook Form"],
        link: "https://github.com/MaskuraBegum/Real_estate",
        liveLink: "https://thunderous-melba-9d02c3.netlify.app/",
        accent: "#6366F1",
    },
    {
        title: "Book Vibe 📚",
        role: "Front-End Develope",
        roleColor: "#F59E0B",
        description: "A dynamic book exploration platform that allows users to discover, categorize, and manage their reading lists effortlessly.",
        summary: {
            overview: "Book Vibe offers a seamless experience for users to explore new books, add them to their wishlist, and sort them based on key attributes.",
            features: [
                "Book details accessible from the Home page.",
                "Categorize books as Read or Wishlist.",
                "Sort by Rating, Pages, and Year.",
                "Filter by genre or category.",
                "Upcoming releases in Coming Soon.",
            ]
        },
        techStack: ["React.js", "Tailwind CSS", "DaisyUI", "Figma"],
        link: "https://github.com/MaskuraBegum/Book_vibe",
        liveLink: "https://poetic-kangaroo-c2c3bd.netlify.app/",
        accent: "#F59E0B",
    },
    {
        title: "P-Ticket 🎟️",
        role: "Front-End Developer",
        roleColor: "#A78BFA",
        description: "A modern online ticket booking platform for daily commuting — users select routes, book seats, and manage reservations in real time.",
        summary: {
            overview: "P-Ticket offers a seamless booking experience with dynamic seat selection, price calculation, and real-time updates.",
            features: [
                "Dynamic seat selection (max 4 seats per booking).",
                "Real-time seat availability updates.",
                "Price calculation at 550 per seat.",
                "Coupon discounts: NEW15 → 15%, Couple20 → 20%.",
                "Alerts for seat limit and reselection prevention.",
            ]
        },
        techStack: ["HTML", "Tailwind CSS", "JavaScript (DOM)"],
        link: "https://github.com/MaskuraBegum/smart-ticket",
        liveLink: "https://maskurabegum.github.io/smart-ticket/",
        accent: "#A78BFA",
    }
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "auto";
    }, [selectedProject]);

    return (
        <section id="project" style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>

            {/* Grid texture */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", top: "20%", right: "5%",
                width: "400px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        — Portfolio
                    </p>
                    <h2 style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        My{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Projects</span>
                    </h2>
                    <p style={{ fontSize: "1rem", color: "#94A3B8", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                        A few handpicked projects that reflect my skills and expertise.
                    </p>
                </div>

                {/* Project grid — 2 columns */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "28px",
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: "rgba(15,23,42,0.75)",
                                border: `1px solid ${project.accent}22`,
                                borderRadius: "24px",
                                padding: "36px 32px",
                                display: "flex", flexDirection: "column",
                                position: "relative", overflow: "hidden",
                                cursor: "default",
                                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = project.accent + "55";
                                e.currentTarget.style.boxShadow = `0 20px 40px ${project.accent}18`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = project.accent + "22";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {/* Top accent line */}
                            <div style={{
                                position: "absolute", top: 0, left: "20px", right: "20px",
                                height: "2px", borderRadius: "2px",
                                background: `linear-gradient(to right, transparent, ${project.accent}, transparent)`,
                            }} />

                            {/* Role badge */}
                            <span style={{
                                display: "inline-block", marginBottom: "14px",
                                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                                fontWeight: "700", color: project.roleColor,
                                background: project.roleColor + "18",
                                padding: "4px 12px", borderRadius: "20px",
                                fontFamily: "'Courier New', monospace",
                                alignSelf: "flex-start",
                            }}>
                                {project.role}
                            </span>

                            <h3 style={{ margin: "0 0 12px", fontSize: "1.25rem", fontWeight: "700", color: "#F1F5F9" }}>
                                {project.title}
                            </h3>
                            <p style={{ margin: "0 0 24px", fontSize: "15px", color: "#94A3B8", lineHeight: 1.75, flex: 1 }}>
                                {project.description}
                            </p>

                            {/* Tech pills */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "24px" }}>
                                {project.techStack.slice(0, 4).map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: "12px", color: "#64748B",
                                        background: "rgba(99,102,241,0.08)",
                                        border: "1px solid rgba(99,102,241,0.15)",
                                        padding: "3px 12px", borderRadius: "20px",
                                    }}>{tech}</span>
                                ))}
                                {project.techStack.length > 4 && (
                                    <span style={{
                                        fontSize: "12px", color: "#64748B",
                                        background: "rgba(99,102,241,0.08)",
                                        border: "1px solid rgba(99,102,241,0.15)",
                                        padding: "3px 12px", borderRadius: "20px",
                                    }}>+{project.techStack.length - 4}</span>
                                )}
                            </div>

                            <div style={{ display: "flex", gap: "12px" }}>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    style={{
                                        flex: 1, padding: "12px",
                                        background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}11)`,
                                        border: `1px solid ${project.accent}44`,
                                        borderRadius: "12px",
                                        color: project.accent, fontWeight: "600", fontSize: "14px",
                                        cursor: "pointer", transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = project.accent + "33"}
                                    onMouseLeave={e => e.currentTarget.style.background = project.accent + "22"}
                                >
                                    Details
                                </button>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
                                    flex: 1, padding: "12px",
                                    background: "rgba(99,102,241,0.12)",
                                    border: "1px solid rgba(99,102,241,0.3)",
                                    borderRadius: "12px",
                                    color: "#6366F1", fontWeight: "600", fontSize: "14px",
                                    textDecoration: "none", textAlign: "center",
                                    transition: "all 0.2s ease",
                                }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.22)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "rgba(99,102,241,0.12)"}
                                >
                                    Live 
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: "fixed", inset: 0, zIndex: 50,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            padding: "16px",
                            background: "rgba(0,0,0,0.7)",
                            backdropFilter: "blur(6px)",
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={e => e.stopPropagation()}
                            style={{
                                background: "#0F172A",
                                border: `1px solid ${selectedProject.accent}44`,
                                borderRadius: "24px",
                                padding: "36px 32px",
                                width: "100%", maxWidth: "520px",
                                position: "relative",
                                maxHeight: "85vh", overflowY: "auto",
                            }}
                        >
                            {/* Top accent */}
                            <div style={{
                                position: "absolute", top: 0, left: "20px", right: "20px",
                                height: "3px", borderRadius: "3px",
                                background: `linear-gradient(to right, transparent, ${selectedProject.accent}, transparent)`,
                            }} />

                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: "absolute", top: "16px", right: "16px",
                                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "50%", width: "36px", height: "36px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#94A3B8", cursor: "pointer", transition: "all 0.2s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                            >
                                <AiOutlineClose size={16} />
                            </button>

                            <span style={{
                                display: "inline-block", marginBottom: "12px",
                                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                                fontWeight: "700", color: selectedProject.roleColor,
                                background: selectedProject.roleColor + "18",
                                padding: "3px 10px", borderRadius: "20px",
                                fontFamily: "'Courier New', monospace",
                            }}>
                                {selectedProject.role}
                            </span>

                            <h3 style={{ margin: "0 0 16px", fontSize: "1.4rem", fontWeight: "800", color: "#F1F5F9" }}>
                                {selectedProject.title}
                            </h3>

                            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#94A3B8", lineHeight: 1.7 }}>
                                {selectedProject.summary.overview}
                            </p>

                            <ul style={{ margin: "0 0 20px", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                                {selectedProject.summary.features.map((feature, i) => (
                                    <li key={i} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.6 }}>
                                        <span style={{ color: selectedProject.accent, flexShrink: 0, marginTop: "2px" }}>▸</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech stack */}
                            <div style={{ marginBottom: "24px" }}>
                                <p style={{ margin: "0 0 10px", fontSize: "11px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tech Stack</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                    {selectedProject.techStack.map((tech, i) => (
                                        <span key={i} style={{
                                            fontSize: "12px", color: "#94A3B8",
                                            background: "rgba(99,102,241,0.1)",
                                            border: "1px solid rgba(99,102,241,0.2)",
                                            padding: "4px 12px", borderRadius: "20px",
                                        }}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "12px" }}>
                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" style={{
                                    flex: 1, padding: "12px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px", color: "#F1F5F9",
                                    fontWeight: "600", fontSize: "14px",
                                    textDecoration: "none", textAlign: "center",
                                    transition: "all 0.2s ease",
                                }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                                >
                                    GitHub 
                                </a>
                                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" style={{
                                    flex: 1, padding: "12px",
                                    background: `linear-gradient(135deg, ${selectedProject.accent}, ${selectedProject.accent}bb)`,
                                    border: "none",
                                    borderRadius: "12px", color: "#fff",
                                    fontWeight: "700", fontSize: "14px",
                                    textDecoration: "none", textAlign: "center",
                                    boxShadow: `0 4px 16px ${selectedProject.accent}44`,
                                    transition: "all 0.2s ease",
                                }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                                >
                                    Live Demo 
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Project;