import { useState, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import LibroCard from '../components/cards/LibroCard';
import data from '../data/libros.json';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import '../styles/MediaPages.css';

export default function LibrosGaleria() {
  const libros = data.libros || [];
  
  // Estados para el control del Lightbox
  const [indexSelect, setIndexSelect] = useState(null); // Índice del libro abierto (null = cerrado)
  const [zoom, setZoom] = useState(false);              // Estado de zoom (true/false)

  // 1. FUNCIONALIDAD CRÍTICA: Escuchar la tecla ESC para cerrar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        cerrarLightbox();
      } else if (e.key === 'ArrowRight' && indexSelect !== null) {
        siguienteLibro();
      } else if (e.key === 'ArrowLeft' && indexSelect !== null) {
        anteriorLibro();
      }
    };

    // Añadimos el listener global al DOM al abrir el Lightbox
    window.addEventListener('keydown', handleKeyDown);
    
    // Limpieza del listener al desmontar o cerrar para evitar fugas de memoria
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [indexSelect]);

  // Manejadores de acciones del Lightbox
  const abrirLightbox = (index) => {
    setIndexSelect(index);
    setZoom(false); // Resetea el zoom al cambiar de libro
    document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
  };

  const cerrarLightbox = () => {
    setIndexSelect(null);
    setZoom(false);
    document.body.style.overflow = 'auto'; // Libera el scroll
  };

  // 2. FUNCIONALIDAD CRÍTICA: Navegación Interna del Lightbox
  const siguienteLibro = () => {
    setZoom(false);
    setIndexSelect((prev) => (prev === libros.length - 1 ? 0 : prev + 1));
  };

  const anteriorLibro = () => {
    setZoom(false);
    setIndexSelect((prev) => (prev === 0 ? libros.length - 1 : prev - 1));
  };

  const libroActivo = indexSelect !== null ? libros[indexSelect] : null;

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="📚 Galería de Libros"
        subtitle="Visualizador interactivo tipo Grid con Lightbox nativo"
        accentColor="#a855f7" // Mantenemos el acento violeta
      />

      {/* RENDERIZADO TIPO GRID */}
      <section className="media-listado">
        <h2>Colección Literaria</h2>
        <p className="api-indicator" style={{ marginBottom: '2rem' }}>
          Hacé clic en cualquier portada para abrir el visualizador interactivo
        </p>

        {/* Reutilizamos las clases CSS de MediaPages para la consistencia visual */}
        <div className="grid-media" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
          {libros.map((libro, index) => (
            <LibroCard
              key={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              portada={libro.portada}
              onPortadaClick={() => abrirLightbox(index)}
            />
          ))}
        </div>
      </section>

      {/* 3. COMPONENTE INTEGRADO: LIGHTBOX INTERACTIVO */}
      {indexSelect !== null && libroActivo && (
        <div 
          className="lightbox-overlay"
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)', display: 'flex', justifyContent: 'center',
            alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(5px)'
          }}
          onClick={cerrarLightbox} // Si hace clic en el fondo negro, se cierra
        >
          {/* Contenedor del Modal (Frena el cierre al hacer clic dentro) */}
          <div 
            className="lightbox-content"
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* BOTÓN CIERRE */}
            <button onClick={cerrarLightbox} style={btnStyle({ top: '10px', right: '10px' })} title="Cerrar (ESC)">
              <FaTimes />
            </button>

            {/* BOTÓN ZOOM */}
            <button onClick={() => setZoom(!zoom)} style={btnStyle({ top: '10px', left: '10px' })} title="Alternar Zoom">
              {zoom ? <FaSearchMinus /> : <FaSearchPlus />}
            </button>

            {/* CONTROLES DE NAVEGACIÓN INTERNA */}
            <button onClick={anteriorLibro} style={btnStyle({ left: '-60px', top: '50%', transform: 'translateY(-50%)' })} title="Anterior">
              <FaChevronLeft />
            </button>

            {/* PORTADA CON INTEGRACIÓN DE ZOOM */}
            <img
              src={libroActivo.portada}
              alt={libroActivo.titulo}
              style={{
                maxHeight: zoom ? '85vh' : '60vh',
                maxWidth: zoom ? '95vw' : '80vw',
                objectFit: 'contain',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                cursor: zoom ? 'zoom-out' : 'zoom-in',
                transform: zoom ? 'scale(1.15)' : 'scale(1)',
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
              }}
              onClick={() => setZoom(!zoom)}
            />

            {/* INFORMACIÓN COMPLEMENTARIA DEL LIBRO */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#fff', maxWidth: '500px', padding: '0 1rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{libroActivo.titulo}</h3>
              <h4 style={{ color: '#a855f7', marginBottom: '0.5rem', fontWeight: '500' }}>Por {libroActivo.autor}</h4>
              <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{libroActivo.sinopsis}</p>
            </div>

            <button onClick={siguienteLibro} style={btnStyle({ right: '-60px', top: '50%', transform: 'translateY(-50%)' })} title="Siguiente">
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper para estilizar los botones del Lightbox de forma unificada
function btnStyle(customStyles) {
  return {
    position: 'absolute',
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    border: '1px solid #a855f7',
    color: '#fff',
    padding: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    zIndex: 2010,
    transition: 'all 0.3s ease',
    outline: 'none',
    ...customStyles
  };
}