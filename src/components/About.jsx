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
        <div id="about" style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>
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

            <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)", position: "relative", zIndex: 1, boxSizing: "border-box" }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        — Who I Am
                    </p>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        About{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Me</span>
                    </h2>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "clamp(24px, 5vw, 64px)",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    {/* Image */}
                    <div data-aos="zoom-in-right" style={{ position: "relative", flexShrink: 0 }}>
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
                                width: "clamp(180px, 25vw, 300px)",
                                height: "clamp(180px, 25vw, 300px)",
                                objectFit: "cover",
                                borderRadius: "20px",
                                border: "2px solid rgba(245,158,11,0.3)",
                                position: "relative", zIndex: 1,
                                transition: "transform 0.3s ease",
                                display: "block",
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                        {/* Floating badge */}
                        <div style={{
                            position: "absolute", bottom: "-16px", right: "-16px",
                            background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                            borderRadius: "16px", padding: "10px 16px", zIndex: 2,
                            boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
                        }}>
                            <p style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#fff", lineHeight: 1 }}>CSE</p>
                            <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>Graduate</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div data-aos="zoom-in-left" style={{ flex: 1, minWidth: "min(100%, 280px)", maxWidth: "600px" }}>
                        <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "#94A3B8", lineHeight: 1.8, marginBottom: "24px" }}>
                            Hi! I'm <span style={{ color: "#F1F5F9", fontWeight: "600" }}>Maskura</span>, a passionate aspiring Software Engineer specializing in creating dynamic, full-stack web applications. I enjoy the entire journey — from designing clean UIs to architecting reliable backends.
                        </p>
                        <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#94A3B8", lineHeight: 1.8, marginBottom: "32px" }}>
                            With experience in both front-end and back-end development using <span style={{ color: "#6366F1" }}>React</span>, <span style={{ color: "#10B981" }}>Node.js</span>, and <span style={{ color: "#F59E0B" }}>MongoDB</span>, I'm constantly refining my skills through real projects and collaboration.
                        </p>

                        {/* Stats row */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                            {stats.map(({ value, label }) => (
                                <div key={label} style={{
                                    background: "rgba(15,23,42,0.75)",
                                    border: "1px solid rgba(99,102,241,0.18)",
                                    borderRadius: "16px",
                                    padding: "16px 20px",
                                    transition: "border-color 0.3s ease, transform 0.3s ease",
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
                                >
                                    <p style={{ margin: 0, fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: "800", color: "#6366F1", lineHeight: 1 }}>{value}</p>
                                    <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#64748B" }}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
              @media (max-width: 600px) {
                #about [data-aos="zoom-in-right"],
                #about [data-aos="zoom-in-left"] {
                  width: 100% !important;
                  max-width: 100% !important;
                }
              }
            `}</style>
        </div>
    );
};

export default About;