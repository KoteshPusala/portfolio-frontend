import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Statistics from "./sections/Statistics";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
}
