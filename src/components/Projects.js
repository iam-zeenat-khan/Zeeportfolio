import { Container, Row, Col, Tab, Nav,Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/harmony.png";
import projImg2 from "../assets/img/resumecraft.png";
import projImg3 from "../assets/img/solvi.png";
import projImg4 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Harmony",
      description: "A music application that integrates Last.fm and Spotify APIs, allowing users to discover new music, create personalized playlists, and receive tailored recommendations based on their listening habits.",
      imgUrl:projImg1,
    },
    {
      title: "ResumeCraft",
      description: "An intuitive resume builder that helps users create professional resumes quickly and easily, featuring customizable templates and live previews for an efficient and user-friendly experience.",
      imgUrl: projImg2,
    },
    {
      title: "Solvai",
      description: "An innovative AI chatbot that provides intelligent solutions for everyday problems, enabling users to ask questions and receive personalized recommendations through natural language processing.", imgUrl: projImg3,
    },
    {
      title: "portfolio website",
      description: "ZeePortfolio is a personal portfolio website showcasing my projects, skills, and experiences as a frontend developer",
      imgUrl: projImg4,
    }

  ];
    const projectss = [
    {
      title: "Harmony",
      description: "Explore new music and connect with your favorite artists. Create personalized playlists and get recommendations based on your listening habits.",
      image: projImg1, // Replace with your image path
      link: "" // Replace with your project link
    },

    {
      title: "ResumeCraft",
      description: "An intuitive resume builder that helps users create professional resumes quickly and easily. You can download youe resume in pdf format so you can share with everyone",
      image: projImg2, // Replace with your image path
      link: "https://prismatic-druid-d36b9c.netlify.app/" // Replace with your project link
    },
    {
      title: "Solvi AI",
      description: "An innovative AI chatbot providing intelligent solutions for everyday problems.  You can ask anything. It useful for student,teacher,writer  ",
      image: projImg3, // Replace with your image path
      link: "https://solveai.netlify.app/" // Replace with your project link
    },
    {
      title: "ZeePortfolio",
  description: "ZeePortfolio is a personal portfolio website showcasing my projects, skills, and experiences as a frontend developer. ",
  image: projImg4, // Replace with your image path
  link: "https://your-zeeportfolio-link.com" // Replace with your portfolio link
}

  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my portfolio of web applications and creative solutions. Each project showcases my skills in building responsive, user-friendly designs, integrating APIs, and developing dynamic, interactive experiences. I focus on turning ideas into practical, engaging software, always striving for quality and innovation.

. These projects highlight my ability to create responsive, functional, and user-centric web applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">

                     </Tab.Pane>
                    <Tab.Pane eventKey="third">
           
                         <Row xs={1} md={2} className="g-4">
                          {projectss.map((project, idx) => (
                        <Col key={idx}>
                        <Card style={{background: `linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)`, 
            color: 'white'  }}>
                         <Card.Body className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}> {/* Add a semi-transparent background for readability */}
                         <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                        {project.description}
                        </Card.Text>
                       <Card.Link href={project.link}>
                       View Project
                    </Card.Link>
                   </Card.Body>
                </Card>
                </Col>
      ))}
    </Row>

              
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
