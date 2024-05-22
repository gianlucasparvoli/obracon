import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectDetail() {
    var path = window.location.pathname;
    const { idFolder, id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [index, setIndex] = useState(-1);
    //cambiar por la url y crear carpeta con imagenes por proyecto. No se puede hacer dimanico el require, hay que importar todas las carpetas y hacer un if

    var images = []
    var photos = []

    const imagesBNARamallo = require.context('../../data/BNA/Ramallo', true);
    const photosBNARamallo = require('../../data/BNA/Ramallo/file.json');
    const imagesBNASunchales = require.context('../../data/BNA/SUNCHALES', true);
    const photosBNASunchales = require('../../data/BNA/SUNCHALES/file.json');

    const imagesIndustriaAES = require.context('../../data/Industria/AES', true);
    const photosIndustriaAES = require('../../data/Industria/AES/file.json');
    const imagesIndustriaFIPLASTO = require.context('../../data/Industria/FIPLASTO', true);
    const photosIndustriaFIPLASTO = require('../../data/Industria/FIPLASTO/file.json');
    const imagesIndustriaHalperin = require.context('../../data/Industria/Halperín', true);
    const photosIndustriaHalperin = require('../../data/Industria/Halperín/file.json');
    const imagesIndustriaJHONDEERE = require.context('../../data/Industria/JHON DEERE', true);
    const photosIndustriaJHONDEERE = require('../../data/Industria/JHON DEERE/file.json');
    const imagesIndustriaLOVERAZ = require.context('../../data/Industria/LOVERAZ', true);
    const photosIndustriaLOVERAZ = require('../../data/Industria/LOVERAZ/file.json');
    const imagesIndustriaSIDERAR = require.context('../../data/Industria/SIDERAR', true);
    const photosIndustriaSIDERAR = require('../../data/Industria/SIDERAR/file.json');

    const imagesViviendasZaccanti = require.context('../../data/Viviendas/Zaccanti', true);
    const photosViviendasZaccanti = require('../../data/Viviendas/Zaccanti/file.json');
    const imagesViviendasPolicelia = require.context('../../data/Viviendas/Policelia', true);
    const photosViviendasPolicelia = require('../../data/Viviendas/Policelia/file.json');
    const imagesViviendasRomagnoli = require.context('../../data/Viviendas/Romagnoli', true);
    const photosViviendasRomagnoli = require('../../data/Viviendas/Romagnoli/file.json');

    const imagesInstitucionesEESTNR6 = require.context('../../data/Instituciones/EESTNR6', true);
    const photosInstitucionesEESTNR6 = require('../../data/Instituciones/EESTNR6/file.json');
    const imagesInstitucionesPlazoleta = require.context('../../data/Instituciones/Plazoleta', true);
    const photosInstitucionesPlazoleta = require('../../data/Instituciones/Plazoleta/file.json');
    const imagesInstitucionesPuente = require.context('../../data/Instituciones/Puente', true);
    const photosInstitucionesPuente = require('../../data/Instituciones/Puente/file.json');
    const imagesInstitucionesUTN = require.context('../../data/Instituciones/UTN', true);
    const photosInstitucionesUTN = require('../../data/Instituciones/UTN/file.json');

    const imagesPatrimonio = require.context('../../data/Patrimonio historico/Patrimonio', true);
    const photosPatrimonio = require('../../data/Patrimonio historico/Patrimonio/file.json');


    if (idFolder === "Banco de la Nación Argentina" && id === "Ramallo") {
        images = imagesBNARamallo
        photos = photosBNARamallo
    } else if (idFolder === "Banco de la Nación Argentina" && id === "Sunchales") {
        images = imagesBNASunchales
        photos = photosBNASunchales
    } else if (idFolder === "Viviendas" && id === "Zaccanti") {
        images = imagesViviendasZaccanti
        photos = photosViviendasZaccanti
    } else if (idFolder === "Viviendas" && id === "Romagnoli") {
        images = imagesViviendasRomagnoli
        photos = photosViviendasRomagnoli
    } else if (idFolder === "Viviendas" && id === "Policelia") {
        images = imagesViviendasPolicelia
        photos = photosViviendasPolicelia
    } else if (idFolder === "Industria" && id === "AES") {
        images = imagesIndustriaAES
        photos = photosIndustriaAES
    } else if (idFolder === "Industria" && id === "FIPLASTO") {
        images = imagesIndustriaFIPLASTO
        photos = photosIndustriaFIPLASTO
    } else if (idFolder === "Industria" && id === "Halperín") {
        images = imagesIndustriaHalperin
        photos = photosIndustriaHalperin
    } else if (idFolder === "Industria" && id === "JHON DEERE") {
        images = imagesIndustriaJHONDEERE
        photos = photosIndustriaJHONDEERE
    } else if (idFolder === "Industria" && id === "LOVERAZ") {
        images = imagesIndustriaLOVERAZ
        photos = photosIndustriaLOVERAZ
    } else if (idFolder === "Industria" && id === "SIDERAR") {
        images = imagesIndustriaSIDERAR
        photos = photosIndustriaSIDERAR
    } else if (idFolder === "Instituciones" && id === "EESTNR6") {
        images = imagesInstitucionesEESTNR6
        photos = photosInstitucionesEESTNR6
    } else if (idFolder === "Instituciones" && id === "Plazoleta") {
        images = imagesInstitucionesPlazoleta
        photos = photosInstitucionesPlazoleta
    } else if (idFolder === "Instituciones" && id === "Puente") {
        images = imagesInstitucionesPuente
        photos = photosInstitucionesPuente
    } else if (idFolder === "Instituciones" && id === "UTN") {
        images = imagesInstitucionesUTN
        photos = photosInstitucionesUTN
    } else if (idFolder === "Patrimonio historico" && id === "Patrimonio Historico") {
        images = imagesPatrimonio
        photos = photosPatrimonio
    }

    const imageList = images.keys().map(image => images(image));

    photos.map((image, i) => {
        image.src = imageList[i]
    });

    return (
        <Container fluid className="project-section">
            {path !== "/" && <Navbar />}
            <Container style={{ "marginTop": "5rem" }}>
                <h1 className="project-heading">
                    <strong className="purple">Projecto: {id} </strong>
                </h1>

                <PhotoAlbum layout="rows"
                    photos={photos}
                    onClick={({ index: current }) => setIndex(current)} />

                <Lightbox
                    index={index}
                    slides={photos}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />

            </Container>
            {path !== "/" && <Footer />}
        </Container>
    );
}

export default ProjectDetail;
