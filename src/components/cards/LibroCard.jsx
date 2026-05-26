// src/components/cards/LibroCard.jsx
export default function LibroCard({ titulo, autor, portada, onPortadaClick }) {
  return (
    <div className="card-media fade-in" style={{ cursor: 'pointer' }} onClick={onPortadaClick}>
      <div style={{ 
        width: '100%', 
        height: '300px', // Reducimos de 350px a 300px para achicarla un poco
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro por si el libro es angosto
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '8px 8px 0 0'
      }}>
        <img
          loading="lazy"
          src={portada || '/img/placeholder-book.webp'}
          alt={titulo}
          onError={(e) => (e.currentTarget.src = '/img/placeholder-book.webp')}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain' // 🌟 CLAVE: Muestra el libro completo sin cortar nada
          }}
        />
      </div>
      <div className="media-info" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.05rem', margin: '0 0 0.3rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{titulo}</h3>
        <p style={{ fontStyle: 'italic', color: 'var(--accent-color, #00d4ff)', margin: 0, fontSize: '0.9rem' }}>{autor}</p>
      </div>
    </div>
  );
}