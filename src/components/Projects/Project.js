import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Navbar from "../Navbar";
import Footer from "../Footer";
import IndustriaImg from "../../data/Industria/SIDERAR/Imagen32.jpg";
import ViviendaImg from "../../data/Viviendas/Policelia/Imagen2.jpg";
import BancoImg from "../../data/BNA/Ramallo/Imagen46.jpg";
import PatrimonioImg from "../../data/Patrimonio historico/Patrimonio/Imagen44.png";
import InstitucionImg from "../../data/Instituciones/EESTNR6/Imagen1.jpg";
import { Img } from 'react-image';

function Projects() {
  var path = window.location.pathname;
  const [showItem, setShowItem] = useState("Industria");
  const resolution = window.innerWidth;
  const isMobile = resolution <= 768;
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
  };
  const MyLoader = () => <div>Cargando...</div>;

  return (
    <div >
      {path !== "/" && <Navbar />}
      <div style={{ "marginTop": path == "/" ? "20rem" : "5rem" }}>
        <h1 className="project-heading">
          <strong className="purple">Nuestros proyectos </strong>
        </h1>
        {isMobile ?

          // MOBILE VERSION
          <Accordion defaultActiveKey="1" style={{ "marginTop": "2rem" }}>
            {workInfoData?.projects?.map((item, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="card" >
                    <img src={item.img[0]} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <h5 className="text-center"><a className="btn btn-dark" href={"/project/" + item.title}>Ir a {item.title}</a></h5>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>))}
          </Accordion>

          :

          // DESKTOP VERSION
          <div className="container text-center">
            <div className="row">
              <div className="col-2">
                <ul className="nav  flex-column bg-dark" style={{ "marginTop": "12rem", "paddingBottom": "4rem" }}>
                  {workInfoData?.projects?.map((item, index) => (
                    <li className="nav-item mt-5">
                      <h5><a className="nav-link text-light" aria-current="page"
                        href={"#" + item.title}
                        onClick={() => setShowItem(item.title)}>
                        {item.title}
                      </a></h5>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-10" style={{ "marginTop": "5rem" }}>
                {workInfoData?.projects?.map((item, index) => (
                  showItem == item.title &&
                  <div className="card" >
                    <Img src={item.img[0]} loader={<MyLoader />} className="card-img-top" type="image/webp"  loading="lazy"  decoding="async" />
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <h5 ><a className="btn btn-dark" href={"/project/" + item.title}>Ir a {item.title}</a></h5>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        }
      </div>
      {path !== "/" && <Footer />}
    </div >
  );
}

export default Projects;
