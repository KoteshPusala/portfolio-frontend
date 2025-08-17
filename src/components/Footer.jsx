import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 fs-4 footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 fs-4 footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-white mx-3 fs-4 footer-icon"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-0">
          © {new Date().getFullYear()} <strong>Pusala Kotesh</strong> — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
