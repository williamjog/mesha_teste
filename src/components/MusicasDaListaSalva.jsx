import React from 'react'

const MusicasDaListaSalva = ({ musicas }) => {
  
  return (
    <div>
      <div className="tituloCard">
        Músicas:
      </div>
      { musicas.musicas && musicas.musicas.map((musica, index) => (
        <div key={index}> 
          <div> 
            <span className="infoMusica">
              {`${musica.titulo} | Artista: ${musica.artista}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MusicasDaListaSalva
