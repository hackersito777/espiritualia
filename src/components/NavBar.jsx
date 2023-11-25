import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acercade">acerca de</Link></li>
        <li><Link to="/contacto">contacto</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
