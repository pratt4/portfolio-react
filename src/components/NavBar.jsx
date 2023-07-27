/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import git4 from "../assets/img/git4.svg";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon3 from "../assets/img/nav-icon3.svg";

export default function NavBar() {
  const [activelink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }

  

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activelink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>{onUpdateActiveLink('home')}}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activelink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>{onUpdateActiveLink('skills')}}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activelink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>{onUpdateActiveLink('projects')}}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1wbEdfpF7RN6Tt6Y6UhFqiuZAOlFwTGNj/view?usp=sharing"
              target="_blank"
              className="navbar-link"
            
            >
              My Resume
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://github.com/pratt4 " target="_blank" rel="noreferrer">
                <img src={git4} alt="linkedIn" />
              </a>
              
              <a href="https://www.linkedin.com/in/pratik-katti-b46777242/ " target="_blank" rel="noreferrer">
                <img src={navicon1} alt="linkedIn" />
              </a>
              <a href="https://www.instagram.com/pratt.7/" target="_blank" rel="noreferrer" >
                <img src={navicon3} alt="instagram" />
              </a>

              <button
                className="vvd"
                onClick={() => {
                  const connectSection = document.getElementById("connect");
                  if (connectSection) {
                    connectSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>let's connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
