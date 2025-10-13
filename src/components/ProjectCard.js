import React from 'react';

const ProjectCard = ({ project, onProjectClick }) => {
  const getCategoryColor = (category) => {
    const colors = {
      frontend: '#3B82F6',
      backend: '#10B981', 
      fullstack: '#F59E0B'
    };
    return colors[category] || '#6B7280';
  };

  const handleClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-image">
        <div 
          className="project-icon"
          style={{ 
            background: `linear-gradient(135deg, ${getCategoryColor(project.category)}, ${getCategoryColor(project.category)}80)`
          }}
        >
          {project.title.charAt(0)}
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span 
            className="project-category"
            style={{ color: getCategoryColor(project.category) }}
          >
            {project.category}
          </span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="project-links">
          <a 
            href={project.githubUrl} 
            className="btn btn-secondary" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;