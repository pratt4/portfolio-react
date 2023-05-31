import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap/Container';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImage from 'src/assets/img/header-img.svg'

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{"Hi I'm Pratik"} <span className='wrap'>web developer</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam eius nisi numquam dolores libero nobis dicta sapiente debitis rem quasi? Veniam ullam cum dicta voluptas sit impedit? Temporibus, nobis culpa.</p>
            <button onClick={()=>{console.log("connect")}}>Let's connect <ArrowRightCircle size={25}/> </button>
          </Col>
          <Col xs={12} md={6} xl={5} >
            <img src={headerImage} alt="headder img" />
          </Col>
        </Row>  
      </Container>
    </section>
  )
}
