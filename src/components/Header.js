import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/projectsData';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a 
            href="#home" 
            className="logo" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            {personalInfo.name}
          </a>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contacto
              </a>
            </li>
            <li>
              <button 
                className="theme-toggle-simple"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                title={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú móvil"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;