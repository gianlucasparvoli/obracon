import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import "yet-another-react-lightbox/styles.css";
import Carousel from 'react-bootstrap/Carousel';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../../data/marker-icon.png"
import { Icon } from 'leaflet';
import Loader from "../Loader"
import { Img } from 'react-image';
import { storage, auth } from '../../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";

function ProjectDetail() {
    var path = window.location.pathname;
    const { idFolder, id } = useParams();
    const [files, setFiles] = useState([]);
    var images = [];
    var pathsImgStorage = "";    

    if (idFolder === "Banco de la Nación Argentina" && id === "Esperanza") pathsImgStorage = "BNA/Esperanza"
    else if (idFolder === "Banco de la Nación Argentina" && id === "Pergamino") pathsImgStorage = "BNA/Pergamino"
    else if (idFolder === "Banco de la Nación Argentina" && id === "Sunchales") pathsImgStorage = "BNA/Sunchales"
    else if (idFolder === "Banco de la Nación Argentina" && id === "Concepción del Uruguay") pathsImgStorage = "BNA/Concepcion_del_uruguay"
    else if (idFolder === "Viviendas" && id === "Dominguez") pathsImgStorage = "Viviendas/Dominguez"
    else if (idFolder === "Viviendas" && id === "Policelia") pathsImgStorage = "Viviendas/Policelia"
    else if (idFolder === "Viviendas" && id === "Zaccanti") pathsImgStorage = "Viviendas/Zaccanti"
    else if (idFolder === "Industria" && id === "AES") pathsImgStorage = "Industria/AES"
    else if (idFolder === "Industria" && id === "SIDERAR") pathsImgStorage = "Industria/SIDERAR"
    else if (idFolder === "Industria" && id === "Zeni aserraderos") pathsImgStorage = "Industria/Zeni_aserraderos"
    else if (idFolder === "Instituciones" && id === "EESTNR6") pathsImgStorage = "Instituciones/EESTNR6"
    else if (idFolder === "Instituciones" && id === "UTN") pathsImgStorage = "Instituciones/UTN"
    else document.location.href = "/";

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
            const storageRef = ref(storage, pathsImgStorage);
            try {
                const res = await listAll(storageRef);
                const filePromises = res.items.map((itemRef) => getDownloadURL(itemRef));
                const fileUrls = await Promise.all(filePromises);
                setFiles(fileUrls);
            } catch (error) {
                console.error("Error listing files", error);
            }
        };

        listFiles();
    }, []);

    var imgPath = files;
    
    return (
        <Container fluid className="project-section">
            {path !== "/" && <Navbar />}
            <div style={{ "marginTop": "5rem" }}>

                <h1 className="project-heading">
                    <strong className="purple">Projecto: {id} </strong>
                </h1>
                {/* <h3>
                    Here is an example of an image carousel
                </h3> */}

                <Carousel>
                    {imgPath?.map(image =>
                        <Carousel.Item interval={1500}>
                            <Img src={image} loader={<Loader />} class="d-block img-fluid" type="image/webp" />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>

                <div style={{ "margin-top": "2rem" }}></div>
                <MapContainer center={[51.505, -0.09]} style={{ height: 400 }} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution=''
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [40, 40], iconAnchor: [12, 41] })}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                {path !== "/" && <Footer />}
            </div>

        </Container>
    );
}

export default ProjectDetail;
