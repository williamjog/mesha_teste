import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from '@material-ui/core/Button';

const BotaoSalvarListadeMusicas = () => {
  const { musicas, temperatura, estilo, cidade, pesquisando, setPesquisando } = useContext(Context);

  const dataAtualFormatada = () => {
    const data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
  };

  const montarListaDeMusicas = () => {
    const listaMusica = [];
    musicas.forEach((musica, index) => {
      if (index < 5) {
        const music = {
          titulo: musica.title,
          artista: musica.artist.name,
          duracao: musica.duracao
        };
        listaMusica.push(music);
      } 
    });
    return listaMusica;
  };

  const estruturaDaListaSalva = () => {
    return  {
      data: dataAtualFormatada(),
      musicas: montarListaDeMusicas(),
      temperatura,
      cidade,
      estilo
    };
  }

  const salvarListaLocalStorage = () => {
    const numeroDeListas = Number(JSON.parse(localStorage.getItem('NumeroDeListas')));
    if (numeroDeListas < 1) {
      localStorage.setItem('Lista' + 1, JSON.stringify(estruturaDaListaSalva()));
      localStorage.setItem('NumeroDeListas', 1);
      setPesquisando(true)
    } else {
      const novoNumeroDeLista = Number(numeroDeListas) + 1;
      localStorage.setItem('Lista' + novoNumeroDeLista, JSON.stringify(estruturaDaListaSalva()))
      localStorage.setItem('NumeroDeListas', novoNumeroDeLista);
      setPesquisando(true)
    }
  };

  return (
    !pesquisando ? (
    <div className="button">
      <Button 
        color="primary"
        size="large"
        style={{backgroundColor: '#9370DB', color: '#FFFFFF'}}
        onClick={salvarListaLocalStorage}
      >
        Salvar
      </Button>
    </div>
  ) : <span></span>);
}

export default BotaoSalvarListadeMusicas
