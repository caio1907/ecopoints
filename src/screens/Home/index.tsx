import React from 'react';
import './style.css';
import logoEcoPoint from '../../assets/Logo EcoPoints.png';
import lixeira00 from  '../../assets/Lixeira EcoPoint 00.png';
import lixeira01 from  '../../assets/Lixeira EcoPoint 01.png';
import lixeira02 from  '../../assets/Lixeira EcoPoint 02.png';
import lixeira03 from  '../../assets/Lixeira EcoPoint 03.png';
import cd4 from '../../assets/cd4.png';
import cd1 from '../../assets/cd1.png';
import cd2 from '../../assets/cd2.png';

const Home: React.FC = () => {
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
        <section className="sobreoprojeto">
          <h1>EcoPoints:<br/>
            <p style={{marginLeft: "0.3%"}}>Uma lixeira onde é possível descartar materiais em seus devidos lugares através de um programa!</p>
          </h1>
        </section>
        <div className="caixa4">
          <img src={lixeira00} alt=""/>
          <div style={{marginLeft: "2%"}}>
            <h2>Sobre o EcoPoints</h2>
            <p>Esse é um projeto de sustentabilidade...</p>
          </div>
        </div>
        <div className="container">
          <h2>EcoPoints: Desde à inspiração até sua criação</h2>
          <div className="card">
            <div className="img" style={{backgroundImage: cd4, backgroundPosition: "center", backgroundSize: "cover"}}/>
            <div className="content">
              <span className="title">Inspiração</span>
              <p className="desc">O desenvolvimento web compreende a criação de sistemas que são disponibilizados através da internet, como os sites, plataformas, redes sociais e e-commerces. Desse modo, o código é hospedado em um servidor e requisitado pelo navegador quando uma pessoa usuária realiza o acesso.</p>
            </div>
            <div className="arrow">
              <span>Inspiração</span>
            </div>
          </div>
          <div className="card">
            <div className="img" style={{backgroundImage: cd2, backgroundPosition: "center", backgroundSize: "cover"}}/>
            <div className="content">
              <span className="title">Protótipo</span>
              <p className="desc">Decidimos fazer o protótipo da lixeira no formato quadrado um ao lado do outro, pois tem um maior aproveitamento de espaço e maior facilidade na hora de realizar a troca do cesto de lixo já cheio por outro vazio.</p>
            </div>
            <div className="arrow">
              <span>Protótipo</span>
            </div>
          </div>
          <div className="card">
            <div className="img" style={{backgroundImage: cd1, backgroundPosition: "center", backgroundSize: "cover"}}/>
            <div className="content">
              <span className="title">Desenvolvimento Web</span>
              <p className="desc">Utilizamos no desenvolvimento do nosso projeto HTML, CSS, Node.JS, JavaScript…</p>
            </div>
            <div className="arrow">
              <span>Desenvolvimento Web</span>
            </div>
          </div>
        </div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={lixeira01} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src={lixeira02} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src={lixeira03} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  )
}
export default Home;
