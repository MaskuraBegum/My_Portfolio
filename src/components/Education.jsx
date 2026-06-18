import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        emoji: "🎓",
        level: "University",
        institution: "Bangladesh Army International University of Science and Technology",
        degree: "BSc. in Computer Science and Engineering",
        duration: "March 2022 – Feb 2026",
        accent: "#6366F1",
        accentMuted: "rgba(99,102,241,0.12)",
    },
    {
        emoji: "🏫",
        level: "College",
        institution: "Bangladesh Gas Fields School and College",
        degree: "Higher Secondary Certificate (Science)",
        duration: "2020",
        accent: "#10B981",
        accentMuted: "rgba(16,185,129,0.12)",
    },
    {
        emoji: "📚",
        level: "High School",
        institution: "Sabera Sobhan Govt. Girls High School",
        degree: "Secondary School Certificate (Science)",
        duration: "2018",
        accent: "#F59E0B",
        accentMuted: "rgba(245,158,11,0.12)",
    },
];

const Education = () => {
    return (
        <section id="education" style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>
            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)", position: "relative", zIndex: 1, boxSizing: "border-box" }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        — Academic Background
                    </p>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        My{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Education</span>
                    </h2>
                </div>

                {/* University — full width */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: "rgba(15,23,42,0.75)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        borderRadius: "20px",
                        padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(16px, 3vw, 28px)",
                        flexWrap: "wrap",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                    whileHover={{ y: -4 }}
                >
                    {/* Left accent bar */}
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #6366F1, #8B5CF6)" }} />

                    <div style={{
                        width: "clamp(52px, 8vw, 72px)", height: "clamp(52px, 8vw, 72px)", borderRadius: "50%", flexShrink: 0,
                        background: "rgba(99,102,241,0.12)", border: "2px solid rgba(99,102,241,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "clamp(24px, 4vw, 32px)",
                    }}>🎓</div>

                    <div style={{ flex: 1, minWidth: "200px" }}>
                        <span style={{
                            fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                            color: "#6366F1", fontFamily: "'Courier New', monospace", fontWeight: "700",
                        }}>University · {educationData[0].duration}</span>
                        <h3 style={{ margin: "8px 0 6px", fontSize: "clamp(0.95rem, 2.5vw, 1.3rem)", fontWeight: "700", color: "#F1F5F9", lineHeight: 1.3 }}>
                            {educationData[0].institution}
                        </h3>
                        <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 15px)", color: "#94A3B8" }}>{educationData[0].degree}</p>
                    </div>

                    {/* Background glow */}
                    <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                </motion.div>

                {/* College + High School — 2 col, becomes a row layout on narrow screens for compact spacing */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
                    {educationData.slice(1).map((edu, i) => (
                        <motion.div
                            key={edu.level}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            style={{
                                background: "rgba(15,23,42,0.75)",
                                border: `1px solid ${edu.accent}33`,
                                borderRadius: "20px",
                                padding: "clamp(20px, 4vw, 32px) clamp(18px, 3vw, 28px)",
                                display: "flex",
                                alignItems: "center",
                                gap: "clamp(14px, 3vw, 24px)",
                                flexWrap: "wrap",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                            whileHover={{ y: -4 }}
                        >
                            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: edu.accent }} />

                            <div style={{
                                width: "clamp(44px, 7vw, 56px)", height: "clamp(44px, 7vw, 56px)", borderRadius: "50%", flexShrink: 0,
                                background: edu.accentMuted, border: `1px solid ${edu.accent}44`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "clamp(20px, 3.5vw, 26px)",
                            }}>{edu.emoji}</div>

                            <div style={{ flex: 1, minWidth: "180px" }}>
                                <span style={{
                                    fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                                    color: edu.accent, fontFamily: "'Courier New', monospace", fontWeight: "700",
                                }}>{edu.level} · {edu.duration}</span>
                                <h3 style={{ margin: "8px 0 6px", fontSize: "clamp(0.9rem, 2vw, 1rem)", fontWeight: "700", color: "#F1F5F9", lineHeight: 1.4 }}>
                                    {edu.institution}
                                </h3>
                                <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8" }}>{edu.degree}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;