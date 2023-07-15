/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Student","Web developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomInDown animate__delay-1s" : ""
                  }
                >
                  <h1>
                    {"Hi I'm Pratik,"}
                  </h1>
                  <h2>
                    <span className="wrap">{text}</span>
                    <br />

                  </h2>
                </div>
              )}
            </TrackVisibility>
            <br />
            <p>
            I am a final year engineering student and a passionate programmer who is inclined toward exploring new technologies such as web development and machine learning.
            I enjoy learning about the latest advancements and applying them in practical projects.
            </p>
            <TrackVisibility>
              {({ isVisible }) => (
                <button
                  onClick={() => {
                    const connectSection = document.getElementById("connect");
                    if (connectSection) {
                      connectSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{ fontSize: "27px" }}
                  className={
                    isVisible
                      ? "animate__animated animate__hinge animate__delay-2s"
                      : ""
                  }
                >
                  Let's connect
                  <ArrowRightCircle size={30} />
                </button>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="animate__animated animate__lightSpeedInRight animate__delay-1s ">
            <img src={headerImage} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
