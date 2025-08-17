import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const texts = ["AI Enthusiast", "Full Stack Developer"]; // inside effect so no warning

    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // pause after typing
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <Container className="container-narrow text-center">
          <h1 className="hero-title">I am Kotesh Pusala</h1>
          <p className="hero-subtitle typing-text">{text}</p>
          <div className="headline">
            <p>Learning today to create tomorrow.</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
