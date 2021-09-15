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
          <h1 style={{ textAlign: "center" }}>Important Links</h1>
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
