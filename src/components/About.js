import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  var path = window.location.pathname;
  return (
    <div>
      {path !== "/" && <Navbar/>}
      <div className="about-section-container" style={{"margin-top": path == "/" ? "20rem" : "5rem"}}>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">Sobre Nosotros</p>
          <h1 className="primary-heading">
          Obracon. <h2>Proyectos civiles de alta complejidad</h2>
          </h1>
          <p className="primary-text">
          Obracon es una empresa argentina especializada en brindar servicios dentro del sector de la construcción. Con más de 20 años de trayectoria, hemos llevado a cabo una amplia variedad de proyectos, tanto industriales como residenciales, colaborando con destacadas entidades como Ternium Siderar, AES y el Banco Nación de la República Argentina, entre otras. <br/> Nuestro equipo de profesionales abarca todas las etapas de un proyecto, desde la concepción inicial hasta la ejecución final, utilizando tecnología de punta y adoptando metodologías BIM para garantizar la eficiencia y precisión en cada obra.
          </p>
          {/* <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div> */}
        </div>
      </div>
      {path !== "/" && <Footer/>}
    </div>
  );
};

export default About;
