// Alejandra.jsx - Perfil Profesional Individual 
import PortalBase from "../../components/PortalBase";
import { DiHtml5, DiCss3 } from 'react-icons/di';
import { SiSelenium } from 'react-icons/si';

export default function Alejandra() {
  // Tus 5 habilidades técnicas con su respectivo componente de ícono y porcentaje
  const misHabilidades = [
    { 
      nombre: "HTML5", 
      porcentaje: 70, 
      icono: <DiHtml5 className="tech-icon" style={{ color: '#E34F26' }} /> 
    },
    { 
      nombre: "CSS3", 
      porcentaje: 70, 
      icono: <DiCss3 className="tech-icon" style={{ color: '#1572B6' }} /> 
    },
   
    {
      nombre: "JavaScript",
      porcentaje: 70,
      icono: <img src="/img/logo-javascript.webp" alt="Java" className="tech-icon" />
    },  
    { 
      nombre: "Selenium WebDriver", 
      porcentaje: 80, 
      icono: <SiSelenium className="tech-icon" style={{ color: '#43B02A' }} /> 
    },

   { 
    nombre: "JUnit", 
    porcentaje: 70, 
    icono: (
     <svg 
      className="tech-icon" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="1em" 
      height="1em"
     >
      {/* 1. MARCO ROTADO (Rojo y Verde con cortes limpios) */}
      <g transform="translate(50,50) rotate(-45) translate(-50,-50)">
        {/* Lado Inferior Izquierdo - Rojo */}
        <path 
          d="M 46 22 L 22 22 L 22 78 L 46 78" 
          fill="none" 
          stroke="#D53A35" 
          strokeWidth="11" 
          strokeLinejoin="miter" 
        />
        {/* Lado Superior Derecho - Verde */}
        <path 
          d="M 54 22 L 78 22 L 78 78 L 54 78" 
          fill="none" 
          stroke="#29844B" 
          strokeWidth="11" 
          strokeLinejoin="miter" 
        />
      </g>

      {/* 2. EL CHECK CENTRAL (Derecho, grueso, por encima y con puntas redondeadas) */}
      <path 
        d="M 28 54 L 44 70 L 76 34" 
        fill="none" 
        stroke="#252525" 
        strokeWidth="13" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      </svg>
    ) 
   }
  ];

  const miPerfilTexto = [
    "Soy Analista QA con experiencia en pruebas funcionales y automatización. Me apasiona garantizar la calidad del software y aprender nuevas tecnologías.",
    "Mi misión es contribuir a equipos de desarrollo para entregar productos confiables y de alto rendimiento."
  ];

  const misProyectos = [
    { 
      id: 1, 
      title: "Automatización con Selenium", 
      desc: "Desarrollo en un framework de pruebas automatizadas para una aplicación web utilizando Selenium WebDriver y Java. Implementación de patrones de diseño Page Object Model", 
      img: "/img/Proyecto1_Alejandra.webp" 
    },
    { 
      id: 2, 
      title: "Portafolio Personal", 
      desc: "Creación de este portafolio responsive utilizando HTML5, CSS3 y Flexbox para mostrar mis habilidades como QA y desarrolladora front-end.", 
      img: "/img/Proyecto2_Alejandra.webp" 
    },
    { 
      id: 3, 
      title: "Reportes de Testing", 
      desc: "Desarrollo de dashboards interactivos para la visualización de resultados de pruebas usando JavaScript y Chart.js.", 
      img: "/img/Proyecto3_Alejandra.webp" 
    }
  ];

  return (
    <PortalBase
      nombre="Alejandra Vazquez"
      rol="QA Tester"
      ubicacion="Cañada de Gómez, Santa Fe"
      avatar="/img/foto_perfil_alejandra.jpg"
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