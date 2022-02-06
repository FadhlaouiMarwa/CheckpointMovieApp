import React from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { moviesData } from '../constant/data';

function Specs() {
    const navigate=useNavigate()
    const params=useParams()
    const film=moviesData.find(el=>el.description===params.description)

  return  <div >
    <div style={{ justifyContent:"center",display:"flex",padding:50}}>
      <Button style={{width:200,height:50, justifyContent:"center"}}  onClick={()=>navigate(-1)}>List of Movies</Button>
    </div>
  <div >
  <Container>
  <Row style={{display:"flex",justifyContent:"space-between"}}>
    <Col  style={{width:400,height:200}} sm={8}><h2>{film.title}:<div style={{fontFamily:"initial",fontSize:25}}>{film.description }</div></h2></Col>
    <iframe style={{width:500,height:300}} src={film.trailer}></iframe>
  </Row>
  </Container>
  </div>

  </div>
  
}

export default Specs;
