import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "./Loader"
import { storage, auth } from './../firebase'; // Import the storage instance
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";

function Brands() {
    var path = window.location.pathname;
    const { idFolder, id } = useParams();
    const [files, setFiles] = useState([]);
    const [index, setIndex] = useState(-1);
    var pathsImgStorage = "Brands";


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
            const storageRef = ref(storage, pathsImgStorage);
            try {
                const res = await listAll(storageRef);
                const filePromises = res.items.map((itemRef) => getDownloadURL(itemRef));
                const fileUrls = await Promise.all(filePromises);

                fileUrls?.map((img) => {
                    const imagen = new Image();
                    imagen.src = img;
                    imagen.onload = () => {
                        const test = { src: img, width: imagen.width, height: imagen.height }
                        setFiles(files => [...files, test]);
                    };
                })
            } catch (error) {
                console.error("Error listing files", error);
            }
        };

        listFiles();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div style={{ "margin-top": "2rem" }}>
            <div className="row">
                <div className="col-12 mt-2 text-center">
                    {files.length === 0 ? (<Loader />) : (
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            infinite={true}
                            partialVisible={false}
                            arrows={false}
                        >
                            {files.map((imageUrl, index) => {
                                return (
                                    <div className="slider" key={index}>
                                        <img src={imageUrl.src} style={{ height: "100px" }} className="pr-1" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    )}
                </div>
            </div >
            {path !== "/" && <Footer />}
        </div >
    );
}

export default Brands;
