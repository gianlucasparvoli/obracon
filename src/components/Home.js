import React, { createContext, useContext, useEffect, useState } from "react";
//import Home1 from "../data/HomeImages/1.webp";
//import Home2 from "../data/HomeImages/2.webp";
//import Home3 from "../data/HomeImages/3.webp";
import Carousel from 'react-bootstrap/Carousel';
import { Img } from 'react-image';
import { storage, auth } from '../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";

const Home = () => {
  //var imgPath = [Home1, Home2, Home3];
  const MyLoader = () => <div>Cargando...</div>;
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
      const storageRef = ref(storage, 'HomeImages');
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
      <Carousel>

        {imgPath?.map(image =>
          <Carousel.Item interval={1500}>


            <Img src={image} loader={<MyLoader />} class="d-block img-fluid" type="image/webp" />

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
