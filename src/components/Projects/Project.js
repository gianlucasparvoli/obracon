import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import IndustriaImg from "../../data/Industria/SIDERAR/Imagen32.jpg";
import ViviendaImg from "../../data/Viviendas/Policelia/Imagen2.jpg";
import BancoImg from "../../data/BNA/Ramallo/Imagen46.jpg";
import PatrimonioImg from "../../data/Patrimonio historico/Patrimonio/Imagen44.png";
import InstitucionImg from "../../data/Instituciones/EESTNR6/Imagen1.jpg"

function Projects() {
  var path = window.location.pathname;

  var workInfoData = {
    "projects": [
      {
        "img": [IndustriaImg],
        "title": "Industria",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [InstitucionImg],
        "title": "Instituciones",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [ViviendaImg],
        "title": "Viviendas",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [BancoImg],
        "title": "Banco de la Nación Argentina",
        "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      }, {
        "img": [PatrimonioImg],
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
            <div
              key={item.title}
              className={'d-flex justify-content-center pb-3'}
              data-wow-delay={0.3}
            >
              <div className="team-item position-relative" style={{}}>
                <img className="img-resize-project img-fluid rounded " src={item.img[0]} alt="" />
                <div className="team-text bg-white rounded-end p-4 justify-content-center align-items-center">
                  <div>
                    <h5 ><a className="btn btn-dark" href={"/project/" + item.title}>{item.title}</a></h5>
                    {/* <span>{item.text}</span> */}
                  </div>

                </div>
              </div>
            </div>

          ))}
        </Row>
      </Container>
      {path !== "/" && <Footer />}
    </Container >
  );
}

export default Projects;
