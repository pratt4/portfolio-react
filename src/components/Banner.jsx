/* eslint-disable react/no-unescaped-entities */

import  { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImage from '../assets/img/header-img.svg';

export default function Banner() {

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate = ["Web developer","Web designer","UI/UX Designer"];
    const [text,setText]=useState('')
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;

    useEffect(()=>{
      let ticker =setInterval(() => {
        tick();
      }, delta)

      return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
      let i=loopNum % toRotate.length;
      let fullText=toRotate[i];
      let updateText=isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)

      setText(updateText)

      if(isDeleting){
        setDelta(prevDelta=>prevDelta/2);
      }

      if(!isDeleting && updateText==fullText){
        setIsDeleting(true);
        setDelta(period);

      }
      else if(isDeleting && updateText===''){
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(500);
      }

    }
    



  return (
    <section className="banner" id="home">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{"Hi I'm Pratik "}<br /> <span className='wrap'>{text}</span></h1>
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
