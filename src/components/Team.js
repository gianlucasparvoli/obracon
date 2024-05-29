import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Teams = () => {
    var path = window.location.pathname;
    const teamMembers = [
        {
            id: 1,
            imgSrc: "https://i.imgur.com/kqx6qV7.jpg",
            name: "Full Name",
            role: "Designer",
            delay: 0.1,
        },
        {
            id: 2,
            imgSrc: "https://i.imgur.com/npaEYj4.jpg",
            name: "Full Name",
            role: "Designer",
            delay: 0.3,
        },
        {
            id: 3,
            imgSrc: "https://i.imgur.com/7YRGiQP.jpg",
            name: "Full Name",
            role: "Designer",
            delay: 0.5,
        }, {
            id: 4,
            imgSrc: "https://i.imgur.com/7YRGiQP.jpg",
            name: "Full Name",
            role: "Designer",
            delay: 0.5,
        },
    ];

    return (
        <div>{path !== "/" && <Navbar />}
            <div className="container-xxl py-6 pb-5" id="team" style={{ "margin-top": path == "/" ? "20rem" : "5rem" }}>
                <div className="container">
                    <h1 className="project-heading">
                        <strong className="purple">Nuestro Equipo </strong>
                    </h1>
                    <div className="row g-4">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className={`col-lg-4 col-md-6 wow fadeInUp`}
                                data-wow-delay={member.delay}
                            >
                                <div className="team-item position-relative">
                                    <img className="img-fluid rounded" src={member.imgSrc} alt="" />
                                    <div className="team-text bg-white rounded-end p-4">
                                        <div>
                                            <h5>{member.name}</h5>
                                            <span>{member.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {path !== "/" && <Footer />}
        </div>
    );
};

export default Teams;