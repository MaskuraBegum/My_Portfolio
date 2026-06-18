import React from "react";
import { motion } from "framer-motion";

const traits = [
    {
        icon: "💡",
        title: "Creative Problem-Solving",
        body: "I break complex challenges into manageable pieces and experiment freely — thinking outside the box is where I thrive.",
        accent: "#6366F1",
        accentMuted: "rgba(99,102,241,0.1)",
    },
    {
        icon: "🔄",
        title: "Adaptability & Learning",
        body: "In fast-paced tech, staying adaptable is essential. I'm always hunting for new technologies and opportunities to sharpen my edge.",
        accent: "#10B981",
        accentMuted: "rgba(16,185,129,0.1)",
    },
    {
        icon: "🤝",
        title: "Collaboration & Teamwork",
        body: "The best results come from collective effort. I've worked across group projects learning how to communicate ideas and reach shared goals.",
        accent: "#F59E0B",
        accentMuted: "rgba(245,158,11,0.1)",
    },
    {
        icon: "🎯",
        title: "Attention to Detail",
        body: "From clean, bug-free code to intuitive UIs — every detail matters. I'm focused on delivering work that's polished and user-friendly.",
        accent: "#A78BFA",
        accentMuted: "rgba(167,139,250,0.1)",
    },
];

const Experience = () => {
    return (
        <section id="experience" style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>
            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />
            {/* Glow */}
            <div style={{
                position: "absolute", bottom: "10%", left: "5%",
                width: "400px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)", position: "relative", zIndex: 1, boxSizing: "border-box" }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        — Soft Skills & Approach
                    </p>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        My Journey of{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #10B981, #6366F1)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Growth</span>
                    </h2>
                    <p style={{ fontSize: "clamp(0.875rem, 2vw, 1.05rem)", color: "#94A3B8", maxWidth: "620px", margin: "0 auto 48px", lineHeight: 1.7 }}>
                        While I may not have traditional work experience yet, my passion for technology, problem-solving, and continuous learning has been my driving force.
                    </p>
                </div>

                {/* Cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                    gap: "16px",
                    marginBottom: "40px",
                }}>
                    {traits.map((trait, i) => (
                        <motion.div
                            key={trait.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{
                                background: "rgba(15,23,42,0.75)",
                                border: `1px solid ${trait.accent}22`,
                                borderRadius: "20px",
                                padding: "clamp(20px, 3vw, 32px) clamp(18px, 3vw, 28px)",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "default",
                                transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            whileHover={{ y: -6 }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = trait.accent + "66";
                                e.currentTarget.style.boxShadow = `0 20px 40px ${trait.accent}22`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = trait.accent + "22";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {/* Top accent line */}
                            <div style={{ position: "absolute", top: 0, left: "20px", right: "20px", height: "2px", background: `linear-gradient(to right, transparent, ${trait.accent}, transparent)`, borderRadius: "2px" }} />

                            <div style={{
                                width: "clamp(44px, 7vw, 52px)", height: "clamp(44px, 7vw, 52px)", borderRadius: "14px",
                                background: trait.accentMuted, border: `1px solid ${trait.accent}33`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "clamp(20px, 3vw, 24px)", marginBottom: "18px",
                            }}>{trait.icon}</div>

                            <h3 style={{ margin: "0 0 10px", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", fontWeight: "700", color: "#F1F5F9" }}>
                                {trait.title}
                            </h3>
                            <p style={{ margin: 0, fontSize: "clamp(13px, 1.8vw, 14px)", color: "#94A3B8", lineHeight: 1.7 }}>
                                {trait.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing quote */}
                <div style={{
                    background: "rgba(15,23,42,0.5)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    borderRadius: "20px",
                    padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #6366F1, #10B981)" }} />
                    <p style={{ margin: 0, fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "#CBD5E1", lineHeight: 1.8, fontStyle: "italic" }}>
                        "My journey is just beginning — but I'm excited to grow, contribute, and bring innovative solutions to every real-world challenge ahead."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;