import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import daisyUI from "../assets/img/daisyUI.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({youtube}) => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const videos = [
    {
      title: "DaisyUI Crash Course",
      description: "Design & Development",
      imgUrl: daisyUI,
      link: "https://www.youtube.com/watch?v=l04LcLNM390&list=PLPGy7AhAwNnacpxTfItuSXcDCyJP2EiFE&pp=iAQB",
    },
    {
      title: "Skipping Backend Like A Pro",
      description: "Development",
      imgUrl: "https://i.ibb.co/qMsDXKZ/Google-Sheets-vs-React-2.png",
      link: "https://www.youtube.com/watch?v=9if9PKzTiK0&t=722s",
    },
    {
      title: "Discord bot with javascript",
      description: "Development",
      imgUrl: "https://i.ibb.co/wRKzFgM/Discord-bot-with-Javascript-2.png",
      link: "https://www.youtube.com/watch?v=UvNeDV_mCH8&t=1723s",
    },
    {
      title: "Master CSS Flexbox",
      description: "Design & Development",
      imgUrl: "https://i.ibb.co/V2zsDhf/Flexbox-Zombies-2.png",
      link: "https://www.youtube.com/watch?v=VAefPLB9PWA",
    },
    {
      title: "How to keep your CS fire burning",
      description: "Talks",
      imgUrl:
        "https://i.ibb.co/L0gwp3T/Green-Neon-Hacking-Tutorials-You-Tube-Thumbnail-2.png",
      link: "https://www.youtube.com/watch?v=DUgNdFHzbGk&t=138s",
    },
    
  ];

  let results = [];

  if (youtube) {
    results = videos;
  }
  else {
    results = projects;
  }


  return (
    <section className="project" id={youtube ? `youtube` : "projects"}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{youtube ? `Youtube` : "Projects"}</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {results.map((project, index) => {
                            return <ProjectCard key={index} {...project}/>;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}


