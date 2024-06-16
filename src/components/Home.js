import React, { Suspense } from 'react'
import Home1 from "../data/HomeImages/1.webp";
import Home2 from "../data/HomeImages/2.webp";
import Home3 from "../data/HomeImages/3.webp";
import Carousel from 'react-bootstrap/Carousel';
import { Img } from 'react-image';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
  var imgPath = [Home1, Home2, Home3];
  const MyLoader = () => <div>Cargando...</div>;
  return (
    <div style={{ "margin-top": "1rem" }}>
      <Suspense>
        <Carousel>

          {imgPath?.map(image =>
            <Carousel.Item interval={1500}>


              <Img src={image} loader={<MyLoader />} class="d-block img-fluid" type="image/webp"  loading="lazy"  decoding="async" />

              <Carousel.Caption>
                {/*  <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </Suspense>
    </div>
  );
};

export default Home;
