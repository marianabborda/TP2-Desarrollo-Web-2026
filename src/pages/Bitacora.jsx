// src/pages/Bitacora.jsx - Reutiliza util.css al máximo
import HeroSection from "../components/ui/HeroSection";
import TimelineItem from '../components/TimelineItem';
import './Bitacora.css';

export default function Bitacora() {
  const eventos = [
  {
    titulo: "Fase de Planificación", 
    descripcion: "Puesta en común del equipo. Debatimos cómo unificar las ideas individuales en un concepto sólido y definimos los primeros flujos de navegación que tenía que tener el TP1."
  },
  { 
    titulo: "Estándares y Reglas de Coexistencia", 
    descripcion: "Establecimos las convenciones de desarrollo para el equipo: reglas de nomenclatura, estilos, etc. Definimos la estructura del menú principal para enlazar los portales. Acordamos libertad total para que cada integrante desarrollara sus propias tarjetas, botones y etc. "
  },
  { 
    titulo: "Maquetación Estática", 
    descripcion: "Escribimos el core del HTML estructurando las secciones asignadas, aplicando un único estilo CSS unificado para todo el equipo. De esta manera, garantizamos una estética homogénea y una identidad visual consistente en cada rincón del sitio."
  },
  { 
    titulo: "Interactividad Vanilla", 
    descripcion: "Inyección de dinamismo puro con JavaScript global. Programamos efectos visuales al hacer scroll, animaciones sutiles en los textos principales y la validación de los datos ingresados en el formulario."
  },
  { 
    titulo: "Cierre y Carga de TP1", 
    descripcion: "Creamos un repositorio del TP1 en GitHub, subimos el proyecto a Vercel y realizamos las pruebas finales de rendimiento."
  },
  { 
    titulo: "Desafío React SPA - TP2", 
    descripcion: "Puntapié inicial para el TP2. Analizamos los requisitos para transformar nuestro sitio multipágina tradicional en una SPA fluida y empezamos a pensar el diseño modular que nos pediría React."
  }, 
  { 
    titulo: "Estructura con Vite", 
    descripcion: "Inicializamos el entorno de desarrollo usando Vite por su velocidad. Creamos el árbol de carpetas e instalamos el paquete para el manejo de rutas internas."
  },
  { 
    titulo: "Portabilidad de Vistas", 
    descripcion: "Comenzamos a mudar el marcado HTML viejo hacia la sintaxis JSX. Reorganizamos las hojas de estilo sueltas para adaptarlas a módulos de CSS, previniendo el solapamiento de clases entre secciones."
  },
  { 
    titulo: "Abstracción de Componentes", 
    descripcion: "Separamos la interfaz en piezas lógicas reusables como la barra lateral y los contenedores de ítems. Desarrollamos un molde base común que simplificó la carga de las páginas de cada integrante."
  },
  { 
    titulo: "Ruteo Dinámico", 
    descripcion: "Configuramos el enrutador central para enlazar todos los módulos. Conseguimos transiciones instantáneas entre pestañas sin recargar el navegador, usando estados activos para resaltar la sección actual."
  },
  {  
    titulo: "Consumo de Datos", 
    descripcion: "Conectamos un archivo JSON local para estructurar el catálogo de películas y otro para la galeria de imágenes."
  },
  { 
    titulo: "Ajustes de Adaptabilidad", 
    descripcion: "Pulido a fondo de las media queries para teléfonos y tablets. Solucionamos problemas de desborde en pantallas chicas y transformamos el menú lateral en un panel desplegable con botón flotante."
  },
  {  
    titulo: "Refactor de Estilos", 
    descripcion: "Limpieza profunda del código CSS redundante. Centralizamos los colores y tipografías en variables globales."
  },
  { 
    titulo: "Diagramas y Readme", 
    descripcion: "Realizamos el árbol de renderizado y la estructura de archivos del proyecto. Documentamos los pasos de instalación en el Readme para dejar el repositorio listo para revisión."
  },
  { 
    titulo: " Integración de API Externa", 
    descripcion: "Configuramos las llamadas asincrónicas a la API pública iTunes."
  },
  { 
    titulo: "Entrega Final y Deploy", 
    descripcion: "Publicación definitiva del TP2 en producción. Verificamos que todo funcionara correctamente, completando exitosamente todos los puntos requeridos de la consigna."
  }
];

   return (
    <div className="bitacora">
      <HeroSection
  title="📋 Bitácora de Desarrollo"
  subtitle="Registro detallado del proceso de migración de TP1 a React SPA"
  accentColor="#a855f7"
/>

      {/* ✅ Timeline usando TimelineItem component */}
      <section className="timeline-section">
        <h2>Línea de Tiempo del Proyecto</h2>
        <div className="timeline-container">
          {eventos.map((e, i) => (
            <TimelineItem
              key={i}
              fecha={e.fecha}
              titulo={e.titulo}
              descripcion={e.descripcion}
            />
          ))}
        </div>
      </section>

      {/* ✅ Reutiliza .grid-auto de util.css */}
      <section className="section-content">
        <h2> 🧩 Asignación de roles del equipo</h2>
        <div className="grid-auto">
          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}> ⚙️ Tomás - Arquitectura Base y Enrutamiento Inicial</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
             Fue el encargado de recibir el proyecto limpio en su entorno local e inicializar la estructura de carpetas en React. Su tarea principal consistió en configurar el sistema de navegación jerárquico mediante React Router, creando el andamiaje base de la SPA (Single Page Application)
            </p>
          </div>

          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🎨 Gimena - Maquetación Estructural, Dashboard Home y Migración de Estilos Globales</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Tomó el relevo de la versión base para diseñar la interfaz central del sitio. Se encargó de migrar y refactorizar los estilos CSS compartidos del TP1 para adaptarlos a la Sidebar lateral fija con estética de Dashboard. Además, programó en React la grilla dinámica de la Home con las tarjetas de acceso rápido, avatares y nombres de los 5 integrantes, aplicando las primeras animaciones de entrada del sistema.
            </p>
          </div>


         <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🔌 Rodrigo - Lógica de Datos Locales y Consumo de API</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Recibió la versión estructural consolidada y se enfocó en el desarrollo del núcleo lógico interactivo en React. Programó desde cero el módulo del explorador de datos locales (procesando un archivo JSON de 20 objetos) y el componente de integración asíncrona para el consumo de la API externa, incluyendo el manejo de estados de carga/error.  
            </p>
          </div>

          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🔄 Mariana -Componentes Avanzados y Migración de Perfiles Individuales </h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Asumió la tarea de migrar el contenido neto de los portafolios personales del TP1 hacia React. Transcribió la información de los 5 integrantes a la lógica de componentes reutilizables y robusteció los perfiles profesionales individuales implementando componentes avanzados : las barras de progreso animadas para el stack técnico y el carrusel interactivo de proyectos. Además realizó la galería de imágenes tipo Grid con funcionalidad de Lightbox.  
            </p>
          </div>

          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>✅ Alejandra - Consolidación Estética, QA </h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
                Actuó como integradora de la última fase del circuito de desarrollo. Se encargó de pulir detalles de código en React, unificar la guía de estilos (paletas de colores hexadecimales, tipografías e iconografía avanzada) y asegurar que todo el sitio cuente con un diseño adaptable y responsive.
            </p>
          </div>


          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>📋 Control de Calidad y Cumplimiento de Consigna (Testing Grupal)</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Una vez finalizado el desarrollo, el equipo completo realizó un testeo simultáneo en entornos locales para comprobar el cumplimiento del 100% de la consigna : se verificó la fluidez de la SPA sin recargas , las animaciones de carga , la interactividad de los perfiles , la lógica del buscador JSON , la respuesta ante errores de la API , el cierre del Lightbox con la tecla ESC y la adaptabilidad responsive. Con la aprobación unánime, se subió el código definitivo a GitHub y se vinculó a Vercel.
            </p>
          </div>


        </div>
      </section>

      {/* ✅ Reutiliza .card de util.css */}
      <section className="section-content">
        <h2>🖥️ Flujo de Trabajo del Código: Integración Secuencial y Despliegue Centralizado </h2>
        <div className="challenge-list" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>Desarrollo por Relevos Secuenciales</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
             El trabajo se organizó de manera cronológica. Un integrante tomaba la última versión del proyecto y se encargaba de codificar de forma exclusiva el módulo o componente que le correspondía.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>Empaquetado y Traspaso de Versiones</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
             Una vez que el desarrollador de turno finalizaba su código y comprobaba que compilaba en su entorno local, comprimía el directorio del proyecto. 
             Esta nueva versión limpia y fechada se transfería de forma directa al siguiente desarrollador asignado para continuar con la cadena de desarrollo.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>Control de Calidad Colectivo (Testing Grupal)</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Al completarse una fase de integración o un bloque de perfiles, todo el equipo ejecutaba el proyecto en sus propios entornos locales. En esta etapa se
             realizaba un testeo para verificar que los estados de React funcionaran de forma fluida y que el diseño fuera completamente adaptable.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>Consolidación en Repositorio Central (GitHub)</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
            Una vez que la versión del proyecto contó con la aprobación unánime de los 5 integrantes tras el testeo grupal, se procedío a subir el código definitivo
            a un repositorio independiente en GitHub. Este repositorio funcionó como nuestro almacenamiento central y bitácora final del código fuente.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>Despliegue en Vercel</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
            Con el repositorio en GitHub actualizado y validado, se vinculó la rama principal a la plataforma Vercel. Esto permitió 
            desplegar la aplicación web a producción, generando el link público y funcional requerido para la entrega.
            </p>
          </div>


        </div>
      </section>

      
        <section className="section-content">
  <div className="reflection-box">
    <h2>⚛️ Justificación de Migración: De Estructura Estática a React</h2>
    
    <p>
      La transición desde la maquetación tradicional del TP1 evidenció serias limitaciones. Al estructurar 5 portafolios individuales, bloques de interfaz idénticos como la navegación (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>), los menús móviles y los pies de página (<code>&lt;footer&gt;</code>) debían <strong>duplicarse de manera exacta en 5 documentos independientes</strong>. Cualquier cambio menor obligaba a editar cada archivo por separado, complejizando el mantenimiento.
    </p>

    <p>
      Además, la interactividad original dependía de una <strong>manipulación imperativa y vulnerable del DOM</strong> mediante scripts de JavaScript aislados. Lógicas comunes como ocultar o mostrar información complementaria de forma manual generaban un código propenso a errores de referencia. 
    </p>

    <p>
      <strong>La solución con React y PortalBase:</strong> La migración transformó por completo nuestro flujo de trabajo mediante la abstracción estructural. Redujimos las páginas anteriores a una única plantilla reutilizable en <code>PortalBase.jsx</code>, donde los datos específicos de cada integrante se inyectan dinámicamente mediante <strong>Props</strong>, reduciendo a cero la redundancia de código.
    </p>

    <p>
      Toda la lógica pasó a ser declarativa gracias al uso del estado nativo (<code>useState</code>): <code>isMenuOpen</code> controla la apertura de la barra de navegación móvil mediante operadores ternarios, y <code>currentProject</code> gestiona de forma inteligente los índices del carrusel en memoria virtual. Reemplazamos también la iconografía pesada de fuentes externas por componentes optimizados de la librería <code>react-icons</code>.
    </p>

    <p>
      <strong>El impacto en la experiencia de usuario:</strong> Al integrar toda esta arquitectura bajo el ecosistema de <strong>React Router</strong>, consolidamos el Dashboard principal, el catálogo local JSON de películas y de libros y la API externa de música en una verdadera Single Page Application (SPA). El pasaje entre perfiles y secciones ocurre de forma virtual e instantánea, eliminando por completo las molestas demoras y recargas completas del navegador que penalizaban la experiencia en el enfoque estático.
    </p>
  </div>
</section>  
       
 </div>
 );
}
