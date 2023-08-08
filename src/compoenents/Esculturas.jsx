import { useState } from 'react';
import { sculptureList } from './data.js';
import { Button, Container, Row, Col, Card} from 'react-bootstrap';
import './Esculturas.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function siguiente() {
    setIndex((index + 1) % sculptureList.length);
  }

  function anterior() {
    // Asegurémonos de que el índice nunca sea negativo,
    // para que al hacer clic en "Anterior" regrese a la última escultura.
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <Container>
    <Row align-items-center text-center>
      <Col>
        <button className="button1" onClick={anterior}> Anterior </button>
      </Col>
      <Col>
        <button className="button2" onClick={siguiente}> Siguiente </button>
      </Col>
    </Row>
   
  <Row> 
    <Col align-items-center>
      <h2 className="text-ligth">
        <i >{sculpture.name}</i> por {sculpture.artist}
      </h2>
    </Col>
  </Row>
   
      <h3 className="text-ligth">  
        ({index + 1} de {sculptureList.length})
      </h3>


<Card.Img variant="top" src={sculpture.url} alt={sculpture.alt} className="img"/>
        

  <Row className="text-ligth">
    <p>
      {sculpture.description}
    </p>
  </Row>
  

    </Container>
  );
}
