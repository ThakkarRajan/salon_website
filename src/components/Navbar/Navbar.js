// src/components/Navbar/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assest/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Lavish Look" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <a href="#home"><li>Home</li></a>
        <a href="#services"><li>Services</li></a>
        <a href="#testimonials"><li>Testimonials</li></a>
        <a href="#contact"><li>Contact Us</li></a>
      </ul>
    </nav>
  );
};

export default Navbar;