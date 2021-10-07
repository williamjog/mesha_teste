import React, { useContext, useEffect } from 'react';
import MusicasSalvasDaLista from './MusicasSalvasDaLista';
import Context from '../context/Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ListaDeMusicasLocalStorage = () => {
  const { listasSalvas, setListasSalvas, setPesquisando } = useContext(Context);

  let numeroDeListas = Number(JSON.parse(localStorage.getItem('NumeroDeListas')));

  const colocarPrimeiraLetraEmCaixaAlta = (string) => {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const removerLista = (numeroDaLista) => {
    const listasRestantes = [];
    localStorage.removeItem(`Lista${numeroDaLista}`);
    numeroDeListas--;
    for (let i = 1; i <= numeroDeListas + 1; i++) {
      if (i !== Number(numeroDaLista)) {
        listasRestantes.push(JSON.parse(localStorage.getItem(`Lista${i}`)));
        localStorage.removeItem(`Lista${i}`);
        localStorage.removeItem('NumeroDeListas');
      }
    }
    setListasSalvas(listasRestantes);
    for (let i = 1; i <= listasRestantes.length; i++) {
      localStorage.setItem(`Lista${i}`, JSON.stringify(listasRestantes[i-1]));
      localStorage.setItem('NumeroDeListas', i);
    }
    setPesquisando(true)
  }

  useEffect(() => {
    const temp = [];
      for (let i = 0; i < numeroDeListas; i++) {
        const lista = JSON.parse(localStorage.getItem(`Lista${i+1}`));
        temp.push({
          titulo: `Lista ${i+1}`,
          data: lista.data, 
          estilo: lista.estilo,
          musicas: lista.musicas,
          temperatura: lista.temperatura
        });
      }
      setListasSalvas(temp)
  }, [numeroDeListas, setListasSalvas]);

  return (
      <div>
        <div className="listasSalvasTitulo">Listas Salvas</div>
        <div className="cardWrapper">
          { listasSalvas && listasSalvas.map((lista, index) => (
            <div className="cardWrapper" key={index}> 
              <Card sx={{ minWidth: 600, minHeight: 600 }}>
                <CardContent>
                  <div>
                    <div className="infoTitleIndividual">                    
                      <Typography variant="h5" component="div">
                        {`Lista ${index + 1}`}
                      </Typography>
                   </div>
                   <div className="infoTitleIndividual">
                      <Typography variant="h5" component="div">
                        { `Estilo: ${colocarPrimeiraLetraEmCaixaAlta(lista.estilo)}` }
                      </Typography>
                    </div>
                    <div className="infoTitleIndividual">                    
                      <Typography variant="h5" component="div">
                        { `Data: ${lista.data}` }
                      </Typography> </div>
                   </div>
                   <div className="infoTitleIndividual">                    
                      <Typography variant="h5" component="div">
                        { `Temperatura: ${lista.temperatura} ºC` }
                      </Typography>
                   </div>
                  <div className="">
                    <Typography variant="h6" component="div">
                      <MusicasSalvasDaLista lista={lista} indice={index} />
                    </Typography>
                  </div>
                </CardContent>
                <div className="deleteButton"> 
                  <CardActions>
                    <Button 
                    size="large"
                    color="primary"
                    style={{backgroundColor: '#9370DB', color: '#FFFFFF'}}
                    onClick={ () => removerLista(`${index+1}`)}
                    >
                      Deletar
                  </Button>
                  </CardActions>
                </div>
             </Card>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ListaDeMusicasLocalStorage
