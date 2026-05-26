// src/pages/Peliculas.jsx
import { useState, useEffect, useRef } from "react"; 
import HeroSection from "../components/ui/HeroSection";
import PeliculaCard from "../components/cards/PeliculaCard";
import data from "../data/peliculas.json";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function Peliculas() {
  const [busqueda, setBusqueda] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("Todos");

  // 1. CREAMOS UN REF PARA CONTROLAR EL CONTENEDOR DE LA GRILLA DOM
  const gridRef = useRef(null);

  const peliculasBase = (data.peliculas || []).map((p) => ({
    ...p,
    year: p.year ?? p.año, 
  }));

  const generosDisponibles = [
    "Todos",
    ...new Set(peliculasBase.map((peli) => peli.genero).filter(Boolean))
  ];

  const peliculasFiltradas = peliculasBase.filter((peli) => {
    const termino = busqueda.toLowerCase();
    
    const coincideTexto = (
      peli.titulo?.toLowerCase().includes(termino) ||
      peli.director?.toLowerCase().includes(termino)
    );

    const coincideGenero = generoSeleccionado === "Todos" || peli.genero === generoSeleccionado;

    return coincideTexto && coincideGenero;
  });

  // 2. DETECTAMOS EL CAMBIO EN LA BÚSQUEDA Y FORZAMOS AL NAVEGADOR A ACOMODAR LAS IMÁGENES
  useEffect(() => {
    if (gridRef.current) {
      // Creamos un observador que detecta cuando la grilla cambia de tamaño o contenido
      const resizeObserver = new ResizeObserver(() => {
        const grid = gridRef.current;
        grid.style.display = 'none'; // Truco técnico: la ocultamos un milisegundo
        void grid.offsetHeight;      // Forzamos el reflow (recalculo de geometría)
        grid.style.display = 'grid'; // La volvemos a mostrar ya renderizada impecable
      });

      resizeObserver.observe(gridRef.current);

      return () => resizeObserver.disconnect(); // Limpieza del componente
    }
  }, [busqueda, generoSeleccionado]); // Se ejecuta al tipear o cambiar de género

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="🎬 Catálogo de Películas"
        subtitle="Filtrado dinámico en tiempo real"
        accentColor="#00d4ff"
      />

      <section className="media-listado card" style={{ textAlign: 'center' }}>
        <h2>Explorador de Catálogo</h2>
        
        {/* BUSCADOR POR TEXTO */}
        <div style={{ margin: '1.5rem auto 1rem auto', width: '100%', maxWidth: '500px', padding: '0 1rem' }}>
          <input
            type="text"
            placeholder="🔍 Buscar por título o director..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              padding: '0.8rem 1.2rem',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #00d4ff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>

        {/* 🏷️ BOTONERA DE GÉNEROS DINÁMICOS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', margin: '1rem auto 2rem auto', maxWidth: '800px', padding: '0 1rem' }}>
          {generosDisponibles.map((gen) => (
            <button
              key={gen}
              onClick={() => setGeneroSeleccionado(gen)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid #00d4ff',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                backgroundColor: generoSeleccionado === gen ? '#00d4ff' : 'transparent',
                color: generoSeleccionado === gen ? '#000' : '#00d4ff',
              }}
            >
              {gen}
            </button>
          ))}
        </div>

        <p className="api-indicator">
          {peliculasFiltradas.length === 0 
            ? "No se encontraron películas para esta combinación" 
            : `Mostrando ${peliculasFiltradas.length} de ${peliculasBase.length} películas`
          }
        </p>

        {/* 3. ASIGNAMOS EL REF AL CONTENEDOR DE LA GRILLA */}
        <div className="grid-media" ref={gridRef}>
          {peliculasFiltradas.map((peli) => (
            <PeliculaCard
              key={peli.id || peli.titulo}
              poster={peli.poster}
              titulo={peli.titulo}
              year={peli.year}
              genero={peli.genero}
              director={peli.director}
              duracion={peli.duracion}
              rating={peli.rating}
              url={peli.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}