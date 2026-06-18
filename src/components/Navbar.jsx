import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
      background: scrolled ? "rgba(8,12,20,0.92)" : "rgba(8,12,20,0.6)",
      backdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>

        {/* Logo */}
        <a href="#header" style={{
          fontWeight: "800", fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "#F1F5F9", textDecoration: "none", letterSpacing: "-0.02em",
        }}>
          Maskura{" "}
          <span style={{
            background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Begum</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ gap: "4px", alignItems: "center" }}>
          <NavLinks />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden"
          style={{
            background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "10px", padding: "8px",
            color: "#A78BFA", cursor: "pointer", lineHeight: 0,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.2)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(99,102,241,0.1)"}
        >
          {isOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{
          background: "rgba(8,12,20,0.97)",
          border: "1px solid rgba(99,102,241,0.15)",
          borderRadius: "16px", margin: "0 0 12px",
          padding: "12px 8px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        }}>
          <NavLinks toggleMenu={toggleMenu} mobile />
        </div>
      )}
    </nav>
  );
};

const navItems = [
  { name: 'Home',       link: 'header' },
  { name: 'About',      link: 'about' },
  { name: 'Skills',     link: 'skill' },
  { name: 'Projects',   link: 'project' },
  { name: 'Achievements',   link: 'achievement' },
  { name: 'Education',  link: 'education' },
  { name: 'Experience', link: 'experience' },
  { name: 'Contact',    link: 'contact' },
];

const NavLinks = ({ toggleMenu, mobile }) => (
  <div style={{
    display: "flex",
    flexDirection: mobile ? "column" : "row",
    gap: mobile ? "2px" : "2px",
  }}>
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.link}
        smooth={true}
        duration={500}
        offset={-64}
        onClick={toggleMenu}
        style={{
          padding: mobile ? "10px 16px" : "8px 14px",
          borderRadius: "10px",
          fontSize: "14px", fontWeight: "500",
          color: "#94A3B8",
          cursor: "pointer",
          transition: "all 0.2s ease",
          display: "block",
          textDecoration: "none",
          userSelect: "none",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = "#F1F5F9";
          e.currentTarget.style.background = "rgba(99,102,241,0.1)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = "#94A3B8";
          e.currentTarget.style.background = "transparent";
        }}
        activeClass="active-nav"
        spy={true}
      >
        {item.name}
      </Link>
    ))}
  </div>
);

export default Navbar;