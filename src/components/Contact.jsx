import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

    const isEnabled = formData.name && formData.email && formData.message;

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/mkgjgqgv", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputStyle = {
        width: "100%", boxSizing: "border-box",
        padding: "14px 18px",
        background: "rgba(15,23,42,0.8)",
        border: "1px solid rgba(99,102,241,0.2)",
        borderRadius: "12px",
        color: "#F1F5F9",
        fontSize: "15px",
        outline: "none",
        transition: "border-color 0.3s ease",
        fontFamily: "inherit",
    };

    return (
        <section id="contact" style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>
            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />
            {/* Glow */}
            <div style={{
                position: "absolute", top: "20%", right: "10%",
                width: "350px", height: "350px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>
                        — Let's Talk
                    </p>
                    <h2 style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800",
                        color: "#F1F5F9", margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-0.02em",
                    }}>
                        Get In{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Touch</span>
                    </h2>
                    <p style={{ fontSize: "1rem", color: "#94A3B8", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                        I'd love to hear from you — reach out for any inquiries, collaboration, or just to say hi.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "start" }}>

                    {/* Form */}
                    <div style={{
                        background: "rgba(15,23,42,0.75)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        borderRadius: "24px",
                        padding: "40px 36px",
                    }}>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <input
                                type="text" name="name" value={formData.name}
                                onChange={handleChange} placeholder="Your Name" required
                                style={inputStyle}
                                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.6)"}
                                onBlur={e => e.target.style.borderColor = "rgba(99,102,241,0.2)"}
                            />
                            <input
                                type="email" name="email" value={formData.email}
                                onChange={handleChange} placeholder="Your Email" required
                                style={inputStyle}
                                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.6)"}
                                onBlur={e => e.target.style.borderColor = "rgba(99,102,241,0.2)"}
                            />
                            <textarea
                                name="message" value={formData.message}
                                onChange={handleChange} placeholder="Your Message" required rows={5}
                                style={{ ...inputStyle, resize: "vertical" }}
                                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.6)"}
                                onBlur={e => e.target.style.borderColor = "rgba(99,102,241,0.2)"}
                            />

                            {status === "success" && (
                                <p style={{ color: "#10B981", fontSize: "14px", margin: 0 }}>✓ Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p style={{ color: "#F87171", fontSize: "14px", margin: 0 }}>Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={!isEnabled || status === "sending"}
                                style={{
                                    padding: "14px 28px",
                                    borderRadius: "12px",
                                    background: isEnabled && status !== "sending"
                                        ? "linear-gradient(135deg, #6366F1, #8B5CF6)"
                                        : "rgba(99,102,241,0.2)",
                                    color: isEnabled && status !== "sending" ? "#fff" : "#64748B",
                                    fontWeight: "700", fontSize: "15px",
                                    border: "none", cursor: isEnabled && status !== "sending" ? "pointer" : "not-allowed",
                                    transition: "all 0.3s ease",
                                    boxShadow: isEnabled && status !== "sending" ? "0 4px 20px rgba(99,102,241,0.35)" : "none",
                                }}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {[
                            { icon: <FaEnvelope size={18} />, label: "Email", value: "maskura.begum77@gmail.com", href: "mailto:maskura.begum77@gmail.com", color: "#6366F1" },
                            { icon: <FaPhone size={18} />, label: "Phone", value: "+8801998282899", href: "tel:+8801998282899", color: "#10B981" },
                            { icon: <FaMapMarkerAlt size={18} />, label: "Location", value: "Cumilla, Bangladesh", href: null, color: "#F59E0B" },
                        ].map(({ icon, label, value, href, color }) => (
                            <div key={label} style={{
                                background: "rgba(15,23,42,0.75)",
                                border: `1px solid ${color}22`,
                                borderRadius: "16px",
                                padding: "20px 24px",
                                display: "flex", alignItems: "center", gap: "16px",
                                transition: "border-color 0.3s ease, transform 0.3s ease",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = color + "55"; e.currentTarget.style.transform = "translateX(4px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = color + "22"; e.currentTarget.style.transform = "translateX(0)"; }}
                            >
                                <div style={{
                                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                                    background: color + "18", border: `1px solid ${color}33`,
                                    display: "flex", alignItems: "center", justifyContent: "center", color,
                                }}>{icon}</div>
                                <div>
                                    <p style={{ margin: "0 0 2px", fontSize: "11px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                                    {href ? (
                                        <a href={href} style={{ color: "#F1F5F9", fontSize: "15px", fontWeight: "500", textDecoration: "none" }}>{value}</a>
                                    ) : (
                                        <p style={{ margin: 0, color: "#F1F5F9", fontSize: "15px", fontWeight: "500" }}>{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Social links */}
                        <div style={{
                            background: "rgba(15,23,42,0.75)",
                            border: "1px solid rgba(99,102,241,0.15)",
                            borderRadius: "16px",
                            padding: "24px",
                        }}>
                            <p style={{ margin: "0 0 16px", fontSize: "12px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em" }}>Find me on</p>
                            <div style={{ display: "flex", gap: "12px" }}>
                                {[
                                    { icon: <FaFacebook size={20} />, href: "https://www.facebook.com/maskura.islam.313", color: "#6366F1" },
                                    { icon: <FaGithub size={20} />, href: "https://github.com/MaskuraBegum", color: "#94A3B8" },
                                    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/maskura-begum/", color: "#10B981" },
                                ].map(({ icon, href, color }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            width: "44px", height: "44px", borderRadius: "12px",
                                            background: color + "18", border: `1px solid ${color}33`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            color, textDecoration: "none",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.background = color + "30"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = color + "18"; e.currentTarget.style.transform = "translateY(0)"; }}
                                    >{icon}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;