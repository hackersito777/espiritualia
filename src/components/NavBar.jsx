import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav role="navigation" className={`navbar ${menuOpen ? 'open' : ''}`}>
      
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"><span></span></div>
        <div className="bar2"><span></span></div>
        <div className="bar3"><span></span></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/inicio" aria-label="Ir a la página de Inicio">Inicio</Link></li>
        <li><Link to="/acercade" aria-label="Ir a la página Acerca De">Acerca De </Link></li>
        <li><Link to="/contacto" aria-label="Ir a la página de Contacto">Contacto</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
