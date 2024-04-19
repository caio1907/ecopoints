import React from 'react';
import './style.css';
import mapa from '../../assets/Capturamapa.png';
import * as Icon from '@mui/icons-material'
import { IconButton } from '@mui/material';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Map: React.FC = () => {
  return (
    <>
      <Navigation/>
      <main>
        <h2>Saiba onde encontrar nossas lixeiras</h2>
        <div>
          <select name="estado" id="">
            <option value="PE">Pernambuco</option>
          </select>
          <select name="cidade" id="">
            <option value="Rec">Recife</option>
            <option value="Ol">Olinda</option>
          </select>
          <IconButton><Icon.Search/></IconButton>
        </div>
        <a href="#"><img src={mapa} alt="mapa" className="mapa"/></a>
      </main>
      <Footer/>
    </>
  )
}
export default Map;
