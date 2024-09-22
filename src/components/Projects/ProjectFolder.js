import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";
import { Img } from 'react-image';
import { useHref, useParams } from "react-router-dom";
import { storage, auth } from '../../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";
import jsonLocations from "../../data/location.json";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../../data/marker-icon.png";
import { Icon } from 'leaflet';

function ProjectFolder() {
  var path = window.location.pathname;

  const { idFolder } = useParams();

  const [BNAEsperanza, setBNAEsperanza] = useState("");
  const [BNAPergamino, setBNAPergamino] = useState("");
  const [BNASunchales, setBNASunchales] = useState("");
  const [BNAConcepcion_del_uruguay, setBNAConcepcion_del_uruguay] = useState("");

  const [IndustriaAES, setIndustriaAES] = useState("");
  const [IndustriaSIDERAR, setIndustriaSIDERAR] = useState("");
  const [IndustriaZeni_aserraderos, setIndustriaZeni_aserraderos] = useState("");

  const [InstitucionesEESTNR6, setInstitucionesEESTNR6] = useState("");
  const [InstitucionesUTN, setInstitucionesUTN] = useState("");

  const [ViviendasDominguez, setViviendasDominguez] = useState("");
  const [ViviendasPolicelia, setViviendasPolicelia] = useState("");
  const [ViviendasZaccanti, setViviendasZaccanti] = useState("");

  var folderLocation = jsonLocations[idFolder] || null;
  var locations = [];
  var idPlaces = []

  if (folderLocation) {
    Object.entries(folderLocation).forEach(([id, content]) => {
      if (id) idPlaces.push(id);
      if (content && content?.lat && content?.long) locations.push([content.lat, content.long]);
    })
  }

  const resolution = window.innerWidth;
  const isMobile = resolution <= 768;

  var pathsImgStorage = [
    "BNA/Esperanza/Esperanza2.jpg",
    "BNA/Pergamino/Pergamino1.jpg",
    "BNA/Sunchales/Sunchales1.jpg",
    "BNA/Concepcion_del_uruguay/concepcion3.jpeg",
    "Industria/AES/AES5.jpg",
    "Industria/SIDERAR/SIDERAR2.jpg",
    "Industria/Zeni_aserraderos/Zeni_aserraderos1.jpg",
    "Instituciones/EESTNR6/EESTNR6_1.jpg",
    "Instituciones/UTN/UTN5.jpg",
    "Viviendas/Dominguez/Dominguez2.jpg",
    "Viviendas/Policelia/Policelia2.JPG",
    "Viviendas/Zaccanti/Zaccanti3.JPG"
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

          if (itemNum == 0) setBNAEsperanza(fileUrls)
          else if (itemNum == 1) setBNAPergamino(fileUrls)
          else if (itemNum == 2) setBNASunchales(fileUrls)
          else if (itemNum == 3) setBNAConcepcion_del_uruguay(fileUrls)
          else if (itemNum == 4) setIndustriaAES(fileUrls)
          else if (itemNum == 5) setIndustriaSIDERAR(fileUrls)
          else if (itemNum == 6) setIndustriaZeni_aserraderos(fileUrls)
          else if (itemNum == 7) setInstitucionesEESTNR6(fileUrls)
          else if (itemNum == 8) setInstitucionesUTN(fileUrls)
          else if (itemNum == 9) setViviendasDominguez(fileUrls)
          else if (itemNum == 10) setViviendasPolicelia(fileUrls)
          else if (itemNum == 11) setViviendasZaccanti(fileUrls)

        } catch (error) {
          console.error("Error listing files", error);
        }
      })
    };

    listFiles();
  }, []);

  var projectsBNA = [{
    "img": BNAEsperanza,
    "title": "Esperanza",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": BNAPergamino,
    "title": "Pergamino",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": BNASunchales,
    "title": "Sunchales",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": BNAConcepcion_del_uruguay,
    "title": "Concepción del Uruguay",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectsIndustria = [
    {
      "img": IndustriaAES,
      "title": "AES",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": IndustriaSIDERAR,
      "title": "SIDERAR",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }, {
      "img": IndustriaZeni_aserraderos,
      "title": "Zeni aserraderos",
      "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    }
  ]

  var projectsInstituciones = [{
    "img": InstitucionesEESTNR6,
    "title": "EESTNR6",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": InstitucionesUTN,
    "title": "UTN",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectsViviendas = [{
    "img": ViviendasDominguez,
    "title": "Dominguez",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": ViviendasPolicelia,
    "title": "Policelia",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }, {
    "img": ViviendasZaccanti,
    "title": "Zaccanti",
    "text": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  }]

  var projectFolders = []

  if (idFolder === "Banco de la Nación Argentina") projectFolders = projectsBNA
  else if (idFolder === "Industria") projectFolders = projectsIndustria
  else if (idFolder === "Instituciones") projectFolders = projectsInstituciones
  else if (idFolder === "Viviendas") projectFolders = projectsViviendas

  return (
    <Container fluid >
      {path !== "/" && <Navbar />}
      <div style={{ "margin-top": path == "/" ? "20rem" : "5rem" }}>
        <h1 className="project-heading">
          <strong className="purple">Obras: {idFolder} </strong>
        </h1>
        <div className="container">
          <div className="row">
            {projectFolders?.map((item, index) => (
              <div class="col-md-6 mt-2 my-md-3 pl-md-3 " >
                <div class="mr-md-3 px-3 md-5 pb-2 px-md-5 text-center text-white overflow-hidden" style={{ border: "2px solid black",background: "#B7B7B6" }}>
                  <div class="my-3 py-3" >
                    <h3 > {item.title} </h3>
                    <a className="text-white" href={"/project/" + idFolder + "/" + item.title}
                    >Ver proyecto</a>
                  </div>
                  <div class="shadow-sm mx-auto" style={{ width: "100%" }}>
                    <Img className="img-fluid rounded" src={item.img} loader={<Loader />} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ "margin-top": "2rem" }}></div>
          {locations.length > 0 && (
            <MapContainer center={locations[0]} style={{ height: 400 }} zoom={locations.length < 5 ? 10 : 5} scrollWheelZoom={false}>
              <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((marker, i) => (
                <Marker position={marker}
                  icon={new Icon({ iconUrl: markerIconPng, iconSize: [40, 40], iconAnchor: [12, 41] })}>
                  <Popup>
                    {idPlaces[i]}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
      {path !== "/" && <Footer />}
    </Container>
  );
}

export default ProjectFolder;
