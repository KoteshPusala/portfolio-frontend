import React from "react";
import { Container } from "react-bootstrap";

export default function Resume() {
  return (
    <section id="resume">
      <Container className="resume-container">
        <h2 className="section-title">Resume</h2>
        <div className="card-glass">
          {/* Education */}
          <h3 className="resume-heading">Education</h3>
          <p><strong>B.E. in Computer Science</strong> – Chaitanya Bharathi Institute of Technology,Hyderabad (2023–2027)</p>
          <p>CGPA: 8.13</p>

          {/* Skills */}
          <h3 className="resume-heading">Skills</h3>
          <p>Data Structures & Algorithms, Machine Learning</p>
          <p>Full-Stack Development (MERN), React, Node.js,Express.js, MongoDB</p>
          <p>Python, Java, OOPs</p>

          {/* Certifications */}
          <h3 className="resume-heading">Certifications</h3>
          <p> Coursera Machine learning Certified</p>
          <p>LeetCode Top 5% Global Contest Ranking</p>
          <p>Internshala Web development Certified</p>

          {/* Activities */}
          <h3 className="resume-heading">Activities</h3>
          <p>Active participant in coding competitions & hackathons</p>
          <p>Building projects in AI & Web Development</p>

          {/* Download Button */}
          <a className="btn btn-accent" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </Container>
    </section>
  );
}


