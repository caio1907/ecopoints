import React from 'react';
import './style.css';
import lixeira01 from  '../../assets/Lixeira EcoPoint 01.png';
import lixeira02 from  '../../assets/Lixeira EcoPoint 02.png';
import lixeira03 from  '../../assets/Lixeira EcoPoint 03.png';
import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';

const Home: React.FC = () => {
  return (
    <>
      <main>
        <section className="sobreoprojeto">
          <h1>EcoPoints</h1>
          <p>Separação de lixo mais simplificada e rápida,<br/>
            uma prática diária na palma de suas mãos.</p>
        </section>
        <div className="caixa">
          <div className="texto-caixa">
              <h2>Sobre o EcoPoints - Objetivo e expectativas futuras</h2>
              <p>Este é um projeto de sustentabilidade seguindo a ideia de que as pessoas tenham um descarte mais consciente. Por ser considerado irrelevante, apesar de sua tremenda importância, pela maioria das pessoas em que há uma desatenção e/ou preguiça na separação do lixo tornando-se um problema mundial, a nossa EcoPoints é uma lixeira que resolve tanto essa desatenção e/ou preguiça quanto a separação do lixo.<br/><br/>
                 Esperamos com este projeto tornar a separação de lixo uma prática diária, de forma mais simples e rápida.</p>
          </div>
        </div>
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />

            <div className="slide estado-inicial">
              <img src={lixeira01} alt="lixeira01" />
            </div>
            <div className="slide">
              <img src={lixeira02} alt="lixeira02" />
            </div>
            <div className="slide">
              <img src={lixeira03} alt="lixeira03" />
            </div>
          </div>

          <div className="navigation">
            <label className="manual-btn" htmlFor="radio1"></label>
            <label className="manual-btn" htmlFor="radio2"></label>
            <label className="manual-btn" htmlFor="radio3"></label>
          </div>
        </div>
        <Typography component='h4' variant='h4' textAlign='center' mb={3}>EcoPoints - Desde à inspiração até a sua criação</Typography>
        <Box display='flex' justifyContent='center' gap={3} mb={3}>
          <Card sx={{maxWidth: 300, backgroundColor: "#759073"}}>
          <CardMedia
            sx={{height: '200px'}}
            image="/src/assets/cd4.png"
            title="Inspiração"
          />
          <CardContent sx={{backgroundColor: "#759073", color: '#EAF6EA'}}>
            <Typography gutterBottom variant="h5" component="div">
              Inspiração
            </Typography>
            <Typography variant="body2" color="#EAF6EA" textAlign='justify'>
              Se formos falar de inspiração, não houve uma, mas entendendo os problemas mundiais chegamos ao pensamento: “Como seria se houvesse uma lixeira que ajudasse no descarte mais consciente?” e por isso tivemos a ideia da EcoPoints.
            </Typography>
          </CardContent>
          </Card>
          <Card sx={{maxWidth: 300, backgroundColor: "#759073"}}>
            <CardMedia
              sx={{height: '200px'}}
              image="/src/assets/cd2.png"
              title="Protótipo"
            />
            <CardContent sx={{backgroundColor: "#759073", color: '#EAF6EA'}}>
              <Typography gutterBottom variant="h5" component="div">
                Protótipo
              </Typography>
              <Typography variant="body2" color="#EAF6EA" textAlign='justify'>
                Decidimos fazer o protótipo da lixeira no formato quadrado um ao lado do outro, pois tem um maior aproveitamento de espaço e maior facilidade na hora de realizar a troca do cesto de lixo já cheio por outro vazio.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{maxWidth: 300, backgroundColor: "#759073"}}>
            <CardMedia
              sx={{height: '200px'}}
              image="/src/assets/cd1.png"
              title="Desenvolvimento Web"
            />
            <CardContent sx={{backgroundColor: "#759073", color: '#EAF6EA'}}>
              <Typography gutterBottom variant="h5" component="div">
                Desenvolvimento Web
              </Typography>
              <Typography variant="body2" color="#EAF6EA" textAlign='justify'>
                Utilizamos no desenvolvimento do nosso projeto HTML, CSS, JavaScript, Node.JS e a Biblioteca Express. Nossa equipe foi dividida em sub-equipes. Cada sub-equipe fez determinadas telas contando com as opiniões de todos os integrantes.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </main>
    </>
  )
}
export default Home;
