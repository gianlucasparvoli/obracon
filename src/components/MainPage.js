import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Work from "./Projects/Project";
import Contact from "./Contact";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const MainPage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber={+5493364603431}
        accountName={"Obracon"}
        avatar={"https://img.freepik.com/premium-vector/building-logo-icon-design-template-vector_67715-555.jpg"}
        statusMessage={"En línea"}
        chatMessage={"Hola, en que podemos ayudarte?"}
      />
    </div>
  );
};

export default MainPage;
