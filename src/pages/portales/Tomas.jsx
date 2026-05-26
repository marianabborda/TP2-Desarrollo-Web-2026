// Tomas.jsx - Perfil Profesional Individual 
import PortalBase from "../../components/PortalBase";


export default function Tomas() {
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
  porcentaje: 70,
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
    "Soy estudiante de desarrollo de software, entusiasta de adquirir conocimientos. Enfocado en la creación y desarrollo de páginas web y bases de datos. "

  ];

  const misProyectos = [
    { 
      id: 1, 
      title: "E-Commerce Global", 
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
      title: "Sistema de Gestión C#", 
      desc: "Desarrollo de una aplicación de escritorio para manejo de inventarios.", 
      img: "/img/Proyecto3_Tomas.webp" 
    }
  ];

  return (
    <PortalBase
      nombre="Tomás Amsler"
      rol="Estudiante de Desarrollo de Software"
      ubicacion="Santa Fe, Santa Fe"
      avatar="/img/foto_perfil_tomas.jpg"
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