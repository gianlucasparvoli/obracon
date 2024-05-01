import React from "react";
import Logo from "../Assets/obracon-logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="footer-wrapper d-flex justify-content-center">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="https://maps.app.goo.gl/PJakMtE5MGEQnF5G9" target="_blank">
            Oficina/Obrador - Calle 4 este N° 1030
            COMIRSA - Parque industrial
             </a>
          <a>Ramallo - (San Nicolás de los Arroyos, Bs. As) -  Argentina</a>
          <a>info@obracon.com.ar</a>
          <a>+5493364603431</a>
        </div>
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Obracon © {(new Date().getFullYear())}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
