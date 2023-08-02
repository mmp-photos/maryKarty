import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function CrewList({ crew }) {
    const imgPath = "images/"
  return (
    <Container className="show-page">
      {crew.map((blackshirt, index) => (
        <Row key={index} className="row">
          <Col sm={12} md={3} className="show-page">
          {blackshirt.image !== "" && <img className="headshot" src={imgPath + blackshirt.image} alt={blackshirt.name} />}
          </Col>
          <Col sm={12} md={6} className="mr2 p2">
            <h2>{blackshirt.name}</h2>
            <h3>{blackshirt.role}</h3>
            <p>{blackshirt.bio}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default CrewList;