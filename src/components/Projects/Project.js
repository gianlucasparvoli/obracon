import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Aes1 from "../../data/Industria/AES/Imagen12.jpg"

function Projects() {
  var path = window.location.pathname;

  var workInfoData = {
    "projects": [
      {
        "img": [
          Aes1,
          "/static/media/Imagen12.a4ac1d6f430758e5dcc2.jpg",
          "/static/media/Imagen13.0b95f80dfa46d5f4ce5f.jpg",
          "/static/media/Imagen16.898765f2ab3831173b10.jpg",
          "/static/media/Imagen17.d3dc6fbc7d73c276b798.jpg",
          "/static/media/Imagen21.28e312530799bb317d55.jpg",
          "/static/media/Imagen22.e70492630ef8c0ef163a.jpg",
          "/static/media/Imagen23.ba00d64b6d2a4c4d7285.jpg",
          "/static/media/Imagen24.13b7c968be86aeab2b0d.jpg",
          "/static/media/Imagen11.02844c85d03144e97b04.jpg",
          "/static/media/Imagen7.2ff13f5836e108d43c55.jpg",
          "/static/media/Imagen8.e344f4dbffd55631e385.jpg",
          "/static/media/Imagen9.8779a466087618f5f462.jpg",
          "/static/media/Imagen39.55dc7ad67848677c8a60.jpg",
          "/static/media/Imagen40.eab94639b784522f31f9.jpg",
          "/static/media/Imagen41.ba7b579b2c0f0af6c463.jpg",
          "/static/media/Imagen42.a28bd9c676d40e2a9183.jpg"
        ],
        "title": "Industria",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [
          "/static/media/Imagen46.2e88e9d3655aefce4c89.jpg",
          "/static/media/Imagen45.6df907e32e9fdd4a01ec.jpg"
        ],
        "title": "Banco de la Nación Argentina",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": ["/static/media/Imagen44.b4c64ec860ea5a577e21.png"],
        "title": "Patrimonio historico",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [
          "/static/media/Imagen1.5dd0eed1f87ce45f0e62.jpg",
          "/static/media/image128.c3b5762b4f8206406ba4.jpg",
          "/static/media/image129.19c4724bda813b2bd20b.jpg",
          "/static/media/image130.e76082a8a1edc24414d8.jpg",
          "/static/media/Imagen38.862f849c8feb2fd04a3e.png",
          "/static/media/Imagen36.ac49b53417919b3bc0ff.jpg", "/static/media/Imagen37.9c65d8092ef912dcef0c.jpg"
        ],
        "title": "Instituciones",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [
          "/static/media/Imagen de WhatsApp 2024-05-18 a las 15.59.54_540dec0a.02296d007fc83342c402.jpg",
          "/static/media/Imagen2.838fcdea1ae237a7baec.jpg",
          "/static/media/Imagen1.15813b8b322d2dfc942c.png"
        ],
        "title": "Viviendas",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }
    ]
  }

  return (
    <Container fluid >
      {path !== "/" && <Navbar />}
      <Container style={{ "margin-top": path == "/" ? "20rem" : "5rem" }}>
        <h1 className="project-heading">
          <strong className="purple">Trabajos recientes </strong>
        </h1>
        {/* <p style={{ color: "black" }}>
          Trabajos recientes:
        </p> */}
        <Row className="mt-4 " style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {workInfoData?.projects?.map((item, index) => (
            <Col md={4} className="project-card mt-4 ">
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
