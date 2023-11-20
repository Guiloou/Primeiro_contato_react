import {} from 'react'
import { EstiloConteudo } from '../css/Conteudo';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import imagem1 from '../assets/1.jpg';
import imagem2 from '../assets/2.jpg';
import imagem3 from '../assets/3.jpg';

function Conteudo(){
  return(
    <EstiloConteudo>
    <section className="conteudo">
    <h1>Conteudo</h1>
    <Carousel>
      <Carousel.Item>
        <img src={imagem1} className="img"/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={imagem2} className="img"/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={imagem3} className="img"/>
      </Carousel.Item>

    </Carousel>
    </section>
    </EstiloConteudo>
  )
}
export default Conteudo;