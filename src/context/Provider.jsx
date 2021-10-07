import React, { useState } from 'react';
import Context from './Context';


const Provider = ({ children }) => {
  const [cidade, setCidade] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperatura, setTemperatura] = useState('');
  const [estilo, setEstilo] = useState('');
  const [cidadePesquisada, setCidadePesquisada] = useState('');

  const contextValues = {
    cidade,
    setCidade,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    temperatura,
    setTemperatura,
    estilo,
    setEstilo,
    cidadePesquisada,
    setCidadePesquisada
  };

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider >
  )
}

export default Provider;