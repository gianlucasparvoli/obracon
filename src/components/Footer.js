import React from "react";
import Logo from "../Assets/obracon-logo.png";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  const navigate = useNavigate();
  const resolution = window.innerWidth;
  const isMobile = resolution <= 768;
  var path = window.location.pathname;

  return (
    <div>
      {path == "/" && <div className="line" style={{ borderColor: "#FCC913", borderWidth: "1px", borderStyle: "solid" }}></div>}
      <div style={{"padding-top": "1rem"}} className="footer-wrapper d-flex justify-content-center">

        <div className="footer-section-one">
          {!isMobile &&
            <div className="footer-logo-container">
              <img src={Logo} alt="" onClick={() => navigate("/")} />
            </div>
          }
          <div className="footer-icons d-flex align-items-center justify-content-center">
            <a href="https://www.linkedin.com/company/102412033/admin/dashboard/" target="_blank"> <SiLinkedin /> </a>
            <a href="" target="_blank"><BsInstagram /></a>
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <h5><a href="https://maps.app.goo.gl/PJ3AzJvWHnJ7JqSD8" target="_blank">
              Oficina / Obrador - Calle 4 este N° 1030
              - Parque industrial COMIRSA
            </a></h5>
            <h5>Ramallo (San Nicolás de los Arroyos), Buenos Aires, Argentina</h5>
            <h5>info@obracon.com.ar</h5>
            <h5>+5493364603431</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
