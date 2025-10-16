import React, { useEffect } from 'react';
import '../styles/ProyectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <span className={`project-category ${project.category}`}>
            {project.category}
          </span>
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <div className="project-image-large">
              {project.title.charAt(0)}
            </div>
          </div>
          
          <div className="modal-details">
            <div className="modal-description">
              <h3>Descripción</h3>
              <p>{project.description}</p>
            </div>

            <div className="modal-features">
              <h3>Características</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-tech">
              <h3>Tecnologías</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag large">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-links">
              <a 
                href={project.githubUrl} 
                className="btn btn-secondary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                📁 Ver Código
              </a>
              {/* Solo mostrar botón Demo si existe liveUrl */}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  className="btn btn-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  🌐 Ver Página Web
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;