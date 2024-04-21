import React from 'react';
import './style.css';
import lixeira01 from  '../../assets/Lixeira EcoPoint 01.png';
import lixeira02 from  '../../assets/Lixeira EcoPoint 02.png';
import lixeira03 from  '../../assets/Lixeira EcoPoint 03.png';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navigation/>
      <main>
        <section className="sobreoprojeto">
          <h1>EcoPoint</h1>
          <p>Separação de lixo mais simplificada e rápida,<br/>
            uma prática diária na palma de suas mãos.</p>
        </section>
        <div className="caixa">
          <div className="texto-caixa">
              <h2>Sobre o EcoPoint - Objetivo e expectativas futuras</h2>
              <p>Este é um projeto de sustentabilidade seguindo a ideia de que as pessoas tenham um descarte mais consciente. Por ser considerado irrelevante, apesar de sua tremenda importância, pela maioria das pessoas em que há uma desatenção e/ou preguiça na separação do lixo tornando-se um problema mundial, a nossa EcoPoint é uma lixeira que resolve tanto essa desatenção e/ou preguiça quanto a separação do lixo.
              <br/>Esperamos com este projeto tornar a separação de lixo uma prática diária, de forma mais simples e rápida.</p>
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
        </div>
        <div className="container">
          <h2>EcoPoint - Desde à inspiração até a sua criação</h2>
          <div className="card">
            <div className="img" style={{backgroundImage: 'url(/src/assets/cd4.png)', backgroundPosition: "center", backgroundSize: "cover"}}/>
            <div className="content">
              <span className="title">Inspiração</span>
              <p className="desc">Se formos falar de inspiração, não houve uma, mas entendendo os problemas mundiais chegamos ao pensamento: “Como seria se houvesse uma lixeira que ajudasse no descarte mais consciente?” e por isso tivemos a ideia da EcoPoint.</p>
            </div>
            <div className="arrow">
              <span>Inspiração</span>
            </div>
          </div>
          <div className="card">
            <div className="img" style={{backgroundImage: 'url(/src/assets/cd2.png)', backgroundPosition: "center", backgroundSize: "cover"}}/>
            <div className="content">
              <span className="title">Protótipo</span>
              <p className="desc">Decidimos fazer o protótipo da lixeira no formato quadrado um ao lado do outro, pois tem um maior aproveitamento de espaço e maior facilidade na hora de realizar a troca do cesto de lixo já cheio por outro vazio.</p>
            </div>
            <div className="arrow">
              <span>Protótipo</span>
            </div>
          </div>
          <div className="card">
            <div className="img" style={{backgroundImage: 'url(/src/assets/cd1.png)', backgroundPosition: "center", backgroundSize: "cover"}}/>
            <div className="content">
              <span className="title">Desenvolvimento Web</span>
              <p className="desc">Utilizamos no desenvolvimento do nosso projeto HTML, CSS, JavaScript, Node.JS e a Biblioteca Express. Nossa equipe foi dividida em sub-equipes. Cada sub-equipe fez determinadas telas contando com as opiniões de todos os integrantes.</p>
            </div>
            <div className="arrow">
              <span>Desenvolvimento Web</span>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
export default Home;
