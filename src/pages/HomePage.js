import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Painting from "../assets/images/painting.png";
import '../assets/styles/maryKarty.css';
import EmailForm from "../components/EmailForm";
import Logo from "../assets/images/threeTwoOneLogo.svg"
import { setBodyColor } from '../components/SetBodyColor';
import { setTextColor } from '../components/SetBodyColor';

setBodyColor({color: "black"});
setTextColor({color: "white"});

function HomePage() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
    <Container className="mt2">
      <Row>
        <Col sm={12} md={5} className="offset-1">
          <img src={Logo} alt="Three 2 One show logo" />
          <img className="painting" src={Painting} alt="Painting of 3 multi-colored femme figures entangled on a black background by Sara Rae Cote" />
          <h2 className="mb12 italics">A show about pulling yourself together.</h2>
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
            <h3 className="italics">Three 2 One</h3>
            <p>After a recent break-up leaves Claudia in a dissociative state, her Mind, Heart, and Body all manifest to guide her on her quest for love. What will it take to make her whole again?</p>
            <p>This witty, fast-paced romantic comedy about pulling yourself together intimately explores one woman’s thoughts as she searches for connection and unity. </p>
            <Button type="button" className="button mr-half" onClick={() => openInNewTab('http://indyfringe.vbotickets.com/event/4b_-_three_2_one/100320')}>
              Get Tickets!
            </Button>
            <a href="/show">
              <Button type="button" className="button">
                Meet the Cast
              </Button>
            </a>
        </Col>
      </Row>
    </Container>
    <EmailForm />
    </>
  );
}

export default HomePage;

  