import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import daisyUI from "../assets/img/daisyUI.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({section}) => {

  const projects = [
    {
      title: "Snap Chef",
      description: "Your personal virtual chef",
      imgUrl: "https://i.ibb.co/Bj14WrT/Snap-Chef-thumbnail.png",
      link: "https://github.com/Dhruv-Sood/Snap-Chef",
    },
    {
      title: "Flexbox Sensei",
      description: "Best Educational Hack @mlh Hacks For Hackers",
      imgUrl: "https://i.ibb.co/3T9fB0t/Flex-Box-Sensei-Logo-3.png",
      link: "https://devpost.com/software/flexbox-sensei",
    },
    {
      title: "Lofi-Code Nest",
      description: "Virtual Workspace For Chill Study/Coding Sessions",
      imgUrl: "https://i.ibb.co/z6pGFK1/Copy-of-Flex-Box-Sensei-Logo.png",
      link: "https://devpost.com/software/lofi-code-nest",
    },
    {
      title: "Troll Bot",
      description: "A Discord Bot That Throws Joke",
      imgUrl: "https://i.ibb.co/XJG1Snn/Copy-of-Flex-Box-Sensei-Logo-2.png",
      link: "https://github.com/Dhruv-Sood/troll-bot",
    },
  ];

  const videos = [
    {
      title: "Complete STL for Beginners",
      description: "Problem Solving",
      imgUrl:
        "https://i.ibb.co/hXk2bR6/2-B12807-B-0-B99-4978-BE8-A-89-E3-FE1-CD060.png",
      link: "https://youtu.be/zjqWawzmN4Y?si=OKSCIYyf42HfT5tt",
    },
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
      title: "Discord bot with javascript\n(HINDI)",
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

const blogs = [
  {
    title: "Create your FIRST AI BOT!!!!",
    description: "Development",
    imgUrl: "https://i.ibb.co/P4wF3hy/LIMITED-TIME-ONLY.png",
    link: "https://dhruvsood.hashnode.dev/how-to-create-an-ai-discord-bot",
  },
  {
    title: "Git for absolute beginners",
    description: "Version Control",
    imgUrl:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1674578204513/ecd466b0-cfd7-4c01-8392-8ef7ac785aad.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://blogs.dhruvsood.in/what-is-git-for-beginners",
  },
  {
    title: "Keep your CS fire burning",
    description: "Development",
    imgUrl: "https://i.ibb.co/3yrhMnZ/Fire-s-outta-control.png",
    link: "https://dhruvsood.hashnode.dev/hacks-for-keeping-your-computer-science-fire-burning",
  },
];



  let results = [];
  let id = "";
  let heading = "";
  let description = "";
  let isEnd = false;
  if (section === "youtube") {
    results = videos;
    id = "youtube";
    heading = "Youtube";
    description = "Here is the list of my recent youtube videos";
  } else if (section === "projects") {
    results = projects;
    id = "projects";
    heading = "Projects";
    description = "Here is the list of my recent projects";
  } else if (section === "blogs") {
    results = blogs;
    id = "blogs";
    heading = "Blogs";
    description = "Here are my top technical blogs";
    isEnd = true;
  }
  

  


  return (
    <section className={`project ${isEnd ? 'end' : ""}`} id={id}>
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
                  <h2>{heading}</h2>
                  <p>
                    {description} 
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
                      <Tab.Pane eventKey="second">
                        <p>
                          Nothing to show..
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Nothing to show..
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


