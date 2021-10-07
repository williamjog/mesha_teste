import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const BotaoPesquisar = () => {
  const { cidade, temperatura, latitude, longitude, 
    setTemperatura, setCidadePesquisada, setEstilo, cidadePesquisada } = useContext(Context);

  useEffect(() => {
    const definirEstiloMusical = () => {
      if (temperatura) {
        if (temperatura > 32) {
          setEstilo('rock');
        } else if (temperatura < 32 && temperatura > 24) {
          setEstilo('pop');
        } else if (temperatura < 24 && temperatura > 16) {
          setEstilo('classica')
        } else {
          setEstilo('lofi');
        }
      }
    };
    definirEstiloMusical();
  }, [cidadePesquisada, setEstilo, temperatura]);

  const buscarPorCidade = async (cidade) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    const data = await axios.get(url).then(response => response.data);
    setTemperatura(data.main.temp);
    setCidadePesquisada(data.name);
  }

  const buscarPorLatitudeELongitude = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    const data = await axios.get(url).then(response => response.data);
    setTemperatura(data.main.temp);
    setCidadePesquisada(data.name);
  }

  const verificarInformacao = (cidade, latitude, longitude) => {
    if (latitude && longitude && !cidade) {
      buscarPorLatitudeELongitude(latitude, longitude);
    } else if (cidade) {
      buscarPorCidade(cidade);
    }
  };

  return (
    <div className="button">
      <Button 
        color="primary"
        size="large"
        style={{backgroundColor: '#9370DB', color: '#FFFFFF'}}
        onClick={() => verificarInformacao(cidade, latitude, longitude)}
      >
        Pesquisar
      </Button>
    </div>
  )
}

export default BotaoPesquisar
