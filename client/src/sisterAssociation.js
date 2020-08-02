import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/sisterAssociation.css";
import { Container } from "react-bootstrap";

import Fade from "react-reveal/Fade";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      slide: "h4",
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 400,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Container>
          <Fade bottom>
            <h1 style={{ textAlign: "center" }}>Sister Association</h1>
            <Slider {...settings}>
              <h4 className="title_slide">SisterAssociation 1</h4>

              <h4 className="title_slide">SisterAssociation 2</h4>

              <h4 className="title_slide">SisterAssociation 3</h4>

              <h4 className="title_slide">SisterAssociation 4</h4>

              <h4 className="title_slide">SisterAssociation 5</h4>

              <h4 className="title_slide">SisterAssociation 6</h4>
            </Slider>
          </Fade>
        </Container>
      </div>
    );
  }
}
