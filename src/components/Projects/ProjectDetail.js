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
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [index, setIndex] = useState(-1);
    const folderName = 'PhotosTest'; //cambiar por la url y crear carpeta con imagenes por proyecto. No se puede hacer dimanico el require, hay que importar todas las carpetas y hacer un if
    const images = require.context('../../data/Viviendas/Zaccanti', true); 
    const imageList = images.keys().map(image => images(image));
    const photos = require('../../data/Viviendas/Zaccanti/file.json');

    photos.map((image, i) => {
        image.src = imageList[i]
    });

    console.log(photos)

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
