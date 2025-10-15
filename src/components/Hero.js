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
                Especializado en Spring Boot, React y desarrollo de aplicaciones web modernas.
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
               
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="slide-right" delay={300}>
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="floating-card">
                  <div className="tech-stack">
                    <span className="tech-item">⚛️ React</span>
                    <span className="tech-item">🔄 Angular</span>
                    <span className="tech-item">☕ Spring</span>
                    <span className="tech-item">📦 Node.js</span>
                    <span className="tech-item">💾 MySQL</span>
                    <span className="tech-item">🐙 GitHub</span>
                    <span className="tech-item">⚡ JavaScript</span>
                    <span className="tech-item">🌐 Full Stack</span>
                    <span className="tech-item">🔌 API</span>
                  </div>
                </div>
                <div className="main-image">
                  <span>💻</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation animation="bounce" delay={1000}>
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <span>Descubre más</span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;