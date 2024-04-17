import React from 'react';
import './style.css';
import logoEcoPoint from '../../assets/Logo EcoPoints.png';

const Map: React.FC = () => {
  return (
    <>
      <header>
        <nav className="navegacao">
          <a href="#"><img src={logoEcoPoint} alt="Ecopoint" className="logo"/></a>
          <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Cadastro</a></li>
              <li><a href="#">Mapa da Localização</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Pontuação</h1>
        <p>Confira aqui a sua Pontuação e onde encontrar as nossas EcoPoints</p>
      </main>
    </>
  )
}
export default Map;
