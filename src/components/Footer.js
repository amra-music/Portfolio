import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>Amra Musić</Col>
        </Row>
        <Row>
         <Col>Address
         <Col>Rakovica, Česma 22</Col>
         <Col>Sarajevo, BiH</Col>
         </Col>
          <Col>Contact
          <Col>+387 61/079-824</Col>
          <Col>amusic5@etf.unsa.ba</Col>
          </Col>
          <Col>Social
          <Col>https://github.com/amra-music</Col>
          <Col>https://www.linkedin.com/in/amra-music/</Col>
          <Col>https://www.facebook.com/amra.music.543/</Col>
          </Col>
        </Row>
        <Row>
          <Col>
          &copy;{new Date().getFullYear()} <a href="https://github.com/amra-music">Amra Musić</a>. All rights reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default footer;
