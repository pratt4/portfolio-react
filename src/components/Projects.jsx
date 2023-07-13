import algorithmvisualizer from '../assets/img/algorithmvisualizer.png'
import bikerental from '../assets/img/bikerental.png'
import chatapplicationcli from '../assets/img/chatapplicationcli.png'
import clothing from '../assets/img/clothing.jpg'
import microservices from '../assets/img/microservices.png'
import networkscaning from '../assets/img/networkscaning.png'
import plantdiseasedetection from '../assets/img/plantdiseasedetection.png'
import railways from '../assets/img/railways.png'
import randomquotegenerator from '../assets/img/randomquotegenerator.png'
import realtimeanomalydetection from '../assets/img/realtimeanomalydetection.png'
import vehicleclassificationandcounting from '../assets/img/vehicleclassificationandcounting.png'
import youtube from '../assets/img/youtube.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { Container, Row, Col,Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

import { ProjectCard } from './ProjectCard';
import TrackVisibility from "react-on-screen";

// import { Nav } from 'react-bootstrap/Nav';
// expimport { Row } from 'react-bootstrap';
export default function Projects() {
  
    const projects1 = [
      {
        title: "Imperial Clothing",
        description: "Online Clothing Website",
        imgUrl: clothing,
        link:"https://imperialclothingpratik.netlify.app/",
      },
      {
        title: "Anomaly Detection",
        description: "Real Time Anomaly Detection In Surveillance Video",
        imgUrl: realtimeanomalydetection,
        link:'https://github.com/pratt4/Anomaly-Detection-in-Surveillance-Videos'
      },
      {
        title: "Rev'n'Rent",
        description: "Bike Rental Management System",
        imgUrl: bikerental,
        link:"https://github.com/pratt4/bike-rental-management-system-mysql"
      },
      {
        title: "Plant Disease Detection",
        description: "Potato and Tomato leaf disease detection",
        imgUrl: plantdiseasedetection,
        link:"https://github.com/pratt4/Plant-disease-detection"
      },
      {
        title: "RailRizz",
        description: "CLI based Railway Reservation System",
        imgUrl: railways,
        link:"https://github.com/pratt4/railway-reservation-system-c"
      },
      {
        title: "Student Management System",
        description: "Microservice Communication using RabbitMQ",
        imgUrl: microservices,
        link:"https://github.com/pratt4/Microservice-communication-with-RabbitMQ-PES1UG20CS577"
      },
    
      
  ];
    const projects2 = [
      {
        title: "Vehicle Detection ",
        description: "Classification,Counting and Color detection",
        imgUrl: vehicleclassificationandcounting,
        link:"https://github.com/pratt4/Vehicle-Classification-and-Counting"
      },
      {
        title: "Random Quote Generator",
        description: "Python And Tkinter",
        imgUrl: randomquotegenerator,
        link:"https://github.com/pratt4/Random-quote-generator-python-tkinters"
      },
     
      {
        title: "AlgoWiz",
        description: "Algorithm Visualizer",
        imgUrl: algorithmvisualizer,
        link:"https://github.com/pratt4/algorithm-visualizer-python"
      },
      {
        title: "Chat Application",
        description: "CLI based Application with socket programming",
        imgUrl: chatapplicationcli,
        link:"https://github.com/pratt4/Commandline-chatting-app-python"
      },
      {
        title: "Network Scaning",
        description: "Network Scaning using Scapy",
        imgUrl: networkscaning,
        link:"https://github.com/pratt4/Network-Scanning-using-Scapy"
      },
      
  ];

  const projects3=[
    {
      title: "RailRizz",
      description: "CLI based Railway Reservation System",
      imgUrl: railways,
      link:"https://github.com/pratt4/railway-reservation-system-c"
    },
    {
      title: "Youtube Clone",
      description: "Online Video Sharing App",
      imgUrl: youtube,
      link:"https://github.com/pratt4/online-video-sharing-website-youtube-clone-mern"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
                <TrackVisibility>
                {({isVisible})=>(
                  <div>

                  <h2 className={isVisible?'animate__animated animate__jello animate__delay-1s':""}>Projects</h2>
                <p className={isVisible?"animate__animated animate__fadeIn":""}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                )}
                </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project,index)=>{
                            return (
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project,index)=>{
                            return (
                              <ProjectCard
                              key={index}
                              {...project}/>
                            )
                          })
                        }
                      </Row>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
             
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
