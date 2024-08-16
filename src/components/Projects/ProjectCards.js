import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectCards(props) {

  return (

    <Card className="project-card-view">
      <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
        
        {props?.imgPath?.map(image =>
          <div>
            <img src={image} variant="top" alt="card-img" />
          </div>)}
      </Carousel>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="mt-4 form-group row d-flex justify-content-center ">
          <Button variant="primary" href={props.link} className="btn btn-dark col-sm-6 ">
            Ver más
          </Button>
        </div>

        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>

  );
}
export default ProjectCards;
