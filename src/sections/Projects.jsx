import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LIST = [
  { 
    t: "Student Manager (MERN)", 
    d: "CRUD students, auth, MongoDB", 
    link: "#", 
    img: "/student.jpeg" 
  },
  { 
    t: "React Calculator", 
    d: "Clean UI, reliable state", 
    link: "#", 
    img: "calculator.jpg" 
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <Container className="projects-container">
        <h2 className="section-title">Projects</h2>

        {/* Outer white box */}
        <div className="projects-box">
          <Row className="g-4">
            {LIST.map((p, i) => (
              <Col md={6} key={i}>
                <div className="project-card">
                  <img src={p.img} alt={p.t} className="project-img" />
                  <h5 className="mb-2">{p.t}</h5>
                  <p className="mb-3 text-muted">{p.d}</p>
                  <a className="btn btn-accent btn-sm" href={p.link}>
                    View
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
