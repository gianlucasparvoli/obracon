import React from "react";
import Home1 from "../data/HomeImages/1.png";
import Home2 from "../data/HomeImages/2.png";
import Home3 from "../data/HomeImages/3.png";
//import { Carousel } from "react-responsive-carousel";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  var imgPath = [Home1, Home2, Home3]
  return (
    <div style={{ "margin-top": "1rem" }}>

      <Carousel>
        {imgPath?.map(image =>
          <Carousel.Item interval={1500}>

            <img src={image} variant="top" alt="card-img" class="d-block img-fluid" />

            <Carousel.Caption>
              {/*  <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>

    </div>
  );
};

export default Home;
