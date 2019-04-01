import React from 'react';
import '../requests.css';
import requestBackground from '../collabrequests.jpg';
import {Row, Col, Container, Button, Card} from 'react-bootstrap';


const Requests = () => {
  return (
  <div>

  <Container>
    <Row>
      <Col sm={8}>
        <Card>
          <Card.Body>
            <img className="request-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
            <h1 className="request-name">Amelia Clarke</h1>
          </Card.Body>
        </Card>
      </Col>


      <Col sm={4}>
      <img className="background-requests" src={requestBackground} />
      </Col>
    </Row>
  </Container>

  </div>
  );
};

export default Requests;