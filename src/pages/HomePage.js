import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Painting from "../assets/images/painting.png";
import '../assets/styles/maryKarty.css';
import EmailForm from "../components/EmailForm";
import Logo from "../assets/images/threeTwoOneLogo.svg"

function HomePage() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={5} className="offset-1">
          <img src={Logo} alt="Three 2 One show logo" />
          <img className="painting" src={Painting} alt="Painting of 3 multi-colored femme figures entangled on a black background by Sara Rae Cote" />
          <h3>IndyFRINGE at District Theatre<br/>
          Main Stage.</h3>
       </Col>
        <Col sm={12} md={5}>
          <h2>Thursday, August 17</h2>
            <p> 9:00-10:00 p.m.</p>
          <h2>Saturday, August 19 </h2> 
            <p>5:15-6:15 p.m.</p>
          <h2>Friday, August 25</h2>
            <p>5:30-6:30 p.m.</p>
          <h2>Sunday, Auguest 27</h2>
            <p>12:00-1:00 p.m.</p>
          <h2>Friday, September 1</h2>
            <p>7:15-8:15 p.m.</p>
          <h2>Saturday, September 2</h2>
            <p>8:45-9:45 p.m.</p>
            <p>After a recent break-up leaves Claudia in a dissociative state, her Mind, Heart, and Body all manifest to guide her on her quest for love. What will it take to make her whole again?</p>
            <p>This witty, fast-paced romantic comedy about pulling yourself together intimately explores one woman’s thoughts as she searches for connection and unity. </p>
            <Button type="button" className="button" onClick={() => openInNewTab('https://www.vbotickets.com/v5.0/event.asp?eid=100320&s=654a8e89-bbfc-427e-b9f4-3f9a65334307')}>
              Get Tickets!
            </Button>
            <Button type="button" className="button" onClick={() => openInNewTab('https://indyfringe.org/festival/festival-tickets-box-office-details/')}>
              Flex Pass
            </Button>
        </Col>
      </Row>
      <EmailForm />
    </Container>
  );
}

export default HomePage;

  