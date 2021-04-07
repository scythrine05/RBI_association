import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/sisterAssociation.css";
import { Container, Alert } from "react-bootstrap";

import "./css/sisterAssociation.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      className: "sisLinks",
      slide: "h4",
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            vertical: true,
            initialSlide: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Container>
          <h1 className="sis-h1" style={{ textAlign: "center" }}>
            Sister Association
          </h1>
          <Slider {...settings}>
            <Alert className="title_slide" variant="warning">
              Association 1
            </Alert>
            <Alert className="title_slide" variant="warning">
              Association 2
            </Alert>
            <Alert className="title_slide" variant="warning">
              Association 3
            </Alert>
            <Alert className="title_slide" variant="warning">
              Association 4
            </Alert>
            <Alert className="title_slide" variant="warning">
              Association 5
            </Alert>
          </Slider>
        </Container>
      </div>
    );
  }
}
