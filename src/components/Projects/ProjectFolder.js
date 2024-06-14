import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useHref, useParams } from "react-router-dom";
import SplitPane from "react-split-pane";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ProjectFolder() {
  var path = window.location.pathname;
  const { idFolder } = useParams();

  var projectsBNA = [{
    "img": ["/static/media/Imagen46.2e88e9d3655aefce4c89.jpg"],
    "title": "Ramallo",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": ["/static/media/Imagen45.6df907e32e9fdd4a01ec.jpg"],
    "title": "Sunchales",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectsIndustria = [
    {
      "img": [
        "/static/media/Imagen12.a4ac1d6f430758e5dcc2.jpg",
        "/static/media/Imagen13.0b95f80dfa46d5f4ce5f.jpg",
        "/static/media/Imagen16.898765f2ab3831173b10.jpg",
        "/static/media/Imagen17.d3dc6fbc7d73c276b798.jpg",
        "/static/media/Imagen21.28e312530799bb317d55.jpg",
        "/static/media/Imagen22.e70492630ef8c0ef163a.jpg",
        "/static/media/Imagen23.ba00d64b6d2a4c4d7285.jpg",
        "/static/media/Imagen24.13b7c968be86aeab2b0d.jpg",
        "/static/media/Imagen25.61e956a258551ff46220.jpg"
      ],
      "title": "AES",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": [
        "data:image/jpeg;base64,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",
        "/static/media/Imagen11.02844c85d03144e97b04.jpg",
        "/static/media/Imagen7.2ff13f5836e108d43c55.jpg",
        "/static/media/Imagen8.e344f4dbffd55631e385.jpg",
        "/static/media/Imagen9.8779a466087618f5f462.jpg"
      ],
      "title": "FIPLASTO",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": [
        "/static/media/Imagen39.55dc7ad67848677c8a60.jpg",
        "/static/media/Imagen40.eab94639b784522f31f9.jpg",
        "/static/media/Imagen41.ba7b579b2c0f0af6c463.jpg",
        "/static/media/Imagen42.a28bd9c676d40e2a9183.jpg"
      ],
      "title": "Halperín",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": [""],
      "title": "JHON DEERE",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": ["/static/media/Imagen33.0f078090723e6c6aa3e1.jpg"],
      "title": "LOVERAZ",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": [
        "/static/media/Imagen18.529422a1d40cadf0d431.jpg",
        "/static/media/Imagen19.751e1159e5ee0490588d.jpg",
        "/static/media/Imagen20.541c8e39ca54a5a2890c.jpg",
        "/static/media/Imagen30.a0a6195f0fc30731ebb7.jpg",
        "/static/media/Imagen31.4bbb07d95bac1375a468.png",
        "/static/media/Imagen32.bed6acd6454a8faf2166.jpg"
      ],
      "title": "SIDERAR",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }
  ]

  var projectsInstituciones = [{
    "img": ["/static/media/Imagen1.5dd0eed1f87ce45f0e62.jpg"],
    "title": "EESTNR6",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": [
      "/static/media/image128.c3b5762b4f8206406ba4.jpg",
      "/static/media/image129.19c4724bda813b2bd20b.jpg",
      "/static/media/image130.e76082a8a1edc24414d8.jpg"
    ],
    "title": "Plazoleta",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": ["/static/media/Imagen38.862f849c8feb2fd04a3e.png"],
    "title": "Puente",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": ["/static/media/Imagen36.ac49b53417919b3bc0ff.jpg", "/static/media/Imagen37.9c65d8092ef912dcef0c.jpg"],
    "title": "UTN",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectsPatrimonioHistorico = [{
    "img": ["/static/media/Imagen44.b4c64ec860ea5a577e21.png"],
    "title": "Patrimonio Historico",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectsViviendas = [{
    "img": ["/static/media/Imagen2.838fcdea1ae237a7baec.jpg"],
    "title": "Policelia",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": ["/static/media/Imagen1.15813b8b322d2dfc942c.png"],
    "title": "Romagnoli",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, , {
    "img": ["/static/media/Imagen de WhatsApp 2024-05-18 a las 15.59.54_540dec0a.02296d007fc83342c402.jpg"],
    "title": "Zaccanti",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectFolders = []

  if (idFolder === "Banco de la Nación Argentina") projectFolders = projectsBNA
  else if (idFolder === "Industria") projectFolders = projectsIndustria
  else if (idFolder === "Patrimonio historico") projectFolders = projectsPatrimonioHistorico
  else if (idFolder === "Instituciones") projectFolders = projectsInstituciones
  else if (idFolder === "Viviendas") projectFolders = projectsViviendas

  const navigate = useNavigate();

  return (
    <Container fluid >
      {path !== "/" && <Navbar />}
      <div style={{ "margin-top": path == "/" ? "20rem" : "5rem" }}>
        <h1 className="project-heading">
          <strong className="purple">Trabajos: {idFolder} </strong>
        </h1>
        <div className="container text-center">
          <div className="row">
            {projectFolders?.map((item, index) => (
              <div className="col-6 mt-2">
                <Card className="bg-dark text-white">
                  <Card.Img src={item.img[0]} alt="Card image" />
                  <Card.ImgOverlay>
                    {/* <Card.Title>{item.title}</Card.Title> */}
                    <h4>
                      <a className="bg-white text-black" variant="primary" href={"/project/" + idFolder + "/" + item.title}
                      onClick={navigate("/project/" + idFolder + "/" + item.title)}
                      >Ir a {item.title}</a>
                    </h4>
                  </Card.ImgOverlay>
                </Card>

              </div>
            ))}
          </div>

        </div>
        {/* <Row className="mt-4 " style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectFolders?.map((item, index) => (
            <Col md={4} className="project-card mt-4 ">
              <ProjectCard
                imgPath={item.img}
                isBlog={false}
                title={item.title}
                description={item.text}
                link={"/project/" + idFolder + "/" + item.title}
              />
            </Col>
          ))}
        </Row> */}
      </div>
      {path !== "/" && <Footer />}
    </Container>
  );
}

export default ProjectFolder;
