// src/components/cards/MusicaCard.jsx
import React from 'react';

export default function MusicaCard({ trackName, artistName, collectionName, artworkUrl, previewUrl }) {
  return (
    <div className="card-media fade-in">
      <img
        loading="lazy"
        src={artworkUrl || '/img/placeholder-music.webp'}
        alt={trackName}
        onError={(e) => (e.currentTarget.src = '/img/placeholder-music.webp')}
        style={{ width: '100%', height: '280px', objectFit: 'cover' }}
      />

      <div className="media-info" style={{ display: 'flex', flexDirection: 'column', height: '180px', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={trackName}>
            {trackName}
          </h3>
          <p style={{ color: 'var(--accent-color, #9d4edd)', fontWeight: '600', margin: '0 0 0.2rem 0' }}>
            {artistName}
          </p>
          {collectionName && (
            <p style={{ fontSize: '0.85rem', color: '#aaa', fontStyle: 'italic', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Álbum: {collectionName}
            </p>
          )}
        </div>

        {/* Reproductor de audio nativo para escuchar el preview de la canción */}
        {previewUrl && (
          <audio controls src={previewUrl} style={{ width: '100%', marginTop: '0.5rem', height: '30px' }}>
            Tu navegador no soporta audio.
          </audio>
        )}
      </div>
    </div>
  );
}