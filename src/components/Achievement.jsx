import React, { useEffect, useRef } from 'react';

const achievements = [
    {
        emoji: "🏆",
        tag: "Hackathon",
        tagColor: "#F59E0B",
        tagBg: "rgba(245,158,11,0.12)",
        title: "2nd Runner-Up – BAIUST CSE Fest Hackathon 2025",
        body: "Built a real-time MERN stack web application under a 24-hour constraint. Demonstrated rapid problem-solving, teamwork, and full-stack delivery under pressure.",
        accent: "#F59E0B",
        glowColor: "rgba(245,158,11,0.35)",
    },
    {
        emoji: "⚙️",
        tag: "Leadership",
        tagColor: "#6366F1",
        tagBg: "rgba(99,102,241,0.12)",
        title: "Backend Lead – Team BAIUST_Troopers",
        body: "Architected and led all backend systems — API design, database schema, and integration using Node.js, Express.js, and MongoDB. Coordinated team execution and ensured on-time delivery.",
        accent: "#6366F1",
        glowColor: "rgba(99,102,241,0.35)",
    },
    {
        emoji: "🎓",
        tag: "Mentorship",
        tagColor: "#10B981",
        tagBg: "rgba(16,185,129,0.12)",
        title: "Cohort Lead – BAIUST Internship Program",
        body: "Mentored 4 teams through full-stack development concepts and project milestones. Translated complex technical ideas into actionable guidance and kept every team on track.",
        accent: "#10B981",
        glowColor: "rgba(16,185,129,0.35)",
    },
    {
        emoji: "🤝",
        tag: "Community",
        tagColor: "#A78BFA",
        tagBg: "rgba(167,139,250,0.12)",
        title: "Volunteer – BAIUST CSE Fest 2022 & IUCP 2025",
        body: "Served as a key organizer in two major university events — coordinating logistics, managing activities, and ensuring smooth experiences for hundreds of participants.",
        accent: "#A78BFA",
        glowColor: "rgba(167,139,250,0.35)",
    },
];

