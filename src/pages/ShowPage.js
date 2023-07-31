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
    const { title, cast, crew, director, writer, dates, poster, role, showColors } = Three2One;
    console.log(dates);

    setBodyColor({color: showColors.backgroundColor});
    setTextColor({color: "black"});

    return(
        <>
            <Container className="castlist">
                <Row>
                    <Col>
                        <img className="poster" src={imgPath + poster} alt={title.name} />
                    </Col>
                    <Col>
                        <h1>{title}</h1>
                        {director.name}
                        {writer.name}
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