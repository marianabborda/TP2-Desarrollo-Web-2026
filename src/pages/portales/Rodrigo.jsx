// Rodrigo.jsx - Perfil Profesional Individual 
import PortalBase from "../../components/PortalBase";


export default function Rodrigo() {
  // Tus 5 habilidades técnicas con su respectivo componente de ícono y porcentaje
  const misHabilidades = [
  
   {
  nombre: "HTML5",
  porcentaje: 70,
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
  porcentaje: 60,
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
  porcentaje: 50,
  icono: <img src="/img/logo-javascript.webp" alt="Java" className="tech-icon" />
},  

{
  nombre: "WordPress",
  porcentaje: 80,
  icono: (
    <img
      src="/img/logo-wordpress.webp"
      alt="WordPress"
      className="tech-icon"
    />
  )
},
{
  nombre: "PHP",
  porcentaje: 60,
  icono: (
    <img
      src="/img/logo-php.webp"
      alt="PHP"
      className="tech-icon"
    />
  )
}

  
  ];

  const miPerfilTexto = [
    "Enfocado en la creación de soluciones digitales eficientes y optimización de interfaces. Especialista en maquetación semántica y desarrollo WordPress. "

  ];

  const misProyectos = [
    { 
      id: 1, 
      title: "E-commerce Global", 
      desc: "Tienda online con enfoque en diseño responsive y UX.", 
      img: "/img/proyecto1.webp" 
    },
    { 
      id: 2, 
      title: "Weather Global", 
      desc: "Consultas de clima en tiempo real mediante la integración de APIs.", 
      img: "/img/proyecto2.webp" 
    },
    { 
      id: 3, 
      title: "Portfolio", 
      desc: "Desarrollo de un portfolio interactivo. El proyecto fue diseñado con una interfaz moderna y responsive para presentar proyectos, habilidades y experiencia de manera profesional. ", 
      img: "/img/Proyecto3_Rodrigo.webp" 
    }
  ];

  return (
    <PortalBase
      nombre="Rodrigo Berger"
      rol="Estudiante de Desarrollo de Software"
      ubicacion="Paraná, Entre Ríos"
      avatar="/img/foto_perfil_rodrigo.webp"
      habilidades={misHabilidades}
      proyectos={misProyectos}
      perfilProfesional={miPerfilTexto}
      themeClass="chicos-theme"
      themeColors={{
        primary: "#1A1A2E",
        secondary: "#E0AAFF",
      }}
    />
  );
}