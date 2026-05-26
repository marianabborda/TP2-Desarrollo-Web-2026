// ===== DIAGRAMAS =====
// Diagramas.jsx - Con HeroSection
import HeroSection from "../components/ui/HeroSection";
import './Diagramas.css';

export default function Diagramas() {
  return (
    <div className="diagramas">
      <HeroSection
  title="📊 Diagramas del Proyecto"
  subtitle="Visualización de la arquitectura y organización del TP2 React SPA"
  accentColor="#9d4edd"
/>

      <section className="diagramas-visuales">
        <h2>📊 Diagramas Visuales</h2>

        <div className="diagrama-card">
          <h3>🌳 Árbol de Renderizado (Jerarquía de Componentes)</h3>
          <img 
            src="/img/Arbol_Renderizado.webp" 
            alt="Árbol de componentes React" 
            className="diagrama-img"
          />
          <p>
            El siguiente diagrama representa la jerarquía de componentes renderizados de la aplicación desarrollada en <code>React</code>.
            Desde el componente raíz <code>App.jsx</code>, se renderiza el<code>BrowserRouter</code>, encargado de la navegación interna de la SPA.
          </p>

          <p>
           Luego <code>Routes</code> define las distintas páginas de la aplicación:
            (<code>Inicio</code>, <code>Bitácora</code>, <code>Integrantes</code>, 
            <code>Diagramas</code>, <code>Películas</code>, <code>Música</code>, <code>Libros</code> y <code>Portales</code>), 
            que renderizan con componentes específicos: 
            <code>HeroSection</code>, <code>CardGrid</code>, <code>PeliculaCard</code>,  <code>MusicaCard</code>, 
             <code>LibroCard</code> y <code>TimelineItem</code>.
          </p>

          <p>
            Además, el proyecto tiene un <code>Sidebar</code> que funciona como barra lateral fija de navegación.
          </p>

           <p>
            En la parte inferior están los portales de integrantes  (<code>Gimena</code>, <code>Rodirgo</code>, <code>Alejandra</code>, 
            <code>Tomás</code> y <code>Mariana</code>) que comparten un componente base llamado <code>PortalBase</code>
          </p>   
          <p>
            Este árbol ilustra cómo <code>React</code> compone la interfaz de usuario como una estructura jerárquica de componentes,
            optimizando la modularidad, la reutilización y el mantenimiento del proyecto.
          </p>
        </div>

        <div className="diagrama-card">
          <h3>📁 Estructura de Carpetas</h3>
          <img 
            src="/img/estructura_carpetas.webp" 
            alt="Estructura de carpetas del proyecto" 
            className="diagrama-img"
          />
         
        </div>
      </section>
    </div>
  );
}
