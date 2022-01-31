import React from 'react';
import {Card} from 'react-bootstrap';
function MovieCard({movie}) {
  return (
  <div>
<Card style={{ width: '18rem', height:'50rem' }}>
  <Card.Img style={{ width: 286, height:450 }} variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <Card.Text style={{display:"flex",justifyContent:"center",fontFamily:"fantasy"}}>{movie.rate}</Card.Text>
    <Card.Text><a href={movie.trailer} target={"_blank"} >{movie.trailer}  </a></Card.Text>
  </Card.Body>
</Card>

  </div>);
}

export default MovieCard;
