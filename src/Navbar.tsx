import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">Tom's Site</NavLink>
        </div>

        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
