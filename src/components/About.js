import React, { useEffect, useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader"
import { Img } from 'react-image';
import { storage, auth } from '../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";

const About = () => {
  var path = window.location.pathname;

  const [files, setFiles] = useState([]);

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
      const storageRef = ref(storage, '/AboutImages');
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
    <div style={{ "margin-top": "1rem" }}>
      {path !== "/" && <Navbar />}
      {path == "/" && <div className="line" style={{ borderColor: "#FCC913", borderWidth: "1px", borderStyle: "solid" }}></div>}
      <div className="about-section-container" style={{ "padding-top": "1rem","margin-top": path !== "/" && "5rem" }}>
        {/* <div className="about-background-image-container"> */}
          {/* <Img src={imgPath[0]} loader={<MyLoader />} class="d-block img-fluid" type="image/webp" /> */}
          {/* <img src={AboutBackground} alt="" /> */}
        {/* </div> */}
        <div className="about-section-image-container">
          <Img src={imgPath[0]} loader={<Loader />} class="d-block img-fluid" type="image/webp" />
          {/* <img src={AboutBackgroundImage} alt="" /> */}
        </div>
        <div className="about-section-text-container">
          {/* <p className="primary-subheading text-center">Sobre Nosotros</p> */}
          <h1 className="primary-heading">
            Obracon. <h2>Proyectos civiles de alta complejidad</h2>
          </h1>
          <p className="primary-text" style={{"textAlign":"justify"}}>
            Obracon es una empresa argentina especializada en brindar servicios dentro del sector de la construcción. Con más de 20 años de trayectoria, hemos llevado a cabo una amplia variedad de proyectos, tanto industriales como residenciales, colaborando con destacadas entidades como Ternium Siderar, AES y el Banco Nación de la República Argentina, entre otras. <br /> <br />Nuestro equipo de profesionales abarca todas las etapas de un proyecto, desde la concepción inicial hasta la ejecución final, utilizando tecnología de punta y adoptando metodologías BIM para garantizar la eficiencia y precisión en cada obra.
          </p>
        </div>
      </div>
      {path !== "/" && <Footer />}
    </div>
  );
};

export default About;
