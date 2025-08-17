import React from "react";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container className="about-container">
        <div className="about-content">
          {/* Left column */}
          <div className="about-left">
            <p><strong>Name:</strong> Pusala Kotesh</p>
            <p><strong>Profile:</strong> MERN Stack Developer</p>
            <p><strong>Email:</strong> pusalakotesh08@gmail.com</p>
            <p><strong>Phone:</strong> +91 8019291262</p>
            <p><strong>Skills:</strong></p>
            <ul>
              <li>Python/Java</li>
              <li>Object Oriented Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>React / Node.js</li>
              <li>MongoDB / Express</li>
              <li>Docker / Git</li>
            </ul>
          </div>

          {/* Right column */}
          <div className="about-right">
            <h2 className="about-title">About Me</h2>
            <p className="about-quote">
              <em>Code clean, think clear, and keep improving every single day.</em>
            </p>
            <p>
              I’m a Computer Science student focused on building clean backends and 
              smooth UIs.Comfortable with React, Node.js, Express, and MongoDB. 
              Passionate about problem-solving, DSA, and exploring Machine Learning.
            </p>
            <p>
              Dedicated to learning and adapting to new technologies, I enjoy turning 
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              With a strong foundation in Data Structures and Algorithms, I actively 
              sharpen my problem-solving skills through coding challenges and projects. 
              I enjoy collaborating on real-world applications that blend functionality 
              with creativity.
            </p>
            <p>
              My current interests include exploring AI-powered solutions, optimizing 
              performance in web applications, and building scalable systems. I’m eager 
              to contribute my skills to impactful projects and continuously grow as a 
              developer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}


