import React from 'react';
import './style.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="icons-sociais">
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="footer-navegacao">
          <ul>
            <li><a href="index.html">Página Inicial</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Cadastro</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <strong>© EcoPoints - 2024</strong>
      </div>
    </footer>
  )
}
export default Footer;
