import React, { createContext, useContext, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Loader from "./Loader"
import { Img } from 'react-image';
import { storage, auth } from '../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";

const Home = () => {
  //var imgPath = [Home1, Home2, Home3];
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
  var txtHome = [{
    "title": "Trayectoria",
    "text" : "Mas de X años de experiencia en todo tipo de obras"
  }, {
    "title": "Testimonios",
    "text" : "Comentarios positivos sobre todos nuestros cliente a lo largo de los años"
  }, {
    "title": "Soluciones Rapidas",
    "text" : "Nuestro equipo de profesionales adopta metodologías BIM para un mayor desempeño"
  }];

  return (
    <div style={{ "margin-top": "1rem" }}>
      {/* <div class="divider py-1 rounded bg-dark mb-1" ></div> */}
      {/* <div className="line"></div> */}
      <div className="line" style={{ borderColor: "#FCC913", borderWidth: "1px", borderStyle: "solid" }}></div>


      <Carousel style={{ "padding-top": "1rem" }} 
      controls={false}
      wrap={true}
      >

        {imgPath?.map((image,i )=>
          <Carousel.Item 
          interval={3000}
          >

            <div className="text-center " style={{ border: "2px solid #909191","borderRadius": "1rem" ,background: "#b7b7b6" }}>
              <div className="row" >
                <div className="col-3 my-auto">
                  <h3 className="my-auto"><b>{txtHome[i].title}</b></h3>
                  <br></br>
                  <h5>{txtHome[i].text}</h5>
                </div>
                <div className="col-9 my-1">
                  <Img src={image} loader={<Loader />} class="d-block rounded img-fluid" type="image/webp" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        )}
      </Carousel>

    </div>
  );
};

export default Home;
