import React from 'react';
import CidadeInput from './components/CidadeInput';
import LatitudeELongitudeInput from './components/LatitudeELongitudeInput';
import BotaoPesquisar from './components/BotaoPesquisar';
import TabelaCidadePesquisada from './components/TabelaCidadePesquisada';
import ListaDeMusicasSugeridas from './components/ListaDeMusicasSugeridas';
import BotaoSalvarListadeMusicas from './components/BotaoSalvarListadeMusicas';
import ListaDeMusicasLocalStorage from './components/ListaDeMusicasLocalStorage';
import Logo from './images/mesha_logo.png'
import './style/main.css';

const App = () => {
  return (
    <div className="main">
      <div className="logo">
        <img src={Logo} alt="Mesha Logo" width="150" height="150"/>
      </div>
      <header>
        <h1>Bem vindo ao MeshaPlayList Suggestion!</h1>
      </header>
      <CidadeInput />
      <LatitudeELongitudeInput />
      <BotaoPesquisar />
      <TabelaCidadePesquisada />
      <ListaDeMusicasSugeridas />
      <BotaoSalvarListadeMusicas />
      <ListaDeMusicasLocalStorage />
    </div>
  )
}

export default App

