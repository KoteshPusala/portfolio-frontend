import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Statistics() {
  return (
    <section id="statistics">
      <Container className="container-narrow">
        <h2 className="section-title">Statistics</h2>
        <Row className="g-3 justify-content-center">
          <Col md={4}>
            <div className="stat-card card-glass text-center">
              <h3>8.13</h3>
              <p>CGPA</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card card-glass text-center">
              <h3>500+</h3>
              <p>LeetCode Problems Solved</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card card-glass text-center">
              <h3>100 Days</h3>
              <p>LeetCode Streak Badge</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card card-glass text-center">
              <h3>2</h3>
              <p>Major Projects</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card card-glass text-center">
              <h3>3+</h3>
              <p>Certifications (AI/ML, Web Dev)</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card card-glass text-center">
              <h3>2</h3>
              <p>Hackathons</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

