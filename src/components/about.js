import React from 'react';
import { personalInfo } from '../data/projectsData';
import profilePhoto from '../assets/FotoCurriculum.jpeg';

const About = () => {
  const handleContactClick = () => {
    const email = 'medina.juan.carlos.p@gmail.com';
    const subject = '🤝 Contacto desde tu Portafolio';
    const body = `Hola Juan Carlos,

Te escribo desde tu portafolio online. Me interesa contactarte porque:

💼 Motivo del contacto:
[Describir brevemente el interés]

📧 Mi información de contacto:
• Nombre: 
• Email: 
• Teléfono: 
• LinkedIn: (opcional)

🏢 Sobre mí/mi empresa:
[Breve descripción]

⌚ Mejor horario para contactar:
[Indicar preferencia]

¡Quedo atento a tu respuesta!

Saludos cordiales`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleDownloadCV = () => {
    // Ruta directa al archivo en la carpeta public
    const cvUrl = '/Curriculum-Juan-Carlos-Pérez-Medina.pdf';
    
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Juan-Carlos-Pérez-Medina.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              Soy un <strong>Desarrollador Full Stack</strong> con experiencia en el desarrollo 
              de aplicaciones web completas. Mi portafolio demuestra habilidades en 
              <strong> React, diseño responsive</strong> y <strong>optimización de performance</strong>, 
              mientras que mi aplicación de Gestión de Tareas muestra competencia en 
              <strong> desarrollo de funcionalidades CRUD</strong>, <strong>gestión de estado </strong> 
              y <strong>persistencia de datos</strong>.
            </p>

            <p>
              Me especializo en crear soluciones que combinan <strong>interfaces modernas</strong> 
              con <strong>arquitecturas backend robustas</strong> usando Spring Boot y Node.js. 
              Cada proyecto refleja mi compromiso con el <strong>código limpio</strong>, 
              <strong> mejores prácticas</strong> y <strong>experiencias de usuario intuitivas</strong>.
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
              <button 
                onClick={handleContactClick}
                className="btn btn-primary"
              >
                Contáctame
              </button>
              <button 
                onClick={handleDownloadCV}
                className="btn btn-secondary download-cv-btn"
              >
                📄 Descargar CV
              </button>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-photo-container">
              <img 
                src={profilePhoto} 
                alt="Juan Carlos - Desarrollador Full Stack"
                className="profile-photo"
              />
              <div className="photo-frame"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;