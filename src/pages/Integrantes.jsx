// src/pages/Integrantes.jsx - Página que muestra los integrantes del equipo
import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";
import "./Integrantes.css";

export default function Integrantes() {
  const integrantes = [
{
      nombre: "Gimena Escalante",
      ubicacion: "Santa Fe, Santa Fe",
      rol: "Desarrolladora fullstack",
      avatar: "/img/foto_perfil_gimena.jpeg",
      descripcion:
        "Me interesa el diseño, la tecnología y resolver problemas reales con código limpio y creativo",
      especialidades: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "TypeScript",
      ],
      ruta: "/gimena",
      color: "#E0AAFF",
    },

    {
      nombre: "Rodrigo Berger",
      ubicacion: "Paraná, Entre Ríos",
      rol: "Estudiante de Desarrollo de Software",
      avatar: "/img/foto_perfil_rodrigo.webp",
      descripcion:
        "Enfocado en la creación de soluciones digitales eficientes y optimización de interfaces.",
      especialidades: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "WordPress",
        "PHP",
      ],
      ruta: "/rodrigo",
      color: "#E0AAFF",
    },


     {
      nombre: "Alejandra Vazquez",
      ubicacion: "Cañada de Gómez, Santa Fe",
      rol: "QA Tester",
      avatar: "/img/foto_perfil_alejandra.jpg",
      descripcion:
        "Apasionada por la calidad del software. Me especializo en asegurar que cada línea de código cumpla con los estándares más altos para el usuario final",
      especialidades: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Selemium WebDriver",
        "JUnit",
      ],
      ruta: "/alejandra",
      color: "#E0AAFF",
    },

     {
      nombre: "Tomás Amsler",
      ubicacion: "Santa Fe, Santa Fe",
      rol: "Estudiante de Desarrollo de Software",
      avatar: "/img/foto_perfil_tomas.jpg",
      descripcion:
        "Enfocado en la creación  y desarrollo de páginas web y bases de datos.",
      especialidades: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "WordPress",
        "PHP",
      ],
      ruta: "/tomas",
      color: "#E0AAFF",
    },



     {
      nombre: "Mariana Borda",
      ubicacion: "Rosario, Santa Fe",
      rol: "Estudiante Desarrollo de Software",
      avatar: "/img/foto_perfil_mariana.webp",
      descripcion:
        "Me distingo por mi compromiso, capacidad analítica, aprendizaje constante y orientación a resultados; cualidades que me permiten adaptarme con rapidez a nuevos desafíos, integrarme en equipo de trabajo y aportar valor en entornos exigentes.",
      especialidades: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "Java",
      ],
      ruta: "/mariana",
      color: "#E0AAFF",
    },
  ];

  return (
    <div className="integrantes" style={{ '--section-color': '#7b2cbf' }}>
      <HeroSection
        title="Nuestro Equipo"
        
        accentColor="#e0aaff"
      />

      <section className="equipo-actual">
        <h2>Integrantes</h2>
        <div className="integrantes-grid">
          {integrantes.map((i, index) => (
            <Link
              key={index}
              to={i.ruta}
              className="integrante-card"
              style={{ "--color-principal": i.color }}
            >
              <div className="integrante-avatar">
                <img src={i.avatar} alt={`${i.nombre} Avatar`} />
                <div className="avatar-overlay">
                  <span>Ver Portal</span>
                </div>
              </div>

              <div className="integrante-info">
                <h3>{i.nombre}</h3>
                <p className="rol">{i.rol}</p>
                <p className="ubicacion">📍 {i.ubicacion}</p>
                <p className="descripcion">{i.descripcion}</p>

                <div className="especialidades">
                  <h4>Habilidades:</h4>
                  <div className="especialidades-tags">
                    {i.especialidades.map((esp, j) => (
                      <span key={j} className="especialidad-tag">
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="nota-cambios">
        <div className="nota-box">
          <h3>📝 Nota sobre el Equipo</h3>
          <p>
           Con el fin de garantizar una experiencia de usuario fluida y unificada, desarrollamos una arquitectura de diseño consistente donde cada integrante cuenta con su
           propio portal individual compartiendo la misma estructura y estilo visual.
          </p>
          <p>
            A través de un enfoque basado en componentes altamente reutilizables de React, cada espacio personal presenta de manera dinámica 
            las habilidades, tech stack y proyectos de cada desarrollador. Este diseño estandarizado refleja nuestro compromiso con las buenas prácticas
            de UI/UX, optimizando la escalabilidad del sitio y potenciando el trabajo colaborativo.
          </p>
        </div>
      </section>
    </div>
  );
}