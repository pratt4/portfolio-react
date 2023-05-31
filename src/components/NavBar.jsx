/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/logo.svg";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon2 from "../assets/img/nav-icon2.svg";
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
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
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
              href="#link"
              className={
                activelink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>{onUpdateActiveLink('skills')}}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={
                activelink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>{onUpdateActiveLink('projects')}}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navicon1} alt="github" />
              </a>
              <a href="#">
                <img src={navicon2} alt="linkedin" />
              </a>
              <a href="#">
                <img src={navicon3} alt="instagram" />
              </a>

              <button
                className="vvd"
                onClick={() => {
                  console.log("hello");
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
