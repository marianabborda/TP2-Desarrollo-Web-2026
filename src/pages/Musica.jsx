// src/pages/Musica.jsx
import { useState, useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import MusicaCard from "../components/cards/MusicaCard";
import "../styles/MediaPages.css";

export default function Musica() {
  // Estados para el consumo de la API
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados críticos para el control de la Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const cancionesPorPagina = 8; // Cantidad de tarjetas que se muestran por pantalla

  // Consumo asíncrono de la API al montar el componente
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        setLoading(true);
        setError(null);

        // Buscamos un término genérico potente (ej: "rock argentino") para traer variedad
        const respuesta = await fetch(
          "https://itunes.apple.com/search?term=rock+argentino&entity=song&limit=40"
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo conectar con el servidor de música.");
        }

        const data = await respuesta.json();
        
        // Mapeamos los campos de la API de iTunes a nombres limpios
        const cancionesProcesadas = (data.results || []).map((item) => ({
          id: item.trackId,
          trackName: item.trackName,
          artistName: item.artistName,
          collectionName: item.collectionName,
          // Cambiamos el tamaño de la portada por defecto (100x100) a 400x400 para que se vea nítida
          artworkUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "400x400bb") : null,
          previewUrl: item.previewUrl,
        }));

        setCanciones(cancionesProcesadas);
      } catch (err) {
        console.error(err);
        setError(err.message || "Ocurrió un error al cargar la música.");
      } finally {
        setLoading(false);
      }
    };

    consultarAPI();
  }, []);

  {/* 🧠 LÓGICA DE PAGINACIÓN */}
  const totalPaginas = Math.ceil(canciones.length / cancionesPorPagina);
  
  // Cálculo de índices matemáticos para segmentar el array original
  const indiceUltimoItem = paginaActual * cancionesPorPagina;
  const indicePrimerItem = indiceUltimoItem - cancionesPorPagina;
  
  // Array recortado que contiene solo las 8 canciones de la página activa
  const cancionesPaginaActual = canciones.slice(indicePrimerItem, indiceUltimoItem);

  // Funciones de navegación segura
  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual((prev) => prev + 1);
  };

  const irPaginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual((prev) => prev - 1);
  };

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="🎵 Biblioteca de Música"
        subtitle="Consumo en tiempo real de API externa con paginación integrada"
        accentColor="#9d4edd" // Tono violeta/morado en sintonía con tu diseño
      />

      <section className="media-listado">
        <h2 style={{ color: "#9d4edd" }}>Tracks Destacados</h2>

        {/* 1. MANEJO DE ESTADO: CARGANDO (LOADING) */}
        {loading && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#fff" }}>
            <div className="spinner" style={{ border: "4px solid rgba(255,255,255,0.1)", borderLeftColor: "#9d4edd", borderRadius: "50%", width: "40px", height: "40px", animation: "spin 1s linear infinite", margin: "0 auto 1rem auto" }}></div>
            <p style={{ fontStyle: "italic", color: "#ccc" }}>Sincronizando con iTunes API...</p>
            {/* Animación básica por línea inline si no tenés spinner en CSS */}
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* 2. MANEJO DE ESTADO: ERROR */}
        {error && (
          <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid #ef4444", borderRadius: "8px", margin: "2rem auto", maxWidth: "500px" }}>
            <p style={{ color: "#ef4444", fontWeight: "600", margin: 0 }}>⚠️ Error del Sistema: {error}</p>
            <button onClick={() => window.location.reload()} style={{ marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Reintentar Conexión</button>
          </div>
        )}

        {/* 3. RENDERIZADO CUANDO LOS DATOS YA ESTÁN LISTOS */}
        {!loading && !error && (
          <>
            {/* INDICADOR DE POSICIÓN ACTUAL */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <span className="api-indicator" style={{ borderColor: "#9d4edd", backgroundColor: "rgba(157, 78, 221, 0.15)", color: "#9d4edd" }}>
                Página {paginaActual} de {totalPaginas} (Mostrando {cancionesPaginaActual.length} temas)
              </span>
            </div>

            {/* GRILLA DE TARJETAS MULTIMEDIA */}
            <div className="grid-media" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2rem" }}>
              {cancionesPaginaActual.map((cancion) => (
                <MusicaCard
                  key={cancion.id}
                  trackName={cancion.trackName}
                  artistName={cancion.artistName}
                  collectionName={cancion.collectionName}
                  artworkUrl={cancion.artworkUrl}
                  previewUrl={cancion.previewUrl}
                />
              ))}
            </div>

            {/* CONTROLES DE NAVEGACIÓN DE PAGINACIÓN */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "3rem" }}>
              <button
                onClick={irPaginaAnterior}
                disabled={paginaActual === 1}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  border: "1px solid #9d4edd",
                  cursor: paginaActual === 1 ? "not-allowed" : "pointer",
                  backgroundColor: paginaActual === 1 ? "transparent" : "#9d4edd",
                  color: paginaActual === 1 ? "#555" : "#fff",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  opacity: paginaActual === 1 ? 0.4 : 1
                }}
              >
                ◀ Anterior
              </button>

              <span style={{ color: "#fff", fontWeight: "500", fontSize: "0.95rem" }}>
                {paginaActual} / {totalPaginas}
              </span>

              <button
                onClick={irPaginaSiguiente}
                disabled={paginaActual === totalPaginas}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  border: "1px solid #9d4edd",
                  cursor: paginaActual === totalPaginas ? "not-allowed" : "pointer",
                  backgroundColor: paginaActual === totalPaginas ? "transparent" : "#9d4edd",
                  color: paginaActual === totalPaginas ? "#555" : "#fff",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  opacity: paginaActual === totalPaginas ? 0.4 : 1
                }}
              >
                Siguiente ▶
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}