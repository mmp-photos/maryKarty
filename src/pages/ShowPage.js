import React from 'react';
import Three2One from '../assets/data/Three2One';
import { Container, Row, Col } from 'reactstrap';
import CastList from '../components/CastList';
import CrewList from '../components/CrewList';
import ShowDates from '../components/ShowDates';
import { setBodyColor } from '../components/SetBodyColor';
import { setTextColor } from '../components/SetBodyColor';

const showPage = (showPage) => {

    const imgPath = "images/"
    const { title, cast, crew, director, dates, poster, showColors } = Three2One;
    console.log(dates);

    setBodyColor({color: showColors.backgroundColor});
    setTextColor({color: "black"});

    return(
        <>
            <Container className="show-page">
                <Row>
                    <Col sm={12} md={6} className="show-page">
                        <img className="poster" src={imgPath + poster} alt={title.name} />
                    </Col>
                    <Col sm={12} md={6} className="align-left p2">
                        <h1>{title}</h1>
                        <h2>Written and Directed By {director.name}</h2>
                        <ShowDates dates={dates} />
                    </Col>
                </Row>
            </Container>
            <CastList cast={cast} />
            <CrewList crew={crew} />
        </>
    )
}

export default showPage;