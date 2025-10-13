import React from 'react';
import { personalInfo } from '../data/projectsData';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <ScrollAnimation animation="slide-left" delay={200}>
              <h1 className="hero-title">
                Hola, soy <span className="highlight">{personalInfo.name}</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-left" delay={400}>
              <h2 className="hero-subtitle">{personalInfo.title}</h2>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={600}>
              <p className="hero-description">
                Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras. 
                Especializado en React, Node.js y Spring Boot.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={800}>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Proyectos
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Contáctame
                </button>
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="slide-right" delay={300}>
            <div className="hero-image">
              <div className="image-placeholder">
                <span>💻</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation animation="bounce" delay={1000}>
          <div className="scroll-indicator">
            <span>Scroll ↓</span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;