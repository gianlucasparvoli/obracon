import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Navbar from "../Navbar";
import Footer from "../Footer";
import workInfoData from "../../data/index.json";

function Projects() {
  var path = window.location.pathname;
  return (
    <Container fluid >
      {path !== "/" && <Navbar />}
      <Container style={{"margin-top": path == "/" ? "20rem" : "5rem"}}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="mt-4 " style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {workInfoData?.projects?.map((item, index) => (
            <Col md={4} className="project-card   mt-4 ">
              <ProjectCard
                imgPath={item.img}
                isBlog={false}
                title={item.title}
                description={item.text}
                link={"/project/" + item.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {path !== "/" && <Footer />}
    </Container>
  );
}

export default Projects;
