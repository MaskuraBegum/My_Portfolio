import React from 'react';

const socials = [
    {
        href: "https://www.facebook.com/maskura.islam.313", label: "Facebook",
        svg: <svg width="20" height="20" fill="none" viewBox="0 0 17 17"><path d="M14.1762 0.823608H2.68022C2.08296 0.823608 1.51015 1.06087 1.08782 1.4832C0.665486 1.90554 0.428223 2.47834 0.428223 3.07561V14.5716C0.428223 15.1689 0.665486 15.7417 1.08782 16.164C1.51015 16.5863 2.08296 16.8236 2.68022 16.8236H7.91222V10.9836H5.93422V8.70561H7.91222V7.02761C7.91222 6.07661 8.17522 5.33761 8.70122 4.81261C9.22722 4.28661 9.94022 4.02261 10.8412 4.02261C11.7432 4.02261 12.3272 4.05761 12.5942 4.12361V6.15161H11.3922C10.9582 6.15161 10.6622 6.24361 10.5032 6.42761C10.3452 6.61061 10.2662 6.88661 10.2662 7.25361V8.70561H12.5192L12.2192 10.9836H10.2662V16.8236H14.1762C14.7735 16.8236 15.3463 16.5863 15.7686 16.164C16.191 15.7417 16.4282 15.1689 16.4282 14.5716V3.07561C16.4282 2.47834 16.191 1.90554 15.7686 1.4832C15.3463 1.06087 14.7735 0.823608 14.1762 0.823608Z" fill="#F59E0B" /></svg>
    },
    {
        href: "https://github.com/MaskuraBegum", label: "GitHub",
        svg: <svg width="20" height="20" viewBox="0 0 32 32"><path clipRule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#F59E0B" fillRule="evenodd" /></svg>
    },
    {
        href: "https://www.linkedin.com/in/maskura-begum/", label: "LinkedIn",
        svg: <svg width="20" height="20" viewBox="0 0 56.693 56.693"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" fill="#F59E0B" /><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" fill="#F59E0B" /></g></svg>
    },
];

