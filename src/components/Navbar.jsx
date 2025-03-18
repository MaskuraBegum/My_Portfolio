import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling to different sections

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 full w-56 lg:w-full  bg-gray-950 bg-opacity-80 text-amber-300 p-2 z-50">
      <div className="container mx-auto flex flex-row-reverse lg:flex-row justify-between items-center relative">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home" className="ml-2 lg:ml-20 text-lg lg:text-2xl text-amber-300">Maskura Begum</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-amber-300 p-2 hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <NavLinks />
        </div>

        {/* Mobile Dropdown (Smaller Window) */}
        <div
          className={`absolute top-full text-center right-2 w-[150px] bg-gray-900 py-4 rounded-lg shadow-lg transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          } lg:hidden`}
        >
          <NavLinks toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

// Extracted Menu Links
const NavLinks = ({ toggleMenu }) => (
  <div className="flex flex-col lg:flex-row space-y-2">
    {[
      { name: 'Home', link: 'header' },
      { name: 'About', link: 'about' },
      { name: 'Skill', link: 'skill' },
      { name: 'Project', link: 'project' },
      { name: 'Education', link: 'education' },
      { name: 'Experience', link: 'experience' },
      { name: 'Contact', link: 'contact' },
    ].map((item) => (
      <Link
        key={item.name}
        to={item.link}
        smooth={true}
        duration={500}
        className="text-white hover:text-gray-300 cursor-pointer block px-3 py-2 text-sm"
        onClick={toggleMenu}
      >
        {item.name}
      </Link>
    ))}
  </div>
);

export default Navbar;
