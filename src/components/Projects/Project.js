import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader"
import { Img } from 'react-image';
import { storage, auth } from '../../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";

function Projects() {
  var path = window.location.pathname;
  const [showItem, setShowItem] = useState("Instituciones");
  const [IndustriaImg, setIndustriaImg] = useState("");
  const [ViviendaImg, setViviendaImg] = useState("");
  const [BancoImg, setBancoImg] = useState("");
  const [InstitucionImg, setInstitucionImg] = useState("");
  const resolution = window.innerWidth;
  const isMobile = resolution <= 768;

  var pathsImgStorage = [
    "Industria/SIDERAR/SIDERAR1.jpg",
    "Instituciones/EESTNR6/EESTNR6_2.jpg",
    "Viviendas/Zaccanti/Zaccanti4.JPG",
    "BNA/Pergamino/Pergamino1.jpg",
  ]

  const authenticate = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error("Anonymous authentication failed", error);
    }
  };

  useEffect(() => {
    const listFiles = async () => {
      await authenticate();
      pathsImgStorage.map(async (img, itemNum) => {
        const storageRef = ref(storage, img);
        try {
          var fileUrls = await getDownloadURL(storageRef);

          if (itemNum == 0) setIndustriaImg(fileUrls)
          else if (itemNum == 1) setInstitucionImg(fileUrls)
          else if (itemNum == 2) setViviendaImg(fileUrls)
          else if (itemNum == 3) setBancoImg(fileUrls)

        } catch (error) {
          console.error("Error listing files", error);
        }
      })
    };

    listFiles();
  }, []);

  var workInfoData = {
    "projects": [
      {
        "img": InstitucionImg,
        "title": "Instituciones",
        "text": "",
      }, {
        "img": IndustriaImg,
        "title": "Industria",
        "text": "",
      }, {
        "img": ViviendaImg,
        "title": "Viviendas",
        "text": "",
      }, {
        "img": BancoImg,
        "title": "Banco de la Nación Argentina",
        "text": "",
      }
    ]
  };

  return (
    <div >
      {path !== "/" && <Navbar />}
      <div style={{ "marginTop": path == "/" ? "20rem" : "5rem" }}>
        <h1 className="project-heading text-center">
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
                    <Img src={item.img} loader={<Loader />} className="card-img-top" alt="..." />
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
                <ul className="nav  flex-column bg-dark" style={{ "marginTop": "15rem", "paddingBottom": "4rem" }}>
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
                    <Img src={item.img} loader={<Loader />} className="card-img-top" type="image/webp" loading="lazy" decoding="async" />
                    <div className="card-body">
                      <p className="card-text">{item.text}</p>
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