const Achievement = () => {
    const spineRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        let raf;
        let progress = 0;
        const speed = 0.003;
        const animate = () => {
            progress = (progress + speed) % 1;
            if (dotRef.current && spineRef.current) {
                const spineHeight = spineRef.current.offsetHeight;
                dotRef.current.style.top = `${progress * spineHeight}px`;
            }
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section id="achievement" style={{ background: "transparent", padding: "80px 0 100px", position: "relative", overflow: "hidden" }}>

            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)", position: "relative", boxSizing: "border-box" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        Recognition & Impact
                    </p>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 5vw, 3.25rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        Achievements &{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #6366F1, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Leadership</span>
                    </h2>
                </div>

                {/* Desktop Timeline */}
                <div className="desktop-timeline" style={{ position: "relative" }}>
                    {/* Spine */}
                    <div ref={spineRef} style={{
                        position: "absolute", left: "50%", transform: "translateX(-50%)",
                        top: 0, bottom: 0, width: "2px",
                        background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 10%, rgba(99,102,241,0.3) 90%, transparent)",
                    }}>
                        <div ref={dotRef} style={{
                            position: "absolute", left: "50%", transform: "translate(-50%, -50%)",
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "#6366F1", boxShadow: "0 0 12px 4px rgba(99,102,241,0.6)",
                        }} />
                    </div>

                    {achievements.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div key={i} style={{
                                display: "flex",
                                justifyContent: isLeft ? "flex-start" : "flex-end",
                                alignItems: "center",
                                marginBottom: "48px",
                                position: "relative",
                            }}>
                                {/* Node */}
                                <div style={{
                                    position: "absolute", left: "50%", transform: "translateX(-50%)", zIndex: 3,
                                    width: "48px", height: "48px", borderRadius: "50%",
                                    background: "#0F172A", border: `2px solid ${item.accent}`,
                                    boxShadow: `0 0 0 6px ${item.glowColor}, 0 0 20px ${item.glowColor}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "20px", flexShrink: 0,
                                }}>{item.emoji}</div>

                                {/* Connector line */}
                                <div style={{
                                    position: "absolute",
                                    left: isLeft ? "calc(50% + 24px)" : "auto",
                                    right: isLeft ? "auto" : "calc(50% + 24px)",
                                    top: "50%", transform: "translateY(-50%)",
                                    width: "calc(50% - 24px - 24px)", height: "1px",
                                    background: `linear-gradient(${isLeft ? "to right" : "to left"}, ${item.accent}66, transparent)`,
                                }} />

                                {/* Card */}
                                <div style={{
                                    width: "calc(50% - 56px)",
                                    background: "rgba(15,23,42,0.7)",
                                    border: `1px solid ${item.accent}33`,
                                    borderRadius: "16px",
                                    padding: "clamp(16px, 3vw, 24px) clamp(18px, 3vw, 28px)",
                                    backdropFilter: "blur(12px)",
                                    position: "relative",
                                    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                                    cursor: "default",
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.borderColor = item.accent + "88";
                                        e.currentTarget.style.boxShadow = `0 20px 40px ${item.glowColor}`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.borderColor = item.accent + "33";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <span style={{
                                        display: "inline-block", fontSize: "10px", letterSpacing: "0.15em",
                                        textTransform: "uppercase", fontWeight: "700", color: item.tagColor,
                                        background: item.tagBg, padding: "3px 10px", borderRadius: "20px",
                                        marginBottom: "10px", fontFamily: "'Courier New', monospace",
                                    }}>{item.tag}</span>
                                    <h3 style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", fontWeight: "700", color: "#F1F5F9", margin: "0 0 8px", lineHeight: 1.3 }}>{item.title}</h3>
                                    <p style={{ fontSize: "0.85rem", color: "#94A3B8", margin: 0, lineHeight: 1.65 }}>{item.body}</p>
                                    <div style={{ position: "absolute", bottom: 0, left: "20px", right: "20px", height: "2px", background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`, borderRadius: "2px", opacity: 0.6 }} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Timeline (left-aligned) */}
                <div className="mobile-timeline" style={{ display: "none", flexDirection: "column", gap: "0" }}>
                    {/* Left spine */}
                    <div style={{ position: "relative", paddingLeft: "48px" }}>
                        <div style={{
                            position: "absolute", left: "20px", top: 0, bottom: 0,
                            width: "2px", background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 5%, rgba(99,102,241,0.3) 95%, transparent)",
                        }} />
                        {achievements.map((item, i) => (
                            <div key={i} style={{ position: "relative", marginBottom: "28px" }}>
                                {/* Node */}
                                <div style={{
                                    position: "absolute", left: "-39px", top: "16px",
                                    width: "38px", height: "38px", borderRadius: "50%",
                                    background: "#0F172A", border: `2px solid ${item.accent}`,
                                    boxShadow: `0 0 0 4px ${item.glowColor}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "16px", zIndex: 2,
                                }}>{item.emoji}</div>

                                {/* Card */}
                                <div style={{
                                    background: "rgba(15,23,42,0.7)",
                                    border: `1px solid ${item.accent}33`,
                                    borderRadius: "16px",
                                    padding: "18px 20px",
                                    position: "relative",
                                }}>
                                    <span style={{
                                        display: "inline-block", fontSize: "10px", letterSpacing: "0.15em",
                                        textTransform: "uppercase", fontWeight: "700", color: item.tagColor,
                                        background: item.tagBg, padding: "3px 10px", borderRadius: "20px",
                                        marginBottom: "8px", fontFamily: "'Courier New', monospace",
                                    }}>{item.tag}</span>
                                    <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#F1F5F9", margin: "0 0 8px", lineHeight: 1.3 }}>{item.title}</h3>
                                    <p style={{ fontSize: "0.85rem", color: "#94A3B8", margin: 0, lineHeight: 1.65 }}>{item.body}</p>
                                    <div style={{ position: "absolute", bottom: 0, left: "16px", right: "16px", height: "2px", background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`, borderRadius: "2px", opacity: 0.6 }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats strip */}
                <div style={{
                    display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 48px)",
                    marginTop: "24px", paddingTop: "40px",
                    borderTop: "1px solid rgba(99,102,241,0.15)", flexWrap: "wrap",
                }}>
                    {[
                        { value: "2nd", label: "Hackathon placing" },
                        { value: "4", label: "Teams mentored" },
                        { value: "2+", label: "Events volunteered" },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "800", color: "#6366F1", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>{stat.value}</p>
                            <p style={{ fontSize: "12px", color: "#64748B", margin: "6px 0 0", letterSpacing: "0.05em" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
              @media (max-width: 600px) {
                .desktop-timeline { display: none !important; }
                .mobile-timeline { display: flex !important; }
              }
              @media (min-width: 601px) {
                .desktop-timeline { display: block !important; }
                .mobile-timeline { display: none !important; }
              }
            `}</style>
        </section>
    );
};

export default Achievement;