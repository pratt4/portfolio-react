import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import git4 from "../assets/img/git4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import TrackVisibility from "react-on-screen";

export const Footer = () => {
  return (
    <footer className="footer pt-5">
          <TrackVisibility>
          {({isVisible})=>(
      <Container className="">
        <Row className="align-items-center">
          <Col size={12} sm={6}>

            <h5 className={isVisible?"animate__animated animate__lightSpeedInLeft":""}>
              Happy Coding.......</h5>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className={isVisible?"social-icon animate__animated animate__wobble animate__delay-1s":"social-icon"}>
            <a href="https://github.com/pratt4 " target="_blank" rel="noreferrer">
                <img src={git4} alt="linkedIn" />
              </a>
            <a href="https://www.linkedin.com/in/pratik-katti-b46777242/ " target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a href="https://www.instagram.com/pratt.7/" target="_blank" rel="noreferrer" >
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
           
          </Col>
        </Row>
      </Container>
          )}
          </TrackVisibility>
    </footer>
  )
}
