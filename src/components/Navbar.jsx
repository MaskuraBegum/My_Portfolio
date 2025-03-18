import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-950 bg-opacity-80 text-amber-300 py-2 
    lg:py-4 z-50">
      <div className="container w-full max-w-screen-lg mx-auto flex  justify-between items-center  relative">
        {/* Logo */}
        <div className="text-xl font-bold justify-self-start  ">
          <a href="#home" className="text-lg lg:text-2xl text-amber-200">
            Maskura Begum
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-amber-300 p-2 hover:text-gray-300 focus:outline-none">
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
        <div className="hidden lg:flex space-x-6 text-end">
          <NavLinks />
        </div>

        {/* Mobile Dropdown Menu (Now with Solid Background) */}
        {isOpen && (
          <div className="absolute top-full right-0 w-[180px] min-w-[150px] bg-gray-900 py-4 rounded-lg shadow-lg lg:hidden">
            <NavLinks toggleMenu={toggleMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};

// Menu Links Component
const NavLinks = ({ toggleMenu }) => (
  <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0">
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
