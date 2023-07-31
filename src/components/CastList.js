import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function CastList({ cast }) {
  const imgPath = "images/"
  return (
    <Container className="castlist">
      {cast.map((actor, index) => (
        <Row key={index} className="row">
          <Col className="headshot-column">
          <img className="headshot" src={imgPath + actor.image} alt={actor.name} />
          </Col>
          <Col>
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