import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// ART IMPORTS //
import AuthorPhoto from "../assets/images/mary_karty.jpg";


const AboutMary = (props) => {
    console.log(props);
    return(
        <Container>
            <Row>
                <Col sm={12} md={5}>
                    <div className="author-photo">
                        <img src={AuthorPhoto} alt="Mary Karty wearing a floral crown and smiling at the camera" />
                    </div>
                </Col>
                <Col sm={12} md={5}>
                    <h1>About Mary Karty</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Elit pellentesque habitant morbi tristique senectus. Sodales neque sodales ut etiam sit. Et leo duis ut diam quam nulla porttitor massa id. Nunc lobortis mattis aliquam faucibus purus in. Parturient montes nascetur ridiculus mus mauris. Eget dolor morbi non arcu. Tellus at urna condimentum mattis pellentesque id nibh tortor. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Libero nunc consequat interdum varius. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Egestas maecenas pharetra convallis posuere morbi.</p>

                    <p>Eget nunc scelerisque viverra mauris. In eu mi bibendum neque egestas. Volutpat ac tincidunt vitae semper quis lectus nulla. Neque convallis a cras semper auctor neque vitae. At elementum eu facilisis sed odio morbi quis commodo. In aliquam sem fringilla ut morbi tincidunt augue. Ullamcorper morbi tincidunt ornare massa eget egestas. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Venenatis cras sed felis eget velit aliquet. Sit amet mauris commodo quis imperdiet. Gravida rutrum quisque non tellus orci ac auctor. Pharetra diam sit amet nisl suscipit. Vestibulum lorem sed risus ultricies. Massa enim nec dui nunc mattis enim ut tellus. Nullam ac tortor vitae purus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. A iaculis at erat pellentesque. Pulvinar pellentesque habitant morbi tristique senectus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>

                    <p>Vitae justo eget magna fermentum iaculis eu non diam. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Tortor at risus viverra adipiscing at in tellus. Faucibus pulvinar elementum integer enim. Mattis enim ut tellus elementum sagittis vitae et leo duis. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Nec dui nunc mattis enim. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Lacus viverra vitae congue eu. Pretium quam vulputate dignissim suspendisse in. Id porta nibh venenatis cras sed felis. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Nunc id cursus metus aliquam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Dolor magna eget est lorem ipsum dolor sit. In dictum non consectetur a.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMary;