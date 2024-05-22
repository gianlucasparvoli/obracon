import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Aes1 from "../../data/Industria/AES/Imagen12.jpg"
import Aes2 from "../../data/Industria/AES/Imagen13.jpg"
import Aes3 from "../../data/Industria/AES/Imagen16.jpg"
import Aes4 from "../../data/Industria/AES/Imagen17.jpg"
import Aes5 from "../../data/Industria/AES/Imagen21.jpg"
import Aes6 from "../../data/Industria/AES/Imagen22.jpg"
import Filpasto1 from "../../data/Industria/FIPLASTO/Imagen7.jpg"
import Filpasto2 from "../../data/Industria/FIPLASTO/Imagen8.jpg"
import Filpasto3 from "../../data/Industria/FIPLASTO/Imagen9.jpg"
import Filpasto4 from "../../data/Industria/FIPLASTO/Imagen10.jpg"
import BNA1 from "../../data/BNA/Ramallo/Imagen46.jpg"
import BNA2 from "../../data/BNA/SUNCHALES/Imagen45.jpg"
import Patrimonio1 from "../../data/Patrimonio historico/Patrimonio/Imagen44.png"
import Instituciones1 from "../../data/Instituciones/EESTNR6/Imagen1.jpg"
import Instituciones2 from "../../data/Instituciones/Plazoleta/image128.jpg"
import Instituciones3 from "../../data/Instituciones/Plazoleta/image129.jpg"
import Instituciones4 from "../../data/Instituciones/Plazoleta/image130.jpg"
import Instituciones5 from "../../data/Instituciones/Plazoleta/image131.jpg"
import Instituciones6 from "../../data/Instituciones/Plazoleta/image132.jpg"
import Instituciones7 from "../../data/Instituciones/UTN/image125.jpg"
import Instituciones8 from "../../data/Instituciones/UTN/image126.jpg"
import Instituciones9 from "../../data/Instituciones/UTN/Imagen36.jpg"
import Viviendas1 from "../../data/Viviendas/Policelia/Imagen2.jpg"
import Viviendas2 from "../../data/Viviendas/Romagnoli/Imagen1.png"
import Viviendas3 from "../../data/Viviendas/Zaccanti/Imagen de WhatsApp 2024-05-18 a las 15.59.54_540dec0a.jpg"

function Projects() {
  var path = window.location.pathname;

  var workInfoData = {
    "projects": [
      {
        "img": [
          Aes1, Aes2, Aes3, Aes4, Aes5, Aes6, Filpasto1, Filpasto2, Filpasto3, Filpasto4
        ],
        "title": "Industria",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [Instituciones1, Instituciones2, Instituciones3, Instituciones4, Instituciones5, Instituciones6, Instituciones7, Instituciones8, Instituciones9
        ],
        "title": "Instituciones",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [Viviendas1, Viviendas2, Viviendas3
        ],
        "title": "Viviendas",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [BNA1, BNA2],
        "title": "Banco de la Nación Argentina",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [Patrimonio1],
        "title": "Patrimonio historico",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      },
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
