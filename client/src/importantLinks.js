import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/importantLinks.css";
import { Container, Alert } from "react-bootstrap";

import "./css/importantLinks.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      className: "impLinks",
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 6,
      adjustHeight: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
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
            verticalScroll: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Container>
          <h1 className="iL-h1" style={{ textAlign: "center" }}>
            Important Links
          </h1>
          <Slider {...settings}>
            <Alert className="title_slide" variant="warning">
              Link 1
            </Alert>
            <Alert className="title_slide" variant="warning">
              Link 2
            </Alert>
            <Alert className="title_slide" variant="warning">
              Link 3
            </Alert>
            <Alert className="title_slide" variant="warning">
              Link 4
            </Alert>
            <Alert className="title_slide" variant="warning">
              Link 5
            </Alert>
          </Slider>
        </Container>
      </div>
    );
  }
}
