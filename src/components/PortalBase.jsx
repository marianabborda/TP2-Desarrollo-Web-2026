// components/PortalBase.jsx
import React, { useState } from 'react';
import { 
  FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';

export default function PortalBase({
  nombre,
  rol,
  ubicacion,
  avatar,
  habilidades = [],
  proyectos = [],
  themeClass,
  perfilProfesional = []
}) {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  };

  return (
    <div className={`portal-container ${themeClass}`}>
      
      {/* --- HEADER Y NAVEGACIÓN FIJA --- */}
      <header>
        <div className="logo" style={{ fontWeight: 'bold', color: 'var(--acento)' }}>
          {nombre}.dev
        </div>
        <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <nav id="nav-menu" className={isMenuOpen ? "open" : ""}>
          <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)}>Sobre Mí</a>
          <a href="#habilidades" onClick={() => setIsMenuOpen(false)}>Tech Stack</a>
          <a href="#proyectos-carrusel" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
        </nav>
      </header>

      <main>
        {/* --- SOBRE MÍ --- */}
        <section id="sobre-mi">
          <div className="perfil-header">
            <img src={avatar} alt={nombre} className="foto-perfil" />
            <div className="info-principal">
              <h1>{nombre}</h1>
              <p className="puesto">{rol}</p>
              <p style={{ color: 'var(--texto-suave)', margin: '5px 0 0 0' }}>{ubicacion}</p>
              
              <div className="social-container">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" >
                  <FaLinkedin 
                    style={{ 
                      color: '#0077B5',          
                      background: '#ffffff',    
                      borderRadius: '4px',       
                      padding: '1px',            
                      fontSize: '1.7rem',         
                      border: 'none',            
                      outline: 'none',           
                      boxShadow: 'none'            
                    }}
                  />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#FFFFFF' }}>
                  <FaGithub />
                </a>
                <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ border: 'none', outline: 'none', textDecoration: 'none', display: 'inline-block' }}>
                  <FaInstagram 
                    style={{ 
                      color: '#ffffff',
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      borderRadius: '7px',
                      fontSize: '1.5rem',
                      padding: '3px',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }} 
                  />
                </a>   
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#1DA1F2' }}>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="descripcion">
            <h2>Perfil Profesional</h2>
            {perfilProfesional.map((parrafo, idx) => (
              <p key={idx}>{parrafo}</p>
            ))}
          </div>
        </section>

        {/* --- TECH STACK --- */}
        <section id="habilidades">
          <h2>Tech Stack</h2>
          <div className="tech-stack-icons">
            {habilidades.map((skill, index) => (
              <div key={index} className="tech-icon-box" title={skill.nombre}>
                {/* Renderizamos el ícono que viene directamente desde las props */}
                {skill.icono}
              </div>
            ))}
          </div>

          {/* BARRAS DE PROGRESO */}
          <h2 style={{ marginTop: '50px' }}>Progreso de Habilidades</h2>
          <div className="skills-container">
            {habilidades.map((skill, index) => (
              <div key={index} className="skill-bar-wrapper">
                <div className="skill-info">
                  <span>{skill.nombre}</span>
                  <span>{skill.porcentaje}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ '--target-width': `${skill.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CARRUSEL DE PROYECTOS --- */}
        <section id="proyectos-carrusel" className="carrusel-section">
          <h2>Carrusel de Proyectos</h2>
          <div className="carrusel-wrapper">
            
            <button onClick={prevProject} className="carrusel-btn prev" aria-label="Anterior">
              <FaChevronLeft />
            </button>
            
            <div className="carrusel-track">
              {proyectos.map((project, index) => {
                let position = "nextSlide";
                if (index === currentProject) position = "activeSlide";
                if (
                  index === currentProject - 1 || 
                  (currentProject === 0 && index === proyectos.length - 1)
                ) {
                  position = "lastSlide";
                }

                return (
                  <article key={project.id} className={`carrusel-slide ${position} item sobresalir`}>
                    <img src={project.img} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p style={{ padding: '0 15px', fontSize: '0.95rem', color: '#B3B3B3' }}>
                      {project.desc}
                    </p>
                  </article>
                );
              })}
            </div>

            <button onClick={nextProject} className="carrusel-btn next" aria-label="Siguiente">
              <FaChevronRight />
            </button>

          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 {nombre} - IFTS N° 29</p>
      </footer>
    </div>
  );
}