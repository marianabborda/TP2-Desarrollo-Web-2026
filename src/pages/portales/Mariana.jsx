// Mariana.jsx - Perfil Profesional Individual 
import PortalBase from "../../components/PortalBase";


export default function Mariana() {
  // Tus 5 habilidades técnicas con su respectivo componente de ícono y porcentaje
  const misHabilidades = [
  
   {
  nombre: "HTML5",
  porcentaje: 80,
  icono: (
    <img
      src="/img/logo-html.webp"
      alt="HTML5"
      className="tech-icon"
    />
  )
},

{
  nombre: "CSS3",
  porcentaje: 80,
  icono: (
    <img
      src="/img/logo-css.webp"
      alt="CSS3"
      className="tech-icon"
    />
  )
},

 {
  nombre: "JavaScript",
  porcentaje: 70,
  icono: <img src="/img/logo-javascript.webp" alt="Java" className="tech-icon" />
},  

{
  nombre: "Python",
  porcentaje: 60,
  icono: (
    <img
      src="/img/logo-python.webp"
      alt="Python"
      className="tech-icon"
    />
  )
},
  
{
  nombre: "Java",
  porcentaje: 70,
  icono: (
    <img
      src="/img/logo-java.webp"
      alt="Java"
      className="tech-icon"
    />
  )
}
  
  ];

  const miPerfilTexto = [
    "Soy Desarrolladora de Software en formación, actualmente cursando la Tecnicatura de Desarrollo de Software.",
    "Me distingo por mi compromiso, capacidad analítica, aprendizaje constante y orientación a resultados; cualidades que permiten que me adapte con rapidez a nuevos desafíos, integrarme en equipos de trabajo y aportar valor en entornos exigentes."
  ];

  const misProyectos = [
    { 
      id: 1, 
      title: "Mundo Literario", 
      desc: "Plataforma web diseñada para amantes de la lectura, donde se pueden explorar novedades editoriales, navegar por diversas categorías de libros y establecer contacto con la librería. El sitio ofrece una interfaz moderna con animaciones fluidas y una navegación intuitiva.", 
      img: "/img/Mundo-Literario.webp" 
    },
    { 
      id: 2, 
      title: "Rafiaa Belle", 
      desc: "Sistema web diseñado para un centro de estética y salud. Es una plataforma orientada a la presentación de servicios estéticos avanzados, venta de productos cosméticos y gestión de turnos/consultas.", 
      img: "/img/Rafiaa-Belle.webp" 
    },
    { 
      id: 3, 
      title: "Clínica SePrise", 
      desc: "Aplicación analítica de gestión para centros de salud orientada a la organización de agendas médicas y estudios de diagnóstico.", 
      img: "/img/SePrise.jpg" 
    }
  ];

  return (
    <PortalBase
      nombre="Mariana Borda"
      rol="Estudiante de Desarrollo de Software"
      ubicacion="Rosario, Santa Fe"
      avatar="/img/foto_perfil_mariana.webp"
      habilidades={misHabilidades}
      proyectos={misProyectos}
      perfilProfesional={miPerfilTexto}
      themeClass="chicas-theme"
      themeColors={{
        primary: "#1A1A2E",
        secondary: "#E0AAFF",
      }}
    />
  );
}