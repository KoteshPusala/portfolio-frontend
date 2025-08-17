import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Failed, try again." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed, try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <Container>
        <h2 className="section-title">Contact</h2>
        <Row className="align-items-center">
          {/* Left side - Info + Socials */}
          <Col md={5} className="contact-info mb-4 mb-md-0">
            <h3>Let’s Connect 🤝</h3>
            <p>
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat. I’m always open to networking!
            </p>
            <div className="social-icons">
              <a href="mailto:pusalakotesh08@gmail.com">
              <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/pusalakotesh" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/KoteshPusala" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </Col>

          {/* Right side - Contact Form */}
          <Col md={7}>
            <div className="card-glass contact-card">
              <Form onSubmit={onSubmit} className="row g-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="col-12">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    as="textarea"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="col-12 d-flex gap-2 align-items-center">
                  <Button type="submit" className="btn-accent" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  {status && (
                    <span className={status.type === "success" ? "text-success" : "text-danger"}>
                      {status.message}
                    </span>
                  )}
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

