// Gimena.jsx - Perfil Profesional Individual 
import PortalBase from "../../components/PortalBase";


export default function Gimena() {
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
  porcentaje: 70,
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
  porcentaje: 60,
  icono: <img src="/img/logo-javascript.webp" alt="Java" className="tech-icon" />
},  

{
  nombre: "React",
  porcentaje: 60,
  icono: (
    <img
      src="/img/logo-react.webp"
      alt="React"
      className="tech-icon"
    />
  )
},
  
{
  nombre: "TypeScript",
  porcentaje: 60,
  icono: (
    <img
      src="/img/logo-typescript.webp"
      alt="Java"
      className="tech-icon"
    />
  )
}
  
  ];

  const miPerfilTexto = [
    "Soy desarrolladora fullstack, apasionada por crecer y crear experiencias digitales memorables. Me interesa el diseño, la tecnología y resolver problemas reales con código limpio y creativo.",
    "Mi misión es crecer profesionalmente y construir productos que impacten positivamente a las personas."
  ];

  const misProyectos = [
    { 
      id: 1, 
      title: "E-commerce App", 
      desc: "Tienda online con carrito de compras, filtros y pasarela de pagos. Desarrollada con HTML, CSS y JavaScript vanilla.", 
      img: "/img/Proyecto1_Gime.webp" 
    },
    { 
      id: 2, 
      title: "Dashboard Admin", 
      desc: "Panel de administración con gráficos en tiempo real, gestión de usuarios y reportes exportables en PDF.", 
      img: "/img/Proyecto2_Gime.webp" 
    },
    { 
      id: 3, 
      title: "Blog Personal", 
      desc: "Blog con sistema de comentarios, búsqueda de artículos y modo oscuro. Diseño editorial y tipografía cuidada.", 
      img: "/img/Proyecto3_Gime.webp" 
    }
  ];

  return (
    <PortalBase
      nombre="Gimena Escalante"
      rol="Desarrolladora fullstack"
      ubicacion="Santa Fe, Santa Fe"
      avatar="/img/foto_perfil_gimena.jpeg"
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