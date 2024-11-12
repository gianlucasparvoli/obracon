import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Work from "./Projects/Project";
import Contact from "./Contact";
import Brands from "./Brands";

const MainPage = () => {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Brands />
      <Footer /> 
    </div>
  );
};

export default MainPage;
