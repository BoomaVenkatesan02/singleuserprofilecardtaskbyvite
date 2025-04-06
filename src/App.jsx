import React from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <Container>
        <Card className="mx-auto shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: '700px' }}>
          <Row className="g-0">
            {/* Left Side */}
            <Col md={4} className="text-white text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(to bottom right, #f6b042, #f87d5c)' }}>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
                roundedCircle
                fluid
                width="100"
                className="mb-3"
              />
              <h5 className="mb-1 fw-bold">Marie Horwitz</h5>
              <p className="mb-2">Web Designer</p>
              <i className="bi bi-pencil-square"></i>
            </Col>

            {/* Right Side */}
            <Col md={8} className="p-4 bg-white">
              <h6 className="fw-bold">Information</h6>
              <hr />
              <Row>
                <Col xs={6}>
                  <p className="mb-1 fw-semibold">Email</p>
                  <p className="text-muted small">info@example.com</p>
                </Col>
                <Col xs={6}>
                  <p className="mb-1 fw-semibold">Phone</p>
                  <p className="text-muted small">123 456 789</p>
                </Col>
              </Row>

              <h6 className="mt-4 fw-bold">Projects</h6>
              <hr />
              <Row>
                <Col xs={6}>
                  <p className="mb-1 fw-semibold">Recent</p>
                  <p className="text-muted small">Lorem ipsum</p>
                </Col>
                <Col xs={6}>
                  <p className="mb-1 fw-semibold">Most Viewed</p>
                  <p className="text-muted small">Dolor sit amet</p>
                </Col>
              </Row>

              <div className="d-flex gap-3 mt-3">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default App;
