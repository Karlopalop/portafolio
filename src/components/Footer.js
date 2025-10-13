import React from 'react';
import { personalInfo } from '../data/projectsData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{personalInfo.name}</h3>
            <p>Desarrollador Full Stack</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Inicio</a>
            <a href="#projects">Proyectos</a>
            <a href="#about">Sobre Mí</a>
            <a href="#contact">Contacto</a>
          </div>
          
          <div className="footer-social">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;