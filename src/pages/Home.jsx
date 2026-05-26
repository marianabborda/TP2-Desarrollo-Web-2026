// Home.jsx - TP2 con efectos del TP1
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [heroText, setHeroText] = useState("Hola");
  const palabras = ["Hola", "Hello", "Ciao"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % palabras.length;
      setHeroText(palabras[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 const tecnologias = [
  { img: "/img/logo-react.webp", alt: "React" },
  { img: "/img/logo-vite.webp", alt: "Vite" },
  { img: "/img/logo-javascript.webp", alt: "JavaScript" },
  { img: "/img/logo-css.webp", alt: "CSS" },
  { img: "/img/logo-github.webp", alt: "GitHub" },
  { img: "/img/logo-visual.webp", alt: "Visual Studio Code" },
];

  const integrantes = [
    { nombre: "GIMENA ESCALANTE", img: "/img/foto_perfil_gimena.jpeg", ruta: "/gimena" },
    { nombre: "RODRIGO BERGER", img: "/img/foto_perfil_rodrigo.webp", ruta: "/rodrigo" }, 
    { nombre: "ALEJANDRA VAZQUEZ", img: "/img/foto_perfil_alejandra.jpg", ruta: "/alejandra" },
    { nombre: "TOMÁS AMSLER", img: "/img/foto_perfil_tomas.jpg", ruta: "/tomas" },
    { nombre: "MARIANA BORDA", img: "/img/foto_perfil_mariana.webp", ruta: "/mariana" }
  ];

  return (
    <div className="home">
      {/* Hero con imagen de fondo (TP1) */}
      <section className="hero">
        <div className="hero__content">
          <h1>
            <span className="hero-saludo" key={heroText}>{heroText}</span>
            <span>Mundo</span>
          </h1>
        </div>
      </section>

      {/* Tecnologías con efectos hover del TP1 */}
      <section className="section-technologies">
        <h2 className="titulo-principal">Tecnologías</h2>
        <ul className="tech-list">
          {tecnologias.map((tech, i) => (
            <li key={i} className="tech-item">
              <img src={tech.img} alt={tech.alt} title={tech.alt} />
            </li>
          ))}
        </ul>
      </section>

      {/* Intro con fondo */}
      <section className="section-intro">
        <div className="intro-box">
          <h3>¡Bienvenido a nuestro sitio!</h3>
          <p>
            Un espacio digital donde cada integrante tiene su propio portal. 
            Este proyecto representa la <strong>migración del TP1 a React</strong>, 
            transformándolo en una SPA moderna con componentes reutilizables.
          </p>
        </div>
      </section>

      

      {/* Cards de miembros con efecto glow */}
      <section className="section-cards">
        <h2 className="titulo-principal">GRUPO 5</h2>
        <div className="cards-grid">
          {integrantes.map((i, idx) => (
            <Link key={idx} to={i.ruta} className="card card-member">
              <img src={i.img} alt={`Portal ${i.nombre}`} />
              <span>{i.nombre}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Características TP2 */}
      <section className="features-section">
        <h2 className="titulo-principal"> Características del TP2</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">⚛️</span>
            <h4>Single Page Application</h4>
            <p>React Router para navegación sin recargas</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🖥️📱</span>
            <h4>Sidebar Responsive</h4>
            <p>Menú fijo en desktop, hamburguesa en móvil</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📄</span>
            <h4>Datos desde JSON</h4>
            <p>20 películas y 20 libros renderizados dinámicamente</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌐</span>
            <h4>API Pública</h4>
            <p>Integración con iTunes (Search API)</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📖</span>
            <h4>Galería de Imágenes</h4>
            <p>Galería de Libros Interactiva con Lightbox</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h4>Diagramas Técnicos</h4>
            <p>Árbol de componentes + estructura de carpetas</p>
          </div>
         
        
        </div>
      </section>

      {/* Proyecto */}
      <section className="section-project">
        <h2 className="titulo-principal">Sobre el Proyecto</h2>
        <div className="project-panel">
          <p>
           Este sitio web representa la evolución arquitectónica de una solución estática hacia un ecosistema moderno basado en React.
         </p>
         <p>
           Se diseñó como una Single Page Application (SPA) robusta, priorizando la modularidad mediante componentes altamente reutilizables y garantizando
           una navegación fluida y sin recargas a través de React Router.
         </p>
         <p>
          La gestión de información combina el consumo de datos dinámicos desde almacenamientos JSON locales junto con la integración de una API pública.
           Además, la plataforma cuenta con un sistema de portales individuales para cada desarrollador y una interfaz completamente responsive con menú hamburgesa optimizado para dispositivos móviles.
         </p>

        </div>
      </section>
    </div>
  );
}