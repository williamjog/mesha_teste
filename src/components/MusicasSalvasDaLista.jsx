import React from 'react'

const   MusicasSalvasDaLista = ({ lista }) => {
  
  return (
    <div>
      <div className="tituloCard">
        Músicas:
      </div>
      { lista.musicas && lista.musicas.map((musica, index) => (
        <div key={index}> 
          <div className="musicWrapper"> 
            <span className="infoMusica">
              {`${musica.titulo} | Artista: ${musica.artista}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MusicasSalvasDaLista
