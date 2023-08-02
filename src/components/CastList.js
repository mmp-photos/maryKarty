import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function CastList({ cast }) {
  const imgPath = "images/"
  return (
    <Container className="show-page">
      {cast.map((actor, index) => (
        <Row key={index}>
          <Col sm={12} md={3} className="show-page">
          {actor.image !== "" && <img className="headshot" src={imgPath + actor.image} alt={actor.name} />}
          </Col>
          <Col sm={12} md={6} className="p2">
            <h2>{actor.name}</h2>
            <h3>{actor.role}</h3>
            <p>{actor.bio}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default CastList;