import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function CrewList({ crew }) {
    const imgPath = "images/"
  return (
    <Container className="castlist">
      {crew.map((blackshirt, index) => (
        <Row key={index} className="row">
          <Col className="headshot-column">
          {blackshirt.image != "" && <img className="headshot" src={imgPath + blackshirt.image} alt={blackshirt.name} />}
          </Col>
          <Col>
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