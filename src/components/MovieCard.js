import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function MovieCard({movie}) {
  const navigate=useNavigate()
  return (
  <div>
<Card style={{ width: '18rem', height:'35rem' }}>
  <Card.Img style={{ width: 286, height:400 }} variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title style={{display:"flex",justifyContent:"center"}}>{movie.title}</Card.Title>
    <Card.Text style={{display:"flex",justifyContent:"center",fontFamily:"fantasy"}}>{movie.rate}</Card.Text>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Button onClick={()=>navigate(`/MovieList/Specs/${movie.title}`)} variant="primary">Choose this movie</Button>    </div>
  </Card.Body>
</Card>

  </div>);
}

export default MovieCard;
