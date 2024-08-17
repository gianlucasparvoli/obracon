import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import "yet-another-react-lightbox/styles.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../../data/marker-icon.png";
import { Icon } from 'leaflet';
import Loader from "../Loader"
import { storage, auth } from '../../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import jsonLocations from "../../data/location.json";

function ProjectDetail() {
    var path = window.location.pathname;
    const { idFolder, id } = useParams();
    const [files, setFiles] = useState([]);
    const [index, setIndex] = useState(-1);
    var pathsImgStorage = "";
    var preLocation = jsonLocations[idFolder] || null;
    var location = preLocation ? preLocation[id] : null;

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

                fileUrls?.map((img) => {
                    const imagen = new Image();
                    imagen.src = img;
                    imagen.onload = () => {
                        const test = { src: img, width: imagen.width, height: imagen.height }
                        setFiles(files => [...files, test]);
                    };
                })
            } catch (error) {
                console.error("Error listing files", error);
            }
        };

        listFiles();
    }, []);

    return (
        <Container fluid className="project-section">
            {path !== "/" && <Navbar />}
            <div style={{ "marginTop": "5rem" }}>

                <h1 className="project-heading">
                    <strong className="purple">Proyecto: {id} </strong>
                </h1>

                {files.length === 0 ? (<Loader />) : (
                    <div>
                        <PhotoAlbum layout="rows"
                            photos={files}
                            loader={<Loader />}
                            onClick={({ index: current }) => setIndex(current)} />
                        <Lightbox
                            index={index}
                            slides={files}
                            open={index >= 0}
                            close={() => setIndex(-1)}
                        />
                    </div>
                )}

                <div style={{ "margin-top": "2rem" }}></div>
                {location && (
                    <MapContainer center={[location['lat'], location['long']]} style={{ height: 400 }} zoom={16} scrollWheelZoom={false}>
                        <TileLayer
                            attribution=''
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[location['lat'], location['long']]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [40, 40], iconAnchor: [12, 41] })}>
                            <Popup>
                                {id}
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
                {path !== "/" && <Footer />}
            </div>

        </Container>
    );
}

export default ProjectDetail;
