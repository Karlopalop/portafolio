import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ScrollAnimation from './ScrollAnimation';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <ScrollAnimation animation="fade-in">
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">
            Haz clic en cualquier proyecto para ver más detalles
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="projects-filters">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {filteredProjects.length === 0 ? (
          <ScrollAnimation animation="fade-in">
            <div className="no-projects">
              <p>No hay proyectos en esta categoría.</p>
            </div>
          </ScrollAnimation>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation 
                key={project.id} 
                animation="scale-in"
                delay={index * 100}
                threshold={0.1}
              >
                <ProjectCard 
                  project={project} 
                  onProjectClick={handleProjectClick}
                />
              </ScrollAnimation>
            ))}
          </div>
        )}
        
        <ScrollAnimation animation="fade-in" delay={300}>
          <div className="projects-stats">
            <p>
              Mostrando {filteredProjects.length} de {projectsData.length} proyectos
              {filter !== 'all' && ` en ${categories.find(c => c.key === filter)?.label}`}
            </p>
          </div>
        </ScrollAnimation>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Projects;