import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader"
import { Img } from 'react-image';
import { storage, auth } from '../../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Projects() {
  var path = window.location.pathname;
  const navigate = useNavigate()
  const [showItem, setShowItem] = useState("Industria");
  const [IndustriaImg, setIndustriaImg] = useState("");
  const [ViviendaImg, setViviendaImg] = useState("");
  const [BancoImg, setBancoImg] = useState("");
  const [InstitucionImg, setInstitucionImg] = useState("");
  const resolution = window.innerWidth;
  const isMobile = resolution <= 768;

  var pathsImgStorage = [
    "Industria/AES/AES5.jpg",
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
        "img": IndustriaImg,
        "title": "Industria",
        "text": "",
        "id": "1"
      }, {
        "img": ViviendaImg,
        "title": "Viviendas",
        "text": "",
        "id": "2"
      }, {
        "img": InstitucionImg,
        "title": "Instituciones",
        "text": "",
        "id": "0"
      }, {
        "img": BancoImg,
        "title": "Banco de la Nación Argentina",
        "text": "",
        "id": "3"
      }
    ]
  };

  return (
    <div style={{ "margin-top": "1rem" }}>
      {path !== "/" && <Navbar />}
      {path == "/" && <div className="line" style={{ borderColor: "#FCC913", borderWidth: "1px", borderStyle: "solid" }}></div>}
      {!isMobile && <div style={{ "padding-top": "1rem", "marginTop": path !== "/" && "5rem" }}> </div>}
      <div >
        <h1 className="project-heading text-center">
          <strong >Nuestros Proyectos </strong>
        </h1>
        {isMobile ?

          // MOBILE VERSION
          <Accordion defaultActiveKey="0" style={{ "marginTop": "2rem", border: "2px solid #FCC913", background: "#b7b7b6" }}>
            {workInfoData?.projects?.map((item, index) => (
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="row" >
                    <div class="shadow-sm mx-auto" style={{ width: "100%" }}>
                      <Img src={item.img} loader={<Loader />} className="card-img-top img-fluid rounded" alt="..." />
                    </div>
                    <div class="my-3 py-3" >
                      {/* <p className="card-text">{item.text}</p> */}
                      <h3 className="text-center">
                        <a className="btn btn-dark" href={"/project/" + item.title}>Ir a {item.title}</a>
                      </h3>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>))}
          </Accordion>

          :

          // DESKTOP VERSION
          <div className="row">
            <div className="col-12 mt-2">
              <div className="text-center">
                <div class="card rounded-0 text-center" style={{ border: "2px solid #909191", background: "#b7b7b6" }}>
                  <div class="navbar navbar-expand-lg card-header " >
                    <ul class="navbar-nav">
                      {workInfoData?.projects?.map((item, index) => (
                        <li class="nav-item active pt-2">
                          <h5><a className="nav-link fw-bold" aria-current="page"
                            href={"#" + item.title}
                            onClick={() => setShowItem(item.title)}>
                            {item.title}
                          </a></h5>
                        </li>
                      ))}

                    </ul>
                  </div>
                  <div class="card-body">
                    {workInfoData?.projects?.map((item, index) => (
                      showItem == item.title &&
                      // <div className="card" >

                      <div className="team-item position-relative">
                        <Img
                          src={item.img}
                          loader={<Loader />}
                          className="card-img-top"
                          type="image/webp"
                          loading="lazy"
                          decoding="async"
                          style={{ maxWidth: "90%" }}
                        />
                        <div className="team-text text-center rounded-end p-4">
                          <div>
                            <h5 className="text-dark fw-bold" onClick={() => navigate("/project/" + item.title)} >Ir a {item.title}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
