import React from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { moviesData } from '../constant/data';

function Specs() {
    const navigate=useNavigate()
    const params=useParams()
    const film=moviesData.find(el=>el.title===params.title)

  return  <div>
  <Container>
  <Row>
    <Col sm={8}><h2>Description's movie:{film.description}</h2></Col>
    <Col sm={4} ><h2>Trailer's movie:{film.trailer}</h2></Col>
  </Row>
  </Container>
  <Button onClick={()=>navigate(-1)}>My List</Button>

  </div>
  
}

export default Specs;
