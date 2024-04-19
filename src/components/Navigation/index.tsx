import React from 'react';
import './style.css';
import logoEcoPoint from '../../assets/Logo EcoPoints.png';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <header>
      <nav className="navegacao">
        <NavLink to='/'><img src={logoEcoPoint} alt="Ecopoint" className="logo"/></NavLink>
        <div>
          <NavLink to='/'>Página Inicial</NavLink>
          <NavLink to='/mapa'>Mapa dos pontos</NavLink>
        </div>
        <div>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/registrar'>Cadastro</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