const Header = () => {
    return (
        <div id="header" style={{
            position: "relative", overflow: "hidden",
            background: "#0B0F1A", minHeight: "100vh",
            display: "flex", alignItems: "center",
            fontFamily: "'Inter', sans-serif",
        }}>
            {/* Grid texture */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
                backgroundSize: "48px 48px", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", top: "-10%", left: "20%",
                width: "600px", height: "600px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
                pointerEvents: "none",
            }} />

            {/* ── DESKTOP layout (side by side) ── */}
            <div className="header-desktop" style={{
                position: "relative", zIndex: 1,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "48px", width: "100%", maxWidth: "1100px",
                margin: "0 auto", padding: "100px 64px 60px",
                boxSizing: "border-box",
            }}>
                {/* Text */}
                <div style={{ flex: 1, maxWidth: "580px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#6366F1", fontFamily: "'Courier New', monospace", marginBottom: "18px" }}>
                        — Aspiring Software Engineer
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, color: "#F1F5F9", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 18px" }}>
                        Hi, I'm{" "}
                        <span style={{ background: "linear-gradient(135deg, #F59E0B, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Maskura Begum
                        </span>
                    </h1>
                    <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "22px", maxWidth: "440px" }}>
                        Passionate about building innovative solutions with cutting-edge technologies. I turn ideas into real, full-stack web experiences.
                    </p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "22px" }}>
                        {["React", "Node.js", "Full-Stack"].map(tag => (
                            <span key={tag} style={{ fontSize: "12px", fontWeight: 600, padding: "4px 12px", borderRadius: "20px", background: "rgba(99,102,241,0.12)", color: "#818CF8", border: "1px solid rgba(99,102,241,0.25)", fontFamily: "'Courier New', monospace" }}>{tag}</span>
                        ))}
                    </div>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
                        {socials.map(({ href, label, svg }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", transition: "all 0.25s ease", textDecoration: "none" }}
                                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,158,11,0.22)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "rgba(245,158,11,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >{svg}</a>
                        ))}
                    </div>
                    <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                        <a href="mailto:maskura.begum77@gmail.com" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "50px", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", color: "#fff", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "all 0.25s ease", boxShadow: "0 4px 22px rgba(99,102,241,0.38)", whiteSpace: "nowrap" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.55)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 22px rgba(99,102,241,0.38)"; }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" fillRule="evenodd" /></svg>
                            Contact Me
                        </a>
                        <a href="/resource/MaskuraBegum.pdf" download="Maskura Begum.pdf" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "50px", background: "rgba(16,185,129,0.1)", border: "1.5px solid rgba(16,185,129,0.45)", color: "#10B981", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "all 0.25s ease", whiteSpace: "nowrap" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(16,185,129,0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(16,185,129,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M18,20H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" fill="currentColor" /><path d="M15.92,11.62A1,1,0,0,0,15,11H13V5a1,1,0,0,0-2,0v6H9a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,15.92,11.62Z" fill="currentColor" /></svg>
                            Get Resume
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", width: "calc(100% + 32px)", height: "calc(100% + 32px)", borderRadius: "50%", background: "conic-gradient(from 0deg, #6366F1, #F59E0B, #10B981, #6366F1)", opacity: 0.45, filter: "blur(14px)", animation: "spin 8s linear infinite" }} />
                    <img src="https://i.ibb.co.com/bM6Db8Rs/hero-Image.png" alt="Maskura Begum"
                        style={{ width: "clamp(220px, 28vw, 320px)", height: "clamp(220px, 28vw, 320px)", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(245,158,11,0.55)", position: "relative", zIndex: 1 }} />
                </div>
            </div>

            {/* ── MOBILE layout (centered, stacked) ── */}
            <div className="header-mobile" style={{
                display: "none",
                position: "relative", zIndex: 1,
                flexDirection: "column", alignItems: "center",
                textAlign: "center",
                width: "100%",
                padding: "90px 24px 60px",
                boxSizing: "border-box",
                gap: "0",
            }}>
                {/* Image — compact on mobile */}
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px" }}>
                    <div style={{ position: "absolute", width: "calc(100% + 24px)", height: "calc(100% + 24px)", borderRadius: "50%", background: "conic-gradient(from 0deg, #6366F1, #F59E0B, #10B981, #6366F1)", opacity: 0.4, filter: "blur(12px)", animation: "spin 8s linear infinite" }} />
                    <img src="https://i.ibb.co.com/bM6Db8Rs/hero-Image.png" alt="Maskura Begum"
                        style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(245,158,11,0.55)", position: "relative", zIndex: 1 }} />
                </div>

                {/* Label */}
                <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366F1", fontFamily: "'Courier New', monospace", marginBottom: "12px" }}>
                    — Aspiring Software Engineer
                </p>

                {/* Name */}
                <h1 style={{ fontSize: "clamp(1.7rem, 8vw, 2.4rem)", fontWeight: 900, color: "#F1F5F9", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 14px" }}>
                    Hi, I'm{" "}
                    <span style={{ background: "linear-gradient(135deg, #F59E0B, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        Maskura Begum
                    </span>
                </h1>

                {/* Subtitle */}
                <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.7, marginBottom: "20px", maxWidth: "320px" }}>
                    Passionate about building innovative solutions with cutting-edge technologies.
                </p>

                {/* Badges */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px" }}>
                    {["React", "Node.js", "Full-Stack"].map(tag => (
                        <span key={tag} style={{ fontSize: "11px", fontWeight: 600, padding: "4px 11px", borderRadius: "20px", background: "rgba(99,102,241,0.12)", color: "#818CF8", border: "1px solid rgba(99,102,241,0.25)", fontFamily: "'Courier New', monospace" }}>{tag}</span>
                    ))}
                </div>

                {/* Socials */}
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "24px" }}>
                    {socials.map(({ href, label, svg }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", transition: "all 0.25s ease", textDecoration: "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.22)"}
                            onMouseLeave={e => e.currentTarget.style.background = "rgba(245,158,11,0.1)"}
                        >{svg}</a>
                    ))}
                </div>

                {/* CTA buttons — full width on mobile */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "300px" }}>
                    <a href="mailto:maskura.begum77@gmail.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px 20px", borderRadius: "50px", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 22px rgba(99,102,241,0.38)" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" fillRule="evenodd" /></svg>
                        Contact Me
                    </a>
                    <a href="/resource/MaskuraBegum.pdf" download="Maskura Begum.pdf" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px 20px", borderRadius: "50px", background: "rgba(16,185,129,0.1)", border: "1.5px solid rgba(16,185,129,0.45)", color: "#10B981", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24"><path d="M18,20H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" fill="currentColor" /><path d="M15.92,11.62A1,1,0,0,0,15,11H13V5a1,1,0,0,0-2,0v6H9a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,15.92,11.62Z" fill="currentColor" /></svg>
                        Get Resume
                    </a>
                </div>
            </div>

            <style>{`
              @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

              /* Desktop: side-by-side */
              @media (min-width: 641px) {
                .header-desktop { display: flex !important; }
                .header-mobile  { display: none  !important; }
              }

              /* Mobile: centered column */
              @media (max-width: 640px) {
                .header-desktop { display: none  !important; }
                .header-mobile  { display: flex !important; }
              }
            `}</style>
        </div>
    );
};

export default Header;