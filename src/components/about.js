import React from 'react';
import { personalInfo } from '../data/projectsData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <p className="section-subtitle">
          Conoce más sobre mi trayectoria y pasión por el desarrollo
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un <strong>Desarrollador Full Stack</strong> apasionado por crear 
              soluciones digitales innovadoras y eficientes. Me encanta transformar 
              ideas en realidad a través del código limpio y las mejores prácticas 
              de desarrollo.
            </p>
            
            <p>
              Mi experiencia abarca desde el <strong>desarrollo frontend</strong> con 
              React y Angular hasta el <strong>backend</strong> con Spring Boot y Node.js, 
              siempre buscando crear experiencias de usuario excepcionales y 
              arquitecturas escalables.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <strong>Nombre:</strong> {personalInfo.name}
              </div>
              <div className="detail-item">
                <strong>Especialidad:</strong> Desarrollo Full Stack
              </div>
              <div className="detail-item">
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div className="detail-item">
                <strong>Ubicación:</strong> {personalInfo.location}
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Contáctame</a>
              <a 
                href="/cv-juan-carlos.pdf" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder-about">
              <span>🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;