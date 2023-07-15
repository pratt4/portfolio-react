import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';

import cpp from '../assets/img/cpp.svg';
import react from '../assets/img/react.svg'
import sql from '../assets/img/sql.svg';
import java from '../assets/img/java.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import javascript from '../assets/img/javascript.svg';
import keras from '../assets/img/keras-red.svg';
import python from '../assets/img/python.svg';
import pytorch from '../assets/img/pytorch.svg';
import tensorflow from '../assets/img/tensorflow.svg';


import colorSharp from '../assets/img/color-sharp.png';

import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Skills() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container >
        <Row>
          <Col>
          <div className="skill-bx">
          <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible? "animate__animated animate__heartBeat" : ""}>

                <h2>Skills</h2>
                </div>
              )}
            </TrackVisibility>
              <p>I have acquired a diverse range of skills and knowledge in various programming languages. Through my academic journey and personal exploration, I have developed a strong foundation in these areas.</p>
              <TrackVisibility>
              {({ isVisible }) => (
             <Carousel responsive={responsive} infinite={true} className={isVisible?"skill-slider animate__animated animate__shakeX  animate__delay-2s":"skill-slider "}>
              <div className="item">
                <img src={cpp} alt="image" />
                <h5>C/C++</h5>
              </div>
              <div className="item">
                <img src={react} alt="image" />
                <h5>React</h5>
              </div>
              <div className="item">
                <img src={sql} alt="image" />
                <h5>SQL</h5>
              </div>
              <div className="item">
                <img src={javascript} alt="image" />
                <h5>JavaScript</h5>
              </div>
              <div className="item">
                <img src={html} alt="image" />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src={css} alt="image" />
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src={python} alt="image" />
                <h5>Python</h5>
              </div>
              <div className="item">
                <img src={tensorflow} alt="image" />
                <h5>TensorFlow</h5>
              </div>
              <div className="item">
                <img src={keras} alt="image" />
                <h5>keras</h5>
              </div>
              <div className="item">
                <img src={pytorch} alt="image" />
                <h5>Pytorch</h5>
              </div>
              <div className="item">
                <img src={java} alt="image" />
                <h5>Java</h5>
              </div>
             </Carousel>)}
             </TrackVisibility>
          </div>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} alt="img" className="background-image-left" />
    </section>
  )
}
