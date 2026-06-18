import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const stats = [
    { value: "MERN", label: "Full Stack Engineer Focus" },
    { value: "3+", label: "Major Projects Built" },
    { value: "2+", label: "Years Learning" },
    { value: "2nd", label: "Hackathon Achievement" },
   
];

const About = () => {
    return (
        <div id="about" style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>
            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "20%", right: "5%",
                width: "400px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        — Who I Am
                    </p>
                    <h2 style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        About{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Me</span>
                    </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "row", gap: "64px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>

                    {/* Image */}
                    <div data-aos="zoom-in-right" style={{ position: "relative", flexShrink: 0 }}>
                        {/* Decorative frame */}
                        <div style={{
                            position: "absolute", top: "16px", left: "16px",
                            width: "100%", height: "100%",
                            border: "2px solid rgba(99,102,241,0.3)",
                            borderRadius: "24px", zIndex: 0,
                        }} />
                        <img
                            src="https://i.ibb.co.com/S4K5PNm5/mashu.jpg"
                            alt="Maskura Begum"
                            style={{
                                width: "clamp(220px, 25vw, 320px)",
                                height: "clamp(220px, 25vw, 320px)",
                                objectFit: "cover",
                                borderRadius: "20px",
                                border: "2px solid rgba(245,158,11,0.3)",
                                position: "relative", zIndex: 1,
                                transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                        {/* Floating badge */}
                        <div style={{
                            position: "absolute", bottom: "-16px", right: "-16px",
                            background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                            borderRadius: "16px", padding: "12px 20px", zIndex: 2,
                            boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
                        }}>
                            <p style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#fff", lineHeight: 1 }}>CSE</p>
                            <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>Graduate</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div data-aos="zoom-in-left" style={{ flex: 1, minWidth: "280px", maxWidth: "600px" }}>
                        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "#94A3B8", lineHeight: 1.8, marginBottom: "32px" }}>
                            Hi! I'm <span style={{ color: "#F1F5F9", fontWeight: "600" }}>Maskura</span>, a passionate aspiring Software Engineer specializing in creating dynamic, full-stack web applications. I enjoy the entire journey — from designing clean UIs to architecting reliable backends.
                        </p>
                        <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#94A3B8", lineHeight: 1.8, marginBottom: "40px" }}>
                            With experience in both front-end and back-end development using <span style={{ color: "#6366F1" }}>React</span>, <span style={{ color: "#10B981" }}>Node.js</span>, and <span style={{ color: "#F59E0B" }}>MongoDB</span>, I'm constantly refining my skills through real projects and collaboration.
                        </p>

                        {/* Stats row */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                            {stats.map(({ value, label }) => (
                                <div key={label} style={{
                                    background: "rgba(15,23,42,0.75)",
                                    border: "1px solid rgba(99,102,241,0.18)",
                                    borderRadius: "16px",
                                    padding: "20px 24px",
                                    transition: "border-color 0.3s ease, transform 0.3s ease",
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
                                >
                                    <p style={{ margin: 0, fontSize: "1.75rem", fontWeight: "800", color: "#6366F1", lineHeight: 1 }}>{value}</p>
                                    <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#64748B" }}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;