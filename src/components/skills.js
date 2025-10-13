import React from 'react';

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Angular", level: 75 }
    ],
    "Backend": [
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 85 },
      { name: "Java", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 }
    ],
    "Base de Datos": [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 }
    ],
    "Herramientas": [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 95 }
    ]
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que domino y utilizo en mis proyectos
        </p>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="skills-category">
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;