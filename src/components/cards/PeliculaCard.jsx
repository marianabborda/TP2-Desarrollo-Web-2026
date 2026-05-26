// src/components/cards/PeliculaCard.jsx

export default function PeliculaCard({
  poster,
  titulo,
  year,
  genero,
  director,
  duracion,
  rating,
  url
}) {
  return (
    <div className="card-media fade-in">
      {/* Contenedor seguro para fijar la altura de la imagen sin recortarla */}
      <div style={{ 
        width: '100%', 
        height: '340px', // Altura fija uniforme para todas las tarjetas de la grilla
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro para rellenar los bordes en posters angostos
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '12px 12px 0 0'
      }}>
        <img
          loading="lazy"
          src={poster || '/img/placeholder-movie.webp'}
          alt={titulo}
          onError={(e) => (e.currentTarget.src = '/img/placeholder-movie.webp')}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain', // 🌟 CLAVE: Muestra el póster completo sin cortar nada
            transition: 'transform 0.3s ease'
          }}
        />
      </div>

      <div className="media-info" style={{ padding: '1.5rem', textAlign: 'left' }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          color: '#fff', 
          marginBottom: '0.5rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis' // Agrega puntos suspensivos si el título es larguísimo
        }} title={titulo}>
          {titulo}
        </h3>

        {year && <p style={{ margin: '0.3rem 0', fontSize: '0.9rem', color: '#ccc' }}><strong>Año:</strong> {year}</p>}
        {genero && <p style={{ margin: '0.3rem 0', fontSize: '0.9rem', color: '#ccc' }}><strong>Género:</strong> {genero}</p>}
        {director && <p style={{ margin: '0.3rem 0', fontSize: '0.9rem', color: '#ccc' }}><strong>Director:</strong> {director}</p>}
        {duracion && <p style={{ margin: '0.3rem 0', fontSize: '0.9rem', color: '#ccc' }}><strong>Duración:</strong> {duracion}</p>}
        {rating && <p style={{ margin: '0.3rem 0', fontSize: '0.9rem', color: '#ccc' }}><strong>Rating IMDb:</strong> {rating}</p>}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-imdb"
            style={{ display: 'inline-block', marginTop: '1rem' }}
          >
            Ver en IMDb
          </a>
        )}
      </div>
    </div>
  );
}