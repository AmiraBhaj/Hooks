import React from "react";
import {Card} from "react-bootstrap" ;



function MovieCard({lista}) {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={lista.posterUrl} />
    <Card.Body>
      <Card.Title>{lista.title}</Card.Title>
      <Card.Text>
        Description: {lista.description}
      </Card.Text>
      <Card.Text>
        Rate: {lista.rate}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  )
}

export default MovieCard

